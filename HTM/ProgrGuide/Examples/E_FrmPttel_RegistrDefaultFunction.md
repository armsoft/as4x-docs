<html>
<head>
<title>RegistrDefaultFunction</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример метода RegistrDefaultFunction</strong></font></p>

<p><font face="Arial"><font size="3">Ниже приводится </font>обработчик системного 
    события Functions из описания источника данных, где использован метод 
    RegistrDefaultFunction, который усатанавливает в контекстное меню функцию AddDoc 
    как функцию по умолчанию. </font></p>

<p><font face="Arial">Sub Functions() <br>
&nbsp;&nbsp; <a href="../Functions/Functions/InterfaceManagment/CurrentView.html">
CurrentView</a>.<em>RegistrFunction</em> &quot;Добавить документ&quot;, &quot;AddDoc&quot;, , , &quot;Add 
    doc&quot;<br />
&nbsp;&nbsp; <a href="../Functions/Functions/InterfaceManagment/CurrentView.html">
CurrentView</a>.<em><strong>RegistrDefaultFunction</strong></em>(&quot;AddDoc&quot;)<br>
End Sub<br>
<br>
    <br>
    </font></p>
</body>
</html>
