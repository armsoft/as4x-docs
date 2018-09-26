<html>
<head>
<title>Browse</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод Browse</font></strong></p>

<p class="label"><font face="Arial">Вызывает форму прокрутки папок на 
экран.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Browse</strong>(<em>ViewCodeOrObj</em>, 
[<em>paramsValues1</em>], ..., [<em>paramsValuesN</em>])</font></p>

<p><font face="Arial">Синтаксис метода <b>Browse</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>ViewCodeorObj</em></font></td>
    <td width="71%"><font face="Arial">выражение, определяющее
      <a href="../../ASVIEW/Name.html">идентификатор вида просмотра</a>
    или же <a href="../SysDefManagment/View.html">ссылку на объект вида просмотра</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>paramsValuesi</em></font></td>
    <td width="71%"><font face="Arial">значения <a href="../../ASVIEW/Parameters.html">
	параметров</a> для подстановки в вид просмотра</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../SysDefManagment/View.html">
См. также</a></font></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример метода Browse</strong></font></h1>

<p><font face="Arial">В данном примере вид просмотра вызывается по 
идентификатору :<br>
call <strong>Browse</strong>(&quot;OnePaymt&quot;, <a href="CurrentView.html">CurrentView</a>.Value(&quot;fISN&quot;))<br>
<br>
А в этом примере метод Browse применяется к объектной переменной, ссылающейся на 
загруженный заранее вид просмотра:<br>
set xView = <a href="../SysDefManagment/View.html">View</a>(&quot;NBTURNV&quot;)<br>
.....<br>
call <strong>Browse</strong>(xView, xBal, &quot;%/&quot; &amp; Mask, xCUR, xDialog(&quot;SDate&quot;), 
xDialog(&quot;EDate&quot;),&quot;fKEY&quot;, xSUID)</font></p>
</body>
</html>
