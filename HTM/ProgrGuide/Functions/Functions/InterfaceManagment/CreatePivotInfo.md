---
layout: page
title: "CreatePivotInfo ֆունկցիա"
---

# CreatePivotInfo ֆունկցիա

[Հատկություններ և մեթոդներ](../../PivotInfo.html)

Ստեղծում է տվյալները փոխակերպման օբյեկտ։

## Շարահյուսություն

``` vb
Function CreatePivotInfo() As PivotInfo
```

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ ստեղծում է տվյալների փոխակերպման օբյեկտը և կիրառում դիտելու ձևը փոխակերպված ցույց տալու համար։

``` vb
Dim oPivotInfo As PivotInf
Dim viewBusExp As AsView

Set viewBusExp = View("VIEW1")
Set oPivotInfo = CreatePivotInfo()

oPivotInfo.AddPivotColumn "viewColumn1"
oPivotInfo.AddPivotRow "viewColumn2"
oPivotInfo.AddPivotData "viewColum3", "PivotColumnDataCaption", -4112

viewBusExp.Pivot oPivotInfo
viewBusExp.Browse
```
