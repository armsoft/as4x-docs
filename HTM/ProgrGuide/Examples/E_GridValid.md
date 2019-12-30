---
layout: page
title: "Օրինակ/GridValid"
---


Օրինակում ցույց է տրված GridValid իրադարձության օգտագործումը։

Ստորև բերված է օրինակում ստուգվում է, կոդի սյունակի արժեքը չկրկնվի որ մի տողում։

``` vb
Public Sub GridValid(ByVal gridObj As AsGrid)
Dim i As Long, uniqueValues As Dictionary
    Set uniqueValues = New Dictionary
    For i = 0 To gridObj.RowCount-1
        If uniqueValues.Exists(gridObj(i, "UNIQUECODE")) Then
            RaiseError("Սխալ", "Աղյուսակում կոդ սյունակի արժեքը չի կարող կրկնվել։", "Error", "Code value cannot repeat in the table.")
        End If
        uniqueValues.Add(gridObj(i, "UNIQUECODE"), i)
    Next
End Sub
```

