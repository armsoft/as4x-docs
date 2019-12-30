---
layout: page
title: "Օրինակ/AsGrid,AddRow,Value"
---

Օրինակում ցույց է տրված AddRow մեթոդի և Value հատկության օգտագործումը:

Օրինակում փաստաթղթի աղյուսակի մեջ ավելացնում է տողեր և լրացնում մասիվից արժեքներ։

``` vb
Set tGrd = xDoc.Grid("TRACTS")
Set xArrTrn = GetSampleXArr()
cnt = xArrTrn.UpperBound(1)
'
For i = 0 to cnt
   tGRD.Addrow
   tGRD.Value(i, "DOCNUM") = xArrTrn(i, 0)
   tGRD.Value(i, "DATE") = xArrTrn(i, 1)
   tGRD.Value(i, "SUMMA") = xArrTrn(i, 2)
Next
```