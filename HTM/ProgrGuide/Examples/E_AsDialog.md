---
layout: page
title: "Օրինակ/AsDialog"
---

Օրինակում ցույց է տրված AddControl, AddDublCntr, AddLine, AddMemoControl, Show մեթոդների և BoolValue, Cancel, Caption, LeftDouble, Value հատկությունների օգտագործումը:

Օրինակի մեջ կանչվում է CreateDialog ֆունկցիան, xDialog-ի միջոցով հղումը վերադառնում է երկխոսության տիպի օբյեկտի վրա։ Այնուհետև ավելանում է BegDate դաշտը, իսկ նրա կողքին EndDate երկրորդային դաշտը։

``` vb 
Set xDialog = CreateDialog()
xDialog.Caption = "Գործողություններ"
Call xDialog.AddControl("BeginDate", "Ժամանակահատված", "Date")
Call xDialog.AddDublCntr("EndDate", "BeginDate")
Call xDialog.AddMemoControl("Note", "Նշում", 5000, 2500, "Note")
xDialog.LeftDouble = 0
xDialog.Properties.Add "ForLastPay", True
xDialog.Show
If xDialog.Cancel Then
   Exit Sub
End if

dBegDate = xDialog("BeginDate")
dEndDate = xDialog.Value("EndDate")
bFieldChanged = xDialog.BoolValue("Note") 
```