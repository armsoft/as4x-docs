---
layout: page
title: "NumPairFullValue ֆունկցիա"
---

# NumPairFullValue ֆունկցիա

Տրված երկու թվերի համար ձևավորվում է [թվային զույգ](../../../Types/NumPair.md) տիպի արժեքը։ Արժեքը իրենից ներկայացնում տողային արժեք բաղկացած առաջին թվից, բաժանարար գծից և երկրորդ թվից։

Օրինակ՝ `12.34/567`։

Այս Ֆունկցիան օգտագործվում է [NumPair()](../../../Types/NumPair.md) տիպի դաշտի համար արժեք ստանալու վերգրելու համար։ 

## Շարահյուսություն

``` vb
Public Function NumPairFullValue(ByVal nNum1 As Currency, ByVal nNum2 As Currency) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| nNum1 | Առաջին թիվը։ |
| nNum2 | Երկրորդ թիվը։ |

## Նկատառումներ

Թվերի հակառակ առանձնացումը բարդ տողից կատարվում է [GetNumber1](GetNumber1.md) և [GetNumber2](GetNumber2.md) ֆունկցիաների միջոցով։

[Տես նաև](../../../functions.html)
