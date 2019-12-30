---
layout: page
title: "Օրինակ/GridCellValid"
---

Օրինակում ցույց է տրված GridCellValid իրադարձության օգտագործումը:

Ստորև բերված է օրինակում ստուգվում է, որ աղյուսակի վանդակում լրացվելուց արժեքը չկրկնվի այլ տողում։

``` vb
Public Sub GridCellValid(ByVal gridObj As AsGrid)
Dim i As Long
    If gridObj.ColName = "UNIQUECODE" Then
        For i = 0 To gridObj.RowCount - 1
            If i <> gridObj.Row and gridObj.Value(i,gridObj.Col) = gridObj.ColumnValue(gridObj.Col) Then
                RaiseError("Սխալ", "Աղյուսակում կոդ սյունակի արժեքը չի կարող կրկնվել։", "Error", "Code value cannot repeat in the table.")
            End If
        Next
    End If
End Sub
```


