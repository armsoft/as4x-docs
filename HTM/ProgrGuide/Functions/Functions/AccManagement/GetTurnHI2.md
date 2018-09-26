<html>
<head>
<title>GetTurnHI2</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция GetTurnHI2</font></strong></p>

<p class="label"><font face="Arial">Возвращает значения дебетовых и 
кредитовых оборотов объекта учета по заданному аккумулирующему объекту. Обороты 
расчитываются от начала дня начальной даты до конца дня конечной даты.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetTurnHI2</strong>(<em>sAccCode, nISN, 
nGlISN, dStartDate, dEndDate</em>,<em> </em>[<em>DbTurn</em>]<em>, </em>[<em>DbTurnAMD</em>]<em>, </em>
[<em>CrTurn</em>]<em>,
</em>[<em>CrTurnAMD</em>], [<em>sCodeOp</em>], [<em>BaseISN</em>])</font></p>

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
    <td width="29%"><font face="Arial"><em>nGlISN</em></font></td>
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
  <tr>
    <td width="29%"><em><font face="Arial">BaseISN</font></em></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Long, определяющее ISN документа-основания. Если задан, то 
	процедура расчитывает обороты только для данного документа-основания.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="GetTurn.html"><font face="Arial">См. также</font></a></p>

</body>
</html>
