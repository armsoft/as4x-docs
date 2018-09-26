<html>
<head>
<title>Системное событие документа ExternalConnection </title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие ExternalConnection<br>
<br>
</font></strong><font face="Arial">
См. также&nbsp; <u><a href="#Example">Пример</a></u>&nbsp; <a href="../Functions/Asdata.html">
Применяется к</a></font></p>

<p class="label"><font face="Arial">Служит для передачи ядру RDO 
соединения, отличного от основного. Применяется когда источник данных 
заполняется не из основной базы данных.</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Function </font><font face="Arial"><b>
ExternalConnection</b> As <i>Object</i><br>
<br>
End Function </font></p>

<p class="label"><font face="Arial"><b><a name="Example"></a>Пример</b></font></p>
<p><font face="Arial">Public Function <b>ExternalConnection</b> As 
Object<br>
&nbsp;&nbsp; Set ExternalConnection = OLAPProvider.GetOLAPConnection<br>
End Function</font></p>

</body>
</html>
