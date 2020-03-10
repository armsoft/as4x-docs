---
layout: page
title: "AsSqlCommand examples"
---

# AsSqlCommand դասի օրինակներ

Բոլոր օրինակներում rdoConSys-ը [AsRdoConnection](../Functions/AsRdoConnection.md) տիպի օբյեկտ է:

## ExecuteNonQuery օրինակ. Result Set չվերադարձնող Stored procedure-ի կանչ:

Օրինակում Stored procedure-ը կանչվում է և օգտագործվում են դրա Output  պարամետրերի արժեքները:
Պարամետրերն ավելացվում էն ճիշտ Stored procedure-ում եղած անուններով: Հարցման օբյեկտը պատրաստվում է 1 անգամ` բազմակի օգտագործման համար:

``` vb
Private oGetLastRemCommand  As AsSqlCommand

Friend Sub GetLastRem(ByVal Acc As String, ByVal ISN As Long, _
                      ByRef xRem As Currency, ByRef xRemNC As Currency)
    If oGetLastRemCommand Is Nothing Then
        Prepare_oGetLastRemCommand
    End If
    With oGetLastRemCommand
        .Parameters("@TYPE").Value = Acc
        .Parameters("@OBJECT").Value = ISN
        .ExecuteNonQuery
        xRemNC = .Parameters("@REM").Value
        xRem = .Parameters("@CURREM").Value
    End With
End Sub

Private Sub Prepare_oGetLastRemCommand()
    Set oGetLastRemCommand = rdoConSys.CreateSqlCommand()

    With oGetLastRemCommand
        .CommandType = StoredProcedure
        .CommandText = "{ Call asp_GetLastRem(?,?,?,?) }"

        .Parameters.Add "@TYPE", Sql_Char
        .Parameters.Add "@OBJECT", Sql_Int
        .Parameters.Add "@REM", Sql_Money, , vbParamDirOutput
        .Parameters.Add "@CURREM", Sql_Money, , vbParamDirOutput
    End With
End Sub

```
## ExecuteNonQuery օրինակ. անվանական պարամետրերվ հարցում

``` vb
    Dim updateDescrCommand As AsSqlCommand
    Set updateDescrCommand = rdoConSys.CreateSqlCommand()
    With updateDescrCommand
        .CommandType = NamedText
        .CommandText = "Update DOCSIM Set fVALUE = @VALUE Where fISN = @ISN and fIMAGE = @IMAGE"

        .Parameters.Add "@VALUE", Sql_VarBinaryMax, Value, vbParamDirInput
        .Parameters.Add "@ISN", Sql_Int, ISN, vbParamDirInput
        .Parameters.Add "@IMAGE", Sql_Varchar, Image, vbParamDirInput
    
        .ExecuteNonQuery
    End With

```

## ExecuteNonQuery օրինակ. անանուն պարամետրերվ հարցում

``` vb
    Dim updateDescrCommand As AsSqlCommand
    Set updateDescrCommand = rdoConSys.CreateSqlCommand()
    With updateDescrCommand
        .CommandType = Text
        .CommandText = "Update DOCSIM Set fVALUE = ? Where fISN = ? and fIMAGE = ?"

        .Parameters.Add "@VALUE", Sql_VarBinaryMax, Value, vbParamDirInput
        .Parameters.Add "@ISN", Sql_Int, ISN, vbParamDirInput
        .Parameters.Add "@IMAGE", Sql_Varchar, Image, vbParamDirInput
    
        .ExecuteNonQuery
    End With

```

## ExecuteScalar օրինակ

Օրինակում, չնայած որ ավելացնելիս պարամետրերին անուններ են տրվում, հարցումն ուղարկելիս այդ անունները հաշվի չեն առնվում, քանի որ CommandType = Text: Այդ անունները կարելի է օգտագործել պարամետրերի ցուցակից պարամետրը ստանալու համար:

``` vb
Public Function GetDefinitionCaption(ByVal sElementName As String, _
                                     ByVal sElementType As String) As String

    Dim oGetDefinitionCaptionCommand As AsSqlCommand
    Dim vScalarValue as Variant

    Set oGetDefinitionCaptionCommand = rdoConSys.CreateSqlCommand()
    With oGetDefinitionCaptionCommand
        .CommandType = Text
        .CommandText = "Select sd.fCAPTION FROM dbo.SYSDEF sd WHERE sd.fSYSTYPE = ? AND sd.fNAME = ?"
        .Parameters.Add "@SYSTYPE", Sql_SmallInt, sElementType
        .Parameters.Add "@NAME", Sql_Varchar, sElementName
        vScalarValue = .ExecuteScalar()
        If IsEmpty(vScalarValue) Then
            GetDefinitionCaption = ""
        Else
            GetDefinitionCaption = vScalarValue
        End If
    End With
End Function
```


## OpenResultSet օրինակ

``` vb
Private Sub SQLCommandOpenResultSet()
    
    Dim i As Long
    Dim k As Log
    Dim rs As AsSqlResultset
    Set sqlcmd = New AsSqlCommand
    Set sqlcmd.Connection = oOdbcConnection
    Dim colValue() As Variant
    ReDim colValue(10)
    
    sqlcmd.CommandType = NamedText
    sqlcmd.CommandText = "Select Top 10 * from FOLDERS where fISN <> @ISN"
    sqlcmd.Parameters.Add "@ISN", Sql_Int, 515447059, vbParamDirInput)
   
    Set rs = sqlcmd.OpenResultSet()
    
    While Not rs.EOF
        For i = 0 To rs.Columns.Count - 1
            colValue(k) = rs(i)    'կամ rs.Columns.Item(i).Value
            k = k+1
        Next
        rs.MoveNext
    Wend
    rs.Close
 
End Sub
```