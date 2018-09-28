<html>
<head>
<title>CreateRepViewer</title>
</head>

<body>

<h1><font size="4" face="Arial">Функция CreateRepViewer<br>
</font><a href="../AsRepViewer.html"><font face="Arial" size="3"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Создается экземпляр объекта типа отчета.</font></p>

<p>&nbsp;</p>

<p><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong><em> sReportName</em><strong> 
= CreateRepViewer</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>CreateRepViewer</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sReportName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта типа отчет. Через 
	нее можно получить доступ к свойствам и методам объекта.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><strong><font face="Arial" size="3">Пример функции </font><font
face="Arial">CreateRepViewer</font></strong></p>

<p><font face="Arial">В примере вызывается функция GetReportViewer, 
через переменную xRep возвращается ссылка на объект типа отчет со всеми его 
свойствами и методами. </font></p>

<p><font face="Arial">set xRep = <strong>CreateRepViewer</strong><br>
xRep.<a href="../AsRepViewer/Caption.html">Caption</a> = &quot;Оборотный баланс&quot;<br>
xRep.<a href="../AsRepViewer/AddFragment.html">AddFragment</a> 97<br>
xRep.<a href="../AsRepViewer/AddFragment.html">AddFragment</a> 85<br>
xRep.<a href="../AsRepViewer/UnMoveFragment.html">UnMoveFragment</a>=True<br>
<br>
xRep.<a href="../AsRepViewer/AddHeader.html">AddHeader </a>Space(9) &amp; &quot;Оборотный 
баланс&quot; &amp; Space(4) &amp; SDate &amp; &quot; - &quot; &amp; EDate<br>
xRep.<a href="../AsRepViewer/AddHeader.html">AddHeader</a> &quot; Счет&nbsp;&nbsp;&nbsp;&nbsp; 
Нач.остаток&nbsp;&nbsp;&nbsp;&nbsp; Приход&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Расход&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Конеч.остаток&nbsp;&nbsp;&nbsp; 
&quot;<br>
xRep.<a href="../AsRepViewer/UnMoveHeadCount.html">UnMoveHeadCount</a>=1<br>
.....<br>
Do While not xDS.<a href="../ASDATA/EOF.html">EOF</a><br>
&nbsp;&nbsp; ....<br>
&nbsp;&nbsp; xRep.<a href="../AsRepViewer/AddRow.html">AddRow</a> Space(5) &amp; 
OLDCODBAL &amp; Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(STARTREM_Row, RoundRate) &amp; 
Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(TURNIN_Row, RoundRate) &amp; 
Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(TURNOUT_Row, RoundRate) &amp; 
Space(1) &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FormattedSum(ENDREM_Row, RoundRate) &amp; 
Space(1)<br>
xDS.<a href="../ASDATA/MoveNext.html">MoveNext</a><br>
Loop <br>
<br>
xRep<strong>.</strong><a href="../AsRepViewer/AddFooter.html">AddFooter</a> 
Space(5) &amp; &quot;Итого &quot; &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(STARTREM_Rep, RoundRate) &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(TURNIN_Rep, RoundRate) &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(TURNOUT_Rep, RoundRate) &amp; _<br>
&nbsp;&nbsp; Space(1) &amp; FormattedSum(ENDREM_Rep, RoundRate)<br>
<br>
xDS.<a href="../ASDATA/CloseCursor.html">CloseCursor</a>&nbsp;&nbsp;&nbsp;&nbsp; <br>
xRep.<a href="../AsRepViewer/Show.html">Show</a></font></p>
</body>
</html>
