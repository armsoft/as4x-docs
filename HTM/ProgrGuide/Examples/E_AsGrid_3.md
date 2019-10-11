---
layout: page
title: "Օրինակ/SAsGrid"
---

# Օրինակում ցույց է տրված Name, Readonly, RowCount հատկությունների և Refresh, RemoveRow մեթոդների օգտագործումը

Օրինակի մեջ xGrid-ը հղվում է փաստաթղթի "RESP" աղյուսակի վրա։
В примере переменная xGrid ссылается на грид-таблицу &quot;RESP&quot; в документе.

՝՝՝ vb
Set xGrid = doc.Grid("RESP")
....
If xGrid.Readonly <> xFix and xGrid.Name="RESP" then
    Do while xGrid.RowCount > 0
       xGrid.RemoveRow(0)
    Loop
    xGrid.Readonly = xFix
    xGrid.Refresh
End if
```