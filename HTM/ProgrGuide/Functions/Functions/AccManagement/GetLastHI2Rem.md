---
layout: page
title: "GetLastHI2Rem ֆունկցիա"
---

# GetLastHI2Rem ֆունկցիա

Ֆունկցիան վերադարձնում է հաշվառվող օբյեկտի վերջնական մնացորդը HI2 հաշվառումների համար։
Մնացորդը կա՛մ գումարային ըստ բոլոր կուտակող օբյեկտների է, կամ միայն `IsnGl`-ով փոխանցվածի։

Դրամային մնացորդը վերադարձնում `AMDRem` պարամետրի մեջ։

## Շարահյուսություն

``` vb
Function GetLastHI2Rem(ByVal Accounting As String, _
                       ByVal Isn As Long, _
              Optional ByVal IsnGl As Long = -1, _
              Optional AMDRem As Currency) As Currency
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| Accounting | [Հաշվառման](../../AsAccounting.md) տիպը։ |
| Isn | Հաշվառվող հիմնական օբյեկտի ներքին նույնականացման համար։ |
| IsnGl | Հաշվառվող կուտակող օբյեկտի ներքին նույնականացման համար։ |
| AMDRem | վերադարձնում է դրամային մնացորդը։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)
