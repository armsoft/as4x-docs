---
layout: page
title: "AsDataTable/FillFromRdoResultset"
---


# FillFromRdoResultset մեթոդ

[Տես նաև](../AsDataTable.md) [Օրինակ](../../Examples/AsDataTable.md) [Կիրառվում է](../AsDataTable.md)

Բեռնում է տվյալները rdoResultset օբյեկտից:

## Շարահյուսություն

``` vb
Sub FillFromRdoResultset(ByVal rs As rdoResultset, [ByVal maxRowCount As Long = -1])
```

Բաղադրիչներն են՝


| Պարամետր  | Նկարագրություն |
|--|--|
| maxRowCount | Մաքսիմալ տողերի քանակ, որոնք պետք է բեռնվեն: Default արժեքը ` -1,որի դեպքում կբեռնվեն rs-ի բոլոր տողերը: |
| rdoRs  | Այն տվյալները, որոնք պետք է տեղափոխվի DataTable: |



