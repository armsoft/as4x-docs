---
layout: page
title: "CreateDynamicView ֆունկցիա"
---
    
# CreateDynamicView ֆունկցիա

Ստեղծում է [դիտելու ձև օբյեկտ](../Asview.md), ըստ [դինամիկ տվյալների աղբյուրի նկարագրության](../AsDataDesc.md)։ 

## Շարահյուսություն

``` vb
Function CreateDynamicView(ByVal DataDesc As AsDataDesc) As AsView
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| DataDesc | Դինամիկ տվյալների աղբյուր նկարագրության օբյեկտ։ |

## Նկատառումներ

[Տես նաև](../../constructors.html)

## Օրինակ

``` vb
Dim sDataDesc As AsDataDesc
Dim xView As AsView

Set sDataDesc = CreateDataDesc()
sDataDesc.Caption = "DynDescCaption"
sDataDesc.HeadLinesCount = 1
sDataDesc.DataIndicate = 1
sDataDesc.AddColumn("fCODE", "Կոդ", "Code", "C(8)", "fCODE", False, True, True)
sDataDesc.SQL = "Select fCODE from Table"
Set xView = CreateDynamicView(sDataDesc)
Browse(xView)
```
