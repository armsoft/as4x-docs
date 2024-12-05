---
layout: page
title: "AsKernel/ExecuteDPRWithoutProgress"
---

# ExecuteDPRWithoutProgress մեթոդ

```vb
Public Function ExecuteDPRWithoutProgress(ByVal iType As Integer, _
                                          ByVal sName As String, _
                                          ByVal oRequest As Object, _
                                          ByVal oResult As Object, _
                                 Optional ByVal bShowUIRequests As Boolean = True, _
                                 Optional ByVal oCustomUIRequest As CustomUIRequestConfig, _
                                 Optional ByVal lRetryAttempts As Long = 1, _
                                 Optional ByVal lRetryInterval As Long = 0) As Boolean
```

Կատարում է [DPR](https://armsoft.github.io/as8x-docs/src/server_api/definitions/dpr.html)-ը, վերադարձնում բուլյան տիպի արժեք, որը ցույց է տալիս կատարումը հաջողվել է թե ոչ և կատարման արդյունքը `vResult` պարամետրում։

Այս մեթոդի կանչի դեպքում 4X UI-ում չի ցուցադրվում DPR-ի կատարման պրոգրեսը։

**Պարամետրեր**

* `iType` - DPR-ի տեսակը, որը նշվում է DPR ատրիբուտում։
  * **21** - Report
  * **22** - OLAP
  * **23** - JobElement
  * **29** - Other
* `sName` - DPR-ի ներքին անունը։
* `oRequest` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը։
* `oResult` - DPR-ի կատարման արդյունքում ստացվող տվյալները։
* `bShowUIRequests` - Սերվիսի կլիենտ եկող հաղորդագրության պատուհանների (MessageBox, Custom UI Request) ցուցադրման հայտանիշ։
* `oCustomUIRequest` - Սերվիսից կլիենտ եկող Custom UI Request-ների մշակման համար անհրաժեշտ ինֆորմացիան` նշելով՝
  * **Module** - Այն մոդուլի անունը, որտեղ մշակվելու են CustomUIRequest-ները:
  * **AddSub(ByVal lId As Long, ByVal sSub As String)** - որտեղ **lId**- CustomUIRequest-ի id-ն է, իսկ sSub - այն ֆունկցիան, որը մշակելու է CustomUIRequest-ը։
* `lRetryAttempts` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում վերաստացման փորձերի քանակը։
* `lRetryInterval` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում մինչև վերաստացման հաջորդ փորձը ընկած ժամանակահատվածը միլիվայրկյաններով։

## Օրինակ

Ներկայացված է [DeleteDocByIsnDPR](https://armsoft.github.io/as8x-docs/src/server_api/examples/dpr/code.html) ներքին անունով DPR-ի կանչը սկրիպտից՝ օգտագործելով ExecuteDPRWithoutProgress մեթոդը։
Այս մեթոդով կատարելու դեպքում 4X UI-ում չի ցուցադրվելու DPR-ի կատարման պրոգրեսը։

Օրինակում օգտագործվող DPR-ը որպես մուտքային պարամետրեր ստանում է փաստաթղթԵրի ISN-ների ցուցակ, հեռացնում նշված ISN-ներով փաստաթղթերը և կատարման դեպքում սխալներ առաջանալու դեպքում լրացնում դրանք TextReport-ում ու վերադարձնում `StorageInfo`, որը պարունակում է TextReport-ը պարունակող թղթապանակի (`container`) ու ֆայլի (`blobName`) անունները։

Տե՛ս նաև
[DPR-ի նկարագրման ձեռնարկ](https://armsoft.github.io/as8x-docs/src/server_api/definitions/dpr_guide.html)

```as4x
Public Sub DeleteDocs()

   Dim ErrReport As AsRepViewer
   Dim arrISNs() As Long
   Dim dictResponse As Dictionary
   Dim dictRequest    As Dictionary
   Dim oStorageInfo As StorageInfo

   ' DPR-ի կատարման համար անհրաժեշտ պարամետրերի և կատարման արդյունքի պահման համար dictionary-ների ստեղծում,
   ' կատարման ընթացքում առաջացած սխալների ցուցադրման համար Text Report-ի ստեղծում։
   Set ErrReport = CreateRepViewer
   Set dictRequest = New Dictionary
   Set dictResponse = New Dictionary

   ' Հեռացման համար անհրաժեշտ փաստաթղթերի ISN-ների ավելացում զանգվածում։
   ReDim arrISNs(2)
   arrISNs(0) = 301785190
   arrISNs(1) = 212262708
   arrISNs(2) = 526482501

   ' Ձևավորված զանգվածի ավելացում կատարման համար անհրաժեշտ պարամետրերի Dictionary-ում՝ 
   ' որպես բանալի փոխանցելով պարամետրերը նկարագրող դասի համապատասխան property-ի անունը, իսկ որպես արժեք՝ ISN-ների զանգվածը։
   dictRequest.Add("DocumentIsns", arrISNs)

   ' DPR-ը կատարելու համար կանչվել ExecuteDPRWithoutProgress մեթոդը՝ նշելով DPR-ի տեսակը, ներքին անունը,
   ' կատարման համար անհրաժեշտ պարամետրերը ու արդյունքում առաջացող տվյալների լրացման համար անհրաժեշտ dictionary-ները։
   ' Մեթոդը վերադարձնում է բուլյան տիպի արժեք, որը ցույց է տալիս արդյոք ընդհատվել է DPR-ի կանչը UI-ից
   ' Ընդհատվելու դեպքում գեներացվում է սխալ
   If Not ExecuteDPRWithoutProgress(DPRType.Other, "DeleteDocByIsnDPR", dictRequest, dictResponse) Then
      BreakError
   End If
	
   ' Այս DPR-ի կատարման արդյունքում վերադարձվում է StorageInfo, որը պարունակում է փաստաթղթերի հեռացման ընթացքում առաջացած սխալներով 
   ' TextReport-ը պարունակող կոնտեյների ու ֆայլի անունները
   ' դրանց արժեքները ստանալու համար անհրաժեշտ է դիմել կատարման արդյունքը պարունակող dictResponse dictionary-ի container և blobName
   ' բանալիներով անդամներին ու դրանք վերագրել 4x-ական StorageInfo-ի համապատասխանաբար Container և BlobName դաշտերին
   oStorageInfo.Container = dictResponse.Item("container") ' TextReport-ը պարունակող թղթապանակի անունը
   oStorageInfo.BlobName = dictResponse.Item("blobName")   ' TextReport-ը պարունակող ֆայլի անունը

   'Բեռնում է TextReport-ը սերվերից ըստ oStorageInfo և վերագրվում ErrReport-ին
   With ErrReport
	  .LoadFromStorageInService(oStorageInfo)
   End With

   ' Եթե բեռնված TextReport-ը պարունակում է գոնե 1 տող (դատարկ չէ), ապա այն ցուցադրվում է 4X UI-ում՝ Show մեթոդի միջոցով։
   If ErrReport.RowCount <> 0 Then
	  ErrReport.Show
   End If

End Sub
```
