<html>
<head>
<title>GetLastHI2Rem</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция GetLastHI2Rem</font></strong></p>

<p class="label"><font face="Arial">Возвращает остатки в иностранной 
валюте на дату для аналитического объекта по заданному синтетическому объекту. 
Остаток в основной валюте возвращается через параметр.</font></p>

<p class="label"><font face="Arial">Возвращает значение типа Currency.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetLastHI2Rem</strong>(<em>sAccounting, 
nISN,

</em>[<em>nGlISN</em>]<em>, </em>[<em>xAMDRem</em>])</font></p>

<p><font face="Arial">Синтаксис функции <strong>GetLastHI2Rem </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">sAccounting</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее тип <a href="../../AsAccounting.html">учета</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN аналитического объекта учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nGlISN</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Long, определяющее ISN синтетического объекта учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>xAMDRem</em></font></td>
    <td width="71%"><font face="Arial">необязательная переменная типа 
	Currency, в которой возвращается остаток в основной валюте.</font></td>
  </tr>
</TBODY>
  </table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../../../functions.html">
См. также</a></font></p>

</body>
</html>
