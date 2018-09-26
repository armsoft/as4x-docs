<html>
<head>
<title>When</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события When</strong></font></p>

<p><font face="Arial">Ниже приведено <a href="../Defs/doc.html">
описание документа</a>, где в обработчике события <strong>When</strong>, в 
зависимости от состояния документа, некоторые реквизиты получают атрибут только 
для чтения. </font></p>

<p><font face="Arial">Sub <strong>When</strong>()<br>
&nbsp;&nbsp;&nbsp; doc.<a href="../Functions/ASDOC/Control.html">Сontrol</a>(&quot;CODE&quot;).Format 
= String(#LenNBAcc,&quot;9&quot;)<br>
&nbsp;&nbsp;&nbsp; If doc.<a href="../Functions/ASDOC/State.html">State</a>=0 
Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; doc(&quot;DATOTK&quot;) = <a href="../Functions/Functions/ParameterManagment/Param.html">
Param</a>(&quot;WkDate&quot;)<br>
&nbsp;&nbsp;&nbsp; If Doc(&quot;ULIMIT&quot;)=0 Then Doc(&quot;ULIMIT&quot;)=#MaxLimit<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Else<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If IsNull(doc(&quot;DATZAK&quot;)) 
Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; doc.<a
href="../Functions/ASDOC/ReadOnly.html">ReadOnly</a>(&quot;CODE&quot;)=True<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
doc.ReadOnly(&quot;CODBAL&quot;)=True<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
doc.ReadOnly(&quot;DATOTK&quot;)=True<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If not 
isNull(<a href="../Functions/Functions/AccManagement/LastOpDate.html">LastOpDate</a>(&quot;02&quot;, 
doc.ISN)) Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
doc.ReadOnly(&quot;CODVAL&quot;)=True<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
doc.ReadOnly(&quot;CLICOD&quot;)=True<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End If <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Else<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doc.<a
href="../Functions/ASDOC/LockControls.html">LockControls</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End If<br>
&nbsp;&nbsp;&nbsp; End If<br>
&nbsp;&nbsp; doc.ReadOnly(&quot;NUMVIP&quot;)=True<br>
&nbsp;&nbsp; doc.ReadOnly(&quot;DATVIP&quot;)=True<br>
End Sub </font></p>
</body>
</html>
