---
layout: page
title: "FormattedNum ֆունկցիա"
---

# FormattedNum ֆունկցիա

Ձևափոխում տրված թիվը ֆիքսված երկարության ձևաչաձված ընթեռնելի տողային արժեքի, ձևաչափումից առաջ կատարում է կլորացում, ջնջելով վերջին զրոները ([AsRoundDiv](AsRoundDiv.md))։ 

Վերջնական տողի երկարությունը միշտ հավասար է 20-ի։

## Շարահյուսություն

``` vb
Public Function FormattedNum(ByVal Number As Currency, _
                             ByVal Precision As Long) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Number | Մուտքային թիվ։ |
| Precision | Կլորացման աստիճան։ Եթե  Precision>2, ապա ընդունվում է Precision=2։ Իսկ եթե Precision<0, ապա ընդունվում է Precision=0։ |

## Օրինակ

``` vb
FormattedNum(123456.789, 3)    '-> "          123,456.79"
FormattedNum(123456.789, 2)    '-> "          123,456.79"
FormattedNum(123456.789, 1)    '-> "           123,456.8"
FormattedNum(123456.789, 0)    '-> "             123,457"
FormattedNum(123456.789, -1)   '-> "             123,457"
FormattedNum(123456.789, -2)   '-> "             123,457"
```

## Նկատառումներ

[Տես նաև](../../../functions.html)
