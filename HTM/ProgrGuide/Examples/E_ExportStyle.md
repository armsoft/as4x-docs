---
layout: page
title: "Օրինակ/AsRepViewer"
---


# Օրինակում ցույց է տրված SpreadsheetExportRowStyle տիպի օբյեկտի, AddPart, AddExportStyle, AddFooter, AddHeader, AddRow մեթոդների, CaptionSpreadsheetExportStyle, HasDefinedStyle հատկությունների և  ExportStyleֆունկցիայի օգտագործումը։

``` vb
Dim oStyle As SpreadsheetExportRowStyle
Dim xRep As AsRepViewer
Dim strRow As String

Set oStyle = New SpreadsheetExportRowStyle
Set xRep = CreateRepViewerr

If Not xRep.HasDefinedStyle Then
   ' export style for Caption
   oStyle.AddPart 1, "C(100)", , False, False
   xRep.AddExportStyle "CaptionStyle", oStyle
   xRep.AddRow Space(25) & "Acc- account's section, , , "CaptionStyle"

   ' export style for footer
   Set oStyle = New SpreadsheetExportRowStyle
   oStyle.AddPart 1, "C(10)", , True, False, True, False
   oStyle.AddPart 1+10, "Summa", 4, True, True, True, True
   oStyle.AddPart 1+10+23, "Summa", 5, True, True, True, True
   xRep.AddExportStyle "FooterStyle", oStyle
   xRep.AddRow "Остаток на 01/01.2016____1250", , , "FooterStyle"

   If sView.ExportStyle("RowStyle") Is Nothing Then   
      ' export style for row
      Set oStyle = New SpreadsheetExportRowStyle
      oStyle.AddPart 1, "C(" & LeftAlign("Дата", 9)& ")", , False, True, True, True
      xRep.AddExportStyle "RowStyle", oStyle
      xRep.AddRow "Нач.остаток      Приход        Расход ", , , "RowStyle"
   End if

   xRep.CaptionSpreadsheetExportStyle = "CaptionStyle"

End iff

xRep.Show
```