---
layout: page
title: "Օրինակ/AsDialogEx"
---


# Օրինակում ցույց է տրված SetFocus, Show и свойств Cancel, Caption, ClickDropDownEvent, Control, ExistControl, Name, Properties, ReadOnly, Value մեթոդների օգտագործումը

Օրինակի մեջ կանչվում է LoadDialog ֆունկցիան, xDialog-ի միջոցով հղումը վերադառնում է նկարագրվող երկխոսության տիպի օբյեկտի վրա։
В примере вызывается функция LoadDialog, через xDialog возвращается ссылка на обьект типа описательный диалог со всеми его свойствами и методами.

``` vb
Set xDialog = LoadDialog("DataName")
xDialog.Caption = "Укажите дату"
if xDialog.ExistControl("DialogName") then
    xDialog.Control("DialogName").Text=xDialog.Name
    xDialog.ReadOnly("DialogName")=True
end if
xDialog.ReadOnly("BegDate")=False
xDialog.ReadOnly("EndDate")=False
xDialog.ClickDropDownEvent("BegDate")=True
xDialog.ClickDropDownEvent("EndDate")=False
xDialog.Show
dBegDate = xDialog("BegDate")
dEndDate = xDialog.Value("EndDate")
Set objProperties=xDialog.Properties
if xDialog.Cancel then
   exit sub
end if    
```