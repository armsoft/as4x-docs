<html>
<head>
<title>GridCellValid</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события GridCellValid</strong></font></p>

<p><font face="Arial">Ниже приведен пример обработчика события <strong>
GridCellValid</strong> из <a
href="../Defs/doc.html">описания документа</a>.<br>
</font></p>

<p><font face="Arial">Sub <strong>GridCellValid</strong>(ByVal 
GridObj)<br>
&nbsp;&nbsp;&nbsp; for i=0 to GridObj.<a href="../Functions/ASDOC/AsGrid/RowCount.html">RowCount</a>-1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if i &lt;&gt; GridObj.<a
href="../Functions/ASDOC/AsGrid/Row.html">Row</a> and GridObj(i,GridObj.<a
href="../Functions/ASDOC/AsGrid/Col.html">Col</a>)=_<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GridObj.<a
href="../Functions/ASDOC/AsGrid/ColumnValue.html">ColumnValue</a>(GridObj.Col) 
then _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Err.Raise 
gintUserErrors, #Err, ErrSoob<br>
&nbsp;&nbsp;&nbsp; next<br>
End Sub<br>
</font></p>
</body>
</html>
