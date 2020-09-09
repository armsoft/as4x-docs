---
layout: page
title: "IsValueInScope ֆունկցիա"
---

# IsValueInScope ֆունկցիա

Ստուգում է արդյոք տրված արժեքը թույլատրելի արժեքների բազմությունից է, թե դրանից դուրս։

Վերադարձվող արժեքը կախված է `sScopeType` պարամետրից։

## Շարահյուսություն

``` vb
Function IsValueInScope(ByVal vValue As Variant, _
                        ByVal sAllowedValues As String, _
                        ByVal sScopeType As ValueScopeType, _
                        ByVal sDataType As String, _
               Optional ByRef sErrArm As String = "", _
               Optional ByRef sErrEng As String = "") As Boolean
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| vValue | Ստուգվող արժեք։ |
| sAllowedValues | Արժեքների բազմություն, ցտորակետով տարանջատված ցուցակ։ |
| sScopeType | `ValueScopeType.Allowed` ստուգվում է բազմության պատկանելիությունը։ <br> `ValueScopeType.NotAllowed` արժեքի դեպքում ստուգվում է բազմությունից դուրս լինելը։ |
| sDataType | `vValue` արժեքի [համակարգայն տիպը](../../types.md)։ |
| sErrArm | ìերադարձնում է հայերեն սխալի հաղորդագրույթունը, երբ արժեքը միջակայքից չէ։ |
| sErrEng | Վերադարձնում է օտար լեզվով սխալի հաղորդագրույթունը, երբ արժեքը միջակայքից չէ։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
