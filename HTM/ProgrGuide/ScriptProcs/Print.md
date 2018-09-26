<html>
<head>
<title>Системное событие Print</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие Print<br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <a href="../Examples/E_AsDocPrint.html">Пример</a>&nbsp; <a
href="../Defs/doc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Происходит при печати документа 
или при предварительном просмотре печатной формы. Она служит для создания 
печатной формы для документа. Для <a href="../Functions/Functions/CreateRepViewer.html">
создания отчетов</a> используется <a href="../Defs/report.html">описание отчетов</a>. 
Не надо смешивать отчет с печатным видом документа.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>Print</strong>()<br>
<em>&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial">или </font></p>

<p><font face="Arial">Sub <strong>Print</strong>(<strong>Optional 
ByVal</strong>
 <em>PrintMode</em>)<br>
<em>&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial"><br>
Синтаксис события <strong>Print</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">PrintMode</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Variant, определяющее режим печати. При отсутствии данного параметра 
	принимается режим печати по умолчанию. Другие режимы печати могут быть 
	заданны из скрипта при вызове метода <a href="../Functions/Functions/InterfaceManagment/PrintPreviewDoc.html">
	PrintPreviewDoc</a>.</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Метод <a
href="../Functions/AsDocPrint/S.html">S</a> может быть вызван из обработчика 
данного события или же события <a
href="PrintWord.html">PrintWord</a>, а метод <a href="../Functions/AsDocPrint/P.html">
P</a>
вызывается только из обработчика процедуры <strong>Print</strong>.</font></p>
</body>
</html>
