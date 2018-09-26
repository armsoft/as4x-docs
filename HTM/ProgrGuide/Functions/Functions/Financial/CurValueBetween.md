<html>
<head>
<title>CurValueBetween</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция CurValueBetween</strong></font></p>

<p class="label"><font face="Arial">Возвращает массив курсов валюты за 
указанный период. Массив состоит из трех колонок: дата, курс, за количество. 
Причем элементы массива отсортированы по дате.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>CurValueBetween</strong>(<em>sCurCode, 
dStartDate, dEndDate</em>)</font></p>

<p><font face="Arial">Синтаксис функции <strong>CurValueBetween</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">sCurCode</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее код валюты</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dStartDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее начальную дату расчета курса</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dEndDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее конечную дату расчета курса</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Если курс на дату отсутствует, то приводится ближайший имеющийся до этой 
даты курс.</font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
