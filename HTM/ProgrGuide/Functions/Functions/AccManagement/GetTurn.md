<html>
<head>
<title>GetTurn</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Процедура GetTurn</font></strong></p>

<p class="label"><font face="Arial">Возвращает значения дебетовых и 
кредитовых оборотов объекта учета. Обороты расчитываются от начала дня начальной 
даты до конца дня конечной даты.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetTurn</strong>(<em>sAccCode, nISN, 
dStartDate, dEndDate</em>,<em> </em>[<em>DbTurn</em>]<em>, </em>[<em>DbTurnAMD</em>]<em>, </em>
[<em>CrTurn</em>]<em>,
</em>[<em>CrTurnAMD</em>], [<em>sCodeOp</em>])</font></p>

<p><font face="Arial">Синтаксис процедуры <strong>GetTurn</strong>
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
    <td width="71%"><font face="Arial">необязательная ссылочная 
	переменная, возвращающая дебетовый оборот в иностранной валюте</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">DbTurnAMD</font></em></td>
    <td width="71%"><font face="Arial">необязательная ссылочная 
	переменная, возвращающая дебетовый оборот в основной валюте</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">CrTurn</font></em></td>
    <td width="71%"><font face="Arial">необязательная ссылочная 
	переменная, возвращающая кредитовый оборот в иностранной валюте</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">CrTurnAMD</font></em></td>
    <td width="71%"><font face="Arial">необязательная ссылочная 
	переменная, возвращающая кредитовый оборот в основной валюте</font></td>
  </tr>
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

<p class="label"><a href="GetTurnHI2.html"><font face="Arial">См. также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример процедуры GetTurn</strong></font></h1>

<p><font face="Arial">Ниже для каждой строчки источника данных 
вызывается процедура <strong>GetTurn</strong>, которая переменным DbTurn, 
DbTurnAMD, CrTurn, CrTurnAMD присваивает значения оборотов. </font></p>

<p><font face="Arial">Dim StartD, EndD<br>
Dim DbTurn, DbTurnAMD<br>
Dim CrTurn, CrTurnAMD<br>
.....</font></p>

<p><font face="Arial">Sub <a href="../../../ScriptProcs/OnEachRow.html">
OnEachRow</a>()
<br>
&nbsp;&nbsp; call <strong>GetTurn</strong>(&quot;02&quot;, DS(&quot;fISN&quot;), StartD, EndD, _ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
DbTurn, DbTurnAMD, CrTurn, CrTurnAMD)<br>
End Sub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>
</font></p>

<p>&nbsp;</p>
</body>
</html>
