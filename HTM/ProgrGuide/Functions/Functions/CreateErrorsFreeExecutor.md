---
layout: page
title: "CreateErrorsFreeExecutor ֆունկցիա"
---

# CreateErrorsFreeExecutor ֆունկցիա

Ստեղծում է [AsErrorsFreeExecutor](../AsErrorsFreeExecutor.md) տիպի օբյեկտ։

## Շարահյուսություն

``` vb
Function CreateErrorsFreeExecutor(ByVal sModName As String, _
                                  ByVal sSubName As String, _
                         Optional ByVal sErrorReportingSubName As String, _
                         Optional ByVal bReturnsObject As Boolean = False) As AsErrorsFreeExecutor
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sModName | Ֆունկցիան պարունակող մոդուլի անունը։ |
| sSubName | Ֆունկցիայի անունը, որը աշխատացվելու է։ |
| sErrorReportingSubName | Սխալի առաջացման դեպքում աշխատող ֆունկցիան, որում գրանցվում են լրացուցիչ հաղորդագրություններ։ |
| bReturnsObject | Հարկավոր է տալ `True` արժեք, եթե `sSubName` տրված ֆունկցիան վերադրաձնում է որևէ օբյեկտ։ |

## Նկատառումներ

[Տես նաև](../../constructors.html)
