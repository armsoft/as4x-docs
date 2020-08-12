---
layout: page
title: "CreateRepViewer ֆունկցիա"
---

## CreateRepViewer ֆունկցիա


[Հատկություններ և մեթոդներ](../AsRepViewer.md)

Ստեղծում է հաշվետվություն տիպի օբյեկտի օրինակ։
Создается экземпляр объекта типа отчета.

## Շարահյուսություն

```vb
set sReportName = CreateRepViewer
```
Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sReportName | Հաշվետվություն տիպի օբյեկտի օրինակի հղում։ Որի միջոցով կարելի է ստանալ օբյեկտի մեթոդների և հատկությունների հասանելիություն։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта типа отчет. Через нее можно получить доступ к свойствам и методам объекта. |


## Նկատառումներ

[Տես նաև](../../constructors.html)


## Օրինակ

Օրինակի մեջ կանչվում է GetReportViewer ֆունկցիան, xRep-ի միջոցով հղումը վերադառնում է հաշվետվություն տիպի օբյեկտի վրա իր բոլոր հատկություններով և մեթոդներով։ 

В примере вызывается функция GetReportViewer, через переменную xRep возвращается ссылка на объект типа отчет со всеми его свойствами и методами. 

set xRep = <strong>CreateRepViewer</strong><br>
xRep.[Caption](../AsRepViewer/Caption.html) = &quot;Оборотный баланс&quot;<br>
xRep.[AddFragment](../AsRepViewer/AddFragment.html) 97<br>
xRep.[AddFragment](../AsRepViewer/AddFragment.html) 85<br>
xRep.[UnMoveFragment](../AsRepViewer/UnMoveFragment.html)=True<br>
<br>
xRep.[AddHeader](../AsRepViewer/AddHeader.html)Space(9) &amp; &quot;Оборотный баланс&quot; &amp; Space(4) &amp; SDate &amp; &quot; - &quot; &amp; EDate<br>
xRep.[AddHeader](../AsRepViewer/AddHeader.html) &quot; Счет&nbsp;&nbsp;&nbsp;&nbsp; Нач.остаток&nbsp;&nbsp;&nbsp;&nbsp; Приход&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Расход&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Конеч.остаток&nbsp;&nbsp;&nbsp; &quot;<br>
xRep.[UnMoveHeadCount](../AsRepViewer/UnMoveHeadCount.html)=1<br>
.....<br>
Do While not xDS.[EOF](../ASDATA/EOF.html)<br>
&nbsp;&nbsp; ....<br>
&nbsp;&nbsp; xRep.[AddRow](../AsRepViewer/AddRow.html) Space(5) &amp; OLDCODBAL &amp; Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(STARTREM_Row, RoundRate) &amp; Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(TURNIN_Row, RoundRate) &amp; Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(TURNOUT_Row, RoundRate) &amp; Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(ENDREM_Row, RoundRate) &amp; Space(1)<br>
xDS.[MoveNext](../ASDATA/MoveNext.html)<br>
Loop <br>
<br>
xRep<strong>.</strong>[AddFooter](../AsRepViewer/AddFooter.html) Space(5) &amp; &quot;Итого &quot; &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(STARTREM_Rep, RoundRate) &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(TURNIN_Rep, RoundRate) &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(TURNOUT_Rep, RoundRate) &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(ENDREM_Rep, RoundRate)<br>
<br>
xDS.[CloseCursor](../ASDATA/CloseCursor.html)&nbsp;&nbsp;&nbsp;&nbsp; <br>
xRep.[Show](../AsRepViewer/Show.html)
