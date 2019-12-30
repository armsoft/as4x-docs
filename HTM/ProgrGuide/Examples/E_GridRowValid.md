---
layout: page
title: "Օրինակ/GridRowValid"
---

Օրինակում ցույց է տրված GridRowValid իրադարձության օգտագործումը:

Ստորև բերված է օրինակում ստուգվում է, որ աղյուսակի տողից դուրս գալուց արժեքը չկրկնվի այլ տողում։

``` vb
Public Sub GridRowValid(ByVal gridObj As AsGrid)
Dim i As Long
    For i = 0 To gridObj.RowCount-1
        If i <> gridObj.Row and gridObj(i, "UNIQUECODE") = gridObj.ColumnValue("UNIQUECODE") Then
            RaiseError("Սխալ", "Աղյուսակում կոդ սյունակի արժեքը չի կարող կրկնվել։", "Error", "Code value cannot repeat in the table.")
        End If
    Next
End Sub 
```

