<html>
<head>
<title>LastOpDate</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция LastOpDate</font></strong></p>

<p><font face="Arial">Возвращает дату последней проводки c объектом, 
произведенной в указанных учетах по заданному коду операции.</font></p>

<p class="label"><font face="Arial">Если проводка не найдена, то 
возвращается Null.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>LastOpDate (</strong><em>AccCode, nISN, </em>
[<em>UpToDate</em>]<strong>,
</strong>[<em>Op</em>]<strong>, </strong>[<i>nDiscardISN</i>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>LastOpDate</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>AccCode</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a>
    либо массив значений с несколькими кодами учетов, содержащий несколько кодов 
	учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nISN</font></em></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN объекта учета, для которого приводится дата</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>UpToDate</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	даты, указывающее дату до которой включительно производится поиск. Если 
	параметр опущен, то возвращается дата самой последней проводки в данном 
	учете.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">Op</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="../../../Defs/Accounting.html">код операции</a>, 
	по которому проводится поиск.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><i>nDiscardISN</i></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Long, определяющее ISN документа, транзакции которого не 
	рассматриваются. По умолчанию принимает значение -1.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="LastOpDate2.html"><font face="Arial">См. 
также</font></a></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
LastOpDate<br>
<br>
</strong>Пример поиска даты последней операции с объектом в учетах &quot;01&quot; и &quot;02&quot;.</font></p>

<p><font face="Arial">Function LASTDAY() <br>
Dim arr<br>
&nbsp;&nbsp;&nbsp;&nbsp; arr(1) = &quot;01&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; arr(2) = &quot;02&quot;<br>
&nbsp;&nbsp;&nbsp; LASTDAY=<strong>LastOpDate</strong>(arr, ds(&quot;fISN&quot;))<br>
End Function<br>
</font></p>
</body>
</html>
