---
layout: page
title: "AsDataTable/FillFromRdoResultset"
---


# FillFromRdoResultset մեթոդ

[Տես նաև](../AsDataTable.md) [Օրինակ](../../Examples/AsDataTable.md) [Կիրառվում է](../AsDataTable.md)

Բեռնում է տվյալները rdoResultset օբյեկտից:

## Շարահյուսություն

``` vb
Sub FillFromRdoResultset(ByVal rdoRs As rdoResultset, [ByVal maxRowCount As Long = -1])
```

Բաղադրիչներն են՝


| Պարամետր  | Նկարագրություն |
|--|--|
| rdoRs  | Այն տվյալները, որոնք պետք է բեռնել DataTable: |
| maxRowCount | Առավելագույն բեռնվող տողերի քանակը: Default արժեքը ` -1, որի դեպքում կբեռնվեն rdoRs-ի բոլոր տողերը: |


