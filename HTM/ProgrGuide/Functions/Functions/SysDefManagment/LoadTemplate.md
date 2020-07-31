---
layout: page
title: "LoadTemplate ֆունկցիա"
---

# LoadTemplate ֆունկցիա

Բացում է Word կամ Excel ձևանմուշի ֆայլը համապատասխան ծրագրի մեջ, ապա բեռնված ֆայլի օբյեկտի հղումը վերադարձնում։  
Ֆունկցիան վերադարձնում է կա՛մ `Word.Document`, կա՛մ `Excel.Workbook` տիպի օբյեկտ։

Ձևանմուշը պետք է լինի նախօրոք նկարագրված համակարգի մեջ։ 

## Շարահյուսություն

``` vb
Function LoadTemplate(ByVal TemplateName As String, ByVal TemplateType As String, _
             Optional ByVal PathToExport As String = "", _
             Optional ByVal bSetExtension As Boolean = False, _
             Optional ByRef bUnicode As Boolean) As Object
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TemplateName | Ձևանմուշի կոդ։  |
| TemplateType | Ձևանմուշի տիպը։ |
| PathToExport | Ֆայլի պահպանման ճանապարհ։ Չփոխանցելու դեպքում ֆայլը պահպանվելու է ժամանակավոր ֆայլերի թղթապանակում։ |
| bSetExtension | Նշանակում է ֆայլի ընդլայնումը ըստ ձևանմուշի տիպի։ Չփոխանցելու դեպքում ժամանակավոր ֆայլի ընդլայնումը լինում է `.tmp`։ |
| bUnicode | Վերադարձնում է ձևանմուշի Unicode-ով լրացվելու հայտանիշը։ |

## Կարգաբերումներ

Աշխատում են միայն հետևյալ ձևանմուշի տիպերը

* `0` - MS Word (*.doc)
* `1` - MS Excel (*.xls)
* `3` - MS Excel-ի Open XML (*.xlsm)
* `8` - MS Excel-ի Open XML (*.xlsx)

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

``` vb
Set xExcelDoc = LoadTemplate("SomeXlsTemplate", "1")

xExcelDoc.Activate
Set xAppExcel = xExcelDoc.Application
With xAppExcel
    .Visible = True
    .WindowState = -4137  'xlMaximized
    .ActiveWindow.WindowState = -4137  'xlMaximized
End With

With xExcelDoc.ActiveSheet
    .Cells(6, "A") = 100
    .Cells(12, "G") = 200
    .Cells(14, "G") = Param("WkDate")
End With
```
