---
layout: page
title: "NestedTransaction իրադարձություն"
---

# NestedTransaction փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

NestedTransaction իրադարձությունը առաջանում է [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդը կիրառելիս։ 

Հաշվառտումների ստեղծումը հարկավոր է կատարել հենց այս իրադարձության մշակման ժամանակ կանչելով [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) և [StoreFact](../Functions/ASDOC/StoreFact.md) ֆունկցիաները։ 

## Շարահյուսություն

``` vb
Public Sub NestedTransaction(ByVal arrElement As Variant, _
                             ByVal repView As AsRepViewer)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| arrElement | [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդին փոխանցված մասիվի տարր: |
| repView | [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդին փոխանցված [տեքստային հաշվետվություն](../Functions/AsRepViewer.md)։ |
