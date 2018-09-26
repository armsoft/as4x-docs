<html>
<head>
<title>Системное событие опис. диалога _ButtonClick</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Событие ButtonClick<br>
<br>
</strong></font><a href="../ScriptProcs/DialogEvents.html">См. также</a>&nbsp;
 <a href="../Examples/E_Dialog_ButtonClick.html">Пример</a>&nbsp; <a
href="../ScriptProcs/DialogEvents.html">Применяется к</a></font></p>
<p class="label"><font face="Arial">Генерируется cистемой при нажатии на кнопку <a
href="../Defs/Dialog.html">диалога</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>ButtonClick(</strong><em>objDialog</em><strong>,
    </strong><em>sBtnName, sngBtnTop, sngBtnLeft, Reakcia</em><strong>)<br>
    </strong><em>&nbsp;&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial"><br>
Синтаксис события <strong>ButtonClick</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>objDialog</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее переменную, 
        ссылающуюся на экземпляр объекта пользовательского диалога.</font></td>
  </tr>
    <tr>
    <td width="29%"><em><font face="Arial">sBtnName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее идентификатор
        <span lang="ru">кнопки.</span></font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sngBtnTop</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Single, определяющее расстояние 
        между верхним краем кнопки и верхним краем формы диалога.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sngBtnLeft</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Single, определяющее расстояние 
        между левым краем кнопки и левым краем формы диалога.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>Reakcia</em></font></td>
    <td width="71%"><font face="Arial">числовое значение, принимающее значения 0, 1 или 
        2. При значении 1 сразу 
        вызывается отчет для которого был описан диалог, значение 2 говорит о 
        закрытии формы в событии ButtonClick, а в остальных случаях задается значение 0. По умолчанию принимает значение 0.</font></td>
    </tr>
</table>
    <p>
        &nbsp;</p>
</body>
</html>
