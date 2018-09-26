<html>
<head>
<title>CreateDialog</title>
</head>

<body>

<h1><font size="4" face="Arial">Функция CreateDialog<br>
</font><a href="../../Asustpar.html"><font face="Arial" size="3"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Создает новое диалоговое окно. Оно служит для 
ввода пользователем дополнительных параметров при вызове отчетов или видов 
просмотра. Возвращает пустой экземпляр диалогового окна для дальнейшего 
заполнения элементами управления и показа (Show) из скрипта.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sDialogName</em><strong> 
= CreateDialog</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>Create</strong><b>Dialog</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">sDialogName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта пользовательского 
	диалога.</font></td>
  </tr>
</table>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><strong><font face="Arial" size="3">Пример функции </font><font
face="Arial">Create</font><font face="Arial" size="3">Dialog</font></strong></p>

<p><font face="Arial">В примере вызывается функция CreateDialog, через 
xDialog возвращается ссылка на обьект типа диалог со всеми его свойствами и 
методами. </font></p>

<p><font face="Arial"><br>
Set xDialog = <strong>CreateDialog</strong><br>
xDialog.Caption = &quot;Укажите дату&quot;<br>
Call xDialog.AddControl(&quot;BegDate&quot;, &quot;Начальная дата&quot;, &quot;Date&quot;)<br>
Call xDialog.AddControl(&quot;EndDate&quot;, &quot;Конечная дата&quot;, &quot;Date&quot;)<br>
xDialog.Show<br>
</font></p>
</body>
</html>
