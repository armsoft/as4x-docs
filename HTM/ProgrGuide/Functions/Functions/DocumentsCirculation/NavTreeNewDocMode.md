---
layout: page
title: "NavTreeNewDocMode ֆունկցիա"
---

## NavTreeNewDocMode ֆունկցիա

Վերադարձնում է փաստաթղթի ստեղծման ռեժիմը ուղղորդիչ ծառից։ Վերադարձվող արժեքը կարելի է օգտագործել նոր փաստաթղթի ցույց տալու համար։

## Շարահյուսություն

``` vb
Function Util.NavTreeNewDocMode(ByVal sDocType As String) As Integer
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sDocType | փաստաթղթի տիպը։ |

## Կարգաբերումներ

Վերադարձվող արժեքները՝

| Արժեք | Նկարագրոթյուն |
|--|--|
| -1 | Փաստաթղթի տվյալ տիպը չի ստեղծվում ուղղորդիչ ծառից։ |
| 0 | [ASRepeatableNewMode](../../../Constants/const_doc_States.md) |
| 1 | [ASNewMode](../../../Constants/const_doc_States.md) |

## Նկատառումներ

[Տես նաև](../../../functions.html)

## Օրինակ

``` vb
Set xDoc = CreateDoc("Order")
xDoc("PARENT") = parent("CODE")
xDoc.Show Util.NavTreeNewDocMode("Order")
```
