---
layout: page
title: "TreeElements ֆունկցիա"
---

## TreeElements ֆունկցիա

Վերադարձնում է ծառի տարրերի բազմությունը։

Բազմությունը [Dictionary](../../Dictionary.md) տիպի է, որտեղ տարրի բանալին ծառի տարրի կոդն է, իսկ արժեքը [ծառի տարր օբյեկտը](../../AsTreeElement.md)։

## Շարահյուսություն

``` vb
Function TreeElements(ByVal sTreeId As String, _
             Optional ByVal sNodeType As String = "", _
             Optional ByVal sKey As String) As Dictionary
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| sTreeId | Ծառի ներքին անունը։ |
| sNodeType | Վերադարձվող տարրերի տիպը։ <br> `""` - բոլոր հանգույցները։ <br> `"1"` - միայն տերևները։ <br> `"0"` - միայն ծնողները։ |
| sKey | Փոխանցելու դեպքում վերադարձվում են միայն այս տարրի զավակները։ |

## Նկատառումներ

[Տես նաև](../../AsTreeElement.md)
