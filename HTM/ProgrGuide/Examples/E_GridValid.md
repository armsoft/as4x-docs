---
layout: page
title: "Օրինակ/GridValid"
---


# Օրինակում ցույց է տրված GridValid իրադարձության օգտագործումը

Ստորև բերված է GridValid իրադարձության մշակիչի օրինակը [փաստաթղթի նկարագրության մեջից](../Defs/doc.html)։

``` vb
Sub GridValid(ByVal GridSource)
    If GridSource.RowCount=0 Then Exit Sub
    For xCount=GridSource.RowCount-1 to 0 Step -1
       xFirstRow = 0
       For i=1 to xCount
           if IIF(ArrDirectIsGrow, GridSource(i,GridCol) < GridSource(xFirstRow,GridCol), _
                    GridSource(i,GridCol) > GridSource(xFirstRow,GridCol)) then xFirstRow=i
       Next
       GridSource.AddRow
       For i=0 to GridSource.ColCount-1
           GridSource(GridSource.RowCount-1,i) = GridSource(xFirstRow,i)
       Next
       GridSource.RemoveRow(xFirstRow)
    Next
    If GridRefresh Then GridSource.Refresh
End Sub
```

