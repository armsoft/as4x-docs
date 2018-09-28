<html>
<head>
<title>GetRem</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция GetRem</font></strong></p>

<p><font face="Arial">Возвращает остатки объекта в иностранной и 
основной валютах на конец указанной даты либо текущий остаток.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetRem</strong> (<em>sAccounting, nISN, </em>
[<em>dRemDate</em>],<em>
</em>[<em>AMDRem</em>])</font></p>

<p><font face="Arial"><br>
Синтаксис функции <strong>GetRem</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sAccounting</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a> из его 
	описания.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее внутрисистемный идентификационный код ISN объекта учета, для 
	которого приводятся остатки</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dRemDate</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	даты, определяющее дату приведения остатка. Если параметр опущен, то 
	приводится текущий остаток.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>AMDRem</em></font></td>
    <td width="71%"><font face="Arial">необязательный параметр 
	получения остатка в основной валюте.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример функции GetRem<br>
</strong><br>
Ниже приводится пример использования функции <strong>GetRem</strong>, где 
переменные </font><font face="Arial">curRem и DramRem получают остатки 
объекта соответственно в валюте и драме.</font></p>

<p><font face="Arial">curRem = <strong>GetRem</strong>(&quot;01&quot;, Doc.ISN, 
Param(&quot;EndDate&quot;), DramRem)</font></p>
</body>
</html>
