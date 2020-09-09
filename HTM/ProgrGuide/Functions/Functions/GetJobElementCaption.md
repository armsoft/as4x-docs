---
layout: page
title: "GetJobElementCaption ֆունկցիա"
---

# GetJobElementCaption ֆունկցիա

Վերադարձնում է առաջադրանքի տարրի անվանումը։

## Շարահյուսություն

``` vb
Function GetJobElementCaption(ByVal sJobElementName As String, _
                     Optional ByVal iLang As Integer = -1) As String
```

| Պարամետր | Նկարագրություն |
|--|--|
| sJobElementName | Առաջադրանքի տարրի ներքին անունը։ |
| iLang | Առաջադրանքի վերադարձվող անվանման լեզուն։ -1 արժեքի դեպքում ընտրվում է համակարգային ընթացիկ լեզուն։ 1 - արժեքի դեպքում՝ հայերեն, մնացած արժեքների դեպում՝ անգլերեն։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
