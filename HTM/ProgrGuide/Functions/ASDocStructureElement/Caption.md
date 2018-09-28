<html>
<head>
<title>Элемент структуры документа\Caption</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство Caption<br>
<br>
</font></strong><font face="Arial">
<a href="../ASDocStructure/Redraw.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../ASDocStructureElement.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает заголовок-наименование 
документа из его описания.</font></p>

<p class="label"><font face="Arial">Возвращает или устанавливает 
заголовок-наименование документа.</font></p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial"><em>object</em><strong>.Caption</strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>Caption</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр объекта элемент структуры документа.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Тип данных</b></font></p>

<p class="label"><font face="Arial">Строка</font></p>
<p class="label"><b><font face="Arial">Примечание</font></b></p>
<p class="label"><font face="Arial">После того как изменено значение 
заголовок-наименование документа, для его перерисовки необходимо вызвать метод
<a href="../ASDocStructure/Redraw.html">Redraw</a>.<br>
&nbsp;&nbsp;&nbsp; Doc.Structure(&quot;CASHSCALE&quot;).Caption=&quot;New caption&quot;<br>
&nbsp;&nbsp;&nbsp; Doc.Structure.Redraw &quot;CASHSCALE&quot;</font></p>
</body>
</html>
