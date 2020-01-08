---
layout: page
title: "AsSqlColumn examples"
---

# AsSqlColumn դասի օրինակ

``` vb
 Sub GetColValues(ByVal rs As AsSqlResultset, ByVal rowCount As Long,ByVal colName As String)
    
    Dim i As Long
    Dim colValue() As Variant
    Dim xCol As AsSqlColumn
    ReDim colValue(rowCount)
    While Not rs.EOF
        Set xCol = rs.Columns.Item(colName)
        
        colValue(i) = xCol.value
        i = i + 1

        rs.MoveNext
    Wend
End Sub

```

