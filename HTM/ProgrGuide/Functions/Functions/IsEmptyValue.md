---
layout: page
title: "IsEmptyValue ֆունկցիա"
---
    
# IsEmptyValue ֆունկցիա

Վերադարձնում է `True` արժեքը, եթե `vValue` արժեքը համընկնում է իր համակարգային տիպի լռությամբ արժեքի հետ։

## Շարահյուսություն

``` vb
Function IsEmptyValue(ByVal vValue As Variant, Optional ByVal sDataType As String = "") As Boolean
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| vValue | Ստուգվող արժեք։ |
| sDataType | [համակարգային տիպը](../../types.md), որը լռությամբ արժեքի հետ կհամեմատվի։ Փոխացված չլինելու դեպքում տիպը որոշվում է `vValue` փոփոխականի տիպից։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
