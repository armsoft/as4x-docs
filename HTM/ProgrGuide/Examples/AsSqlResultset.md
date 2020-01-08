---
layout: page
title: "AsSqlResultset examples"
---

# AsSqlResultset դասի օրինակներ

## AsSqlResultset դասի օրինակ,որտեղ OpenResultSet-ը async չէ:

``` vb
Public Function ReturnRowCounts(ByVal tableCount As Long) As Long()
    
    Dim i As Long
    Dim j As Long
    Dim rowCount As Long
    Dim rs As AsSqlResultset
    Dim arr(tableCount - 1) As Long
    Dim sqlCommand As AsSqlCommand
    Dim var As Variant
    Dim bMoreResults As Boolean
    
    Set sqlCmd = New AsSqlCommand
    Set sqlCmd.Connection = oOdbcConnection
    
    bMoreResults = True
    sqlCommand.CommandType = NamedText
    sqlCommand.CommandText = "Select * from FOLDERS where fISN = @ISN;select 1"
    sqlCommand.Parameters.Add "@ISN", Sql_Int, 515447059, vbParamDirInput
    
    Set rs = sqlCommand.OpenResultSet()
    
    While bMoreResults
        While Not rs.EOF
            For i = 0 To rs.Columns.Count - 1
                var = rs.Columns.Item(i).value
            Next
            rs.MoveNext
            rowCount = rowCount + 1
        Wend
        
        arr(j) = rowCount
        j = j + 1
        bMoreResults = rs.MoreResults
    Wend
    rs.Close
    ReturnRowCounts = arr
End Function

```

## AsSqlResultset դասի օրինակ,որտեղ OpenResultSet-ը async է:

``` vb
    
    Dim i As Long
    Dim rs As AsSqlResultset
    Set sqlcmd = New AsSqlCommand
    Set sqlcmd.Connection = oOdbcConnection
    Dim var As Variant
    
    sqlcmd.CommandType = NamedText
    sqlcmd.CommandText = "Select * from FOLDERS where fISN = @ISN"
    sqlcmd.Parameters.Add "@ISN", Sql_Int, 515447059, vbParamDirInput

    ' Open result set in async mode
    Set rs = sqlcmd.OpenResultSet(True)

    ' do some tasks

    If CancelationRequested Then
        rs.Cancel
        Do While rs.StillExecuting
            ' Wait 
        Loop
        Exit Function
    End If

    Do While rs.StillExecuting
        ' Wait for completion: Result set is not ready if rs.StillExecuting has not returned false
    Loop

    ' Process results as usual
    While Not rs.EOF
        For i = 0 To rs.Columns.Count - 1
            var = rs.Columns.Item(i).Value
            Print var
        Next
        rs.MoveNext
    Wend
    rs.Close


```