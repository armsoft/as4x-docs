---
layout: page
title: "Օրինակ/AsGrid"
---

Օրինակում ցույց է տրված Name, ReadOnly, RowCount հատկությունների և Refresh, RemoveRow մեթոդների օգտագործումը:

Օրինակի մեջ փաստաթղթի "RESP" աղյուսակի տողերը հեռացնում է և աղյուսակը դարձնում չխմբագրվող։

``` vb
Set xGrid = Doc.Grid("RESP")
'
If Not xGrid.ReadOnly then
    Do while xGrid.RowCount > 0
       xGrid.RemoveRow(0)
    Loop
    xGrid.ReadOnly = True
    xGrid.Refresh
End If
```