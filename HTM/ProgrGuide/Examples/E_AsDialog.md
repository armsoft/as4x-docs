---
layout: page
title: "Օրինակ/AsDialog"
---

# Օրինակում ցույց է տրված AddControl, AddDublCntr, AddLine, AddMemoControl, Show մեթոդների և BoolValue, Cancel, Caption, LeftDouble, Value հատկությունների օգտագործումը

Օրինակի մեջ կանչվում է CreateDialog ֆունկցիան, xDialog-ի միջոցով հղումը վերադառնում է երկխոսության տիպի օբյեկտի վրա։ Այնուհետև ավելանում է BegDate դաշտը, իսկ նրա կողքին EndDate երկրորդային դաշտը։
В примере вызывается функция CreateDialog, через xDialog возвращается ссылка на обьект типа диалог со всеми его свойствами и методами. Далее добавляется реквизит BegDate, а рядом с ним вторичный реквизит EndDate. 

``` vb 
Set xDialog = CreateDialog
xDialog.Caption = "Укажите дату"
Call xDialog.AddControl("BegDate", "Начальная дата", "Date")
Call xDialog.AddDublCntr("EndDate", "BegDate")
Call xDialog.AddLine
Call xDialog.AddControl("EndDate", "Конечная дата", "Date")
Call xDialog.AddMemoControl("Note", "Примечание", 5000, 2500, "Note", , "R")
xDialog.LeftDouble=0
xDialog.Show
dBegDate = xDialog("BegDate")
dEndDate = xDialog.Value("EndDate")
IsChange=BoolValue("EndDate") 
if xDialog.Cancel then
   exit sub
end if    
```