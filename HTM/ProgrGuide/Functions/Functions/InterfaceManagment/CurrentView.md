<html>
<head>
<title>CurrentView</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция CurrentView<br>
</font><font size="3"><a href="../../Frmpttel.html"><strong>свойства&nbsp;&nbsp; 
методы</strong></a></font></font></h1>

<p><font face="Arial">Возвращает ссылку на <a href="../../Frmpttel.html">текущий 
вид просмотра</a>. Используется 
только в скриптовом разделе
<a href="../../../Defs/Data.html">описания источников данных</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong><em> sView</em><strong> = 
CurrentView</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>CurrentView</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sView</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на текущую папку. Через нее можно 
	получить доступ к свойствам и методам объекта.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Данную функцию можно вызывать не только из скриптовых процедур <a href="../../../Defs/Data.html">
описания источника данных</a>, но и из обработчика системного события <a href="../../../ScriptProcs/FunctionsData.html">
Functions</a>
в описании документа.</font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><strong><font size="3" face="Arial">Пример функции </font><font
face="Arial">CurrentView</font></strong></p>

<p><font face="Arial">В примере вызывается функция CurrentView, через 
переменную xView возвращается ссылка на текущую папку со всеми его свойствами и 
методами. </font></p>

<p><font face="Arial">set xView = <strong>CurrentView</strong><br>
</font></p>
</body>
</html>
