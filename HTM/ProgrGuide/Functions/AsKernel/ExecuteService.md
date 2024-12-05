---
layout: page
title: "AsKernel/ExecuteService"
---

# ExecuteService մեթոդ

```vb
Public Sub ExecuteService(ByVal sUrl As String, _
                 Optional ByVal vRequest As Variant = Nothing, _
                 Optional ByRef vResult As Variant = Nothing, _
                 Optional ByVal sHttpVerb As String = "POST", _
                 Optional ByVal lRestTimeout As Long = 90000)
```

Այս մեթոդը նախատեսված է դեպի 8X սերվիսին API-ների միջոցով հարցումներ ուղարկելու և պատասխանը ստանալու համար։

**Պարամետրեր**

* `sUrl` - API-ի հասցեն՝ առանց սերվիսի հասցեի։ Օրինակ՝ `"api/LoanApp/RejectAppForm"`:
* `vRequest` - Հարցման կատարման համար անհրաժեշտ պարամետրերը։
* `vResult` - Հարցման կատարման արդյունքում ստացվող տվյալները։
* `sHttpVerb` - Հարցման գործողության տեսակը ("POST", "GET", "DELETE"...)։ Արժեք չփոխանցելու դեպքում համարվելու է "POST"-ը։
* `lRestTimeout` - Հարցման կատարման առավելագույն ժամանակը միլիվայրկյաններով։ Արժեք չփոխանցելու դեպքում համարվելու է 90.000 միլիվրկ-ը (1.5 ր)։

## Օրինակ

Այս օրինակում ուղարկվում է վարկային հայտի հաստատման/մերժման հարցում 8X սերվիսին API-ի միջոցով, որտեղ API-ը ունի հետևյալ շարահյուսությունը՝

```c#
public async Task<ActionResult<ResponseModel<SignResponse>>> Sign(SignRequest request)
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
public class ResponseModel<SignResponse>
{
    public string Code { get; set; }
    public string Error { get; set; }
    public SignResponse Value { get; set; }
}
```

**Սկրիպտում կանչ**
```as4x
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
    ' Մեթոդին անհրաժեշտ է փոխանցել API-ի հասցեն, կատարման համար անհրաժեշտ պարամետրերը dictionary-ով, 
    ' կատարման արդյունքների պահպանման համար dictionary և API հարցման գործողության տեսակը:
	ExecuteService "api/LoanApplications/Sign", dicRequest, dicResponse, "POST"

	' Եթե կատարման արդյունքում սխալ առաջանալու դեպքում dicResponse-ի Error դաշտը լցվում է սխալի հաղորդագրությամբ:
	' Այդ դեպքում գեներացնում ենք սխալ կատարման ընթացքում առաջացած սխալի հաղորդագրությամբ:
	If dicResponse IsNot Nothing AndAlso dicResponse("Error") <> 0 Then
		RaiseError "Սխալ", dicResponse("Error"), "Error", ""
	End If

End Sub
```
