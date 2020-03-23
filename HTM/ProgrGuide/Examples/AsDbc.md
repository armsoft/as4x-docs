---
layout: page
title: "AsDbc examples"
---

# AsDbc դասի օրինակներ

Բոլոր օրինակներում dbc-ն AsDbc տիպի օբյեկտ է:

## ExecuteNonQuery օրինակ

``` vb   
Public Sub SetLoggingState(ByVal sDocType As String, ByVal bEnable As Boolean)
    Dim sSql As String

    sSql = "Update SYSDEF Set fCHANGELOGDETAILED = '" & iif(bEnable, "1", "0") & "'" & vbCrLf & _
                    "Where fSYSTYPE = '0' And fNAME = '" & sDocType & "'"

    dbc.ExecuteNonQuery sSql
End Sub
```

## ExecuteReader օրինակ

``` vb  
Public Function GetUsersDictionary() As Dictionary
    Dim sSql         As String
    Dim rs          As AsSqlResultset
    Dim DictUsers   As Dictionary

    sSql = "SELECT NAME, fSUID, fFULLNAME FROM USERS"

    Set rs = dbc.ExecuteReader(sSql)
    Set DictUsers = New Scripting.Dictionary
    Do While Not rs.EOF
        DictUsers.Add CStr(rs("fSUID")), Trim(rs("Name")) & "##" & Trim(rs("fFULLNAME"))    
        rs.MoveNext
    Loop
    rs.Close
    Set GetUsersDictionary = DictUsers
End Function
```

## ExecuteScalar օրինակ

``` vb
Public Function GetDocState(ByVal Isn As Long) As Integer
    Dim vScalarValue As Variant

    vScalarValue = dbc.ExecuteScalar("SELECT fSTATE FROM DOCS WHERE fISN=" & CStr(Isn))
    If IsEmpty(vScalarValue) Then
        GetDocState = -1
    Else
        GetDocState = vScalarValue
    End If
End Function
```

## OpenDataTable օրինակ

``` vb
Public Sub CleanDelDoc(ByVal ConvertedToStringStartDate As String, _
                       ByVal ConvertedToStringEndDate As String)
    Dim dataTable     As AsDataTable
    Dim sSql    As String

    sSql = " select fISN from FOLDERS " _
       & " where fFOLDERID BETWEEN '" & ConvertedToStringStartDate & "' AND '" & ConvertedToStringEndDate & "'"
   
    Set dataTable = dbc.OpenDataTable(sSql)
    Do While Not dataTable.EOF
        SQL = " EXEC asp_DelDoc " & CStr(dataTable(0)) & ",2"
        dbc.ExecuteNonQuery(sSql)
        dataTable.MoveNext
    Loop
End Sub
```

## GetConnectionFromConnectionType օրինակ

``` vb
Public Function GetSingleValue (ByVal sQueryText As String, _ 
                                Optional ByVal lConnectionType As ConnectionType = Connection_Main) As Long
    Dim sqlCommand As AsSqlCommand
    Dim oConnection As AsRdoConnection

    Set oConnection = dbc.GetConnectionFromConnectionType(lConnectionType)
    Set sqlCommand = oConnection.CreateSqlCommand()      
    With sqlCommand
        .CommandText = sQueryText
        .CommandType = Text
        GetSingleValue  = .ExecueNonQuery
    End With
End Function
```