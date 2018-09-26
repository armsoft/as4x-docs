<html>
<head>
<title>Системное событие диалога Validate</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие Validate<br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Functions/Asustpar.html">
Применяется к</a></font></p>

<p class="label"><font face="Arial">Генерируется автоматически 
системой. Данное событие выполняется в транзакционном блоке. Оно служит для 
глобальной проверки введенных значений реквизитов диалога перед выходом.<br>
&nbsp;</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>Validate</strong>(</font><em><font face="Arial">objDialog, 
Cancel, RekvName</font></em><font face="Arial">)<br>
<em>&nbsp;&nbsp;&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial">Синтаксис события <strong>Validate
</strong>состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="161">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%" height="18"><font face="Arial"><b>
	Параметр</b></font></td>
    <td class="label" width="71%" height="18"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><em><font face="Arial">objDialog</font></em></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее переменную, ссылающуюся на экземпляр объекта 
	пользовательского диалога.</font></td>
  </tr>
  <tr>
    <td width="29%" height="33"><em><font face="Arial">Cancel</font></em></td>
    <td width="71%" height="33"><font face="Arial">необязательная 
	логическая переменная, возвращаюущая признак сохранения фокуса для реквизита <i>
    RekvName</i>. При True - фокус устанавливается на реквизите <i>RekvName</i>, 
	а при False - на следующем реквизите.</font></td>
  </tr>
  <tr>
    <td width="29%" height="18"><em><font face="Arial">RekvName</font></em></td>
    <td width="71%" height="18"><font face="Arial">строковая 
	переменная, возвращаюущая наименование реквизита диалога, для которого 
	проверка данных не прошла.</font></td>
  </tr>
  </table>

</body>
</html>
