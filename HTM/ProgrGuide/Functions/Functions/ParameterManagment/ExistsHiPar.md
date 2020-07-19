---
layout: page
title: "ExistsHiPar ֆունկցիա"
---

# ExistsHiPar ֆունկցիա

Ստուգում է ժամանակագրական պարամետրի արժեքի առկայությանը տրված ամսաթվով։ 

## Շարահյուսություն

``` vb
Public Function ExistsHiPar(ByVal sParId As String, _
                            ByVal dDate As Date, _
                            ByVal bSoftGet As Boolean) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sParId | Պարամետրի ներքին անուն։ |
| dDate | Պարամետրի որոնման ամսաթիվ։ |
| bSoftGet | `True` արժեքի դեպքում ֆունկցիան ստուգում է `sDate`-ի դրությամբ որևէ արժեքի նշանակված լիները։ `False` արժեքի դեպքում ֆունկցիան ստուգում է միմիայն `sDate` ամսաթվին նշանակված արժեքը։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)
