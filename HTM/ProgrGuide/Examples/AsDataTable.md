---
layout: page
title: "AsDataTable examples"
---

# AsDataTable դասի օրինակ

## Ինչպես բեռնել տվյալները AsDataTable օբյեկտի մեջ:

``` vb
Public Function OpenDataTable(ByVal sQueryText As String) As AsDataTable

    Dim dataTable As AsDataTable
    Dim sqlcmd As AsSqlCommand
    Dim rs As AsSqlResultset
    
    Set dataTable = New AsDataTable
    Set sqlcmd = New AsSqlCommand

    If UseNewOdbcDriver Then
        Set sqlcmd.Connection = oOdbcConnection
        sqlcmd.CommandText = sQueryText
        sqlcmd.CommandType = Text
        Set rs = sqlcmd.OpenResultSet()
        
        dataTable.FillFromAsSqlResultset rs
        rs.Close
    Else
        Set rdoRS = rdoConSys.OpenResultSet(sQueryText)
        dataTable.FillFromRdoResultset rdoRS
        rdoRS.Close
    End If

    Set OpenDataTable = dataTable
    
End Function

```

## Ինչպես աշխատել AsDataTable-ի հետ:

``` vb
Public Sub UsingAsDataTable()

    Dim dataTable As AsDataTable
    Dim clc As AsDataColumnCollection
    Dim col As AsDataColumn
    Dim sQuery As String
    Dim arr() As Variant
    Dim i As Long
    Dim j As Long
    Dim k As Long
    sQuery = "SELECT TOP 5 fISN,fFOLDERID FROM FOLDERS"
    
    Set dataTable = OpenDataTable(sQuery)    'Վերևում գրված ֆունկցիան
    ReDim arr(dataTable.ColumnCount * dataTable.RowCount)
    
    While Not dataTable.EOF
       
         Set clc = dataTable.Columns
         For k = 0 To clc.Count - 1
             Set col = clc.Item(k)
             arr(i) = col.Value
             i = i + 1
         Next
         dataTable.MoveNext
    Wend

End Sub

```