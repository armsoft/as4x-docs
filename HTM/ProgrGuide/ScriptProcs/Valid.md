---
layout: page
title: "Valid իրադարձություն"
---

# Valid փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_Valid.md) [Կիրառվում է](../Defs/doc.md)

Valid իրադարձությունը առաջանում է դաշտից դուրս գալու ժամանակ։ 

Նախատեսված է դաշտի արժեքի ստուգելու համար և արժեքից կախված հաշվարկներ կատարելու համար։

## Շարահյուսություն

``` vb
Public Sub Valid(ByVal Rekv As String, ByVal OldValue As Variant)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Rekv | Փաստաթղթի դաշտի ներքին անուն (բոլորը մեծատառ)։ |
| OldValue | Դաշտի նախկին արժեքը։ |

## Նկատառումներ

Եթե դաշտը պարտադիր լրացվող է և արժեքը դատարկ է, ապա իրադարձությունը չի առաջանա։
