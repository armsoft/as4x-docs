<html>
<head>
<title>Диалоговое окно</title>
</head>

<body>

<p><strong><font size="3" face="Arial">Пример метода </font><font
face="Arial">Show и свойств Caption, Height, Label, Seconds, Text, 
Width</font></strong></p>

<p><font face="Arial">В примере вызывается функция 
CreateCallBackOnTimer, через xCallBackOnTM возвращается ссылка на обьект типа 
агент&nbsp; циклического вызова процедур со всеми его свойствами и методами.</font></p>

<div>
  <font face="Arial">&nbsp;Dim xCallBackOnTM As AsCallBackOnTimer<br>
  &nbsp;&nbsp;&nbsp;<br>
  &nbsp;&nbsp;&nbsp; Set xCallBackOnTM = CreateCallBackOnTimer(&quot;sModName&quot;, &quot;sSubName&quot;)<br>
  &nbsp;&nbsp;&nbsp; xCallBackOnTM.Caption = &quot;Демонстрация работы агента&quot;<br>
  &nbsp;&nbsp;&nbsp; xCallBackOnTM.Label = &quot;Изображение времени&quot; &amp; </font><font face="Arial">
	vbCrLf &amp; &quot;Начало - &quot; &amp; </font><font face="Arial">CStr(time())</font><font face="Arial"><br>
  &nbsp;&nbsp;&nbsp; xCallBackOnTM.Text = &quot;&quot;<br>
  &nbsp;&nbsp;&nbsp; xCallBackOnTM.Seconds = 10<br>
  &nbsp;&nbsp;&nbsp; xCallBackOnTM.Height = 5000<br>
  &nbsp;&nbsp;&nbsp; xCallBackOnTM.Width = 3000<br>
  </font><font face="Arial">&nbsp;&nbsp;&nbsp;<br>
  </font><font face="Arial">&nbsp;&nbsp;&nbsp; xCallBackOnTM.</font><font face="Arial">Show</font>
</div>
<div style="width: 980; height: 57">
  &nbsp;
  <p><font face="Arial">Агент циклически вызывает процедуру sSubName 
	из модуля sModName:<br>
  </font>
</div>
<div>
  <font face="Arial">Private Sub sSubName()<br>
  &nbsp;&nbsp;&nbsp; myAsCallBackOnTimer.Label = &quot;Label &quot; &amp; vbCrLf &amp; CStr(time())<br>
  &nbsp;&nbsp;&nbsp; myAsCallBackOnTimer.Text = myAsCallBackOnTimer.Text &amp; vbCrLf &amp; CStr(time())<br>
  &nbsp;&nbsp;&nbsp; If myAsCallBackOnTimer.Seconds = 5 Then<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; myAsCallBackOnTimer.Seconds = 10<br>
  &nbsp;&nbsp;&nbsp; Else<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; myAsCallBackOnTimer.Seconds = 5<br>
  &nbsp;&nbsp;&nbsp; End If<br>
  &nbsp;&nbsp;&nbsp; myAsCallBackOnTimer.Caption = CStr(myAsCallBackOnTimer.Seconds)<br>
  End Sub</font>
</div>
</body>
</html>
