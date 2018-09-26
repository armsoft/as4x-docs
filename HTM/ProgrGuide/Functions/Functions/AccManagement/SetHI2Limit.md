<html>
<head>
<title>SetHI2Limit</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод SetHI2Limit</font></strong></p>

<p><font face="Arial">Устанавливает значения лимитов в
<a href="../../../Database/Hirest2.html"> HIREST2</a> по объекту учета и 
аккумулирующему объекту. Лимиты проверяются во время проведения проводок с 
помощью функции
<a href="CheckHI2Limit.html">CheckHI2Limit</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.SetHI2Limit</strong> (<em>TypeAcc, 
ObjectISN, GLObjectISN, ULimit, LLimit</em>)</font></p>

<p><font face="Arial"><br>
Синтаксис метода<strong> SetHI2Limit</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>TypeAcc</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a> из его 
	описания.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ObjectISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN объекта учета, для которого устанавливаются лимиты.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>GLObjectISN</em></font></td>
    <td width="71%"><font face="Arial">числовое выражение Long, 
	определяющее ISN аккумулирующего объекта</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ULimit</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа 
	Currency, определяющее верхний лимит для объекта учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>LLimit</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа 
	Currency, определяющее нижний&nbsp; лимит для объекта учета.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
</b><br>
Лимиты полезны для наложения ограничений на остатки счетов.</font></p>

<p class="label"><font face="Arial"><a href="SetLimit.html">См. также</a></font></p>

</body>
</html>
