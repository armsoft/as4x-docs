﻿<html>
<head>
<title>Диалоговое окно</title>
</head>

<body>

<p><strong><font size="3" face="Arial">Пример методов </font><font
face="Arial">AddControl, AddDublCntr, AddLine, AddMemoControl, Show и свойств 
BoolValue, Cancel, Caption, LeftDouble, Value</font></strong></p>

<p><font face="Arial">В примере вызывается функция CreateDialog, через 
xDialog возвращается ссылка на обьект типа диалог со всеми его свойствами и 
методами. Далее добавляется реквизит BegDate, а рядом с ним вторичный реквизит 
EndDate.</font></p>

<p><font face="Arial">Set xDialog = <a href="../Functions/Functions/InterfaceManagment/CreateDialog.html">
CreateDialog</a><br>
xDialog.<strong>Caption</strong> = &quot;Укажите дату&quot;<br>
Call xDialog.<strong>AddControl</strong>(&quot;BegDate&quot;, &quot;Начальная дата&quot;, &quot;Date&quot;)<br>
Call xDialog.<strong>AddDublCntr</strong>(&quot;EndDate&quot;, &quot;BegDate&quot;)<br>
Call xDialog.<strong>AddLine</strong><br>
Call xDialog.<strong>AddControl</strong>(&quot;EndDate&quot;, &quot;Конечная дата&quot;, &quot;Date&quot;)<br />
Call xDialog.<strong>AddMemoControl</strong>(&quot;Note&quot;, &quot;Примечание&quot;, 5000, 2500, &quot;Note&quot;, , &quot;R&quot;)<br>
xDialog.<strong>LeftDouble</strong>=0<br>
xDialog.<strong>Show</strong><br>
dBegDate = xDialog(&quot;BegDate&quot;)<br>
dEndDate = xDialog.<strong>Value</strong>(&quot;EndDate&quot;)<br>
IsChange=<strong>BoolValue</strong>(&quot;EndDate&quot;) <br>
if xDialog.<strong>Cancel</strong> then<br>
&nbsp;&nbsp; exit sub<br>
end if&nbsp;&nbsp;&nbsp; <br>
</font></p>
</body>
</html>