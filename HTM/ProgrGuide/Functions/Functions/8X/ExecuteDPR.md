---
layout: page
title: "AsKernel/ExecuteDPR"
---

# ExecuteDPR մեթոդ

Կատարում է [DPR](https://armsoft.github.io/as8x-docs/src/server_api/definitions/dpr.html)-ը, վերադարձնում բուլյան տիպի արժեք, որը ցույց է տալիս կատարումը հաջողվել է թե ոչ և կատարման արդյունքը `vResult` պարամետրում։

Այս մեթոդի կանչի դեպքում 4X UI-ում ցուցադրվում է DPR-ի կատարման պրոգրեսը և սերվիսից կլիենտ եկող հաղորդագրության պատուհանները ([MessageBox](), Custom UI Request):

## Շարահյուսություն

``` vb
Function ExecuteDPR(ByVal iType As Integer, _
                    ByVal sName As String, _
                    ByVal vRequest As Variant, _
                    ByRef vResult As Variant, _
           Optional ByVal oCustomUIRequest As CustomUIRequestConfig) As Boolean
```

**Պարամետրեր**

* `iType` - DPR-ի տեսակը, որը նշվում է DPR ատրիբուտում։
  * **21** - Report
  * **22** - OLAP
  * **23** - JobElement
  * **29** - Other
* `sName` - DPR-ի ներքին անունը։
* `vRequest` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը, որոնք սերիալիզացվելու են JSON։
* `vResult` - DPR-ի կատարման արդյունքում ստացվող տվյալները, որոնք դեսերիալիզացվելու են JSON-ից։
* `oCustomUIRequest` - Սերվիսից կլիենտ եկող Custom UI Request-ների մշակման համար անհրաժեշտ ինֆորմացիան` նշելով՝
  * **Module** - Այն մոդուլի անունը, որտեղ մշակվելու են CustomUIRequest-ները:
  * **AddSub(ByVal lId As Long, ByVal sSub As String)** - որտեղ **lId**- CustomUIRequest-ի id-ն է, իսկ **sSub** - այն ֆունկցիան, որը մշակելու է CustomUIRequest-ը։

## Օրինակ

Ներկայացված է [DeleteDocByIsnDPR](https://armsoft.github.io/as8x-docs/src/server_api/examples/dpr/code.html) ներքին անունով DPR-ի կանչը սկրիպտից՝ օգտագործելով ExecuteDPR մեթոդը։
Այս մեթոդով կատարելու դեպքում 4X UI-ում ցուցադրվելու է DPR-ի կատարման պրոգրեսը։

Օրինակում օգտագործվող DPR-ը որպես մուտքային պարամետրեր ստանում է փաստաթղթԵրի ISN-ների ցուցակ, հեռացնում նշված ISN-ներով փաստաթղթերը և կատարման դեպքում սխալներ առաջանալու դեպքում լրացնում դրանք TextReport-ում ու վերադարձնում `StorageInfo`, որը պարունակում է TextReport-ը պարունակող թղթապանակի (`container`) ու ֆայլի (`blobName`) անունները։

Տե՛ս նաև
[DPR-ի նկարագրման ձեռնարկ](https://armsoft.github.io/as8x-docs/src/server_api/definitions/dpr_guide.html)

```vb
Public Sub DeleteDocs()
    Dim errReport As AsRepViewer
    Dim arrISNs() As Long
    Dim dictResponse As Dictionary
    Dim dictRequest As Dictionary
    Dim oStorageInfo As StorageInfo

    ' DPR-ի կատարման համար անհրաժեշտ պարամետրերի և կատարման արդյունքի պահման համար dictionary-ների ստեղծում,
    ' կատարման ընթացքում առաջացած սխալների ցուցադրման համար Text Report-ի ստեղծում։
    Set errReport = CreateRepViewer
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

    ' DPR-ը կատարելու համար կանչվել ExecuteDPR մեթոդը՝ նշելով DPR-ի տեսակը, ներքին անունը,
    ' կատարման համար անհրաժեշտ պարամետրերը ու արդյունքում առաջացող տվյալների լրացման համար անհրաժեշտ dictionary-ները։
    ' Մեթոդը վերադարձնում է բուլյան տիպի արժեք, որը ցույց է տալիս արդյոք ընդհատվել է DPR-ի կանչը UI-ից
    ' Ընդհատվելու դեպքում գեներացվում է սխալ
    If Not ExecuteDPR(DPRType.Other, "DeleteDocByIsnDPR", dictRequest, dictResponse) Then
        BreakError
    End If

    ' Այս DPR-ի կատարման արդյունքում վերադարձվում է StorageInfo, որը պարունակում է փաստաթղթերի հեռացման ընթացքում առաջացած սխալներով 
    ' TextReport-ը պարունակող կոնտեյների ու ֆայլի անունները
    ' դրանց արժեքները ստանալու համար անհրաժեշտ է դիմել կատարման արդյունքը պարունակող dictResponse dictionary-ի container և blobName
    ' բանալիներով անդամներին ու դրանք վերագրել 4x-ական StorageInfo-ի համապատասխանաբար Container և BlobName դաշտերին
    oStorageInfo.Container = dictResponse.Item("container") ' TextReport-ը պարունակող թղթապանակի անունը
    oStorageInfo.BlobName = dictResponse.Item("blobName")   ' TextReport-ը պարունակող ֆայլի անունը

    'Բեռնում է TextReport-ը սերվերից ըստ oStorageInfo և վերագրվում errReport-ին
    With errReport
        .LoadFromStorageInService(oStorageInfo)
    End With

    ' Եթե բեռնված TextReport-ը պարունակում է գոնե 1 տող (դատարկ չէ), ապա այն ցուցադրվում է 4X UI-ում՝ Show մեթոդի միջոցով։
    If errReport.RowCount <> 0 Then
        errReport.Show
    End If
End Sub
```
