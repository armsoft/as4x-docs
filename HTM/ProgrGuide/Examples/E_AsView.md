---
layout: page
title: "Օրինակ/AsView"
---

# Օրինակում ցույց է տրված  AddColumn, AddDoc, ClearAllDocs, RemoveColumn, SetOrder, SetTotal մեթոդների և AllowAccess, AllowDelete, AllowEdit, AllowSecondEntry, AllowView, AllowVisa, Caption, Condition, Parameters, DataSource, SQLSort հատկությունների օգտագործումը։

Օրինակի մեջ կանչվում է View ֆունկցիան, xView-ի միջոցով հղումը իր բոլոր հատկություններով և մեթոդներով վերադառնում է NBACCT3 դիտելու ձև օբյեկտի վրա։ Դիտելու ձևի մեջ ավելանում է fSRem սյունակը, որը համարվում է երկրորդ տեսակավորող սյունակ և սյունակի ներքևում ունի վերջնական արժեք։
В примере вызывается функция View, через переменную xView возвращается ссылка на обьект вида просмотра NBACCT3 со всеми его свойствами и методами. В вид просмотра добавляется колонка fSRem, являющаяся второй сортированной колонкой в представлении и имеющей итоговую сумму внизу колонки.

``` vb
set xView = View("NBACCT3")
xView.Parameters(1) = "%"
xView.Parameters(2) = "ACC"

xView.AddDoc "NBPUT"
xView.Caption = "Выписки счетов" & _
                        VTOFS("DATE", xDialog("NBSTARTDATE")) & " - " & _
                        VTOFS("DATE", xDialog("NBENDDATE"))
nAllowAccess=xView.AllowAccess
nAllowDelete=xView.AllowDelete
nAllowEdit=xView.AllowEdit
nAllowSecondEntry=xView.AllowSecondEntry
nAllowView=xView.AllowView
nAllowView=xView.AllowVisa
sSource=xView.DataSource

If Not xDialog("NBAccClose") then
    xView.AddColumn "fSRem", 2, 1
    xView.SQLSort = True
    xView.Condition = "( STARTREM <> 0 or TURNIN <> 0 )"
    xView.ClearAllDocs
    xView.RemoveColumn "fDATZAK"
End If
xView.SetOrder "fKEY", 1
xView.SetTotal "fSUM", 1
```

