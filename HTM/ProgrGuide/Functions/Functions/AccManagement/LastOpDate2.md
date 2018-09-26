<html>
<head>
<title>LastOpDate2</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция LastOpDate2</strong></font></p>

<p><font face="Arial">Возвращает дату последней проводки c объектом, 
произведенной в указанных учетах возможно по нескольким кодам операций.</font></p>

<p class="label"><font face="Arial">Если проводки не найдены функция 
возвращает Null.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>LastOpDate2 (</strong><em>vAcc, nISN, </em>
[<em>vUpToDate</em>]<strong>,
</strong>[<em>bInOp</em>]<strong>, </strong>[<em>Op</em>]<strong>, </strong>[<em>DBCR</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>LastOpDate2</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>vAcc</em></font></td>
    <td width="71%"><font face="Arial">выражение типа варианты, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a>
    либо массив значений, содержащий несколько кодов учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN объекта учета, для которого приводится дата</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>vUpToDate</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	варианты, указывающее дату до которой включительно производится поиск. Если 
	параметр опущен, то возвращается дата самой последней проводки в данном 
	учете.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">bInOp</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение 
	логического типа, определяющее должны ли искомые операции быть из <em>Op</em>. 
	По умолчанию значение параметра True.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Op</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	варианты, определяющее код либо массив кодов включающих/исключающих 
	операций.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>DBCR</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее признак дебетных(&quot;D&quot;) или кредитных(&quot;C&quot;) операций. 
	По умолчанию рассматриваются все операции.</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Отличие функции <strong>
LastOpDate2</strong>
от функции <a href="LastOpDate.html">LastOpDate</a> заключается в возможности 
задания нескольких включающих или исключающих кодов операций.</font></p>

<p class="label"><font face="Arial"><a href="LastOpDate.html">См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
LastOpDate2<br>
<br>
</strong>Пример поиска даты последней проводки с объектом в учете &quot;01&quot;, по всем 
типам операций за исключением &quot;RVL&quot;,&quot;INT&quot;.</font></p>

<p><font face="Arial">LDate=<strong>LastOpDate2</strong>(&quot;01&quot;, 
DS(&quot;fISN&quot;), ,False, array(&quot;RVL&quot;,&quot;INT&quot;))</font></p>
</body>
</html>
