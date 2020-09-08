---
layout: page
title: "SetGridDefValue ֆունկցիա"
---

# SetGridDefValue ֆունկցիա

Փաստաթղթի աղյուսակների նշված սյունակների մեջ լրացնում է լռությամբ արժեքները։

## Շարահյուսություն

``` vb
Sub SetGridDefValue(ByVal docCurrent As AsDoc, ByVal dicGrid As Dictionary)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| docCurrent | Փաստաթղթի հղում։ |
| dicGrid | Dictionary-ի մեջ լռացված աղյուսակները և դրա սյունակները։ Բանալիներն են փաստաթղթի աղյուսակների անունները։ Արժեքներն են սյունակների ցանկը բացակով տարանջատված։ |

## Օրինակ

``` vb
Set dicGrid = New Dictionary
With dicGrid
    .Add("SUBSUMS", "SUMMA NOCRGSUM BCID OPERTYPE")
End With
SetGridDefValue(Doc, dicGrid)
```

## Նկատառումներ

[Տես նաև](../../functions.html)
