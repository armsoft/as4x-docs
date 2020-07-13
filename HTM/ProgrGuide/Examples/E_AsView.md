---
layout: page
title: "Օրինակ/AsView"
---

Օրինակներում ցույց է տրված դիտելու ձևի հատկությունների և մեթոդների պարզ և բարդ օգտագործումներ։

Ստորև նկարագրված է դիտելու ձև բացելու երեք օրինակ։

## Օրինակ 1
Բացում է դիտելու ձև առանց որևէ փոփոխության։

``` vb
' MODULE { NAME=MyModule;

Public Sub ShowSampleView()
Dim viewBrowser As AsView
    Set viewBrowser = View("SampleVw")

    With viewBrowser
        'xView.Condition = "( fSTARTREM <> 0 or fTURNIN <> 0 )"
        'xView.SQLSort = True
        'xView.RemoveColumn "fOPENDATE"
        'xView.SetOrder "fKEY", 1
        'xView.SetTotal "fSUM", 1
        .Browse
    End With
End Sub
```

## Օրինակ 2
Բացում է երկխոսության պատուհան և ընտրված արժեքները փոխանցում է դիտելու ձևի պարամետրերին։ 


``` vb
' MODULE { NAME=MyModule;

Public Sub ShowSampleView()
Dim dlg As AsDialog, viewBrowser As AsView
    Set dlg = CreateDialog("SampleVw")
    With dlg
        .Caption = "Օրինակելի դիտելու ձև"
        .ECaption = "Sample View"
        .LeftDouble = 1500
        .AddControl("StartDate", "Ժամանակահատված", "DATE", "R", , "Period", 0)
        .AddDublCntrl("EndDate", "StartDate", "R", , 0)

        .Show
        If .Cancel Then
            Exit Sub
        End If
    End With

    Set viewBrowser = View("SampleVw")

    With viewBrowser
        .Parameters("StartDate") = dlg("StartDate")
        .Parameters("EndDate") = dlg("EndDate")

        .Browse
    End With
End Sub
```

## Օրինակ 3
2-րդ օրինակին ավելացված է ընդլայնված դիիտելու ձև ընտրելու հնարավորությունը և պարամետրերի վերաբեռտնման հնարավորությունը։


``` vb
' MODULE { NAME=MyModule;

Public Sub ShowSampleView(Optional viewBrowser As AsView = Nothing)
Dim dlg As AsDialog
    Set dlg = CreateDialog("SampleVw")
    With dlg
        .Caption = "Օրինակելի դիտելու ձև"
        .ECaption = "Sample View"
        .LeftDouble = 1500
        .AddControl("StartDate", "Ժամանակահատված", "DATE", "R", , "Period", 0)
        .AddDublCntrl("EndDate", "StartDate", "R", , 0)

        ApplyDialogExtension dlg, "SampleVw", "SampleVw"

        If viewBrowser IsNot Nothing Then
            .LoadBrowseParametersInfo(viewBrowser.BrowseParametersInfo())
        End If

        .Show
        If .Cancel Then
            Exit Sub
        End If
    End With

    If viewBrowser Is Nothing Then
        Set viewBrowser = View(dlg("SELECTED_VIEW"))
        viewBrowser.RebrowseSub = "MyModule.ShowSampleView"
    End If

    With viewBrowser
        Set .BrowseParametersInfo = dlg.CreateBrowseParametersInfo()
        .Caption = .DefinitionCaption & " " & VTOFS("DATE", dlg("StartDate")) & " - " & VTOFS("DATE", dlg("EndDate"))
        .ECaption = .DefinitionECaption & " " & VTOFS("DATE", dlg("StartDate")) & " - " & VTOFS("DATE", dlg("EndDate"))
        '
        .Parameters("StartDate") = dlg("StartDate")
        .Parameters("EndDate") = dlg("EndDate")

        .Browse
    End With
End Sub
```

