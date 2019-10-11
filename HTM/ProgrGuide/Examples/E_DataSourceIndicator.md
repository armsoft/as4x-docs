---
layout: page
title: "Օրինակ/DataSourceIndicator"
---

# Օրինակում ցույց է տրված Run, Init մեթոդների և Properties իրադարձության օգտագործումը DataSourceIndicator տիպի օբյեկտի համար

``` vb
Dim DPI As DataSourceIndicator 
Dim xData As AsData

Set xData = Data("DataName")
Set DPI = New DataSourceIndicator


DPI.Init "ModuleName","LoaderSubName"
DPI.Properties.Add "Prop1",true
DPI.Run xData
```