---
layout: page
title: "Օրինակ/AsRepViewer"
---

# Օրինակում ցույց է տրված  AddFooter, AddFragment, AddHeader, AddRow, Show մեթոդների և Caption, UnMoveFragment, UnMoveHeadCount հատկությունների օգտագործումը

Օրինակի մեջ կանչվում է CreateRepViewer ֆունկցիան, xRep-ի միջոցով հղումը վերադառնում է հաշվետվության տիպի օբյեկտի վրա։ Այնուհետև բաց տվյալներ աղբյուրից ավելանում է տվյալներով հաշվետվություն։
В примере вызывается функция CreateRepViewer, через переменную xRep возвращается ссылка на объект типа отчет со всеми его свойствами и методами. Далее заполняется отчет данными из открытого источника данных.

``` vb
set xRep = CreateRepViewer
xRep.Caption = "Оборотный баланс"
xRep.AddFragment 97
xRep.AddFragment 85
xRep.UnMoveFragment=True

xRep.UseFormatting = True
xRep.AddHeader Space(9) & "Оборотный баланс" & Space(4) & SDate & " - " & EDate
xRep.AddHeader " Счет    <b>Нач.остаток      Приход        Расход        <i>Конеч.остаток </i> <b>   "
xRep.UnMoveHeadCount = 1
.....
Do While not xDS.EOF
   ....
   xRep.AddRow Space(5) & OLDCODBAL & Space(1) & _
       FormattedNum(STARTREM_Row, RoundRate) & Space(1) & _
       FormattedNum(TURNIN_Row, RoundRate) & Space(1) & _
       FormattedNum(TURNOUT_Row, RoundRate) & Space(1) & _
       FormattedNum(ENDREM_Row, RoundRate) & Space(1)
xDS.MoveNext
Loop 

xRep.AddFooter Space(5) & "Итого " & _
   Space(1) & FormattedNum(STARTREM_Rep, RoundRate) & _
   Space(1) & FormattedNum(TURNIN_Rep, RoundRate) & _
   Space(1) & FormattedNum(TURNOUT_Rep, RoundRate) & _
   Space(1) & FormattedNum(ENDREM_Rep, RoundRate)

xDS.CloseCursor     
xRep.Show
```

