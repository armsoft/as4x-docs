<html>
<head>
<title>CurValueE</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция CurValueE</font></strong></p>

<p><font face="Arial">Возвращает курс валюты в виде cуммы в НДЕ и 
суммы валюты (т.е. сколько за сколько). Если на указанную дату курс отсутствует, 
то приводится последний имеющийся курс валюты.</font></p>

<p><font face="Arial">Возвращает два значения типа Currency.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>CurValueE</strong> (<em>sCodCurrency, 
sDate</em>,<em>
Value, Count</em>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</font></p>

<p><font face="Arial">Синтаксис функции<strong> CurValueE</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sCodCurrency</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее код валюты</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее дату выдачи курса</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>Value</em></font></td>
    <td width="71%"><font face="Arial">переменная типа Variant, 
	возвращающее сумму курса в национальной денежной единице</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Count</em></font></td>
    <td width="71%"><font face="Arial">переменная типа Variant, 
	возвращающее количество валюты в курсе</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="CurValue.html"><font face="Arial">См. также</font></a></p>
</body>
</html>
