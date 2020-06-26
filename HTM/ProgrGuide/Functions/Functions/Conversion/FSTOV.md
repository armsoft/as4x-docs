---
layout: page
title: "FSTOV ֆունկցիա"
---

# FSTOV ֆունկցիա

Ձևափոխում է ընթեռնելի տողային արժեքը դեպի տրված տիպի արժեք։

## Շարահյուսություն

``` vb
Public Function FSTOV(ByVal strType As String, ByVal sValue As String) As Variant
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| strType | Ձևափոխվող արժեքի [համակարգային տիպ](../../../types.md)։ |
| sValue | Ընթեռնելի տողային արժեք։ |


## Օրինակ

``` vb
FSTOV("BOOLEAN", "1")        ' True
FSTOV("BOOLEAN", "0")        ' False

FSTOV("DATE", "21/09/91")    ' #21/9/91#

FSTOV("SUMMA", "      123,456,789.01")   ' 123456789.01
FSTOV("SUMMA", "     -123,456,789.01")   ' -123456789.01
```

## Նկատառումներ

[Տես նաև](VTOFS.md)

