<html>
<head>
<title>AsDataDesc\DataMode</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство DataMode<br>
<br>
</font></strong><font face="Arial"><a href="../AsDataDesc.html">См. также</a>&nbsp;
Пример&nbsp; <a href="../AsDataDesc.html">
Применяется к</a></font></p>

<p><font face="Arial">Возвращает или устанавливает источник значений добавляемых колонок.</font></p>

<p><font face="Arial">Свойство для чтения и записи.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.DataMode </strong>[=<em>iMode</em>]&nbsp;</font></p>

<p><font face="Arial">Синтаксис свойства <b>DataMode</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр объекта типа динамическое дерево</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>iMode</em></font></td>
    <td width="71%"><font face="Arial">Численное значение, определяющее источник значений добавляемых колонок. Принимает значения 0 или 1.
        Если iMode=0, то значения для добавляемых колонок берутся из sql запроса свойства <a href="../AsDataDesc/SQL_DDesc.html">SQL</a>, если iMode=0,
        то значения берутся из массива свойства <a href="../AsDataDesc/Columns_DDesc.html">Columns</a>.
        Значение данного параметра может также определяться автоматически, в зависимости от типа параметра vField метода <a href="../AsDataDesc/AddCoLumn_DDesc.html">AddCoLumn</a>.
        </font></td>. 
  </tr>
</TBODY>
</table>
</body>
</html>
