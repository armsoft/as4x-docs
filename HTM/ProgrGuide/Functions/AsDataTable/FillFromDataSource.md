---
layout: page
title: "AsDataTable/FillFromDataSource"
---


# FillFromDataSource մեթոդ

[Տես նաև](../AsDataTable.md) [Օրինակ](../../Examples/AsDataTable.md) [Կիրառվում է](../AsDataTable.md)

Բեռնում է տվյալները AsData օբյեկտից:

## Շարահյուսություն

``` vb
Sub FillFromDataSource(ByVal Data As AsData, [columnsNames], [ByVal maxRowCount As Long = -1])
```

Բաղադրիչներն են՝


| Պարամետր  | Նկարագրություն |
|--|--|
| maxRowCount | Մաքսիմալ տողերի քանակ, որոնք պետք է բեռնվեն: Default արժեքը ` -1,որի դեպքում կբեռնվեն rs-ի բոլոր տողերը: |
| Data  | Այն տվյալները, որոնք պետք է տեղափոխվի DataTable: |
| columnsNames  | Սյան անուններ, որոնք պետք է ստանալ: |


