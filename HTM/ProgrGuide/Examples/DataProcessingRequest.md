---
layout: page
title: "DataProcessingRequest examples"
---

# DataProcessingRequest դասի օրինակ

Ներկայացված է [DeleteDocByIsnDPR](https://armsoft.github.io/as8x-docs/src/server_api/examples/dpr/code.html) ներքին անունով DPR-ի կանչը սկրիպտից՝ օգտագործելով [DataProcessingRequest](../Functions/DataProcessingRequest.md) դասը։

Օրինակում օգտագործվող DPR-ը որպես մուտքային պարամետրեր ստանում է փաստաթղթԵրի ISN-ների ցուցակ, հեռացնում նշված ISN-ներով փաստաթղթերը և կատարման դեպքում սխալներ առաջանալու դեպքում լրացնում դրանք TextReport-ում ու վերադարձնում `StorageInfo`, որը պարունակում է TextReport-ը պարունակող թղթապանակի (`container`) ու ֆայլի (`blobName`) անունները։

DPR-ը կատարելու համար անհրաժեշտ է այն նախապես հերքի դնել՝ օգտագործելով [DataProcessingRequest](../Functions/DataProcessingRequest.md) դասի [Enqueue](../Functions/DataProcessingRequest.md#enqueue) մեթոդը՝ փոխանցելով՝ DPR-ի տեսակը, ներքին անունը, կատարման համար անհրաժեշտ պարամետրերը։

Իսկ կատարման արդյունքը ստանալու համար անհրաժեշտ է կանչել [DataProcessingRequest](../Functions/DataProcessingRequest.md) դասի [GetResult](../Functions/DataProcessingRequest.md#getresult) մեթոդը՝ փոխանցելով օբյեկտ, որտեղ պահվելու են կատարման արդյունքները։

Տե՛ս նաև
[DPR-ի նկարագրման ձեռնարկ](https://armsoft.github.io/as8x-docs/src/server_api/definitions/dpr_guide.html)

```as4x
Public Sub DeleteDocs()

Dim dictResponse  As Dictionary
Dim dictRequest   As Dictionary
Dim dprJob 		  As DataProcessingRequest
Dim dprName 	  As String
Dim arrISNs() As Long


   ' Հեռացման համար անհրաժեշտ փաստաթղթերի ISN-ների ավելացում զանգվածում։
   ReDim arrISNs(2)
   arrISNs(0) = 301785190
   arrISNs(1) = 212262708
   arrISNs(2) = 526482501

   ' Ձևավորված զանգվածի ավելացում կատարման համար անհրաժեշտ պարամետրերի Dictionary-ում՝
   ' որպես բանալի փոխանցելով պարամետրերը նկարագրող դասի համապատասխան property-ի անունը, իսկ որպես արժեք՝ ISN-ների զանգվածը։
   dictRequest.Add("DocumentIsns", arrISNs)


   dprName = "DeleteDocByIsnDPR"
   ' DataProcessingRequest դասի օբյեկտի ստեղծում՝ DPR-ի կատարման համար
   Set dprJob = New DataProcessingRequest

   ' DPR-ը հերթի դնում Enqueue մեթոդով՝ փոխանցելով՝ DPR-ի տեսակը, ներքին անունը, կատարման համար անհրաժեշտ պարամետրերը։
   Call dprJob.Enqueue(DPRType.Other, dprName, dictRequest)
   ' Հերթի դրված DPR-ի կատարման արդյունքի ստացում՝ օգտագործելով GetResult մեթոդը, որին փոխանցվում է օբյեկտ կատարման արդյունքի պահման համար
   Call dprJob.GetResult(dictResponse)

   ' Եթե DPR-ի կատարման ընթացքում առաջացել են սխալներ, գեներացնում ենք սխալ՝ ցույց տալով առաջացած սխալի հաղորդագրությունը
   If dprJob.IsFailed Then
		RaiseError "Սխալ " + dprName + " DPR-ի կատարման ժամանակ ", dprJob.ErrorText, dprName + " DPR execution error", dprJob.ErrorText
   End If

   ' DPR-ի կատարումը օգտագործողի կողմից UI-ից ընդհատման ժամանակ էլ ենք գեներացնում ենք սխալ՝ ցույց տալով առաջացած սխալի հաղորդագրությունը ու ասելով 'որ այն ընդհատվել է օգտագործողի կողմից
   If dprJob.IsCanceled Then
        RaiseError "Սխալ " + dprName + " DPR-ի կատարման ժամանակ ", "Կատարումը ընդհատված է օգտագործողի կողմից", dprName +" DPR execution canceled by user", dprJob.ErrorText
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
