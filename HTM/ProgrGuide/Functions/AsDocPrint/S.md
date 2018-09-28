<html>
<head>
<title>Шаблон печати\S</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод S<br>
<br>
</font></strong><font face="Arial"><a href="../AsDocPrint.html">См. 
также</a>&nbsp;
<a href="../../Examples/E_AsDocPrint.html">Пример</a>&nbsp; <a
href="../AsDocPrint.html">Применяется к</a></font></p>

<p><font face="Arial">Определяет значение печатного параметра для 
дальнейших макроподстановок в печатную форму.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.S </strong><em>strCode, 
Value, Length</em></font></p>

<p><font face="Arial">Синтаксис метода <strong>S</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	ссылающееся на <a href="../Functions/InterfaceManagment/DocP.html">объект 
	печатной формы.</a></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">strCode</font></em></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее код параметра</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">Value</font></em></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее значение параметра</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">Length</font></em></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее длину значения параметра. В случае необходимости 
	справа от значения добавляются завершающие пробелы.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Данный метод вызывается из <a href="../../ScriptProcs/Print.html">
обработчика системного события Print</a>.</font></p>
</body>
</html>
