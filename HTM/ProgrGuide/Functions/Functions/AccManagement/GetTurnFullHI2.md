<html>
<head>
<title>GetTurnFullHI2</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция GetTurnFullHI2</font></strong></p>

<p class="label"><font face="Arial">Возвращает значения оборотов и 
остатков объекта учета по заданному аккумулирующему объекту.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetTurnFullHI2</strong> (<em>sAccCode, 
nISN, nGLISN, dStartDate, dEndDate</em>,<em> DbTurn, DbTurnAMD, _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
CrTurn, CrTurnAMD</em>, <em>Remd, RemdAMD, </em>[<em>StartRemd</em>]<em>, </em>[<em>StartRemdAMD</em>])</font></p>

<p><font face="Arial">Синтаксис процедуры <strong>GetTurnFullHI2</strong>
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
	определяющее <a href="../../../Defs/Accounting.html">код учета</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">числовое выражение Long, 
	определяющее ISN объекта учета</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><i>nGLISN</i></font></td>
    <td width="71%"><font face="Arial">числовое выражение Long, 
	определяющее ISN аккумулирующего объекта</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dStartDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее начальную дату расчета оборота</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dEndDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее конечную дату расчета оборота</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>DbTurn</em></font></td>
    <td width="71%"><font face="Arial">ссылочная переменная, 
	возвращающая дебетовый оборот в иностранной валюте</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">DbTurnAMD</font></em></td>
    <td width="71%"><font face="Arial">ссылочная переменная, 
	возвращающая дебетовый оборот в основной валюте</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">CrTurn</font></em></td>
    <td width="71%"><font face="Arial">ссылочная переменная, 
	возвращающая кредитовый оборот в иностранной валюте</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">CrTurnAMD</font></em></td>
    <td width="71%"><font face="Arial">ссылочная переменная, 
	возвращающая кредитовый оборот в основной валюте</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">Remd</font></em></td>
    <td width="71%"><font face="Arial">ссылочная переменная, 
	возвращающая конечный остаток объекта в иностранной валюте. Остаток 
	приводится на конец дня.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">RemdAMD</font></em></td>
    <td width="71%"><font face="Arial">ссылочная переменная, 
	возвращающая конечный остаток объекта в национальной валюте. Остаток 
	приводится на конец дня.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">StartRemd</font></em></td>
    <td width="71%"><font face="Arial">необязательный параметр, 
	ссылочная переменная, возвращающая начальный остаток объекта в иностранной 
	валюте. Остаток приводится на начало дня.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">StartRemdAMD</font></em></td>
    <td width="71%"><font face="Arial">необязательный параметр, 
	ссылочная переменная, возвращающая начальный остаток объекта в национальной 
	валюте. Остаток приводится на начало дня.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="GetTurnFull.html"><font face="Arial">См. 
также</font></a></p>

</body>
</html>
