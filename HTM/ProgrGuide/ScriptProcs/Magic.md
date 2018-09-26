<html>
<head>
<title>Системное событие Magic</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Событие Magic<br>
<br>
</strong></font><a href="../scriptstproced.html">См. также</a>&nbsp; <u>Пример</u>&nbsp;
<a href="../Defs/doc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Событие происходит при выборе 
строки меню Magic или же нажатия соответствующей кнопки на панели инструментов.. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>Magic</strong> (<em>Rekv</em>, <em>
Top</em>, <em>Left</em>, [<em>RawValue</em>])&nbsp;&nbsp;<br>
&nbsp;&nbsp; <em>statements</em><br>
End Sub</font></p>

<p><font face="Arial">Синтаксис события <strong>Magic</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="210">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%" height="18"><font face="Arial"><b>
	Параметр</b></font></td>
    <td class="label" width="71%" height="18"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>Rekv</em></font></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее идентификатор реквизита в документе, для которого 
	сгенерировано данное событие.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>Top</em></font></td>
    <td width="71%" height="36"><font face="Arial">выражение типа 
	Single, определяющее расстояние между верхним краем вспомогательного списка 
	и верхним краем формы документа.</font></td>
  </tr>
  <tr>
    <td width="29%" height="18"><font face="Arial"><em>Left</em></font></td>
    <td width="71%" height="18"><font face="Arial">выражение типа 
	Single, определяющее расстояние между левым краем вспомогательного списка и 
	левым краем формы документа.</font></td>
  </tr>
  <tr>
    <td width="29%" height="18"><font face="Arial"><em>RawValue</em></font></td>
    <td width="71%" height="18"><font face="Arial">необязательное 
	строковое выражение, содержащее не записанное в документ значение данного 
	реквизита.</font></td>
  </tr>
  <tr>
    <td width="29%" height="14"><font face="Arial"><em>statements</em></font></td>
    <td width="71%" height="14"><font face="Arial">процедура 
	выполнения при генерации события.</font></td>
  </tr>
</table>
</body>
</html>
