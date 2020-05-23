---
layout: page
title: "AsDataTable/FillFromDataSource"
---


# FillFromDataSource մեթոդ

[Տես նաև](../AsDataTable.md) [Օրինակ](../../Examples/AsDataTable.md) [Կիրառվում է](../AsDataTable.md)

Բեռնում է տվյալները AsData օբյեկտից:

## Շարահյուսություն

``` vb
Sub FillFromDataSource(ByVal Data As AsData, [columnNames], [ByVal maxRowCount As Long = -1])
```

Բաղադրիչներն են՝


| Պարամետր  | Նկարագրություն |
|--|--|
| Data  | Այն տվյալները, որոնք պետք է բեռնել DataTable. |
| columnNames  | Սյուների անունների զանգված, որոնց տվյալները պետք է բեռնել DataTable։ Ոչինչ չփոխանցելու դեպքում կբեռնվեն տվյալների աղբյուրի բոլոր սյուների տվյալները։ |
| maxRowCount | Առավելագույն բեռնվող տողերի քանակը: Default արժեքը ` -1, որի դեպքում կբեռնվեն տվյալների աղբյուրի բոլոր տողերը: |

