<html>
<head>
<title>Документ\Store</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод Redraw<br>
<br>
</font></strong><font face="Arial">
<a href="../ASDocStructureElement.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../ASDocStructure.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Перерисовывает 
заголовока структурного элемента документа. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.Redraw(<i>vStruEl</i></strong><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>Redraw </strong>состоит 
из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр объекта структура документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><strong><i>vStruEl</i></strong></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее ключ элемента в коллекции структурных элементов документа. 
	Ключом элемента может быть или порядковый номер элемента в коллекции, или 
	идентификатор элемента (идентификатор реквизита, идентификатор грид-таблицы, 
	и т.д.).</font></td>
  </tr>
</table>
<p class="label">&nbsp;</p>
<p class="label"><b><font face="Arial">Примечание</font></b></p>
<p class="label"><font face="Arial">Метод<strong> Redraw</strong> 
обычно вызывается после изменения значение заголовок элемента 
документа.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br>
&nbsp;&nbsp;&nbsp; Doc.Structure(&quot;CASHSCALE&quot;).Caption=&quot;New caption&quot;<br>
&nbsp;&nbsp;&nbsp; Doc.Structure.Redraw &quot;CASHSCALE&quot;</font></p>
<p class="label"><font face="Arial"><br>
&nbsp;</font></p>
</body>
</html>
