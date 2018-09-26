<html>
<head>
<title>Validate</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события Validate</strong></font></p>

<p><font face="Arial">Ниже приведен пример обработчика события <strong>
Validate</strong> в <a
href="../Defs/doc.html">описании документа</a>, где проводится проверка введенных 
значений реквизитов.<br>
</font></p>

<p><font face="Arial">Sub <strong>Validate()</strong><br>
If len(Trim(Doc(&quot;CODE&quot;))) &lt; 6 Then<br>
&nbsp;&nbsp;&nbsp;&nbsp; err.Raise gintUserErrors , &quot;Счет&quot;, _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Длина кода лицевого счета меньше 
6-и&quot;<br>
End If <br>
If Doc(&quot;LLIMIT&quot;) &gt; Doc(&quot;ULIMIT&quot;) Then<br>
&nbsp;&nbsp;&nbsp;&nbsp; err.Raise gintUserErrors , &quot;Пределы&quot;, _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Нижний предел счета больше верхнего 
предела&quot;<br>
End If&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>
End Sub<br>
</font></p>
</body>
</html>
