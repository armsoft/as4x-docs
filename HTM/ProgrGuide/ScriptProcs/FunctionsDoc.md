<html>
<head>
<title>Системное событие Functions</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие Functions<br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <a href="../Examples/E_Functions.html">Пример</a>&nbsp;
<a href="../Functions/Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Происходит при формировании 
контекстного меню документа. В обработчике данного события регистрируются 
функции, вызываемые из контекстного меню.</font></p>

<p class="label"><font face="Arial">Sub <strong>Functions</strong>(<strong>Optional 
ByVal</strong> <em>iEvPlaceFrom</em>)<br>
<em>&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial">где <em>iEvPlaceFrom</em> может принимать одно 
из значений <a href="../Constants/const_doc_context.html">констант контекста 
события Functions документа</a><small><br>
</small></font></p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Методы <a href="../Functions/ASDOC/RegistrFunction.html">RegistrFunction</a> 
и <a
href="../Functions/ASDOC/RegistrNode.html">RegistrNode</a> должны быть 
использованы только в обработчике события Functions.</font></p>

<p>&nbsp;</p>
</body>
</html>
