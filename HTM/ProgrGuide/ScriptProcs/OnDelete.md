<html>
<head>
<title>Системное событие OnDelete</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Событие OnDelete<br>
<br>
</strong></font><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Defs/Accounting.html">Применяется 
к</a></font></p>

<p class="label"><font face="Arial">Генерируется при удалении проводок 
методом <a href="../Functions/ASDOC/HiDelete.html">HiDelete</a>
или при удалении документа основания проводок функцией <a href="../Functions/Functions/DocumentsCirculation/DeleteDoc.html">
DeleteDoc</a>. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>OnDelete</strong>(<em>xFact</em>)<br>
<em>&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial">Синтаксис события <strong>OnDelete</strong>
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
