﻿<html>
<head>
<title>Системное событие DisplayFact</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Событие DisplayFact<br>
<br>
</strong></font><font face="Arial"><a href="DisplayRem.html">См. также</a>&nbsp;
<a href="../Examples/E_DisplayFact.html">Пример</a>&nbsp; <a
href="../Defs/Accounting.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Происходит перед сохранением 
проводок, выводя на экран окно предварительного показа проводок. Данное событие 
выводит проводки на подтверждение. По прошествии 15 секунд окно подтверждения 
проводки автоматически закрывается с условием &quot;Отмена&quot;, а проводки не 
регистрируются. Событие генерируется при значении функции <a href="../Functions/Functions/AccManagement/ShowTrans.html">
ShowTrans</a> = True или при вызове метода <a href="../Functions/ASDOC/CheckAndStore.html">
CheckAndStore</a>. При импорте проводок данное событие не генерируется. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Function <strong>DisplayFact</strong>(<em>xFact</em>)<br>
<em>&nbsp;&nbsp;&nbsp;&nbsp; statements</em><br>
End Function</font></p>

<p><font face="Arial">Синтаксис события <strong>DisplayFact</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">xFact</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее ссылку на объект типа проводки. </font></td>
  </tr>
</table>
</body>
</html>