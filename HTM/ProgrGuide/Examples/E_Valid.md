<html>
<head>
<title>Valid</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события Valid</strong></font></p>

<p><font face="Arial">Ниже приведен пример обработчика события <strong>
Valid</strong> из <a
href="../Defs/doc.html">описания документа</a>, где в зависимости от 
идентификатора реквизита производятся различные проверки введенных значений.<br>
</font></p>

<p><font face="Arial">Sub <strong>Valid</strong>(ByVal Rekv)<br>
&nbsp;&nbsp;&nbsp;&nbsp; Select Case Rekv <br>
&nbsp;&nbsp;&nbsp;&nbsp; Case &quot;CODE&quot; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If len(Trim(Doc(&quot;CODE&quot;)))&lt;6 
Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; err.Raise 
gintUserErrors , &quot;Счет&quot;, _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Длина кода 
лицевого счета меньше 6-и&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Else<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If Doc.<a
href="../Functions/ASDOC/State.html">State</a>=0 Then&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Doc(&quot;CODE&quot;)=GetAccKey(<a href="../Functions/Functions/ParameterManagment/Param.html">Param</a>(&quot;CODBANK&quot;),Doc(&quot;CODE&quot;))<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Doc.Refresh(&quot;CODE&quot;)&nbsp;&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End If&nbsp;&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End If <br>
&nbsp;&nbsp;&nbsp;&nbsp; Case &quot;CLICOD&quot; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If trim(Doc(&quot;NAME&quot;))=&quot;&quot; Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doc(&quot;NAME&quot;)= 
Doc.<a href="../Functions/ASDOC/Control.html">Control</a>(&quot;CLICOD&quot;).Comment<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doc.<a
href="../Functions/ASDOC/Refresh.html">Refresh</a>(&quot;NAME&quot;)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End If <br>
&nbsp;&nbsp;&nbsp;&nbsp; End Select&nbsp;&nbsp;&nbsp;&nbsp; <br>
End Sub<br>
</font></p>
</body>
</html>
