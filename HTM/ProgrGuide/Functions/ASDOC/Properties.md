<html>
<head>
<title>Документ\Properties</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Свойство Properties<br>
<br>
</strong></font><a href="../Asdoc.html">См. также</a>&nbsp; <u>Пример</u>&nbsp;
<a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает ссылку на объект типа Dictionary. Данное свойство применяется для хранения некоторых 
значений с последующей их обработкой. Доступ и обновление элементов коллекции 
происходит с помощью методов и 
свойств объекта Dictionary. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>Properties</strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>Properties</strong>
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
	ссылкой на экземпляр документа</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><br>
<b>Примечание<br>
<br>
</b><a name="Dictionary">Объект Dictionary</a> имеет следующие свойства: </font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="15%"><font face="Arial"><b>Свойство </b></font></td>
    <td class="label" width="25%"><strong><font face="Arial">Синтаксис</font></strong></td>
    <td class="label" width="60%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">CompareMode</font></td>
    <td width="25%"><font face="Arial">object<b>.CompareMode</b>[ = 
	compare]</font></td>
    <td width="60%"><font face="Arial">возвращает/устанавливает режим 
	сравнения строковых ключей объекта Dictionary. При значении 0 производится 
	бинарное сравнение, а при 1 - текстовое сравнение.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Count</font></td>
    <td width="25%"><font face="Arial">object<b>.Count</b> </font></td>
    <td width="60%"><font face="Arial">возвращает количество элементов 
	в коллекции объекта Dictionary.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Item</font></td>
    <td width="25%"><font face="Arial">object.<b>Item(</b>key<b>)</b> 
	[= newitem] </font></td>
    <td width="60%"><font face="Arial">возвращает/устанавливает 
	значение элемента коллекции с указанным ключом.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Key</font></td>
    <td width="25%"><font face="Arial">object<b>.Key(</b>key<b>)</b> = 
	newkey</font></td>
    <td width="60%"><font face="Arial">устанавливает значение ключа 
	для элемента коллекции.</font></td>
  </tr>
</table>

<p><font face="Arial">Объект Dictionary имеет следующие методы:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="15%"><font face="Arial"><strong>Метод</strong></font></td>
    <td class="label" width="25%"><strong><font face="Arial">Синтаксис</font></strong></td>
    <td class="label" width="60%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Add</font></td>
    <td width="25%"><font face="Arial"><i>object</i><b>.Add</b> <i>key</i>, <i>
	item</i></font></td>
    <td width="60%"><font face="Arial">добавляет новый элемент с 
	указанным ключом и значением в коллекцию.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Exists</font></td>
    <td width="25%"><font face="Arial"><i>object</i><b>.Exists(</b><i>key</i><b>)</b>
    </font></td>
    <td width="60%"><font face="Arial">Возвращает <strong>True</strong>, 
	если указанный ключ существует в коллекции объекта Dictionary, <strong>False</strong> 
	в противном случае.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Items</font></td>
    <td width="25%"><font face="Arial"><i>object</i><b>.Items</b> </font></td>
    <td width="60%"><font face="Arial">Возвращает массив, содержащий 
	все элементы коллекции объекта Dictionary.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Keys</font></td>
    <td width="25%"><font face="Arial"><i>object</i><b>.Keys</b> </font></td>
    <td width="60%"><font face="Arial">Возвращает массив, содержащий 
	все ключи коллекции объекта Dictionary.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">Remove</font></td>
    <td width="25%"><font face="Arial"><i>object</i><b>.Remove(</b><i>key</i><b>)</b></font></td>
    <td width="60%"><font face="Arial">Удаляет из коллекции элемент с 
	указанным ключевым значением.</font></td>
  </tr>
  <tr>
    <td width="15%"><font face="Arial">RemoveAll</font></td>
    <td width="25%"><font face="Arial"><i>object</i><b>.RemoveAll</b> </font></td>
    <td width="60%"><font face="Arial">Удаляет из коллекции все 
	элементы</font></td>
  </tr>
</table>
</body>
</html>
