﻿<html>
<head>
<title>Dialog_Activate</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события Dialog_Activate</strong></font></p>

<p><font face="Arial">Ниже приведен пример обработчика события <strong>
Dialog_Activate</strong> в <a
href="../Defs/Dialog.html">описании диалога</a>, где происходит инициализация 
некоторых свойств элементов управления.</font></p>

<p><font face="Arial">Public Sub <strong>Dialog_Activate()</strong><br>
&nbsp;&nbsp;&nbsp; Dialog(&quot;Number2&quot;)=102<br>
&nbsp;&nbsp;&nbsp; Dialog.<a href="../Functions/AsDialogEx/ReadOnly.html">ReadOnly</a>(&quot;DataVerj&quot;) 
= True <br>
&nbsp;&nbsp;&nbsp; Dialog.<a href="../Functions/AsDialogEx/Control.html">Control</a>(&quot;Number1&quot;).ReadOnly 
= True<br>
&nbsp;&nbsp;&nbsp; hBitmap=CreateBitmap(100, 100, 2, 2)<br>
End Sub<br>
</font></p>

</body>
</html>