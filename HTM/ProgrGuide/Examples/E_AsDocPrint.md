﻿<html>
<head>
<title>AsDocPrint</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события Print и методов 
P, S, Break</strong></font></p>

<p><font size="3" face="Arial">В обработчике системного события <a href="../ScriptProcs/Print.html">
Print</a>, описана печатная форма, где использованы методы <strong>P</strong>,
<strong>S</strong> и <strong>Break</strong> для определения печатной строки.</font></p>

<p><font face="Arial">Sub Print()<br>
</font><font face="Courier"><small>&nbsp;&nbsp; lngBayer = <a href="../Functions/Functions/DocumentsCirculation/Getisn.html">
GetISN</a>(&quot;ACC&quot;,Doc(&quot;ACCCR&quot;))<br>
&nbsp;&nbsp; DocP.<strong>S</strong> 10, doc.<a href="../Functions/ASDOC/ISN.html">ISN</a><br>
&nbsp;&nbsp; DocP.<strong>S</strong> 14, Param(&quot;BANKNAME&quot;)<br>
&nbsp;&nbsp; DocP.<strong>S</strong> 12, <a href="../Functions/Functions/DocumentsCirculation/LoadDoc.html">
LoadDoc</a>(lngBayer)(&quot;Name&quot;), 32 <br>
&nbsp;&nbsp; DocP.<strong>S</strong> 15, doc.<a href="../Functions/ASDOC/Formatted.html">Formatted</a>(&quot;SUMMA&quot;)
<br>
&nbsp;&nbsp; DocP.<strong>S</strong> 16, doc(&quot;KASSIMV&quot;) <br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot; &quot;<br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
ёр²Ш²рОФЖ ºИшЖ ърёºр N ^DOCNUM [^10 ]&quot;<br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot; ^14 &quot;<br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot; ²Щл³ГЗнª ^DATE &quot;<br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot; кп³убХª&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
ё»µ»п&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
¶бхЩ³с&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ЬЗЯ&nbsp; 
&quot;<br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot; ^RECEIVER&nbsp; ^ACCDB&nbsp; ^15&nbsp; 
^16&nbsp; &quot;<br>
&nbsp;&nbsp; DocP.<strong>P</strong> &quot; ^12&nbsp; ^ACCCR&nbsp;&nbsp;&nbsp; &quot;</small><br>
<small>&nbsp;&nbsp; DocP.<strong>Break</strong><br>
</small></font><font face="Arial">End Sub</font></p>
</body>
</html>