<html>
<head>
<title>Update, Value</title>
</head>

<body>

<p><font face="Arial"><strong><font size="3">Пример метода </font>
Update и свойства Value</strong></font></p>

<p><font face="Arial">Приведен пример обновления одной строчки на 
форме прокрутки папок:</font></p>

<p><font face="Arial">Sub CloseAcc()<br>
Set xDOC = <a href="../Functions/Functions/DocumentsCirculation/LoadDoc.html">
LoadDoc</a>(CurrentView.<strong>Value</strong>(&quot;fISN&quot;))<br>
xDoc(&quot;DATZAK&quot;) = xDialog(&quot;DateClose&quot;)<br>
xDoc.<a href="../Functions/ASDOC/Store.html">Store</a><br>
<a href="../Functions/Functions/InterfaceManagment/CurrentView.html">CurrentView</a>.<strong>Update</strong>(CurrentView.<strong>Value</strong>(&quot;fISN&quot;))<br>
End Sub</font></p>
</body>
</html>
