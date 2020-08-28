---
layout: page
title: "CreateDynamicData ֆունկցիա"
---

## CreateDynamicData ֆունկցիա

Ստեղծում է [տվյալների աղբյուր օբյեկտ](../Asdata.md), ըստ [դինամիկ տվյալների աղբյուրի նկարագրության](../AsDataDesc.md)։ 

## Շարահյուսություն

```vb
Function CreateDynamicData(ByVal DataDesc As AsDataDesc) As AsData
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| DataDesc | Դինամիկ տվյալների աղբյուր նկարագրության օբյեկտ։ |

## Նկատառումներ

[Տես նաև](../../constructors.html)

## Օրինակ

``` vb
Dim sData As AsData Dim sDataDesc as AsDataDesc

Set sDataDesc = CreateDataDesc()
sDataDesc.Caption = "DynDescCaption"
sDataDesc.HeadLinesCount = 1
sDataDesc.DataIndicate = 1
sDataDesc.AddColumn("fCODE", "Կոդ", "Code", "C(8)", "fCode", False, True, True)
sDataDesc.SQL = "Select fCODE from Table"
Set sData = CreateDynamicData(sDataDesc)
```
