---
layout: page
title: "Օրինակ/AsDialogEx"
---


Օրինակում ցույց է տրված SetFocus, Show и свойств Cancel, Caption, ClickDropDownEvent, Control, ExistControl, Name, Properties, ReadOnly, Value մեթոդների օգտագործումը:

Օրինակի մեջ կանչվում է LoadDialog ֆունկցիան, վերադառնում է xDialog հղումը նկարագրվող երկխոսության տիպի օբյեկտի վրա։

``` vb
Set xDialog = LoadDialog("DataName")
xDialog.Caption = "Укажите дату"
If xDialog.ExistControl("DialogName") Then
    xDialog.Control("DialogName").Text = xDialog.Name
    xDialog.ReadOnly("DialogName") = True
End If
xDialog.ReadOnly("BegDate") = False
xDialog.ReadOnly("EndDate") = False
xDialog.ClickDropDownEvent("BegDate") = True
xDialog.ClickDropDownEvent("EndDate") = False
xDialog.Properties.Add "ForLastPay", True
xDialog.Show
If xDialog.Cancel Then
   Exit Sub
End If    

dBegDate = xDialog("BegDate")
dEndDate = xDialog.Value("EndDate")
```