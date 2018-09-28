<html>
<head>
<title>GetTurnBetween</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция GetTurnBetween</strong></font></p>

<p class="label"><font face="Arial">Возвращает массив значений дневных 
оборотов объекта за период. Массив состоит из следующих колонок: дата, дебетовый 
оборот в основной валюте за дату, кредитовый оборот в основной валюте за дату, 
дебетовый оборот в валюте за дату, кредитовый оборот в валюте за дату. Причем 
элементы массива отсортированы по дате. Т.е. массив состоит из строчек оборотов 
за те дни, по которым имеются операции в указанном периоде.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetTurnBetween</strong>(<em>sAccCode, 
nISN, dStartDate, dEndDate</em>,<em> </em>[<em>sCodeOp</em>])</font></p>

<p><font face="Arial">Синтаксис процедуры <strong>GetTurnBetween</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sAccCode</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">тип учета</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">числовое выражение Long, 
	определяющее ISN объекта учета</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dStartDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее начальную дату расчета дневных оборотов</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dEndDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее конечную дату расчета дневных оборотов</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">sCodeOp</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее код операции. По умолчанию принимает значение &quot;&quot;. 
	Если задан, то процедура расчитывает обороты только по данному коду 
	операции.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
