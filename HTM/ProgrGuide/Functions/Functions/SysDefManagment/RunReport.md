<html>
<head>
<title>RunReport</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод RunReport</font></strong></p>

<p class="label"><font face="Arial">Вызывает стартовую процедуру 
справки отчета по идентификатору.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>RunReport</strong>(<em>ReportId</em>)</font></p>

<p><font face="Arial">Синтаксис метода <strong>RunReport</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">ReportId</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/report.html">идентификатор отчета</a></font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Стартовая процедура отчета не должна содержать параметров вызова.</font></p>

<p class="label"><a href="../../../Defs/report.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><strong><font size="3" face="Arial">Пример метода </font><font
face="Arial">RunReport</font></strong></p>

<p><font face="Arial">Ниже приводится вызов справки из контекстного 
меню.<br>
<br>
.....<br>
Doc.<a href="../../ASDOC/RegistrFunction.html">RegistrFunction</a> &quot;Просмотр 
операций&quot;, &quot;vCrLnView&quot;, , &quot;node4&quot;<br>
.....<br>
Sub vCrLnView()<br>
&nbsp;&nbsp; call <strong>RunReport</strong>(&quot;CRLNVIEW&quot;)<br>
End Sub</font></p>
</body>
</html>
