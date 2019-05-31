---
layout: page
title: "AsSqlCommand examples"
---

# AsSqlCommand դասի օրինակներ

Բոլոր օրինակներում rdoConSys-ը [AsRdoConnection](../AsRdoConnection.md) տիպի օբյեկտ է:

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
        .Parameters("@REM").Value = rdParamOutput
        .Parameters("@CURREM").Value = rdParamOutput
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
## ExecuteNonQuery օրինակ. անանուն պարամետրերվ հարցում

``` vb
object.Attachments
```

## ExecuteScalar օրինակ

Օրինակում, չնայած որ ավելացնելիս պարամետրերին անուններ են տրվում, հարցումն ուղարկելիս այդ անունները հաշվի չեն առնվում, քանի որ CommandType = Text: Այդ անունները կարելի է օգտագործել պարամետրերի ցուցակից պարամետրը ստանալու համար:

``` vb
Public Function GetDefinitionCaption(ByVal sElementName As String, _
                                     ByVal sElementType As String) As String

    Dim oGetDefinitionCaptionCommand As AsSqlCommand
    Dim oNullableCaption As AsNullable

    Set oGetDefinitionCaptionCommand = rdoConSys.CreateSqlCommand()
    With oGetDefinitionCaptionCommand
        .CommandType = Text
        .CommandText = "Select sd.fCAPTION FROM dbo.SYSDEF sd WHERE sd.fSYSTYPE = ? AND sd.fNAME = ?"
        .Parameters.Add "@SYSTYPE", Sql_SmallInt, sElementType
        .Parameters.Add "@NAME", Sql_Varchar, sElementName
        Set oNullableCaption = .ExecuteScalar(Sql_Varchar, SQL_LEN_SYSDEF_fCAPTION)
        If oNullableCaption.HasValue Then
            GetDefinitionCaption = oNullableCaption.Value
        Else
            GetDefinitionCaption = ""
        End If
    End With
End Function
```

