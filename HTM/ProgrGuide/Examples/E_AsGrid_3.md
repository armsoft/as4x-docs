<html>
<head>
<title>AsGrid</title>
</head>

<body>

<p><strong><font face="Arial" size="3">Пример свойств </font><font
face="Arial">Name, Readonly, RowCount и методов Refresh, RemoveRow</font></strong></p>

<p><font face="Arial">В примере переменная xGrid ссылается на 
грид-таблицу &quot;RESP&quot; в документе.</font></p>

<p><font face="Arial">Set xGrid = doc.<a href="../Functions/ASDOC/Grid.html">Grid</a>(&quot;RESP&quot;)<br>
....<br>
If xGrid.Readonly &lt;&gt; xFix and xGrid.<strong>Name</strong>=&quot;RESP&quot; then<br>
&nbsp;&nbsp;&nbsp; Do while xGrid.<strong>RowCount</strong> &gt; 0<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xGrid.<strong>RemoveRow</strong>(0)<br>
&nbsp;&nbsp;&nbsp; Loop<br>
&nbsp;&nbsp;&nbsp; xGrid.<strong>Readonly</strong> = xFix<br>
&nbsp;&nbsp;&nbsp; xGrid.<strong>Refresh</strong><br>
End if<br>
</font></p>
</body>
</html>
