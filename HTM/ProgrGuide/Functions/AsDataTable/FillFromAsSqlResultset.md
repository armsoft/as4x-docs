---
layout: page
title: "AsDataTable/FillFromAsSqlResultset"
---


# FillFromAsSqlResultset մեթոդ

[Տես նաև](../AsDataTable.md) [Օրինակ](../../Examples/AsDataTable.md) [Կիրառվում է](../AsDataTable.md)

Բեռնում է տվյալները AsSqlResultset օբյեկտից:

## Շարահյուսություն

``` vb
Sub FillFromAsSqlResultset(ByVal rs As AsSqlResultset, [ByVal maxRowCount As Long = -1])
```

Բաղադրիչներն են՝


| Պարամետր  | Նկարագրություն |
|--|--|
| rs  | Այն տվյալները, որոնք պետք է բեռնել DataTable: |
| maxRowCount  | Առավելագույն բեռնվող տողերի քանակը: Default արժեքը ` -1, որի դեպքում կբեռնվեն rs-ի բոլոր տողերը: |