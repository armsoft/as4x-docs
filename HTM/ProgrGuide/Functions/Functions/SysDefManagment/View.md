<html>
<head>
<title>View</title>
</head>

<body>

<h1><font size="4" face="Arial">Функция View<br>
</font><a href="../../Asview.html"><font face="Arial" size="3"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Возвращает ссылку на экземпляр объекта вида 
просмотра.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong><em> sViewName</em><strong> 
= View</strong>(<em>ViewID</em>)</font></p>

<p><font face="Arial">Синтаксис функции <b>View</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sViewName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта вида просмотра. 
	Через нее можно получить доступ к свойствам и методам объекта.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">ViewID</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор вида просмотра</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><font face="Arial" size="3"><strong>Пример функции View</strong></font></p>

<p><font face="Arial">В примере вызывается функция View, через 
переменную xView возвращается ссылка на обьект вида просмотра NBACCT3 со всеми 
его свойствами и методами. </font></p>

<p><font face="Arial">set xView = <strong>View</strong>(&quot;NBACCT3&quot;)<br>
xView.<a href="../../ASVIEW/Caption.html">Caption</a> = &quot;Выписки счетов&quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
VTOFS(&quot;DATE&quot;, xDialog(&quot;NBSTARTDATE&quot;)) &amp; &quot; - &quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
VTOFS(&quot;DATE&quot;, xDialog(&quot;NBENDDATE&quot;))<br>
If Not xDialog(&quot;NBAccClose&quot;) then<br>
&nbsp;&nbsp;&nbsp; xView.<a href="../../ASVIEW/RemoveColumn.html">RemoveColumn</a>
&quot;fDATOTK&quot;<br>
&nbsp;&nbsp;&nbsp; xView.<a href="../../ASVIEW/AddColumn.html">AddColumn</a> &quot;fDATZAK&quot;, 
3, 1<br>
End If<br>
</font></p>
</body>
</html>
