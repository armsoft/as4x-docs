---
layout: page
title: "CreateDataDesc ֆունկցիա"
---

# CreateDataDesc ֆունկցիա

[Հատկություններ և մեթոդ](../../AsDataDesc.md)

Ստեղծում է դինամիկ տվյալների աղբյուր օբյեկտ։ 

Տվյալ ֆունկցիան ծառայում է դինամիկ տվյալներ ցույց տալու համար, որոնց արժեքները կարող են չպահվել տվյալների պահոցում։

## Շարահյուսություն

``` vb
Function CreateDataDesc() As AsDataDesc
```

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ կանչվում է CreateDataDesc ֆունկցիան, sDynDataDesc-ի միջոցով վերադառնում է դինամիկ տվյալների աղբյուրի հղումը իր բոլոր հատկություններով և մեթոդներով։ 

``` vb
Dim sDynDataDesc as AsDataDesc
Dim xView As AsView

Set dataDesc = CreateDataDesc()
dataDesc.Caption = "DynDescCaption"
dataDesc.HeadLinesCount = 1
dataDesc.DataIndicate = 1
dataDesc.AddColumn("fCODE", "Код", "Code", "C(8)", "fCode", False, True, True)
dataDesc.SQL = "Select fCODE from Table"
Set xView = CreateDynamicView(dataDesc)
Browse(xView)
```
