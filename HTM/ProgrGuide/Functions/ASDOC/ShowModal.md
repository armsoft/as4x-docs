<html>
<head>
<title>Документ\Show</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Метод ShowModal<br>
<br>
</font></strong><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Показывает окно документа в 
    режиме Modal.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.<font size="4">ShowModal</font></strong>([<em>bToStoreDoc</em>]<em>,
</em>[bCloseOnRollback])</font></p>

<p><font face="Arial">Синтаксис метода <font size="4"><strong>ShowModal</strong></font>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%">С<font face="Arial">троковое выражение, являющееся 
	ссылкой на экземпляр документа</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>bToStoreDoc</em></font></td>
    <td width="71%">Н<font face="Arial">еобязательное логическое 
	выражение, определяющее сохранение документа при нажатии кнопки &quot;Выполнить&quot;. Если 
        после нажатия кнопки &quot;Выполнить&quot; значение данного выражения false, то документ не 
        сораняется, но введенные значения документа остаются.&nbsp; По 
	умолчанию принимает значение true.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">bCloseOnRollback</font></td>
    <td width="71%">Н<font face="Arial">еобязательное логическое выражение, принимающее 
        значения True или False.&nbsp; Данный параметр срабатывает только тогда, когда 
        функция <em>ShowModal</em> 
        вызывается внутри транзакции. Если при вызове данной функции внутри транзакции, после 
        нажатия кнопки &quot;Выполнить&quot; происходит откат транзакции, то при значении false документ не 
        закрывается, в противном случае закрывается. По умолчанию принимает 
        значение false.</font></td>
  </tr>
  </table>

<p class="label"><font face="Arial">Возвращает значение true, если после 
    нажатия кнопки &quot;Выполнить&quot; работа закончилась благополучно, в противном случае возвращает 
    значение false.</font></p>

<p class="label"><font face="Arial"><b>Тип данных</b></font></p>

<p style="font-family: Arial">&nbsp;Логическое</p>

<p><font face="Arial"><b><br>
</b></font></p>
</body>
</html>
