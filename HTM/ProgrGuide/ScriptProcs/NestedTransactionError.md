---
layout: page
title: "NestedTransactionError իրադարձություն"
---

# NestedTransactionError փաստաթղթի համակարգային իրադարձություն

NestedTransactionError իրադարձությունը առաջանում է [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդի **arr** մասիվի տարրերի մշակման ընթացում՝ սխալներ առաջանալու դեպքում։ Նախատեսված է սխալները պարունակող [տեքստային հաշվետվությունում](../Functions/AsRepViewer.md) սխալների լրացուցիչ մանրամասների և այլ հաղորդագրությունների սահմանման համար:

Իրադարձության մշակիչում անհրաժեշտ է վերադարձնել [տեքստային հաշվետվությունում](../Functions/AsRepViewer.md) ավելացվող հաղորդագրության տեքստը։

## Շարահյուսություն

``` vb
Public Function NestedTransactionError(ByVal arrElement As Variant, _
                                       ByVal repView As AsRepViewer) As String
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| arrElement | [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդի այն տարրը, որի մշակման ընթացքում առաջացել է սխալ։ |
| repView | [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդին փոխանցված [տեքստային հաշվետվություն](../Functions/AsRepViewer.md), որը պարունակում է մեթոդի կատարման ընթացքում առաջացած սխալների հաղորդագրությունները։ |

## Օրինակ

``` vb
Function NestedTransactionError(ByVal vArrElement As Variant,
                                ByVal repView As AsRepViewer) As String
	Dim docAgreement As AsDoc
	Set docAgreement = LoadDoc(vArrElement)

	Return "Պայմանագիր " & docAgreement("ACC") & " գործողությունները չհաջողվեց կատարել"
End Function
```