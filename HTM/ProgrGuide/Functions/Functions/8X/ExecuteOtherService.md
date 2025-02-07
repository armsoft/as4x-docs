---
layout: page
title: "AsKernel/ExecuteOtherService"
---

# ExecuteOtherService մեթոդ

Այս մեթոդը նախատեսված է դեպի այլ սերվիս (8X սերվիս չհանդիսացող) հարցումներ ուղարկելու և պատասխանը ստանալու համար։

## Շարահյուսություն

```vb
Sub ExecuteOtherService(ByVal sBaseUrl As String, _
                        ByVal sUrl As String, _
               Optional ByVal vRequest As Variant = Nothing, _
               Optional ByRef vResult As Variant = Nothing, _
               Optional ByVal sHttpVerb As String = PostHttpVerb, _
               Optional ByVal lRestTimeout As Long = 90000, _
               Optional ByVal bAddAuthorization As Boolean = True)
```

**Պարամետրեր**

* `sBaseUrl` - Սերվիսի հասցեն։ 
  Օրինակ՝ `"https://localhost:1025/"`:
* `sUrl` - API-ի հասցեն։ 
  Օրինակ՝ `"api/LoanApp/RejectAppForm"`:
* `vRequest` - Հարցման կատարման համար անհրաժեշտ պարամետրերը, որոնք սերիալիզացվելու են JSON։
* `vResult` - Հարցման կատարման արդյունքում ստացվող տվյալները, որոնք դեսերիալիզացվելու են JSON-ից։
* `sHttpVerb` - Հարցման գործողության տեսակը ("POST", "GET", "DELETE"...)։ 
* `lRestTimeout` - Հարցման կատարման առավելագույն ժամանակը միլիվայրկյաններով։ Լռությամբ 1.5 րոպե։
* `bAddAuthorization` - Ավտորիզիայի միացման հայտանիշ։

## Օրինակ

Այս օրինակում ուղարկվում է հաստատման/մերժման հարցում API-ի միջոցով, որտեղ API-ը ունի հետևյալ շարահյուսությունը՝

```c#
public async Task<ActionResult<SignResponse>> Sign(SignRequest request)
{
    //...
}
```

**Մուտքային պարամետրեր**

```c#
public class SignRequest
{
    public string AppCode { get; set; }
    public Answer Answer { get; set; }
}
```

**Ելքային պարամետրեր**

```c#
public class SignResponse
{
    public string Code { get; set; }
    public string Error { get; set; }
}
```

**Սկրիպտում կանչ**

```vb
Public Sub SignLoan()
Dim dlg As AsDialog 
Dim dicRequest As Dictionary
Dim dicResponse As Dictionary

	' Ստեղծվում է պատուհան, որտեղ անհրաժեշտ է նշել վարկային հայտի համարը և նշել այն անհրաժեշտ է մերժել թե հաստատել:
	Set dlg = CreateDialog
	With dlg
		.Caption = "Ստորագրել"
		.ECaption = "Sign"
		.AddControl("AppCode", "Հայտի համար", "C(14)", "R", , "Application code")
		.AddControl("Answer", "Պատասխան", "TREE(YESNO)", "R", , "Response")
		.Show

		If .Cancel Then
		   Exit Sub
		End If
	End With

    ' Ստեղծում է 2 ditionary` հարցման կատարման համար անհրաժեշտ պարամետրի և արդյունքների պահման համար:
	Set dicResponse = New Dictionary
	Set dicRequest = New Dictionary

	' Այս dictionary-ում ավեացվում են վարկային հայտի հաստատման/մերժման համար անհրաժեշտ պարամետրերը՝ սերվիսում հարցում ուղարկելու համար:
	' dictionary-ում որպես բանալի ավելանում է API-ում պարամետրի անունը, իսկ որպես արժեք՝ անհրաժեշտ արժեքը (այս դեպքում պատուհանում լրացված արժեքները): 
	dicRequest.Add "AppCode", dlg("AppCode")    
    dicRequest.Add "Answer", dlg("Answer")

    ' Ուղարկվում է հարցում դեպի 8X սերվիս՝ օգտագործելով ExecuteService մեթոդը:
    ' Մեթոդին անհրաժեշտ է փոխանցել սերվիսի հասցեն, API-ի հասցեն, կատարման համար անհրաժեշտ պարամետրերը dictionary-ով, 
    ' կատարման արդյունքների պահպանման համար dictionary և API հարցման գործողության տեսակը:
	ExecuteOtherService "http://localhost:5000", "api/LoanApplications/Sign", dicRequest, dicResponse, "POST"

	' Եթե կատարման արդյունքում սխալ առաջանալու դեպքում dicResponse-ի Error դաշտը լցվում է սխալի հաղորդագրությամբ:
	' Այդ դեպքում գեներացնում ենք սխալ կատարման ընթացքում առաջացած սխալի հաղորդագրությամբ:
	If dicResponse("Error") <> "" Then
		RaiseError "Սխալ", dicResponse("Error"), "Error", dicResponse("Error")
	End If
End Sub
```
