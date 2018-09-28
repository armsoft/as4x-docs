<html>
<head>
<title>Документ\ClickDropDownEvent</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство ClickDropDownEvent<br>
<br>
</strong></font><font face="Arial"><a href="../../ScriptProcs/ClickDropDown.html">
См. также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает или устанавливает 
признак генерации системных событий <a href="../../ScriptProcs/ClickDropDown.html">
ClickDropDown</a> или <a
href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a>
соответственно для указанного реквизита или грид-таблицы документа.</font></p>

<p class="label"><font face="Arial">Свойство для чтения и записи.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial"><em>object.</em><strong>ClickDropDownEvent</strong> 
(<em>sControlName,
</em>[<em>sColumnName</em>])[=<em>bValue</em>]</font></p>

<p><font face="Arial">Синтаксис свойства <strong>ClickDropDownEvent</strong>
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
	ссылкой на экземпляр объекта типа документ.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sControlName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор реквизита или грид-таблицы документа, для которых 
	соответственно устанавливается разрешение для генерации системного события <a
    href="../../ScriptProcs/ClickDropDown.html">ClickDropDown</a> или <a
    href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sColumnName</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее идентификатор столбца грид-таблицы. Если параметр 
	задан, то значение <em>sControlName </em>интерпретуется как идентификатор 
	грид-таблицы, и свойство будет устанавливать разрешение на генерацию 
	системного события <a href="../../ScriptProcs/ClickDropDownGrid.html">
	ClickDropDownGrid</a>. Если параметр опущен, то начение <em>sControlName </em>
	интерпретуется как идентификатор реквизита документа, и свойство будет 
	устанавливать разрешение на генерацию системного события <a
    href="../../ScriptProcs/ClickDropDown.html">ClickDropDown</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bValue</em></font></td>
    <td width="71%"><font face="Arial">выражение логического типа, 
	определяющее признак генерации системных событий <a href="../../ScriptProcs/ClickDropDown.html">
	ClickDropDown</a> или <a
    href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a>. При 
	значении True, ядром системы генерируется одно из данных событий.</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><font face="Arial">Данное свойство применимо только к 
реквизитам и колонкам грид-таблицы в документе. Причем их внутренний тип должен 
быть <a href="../../Types/Tree().html">Tree()</a>, <a
href="../../Types/FULLTREE().html">FullTree()</a> или <a href="../../Types/Folder().html">
Folder()</a>.
</font></p>
</body>
</html>
