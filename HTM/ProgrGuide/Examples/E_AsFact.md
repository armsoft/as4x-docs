<html>
<head>
<title>AsFact</title>
</head>

<body>

<p><strong><font face="Arial" size="3">Пример свойств </font><font
face="Arial">AccCrd, AccDeb, Cur, CurSumma, DbCr, Object, Op, OpDate, 
Spec, Summa</font></strong></p>

<p><font face="Arial">В примере вызывается функция CreateFact, xFact 
ссылается на вновь созданный объект-проводку со всеми его свойствами и методами. 
После присвоения значений соответствующих свойств, проводка запоминается.</font></p>

<p><font face="Arial">Set xFact = <a href="../Functions/Functions/AccManagement/CreateFact.html">
CreateFact</a>(&quot;02&quot;)<br>
xFact.<strong>OpDate</strong> = Doc(&quot;DATEPUT&quot;)<br>
xFact.<strong>Object</strong> = xFOLDER.Key<br>
xFact.<strong>Summa</strong> = 
CurValue(xDOC(&quot;CODVAL&quot;),Doc(&quot;DATEPUT&quot;))*Doc(&quot;DOCSUMMA&quot;)<br>
xFact.<strong>Cur</strong> = xDOC(&quot;CODVAL&quot;)<br>
xFact.<strong>CurSumma</strong> = Doc(&quot;DOCSUMMA&quot;)<br>
xFact.<strong>Op</strong> = &quot;MSC&quot;<br>
xFact.<strong>AccCrd</strong> = xDoc(&quot;Code&quot;)<br>
xFact.<strong>AccDeb</strong> = mDoc(&quot;Code&quot;)<br>
xFact.<strong>DbCr</strong> = &quot;C&quot;<br>
xFact.<strong>Spec</strong> = Doc(&quot;NOMDOK&quot;) &amp; doc.Formatted(&quot;MTCCOUNT&quot;) &amp; 
Doc(&quot;COMENT&quot;) <br>
doc.StoreFact xFact<br>
</font></p>
</body>
</html>
