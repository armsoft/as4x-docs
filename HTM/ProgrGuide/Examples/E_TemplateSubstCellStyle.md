---
layout: page
title: "Օրինակ/DataSourceIndicator"
---
# Օրինակում ցույց է տրված [BackColor](../Functions/TemplateSubstCellStyle/BackColor.html), [Bold](../Functions/TemplateSubstCellStyle/Bold.html),[Color](../Functions/TemplateSubstCellStyle/Color.html), [Italic](../Functions/TemplateSubstCellStyle/Italic.html) և [Underline](../Functions/TemplateSubstCellStyle/Underline.html) հատկությունների օգտագործումը [TemplateSubstCellStyle](../Functions/TemplateSubstCellStyle.html) տիպի օբյեկտի համար։


Пример работы свойств [BackColor](../Functions/TemplateSubstCellStyle/BackColor.html), 
[Bold](../Functions/TemplateSubstCellStyle/Bold.html), 
[Color](../Functions/TemplateSubstCellStyle/Color.html), 
[Italic](../Functions/TemplateSubstCellStyle/Italic.html) и 
[Underline](../Functions/TemplateSubstCellStyle/Underline.html) для объекта типа  [TemplateSubstCellStyle](../Functions/TemplateSubstCellStyle.html).

    
``` vb
Dim tempSub As TemplateSubstitution
Dim i As Integer
Dim sSql As String 
Dim rs As rdoResultset 
Dim style As TemplateSubstCellStyle

sSql = "select d.fISN, d.fNAME" & vbCrLf _ 
        & "from DOCS d" & vbCrLf 
Set rs = Util.ExecuteQuery(sSql, True, ASOpenForwardOnly)

Set tempSub = New TemplateSubstitution 
tempSub.AddGrid "T1"
With tempSub.Grid("T1")
    .AddColumn "1", "ISN документа", "NP(10,0)"
    .AddColumn "2", "Наименование документа", "NP(10,0)"
    .UseStyles = True 

    Set style = New TemplateSubstCellStyle 
    With style 
        .BackColor = "#00FF00" 
        .Color = "#FF0000" 
        .Bold = 1 
        .Italic = 0 
        .Underline = 1 
    End With 

    i = 0 
    While Not rs.EOF 
        .AddRow 
        .Value(i, "1") = CStr(rs("fISN")) 
        .Value(i, "2") = CStr(rs("fNAME")) 
        .SetRowStyle CLng(i), style 
        rs.MoveNext 
        i+= 1 
    Wend 
End With
```