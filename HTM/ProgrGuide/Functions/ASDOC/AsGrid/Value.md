<html>
<head>
<title>Документ\Грид-таблица\Value</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство Value<br>
<br>
</font></strong><font face="Arial"><a href="../AsGrid.html">См. также</a>&nbsp;
<a href="../../../Examples/E_AsGrid_AddRow_Value.html">Пример</a>&nbsp; <a
href="../AsGrid.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает или устанавливает 
значение ячейки в грид таблице документа. Оно является свойством по умолчанию, 
что означает возможность опускания ключевого слова Value при его использовании.</font></p>

<p class="label"><font face="Arial">Свойство для чтения и записи. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>Value(</strong><em>RowIndex, 
ColName</em><strong>) = </strong>[<em>sValue</em>]</font></p>

<p><font face="Arial">Синтаксис свойства <strong>Value</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71.%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71.%"><font face="Arial">строковое выражение, 
	являющееся ссылкой на грид-таблицу в документе</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>RowIndex</em></font></td>
    <td width="71.%"><font face="Arial">выражение типа Variant, 
	определяющее номер строки в грид-таблице. Причем первая строчка имеет индекс 
	0.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ColName</em></font></td>
    <td width="71.%"><font face="Arial">выражение типа Variant, 
	определяющее номер или идентификатор колонки в грид-таблице. Причем первая 
	колонка имеет индекс 0.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sValue</em></font></td>
    <td width="71.%"><font face="Arial">выражение типа Variant, 
	определяющее подставляемое значение в грид-таблицу.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Использование обращений типа doc.Grid(&quot;TRACTS&quot;).<strong>Value</strong>(Rowind,&quot;SUMMA&quot;) 
и doc.Grid(&quot;TRACTS&quot;)(Rowind,&quot;SUMMA&quot;) вполне эквивалентны, т.к. свойство является 
свойством по умолчанию.</font></p>
</body>
</html>
