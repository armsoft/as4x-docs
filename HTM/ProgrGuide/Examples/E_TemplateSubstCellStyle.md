---
layout: page
title: "Օրինակ/TemplateSubstCellStyle"
---

Օրինակում ցույց է տրված [TemplateSubstCellStyle](../Functions/TemplateSubstCellStyle.html) տիպի օգտագործումը։
    
``` vb
Public Function TemplateSubstitution(ByVal modes As Dictionary) As TemplateSubstitution
Dim tempSub As TemplateSubstitution
Dim i As Long
Dim style As TemplateSubstCellStyle
Dim operGrid As AsGrid

    Set tempSub = New TemplateSubstitution
    Set operGrid = Doc.Grid("OPERS")
    Set style = New TemplateSubstCellStyle
    With style
        .BackColor = "#00FF00"
        .Color = "#FF0000"
        .Bold = 1
        .Italic = 0
        .Underline = 1
    End With

    tempSub.AddGrid "T1"
    With tempSub.Grid("T1")
        .AddColumn "1", "Անվանում", "C(50)"
        .AddColumn "2", "Գումար", "SUMMA"
        .AddColumn "3", "Դբ/Կր", "C(1)"
        .UseStyles = True

        For i = 0 To operGrid.RowCount - 1
            .AddRow 
            .Value(i, "1") = operGrid(i, "NAME")
            .Value(i, "2") = operGrid(i, "SUMMA")
            .Value(i, "3") = operGrid(i, "DBCR")
            If operGrid(i, "DBCR") = "D" Then
                .SetRowStyle CLng(i), style
            End If
        Next i
    End With

   Set TemplateSubstitution = tempSub
End Function
```