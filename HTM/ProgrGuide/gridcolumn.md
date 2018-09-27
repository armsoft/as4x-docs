﻿<html>
<head>
<title>Описание колонки грид-таблицы</title>
<style type="text/css">
.style1 {
	font-size: x-large;
}
.style14 {
	border: 1px solid #C5C5C5;
}
.style15 {
	border-color: #808080;
	border-width: 0;
}
.style16 {
	border: 0 solid #C5C5C5;
}
</style>
</head>

<body>

<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span class="style1">&nbsp;&nbsp;&nbsp;&nbsp; Описание колонки грид-таблицы</span></strong>&nbsp;<br />
<br />
<br />
<font face="Arial"><strong>Синтаксис</strong></font>
<br />
<br />
<font face="Arial">
<strong><span lang="hy">Column </span> </strong>
</font>{ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span lang="hy">&nbsp;&nbsp;&nbsp; </span>&nbsp;<font face="Arial"><strong>Name<span lang="hy">
</span> </strong>
</font>=
<font face="Arial">
<em> s<span lang="hy">Col</span>Name</em></font>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<font face="Arial">
<strong><span lang="hy">&nbsp;&nbsp;&nbsp; </span>Caption </strong>
</font>=
<font face="Arial">
<em> s<span lang="hy">Col</span>Caption</em></font>; <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="Arial"><strong><span lang="hy">&nbsp;&nbsp;&nbsp; E</span>Caption </strong>
</font>=
<font face="Arial">
<em> s<span lang="hy">ColE</span>Caption</em></font>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font face="Arial">
<strong><span lang="hy">&nbsp;&nbsp;&nbsp; Type</span> </strong>
</font>=
<font face="Arial">
<em> s<span lang="hy">ColType</span></em></font>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<font face="Arial">
<strong><span lang="hy">&nbsp;&nbsp;&nbsp; Atributs</span> </strong>
</font>= <font face="Arial">
<em> <span lang="hy">sRekvAtr</span></em></font>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<font face="Arial">
<strong><span lang="hy">&nbsp;&nbsp;&nbsp; Width </span> </strong>
</font>= <font face="Arial">
<em> <span lang="hy">nColWidth</span></em></font>;<br />
<span lang="hy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<font face="Arial">
<strong>ParentCol </strong>&nbsp;<em>= sSourceColName</em><strong>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Field </strong><em>= sFieldType</em><strong>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Start </strong><em>= nStartPosition; </em>
</font></span><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span lang="hy">&nbsp;&nbsp; </span>};<br />
<br />


<table cellPadding="5" cols="2" frame="below" rules="rows" class="style15">
  <tr>
    <td class="style16" style="width: 2%">
	&nbsp;</td>
    <td width="29%" class="style14"><font face="Arial"><strong>Параметр</strong></font></td>
    <td style="width: 71%" class="style14"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sColName</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее идентификатор колонки в грид-таблице, длина которого 
	не&nbsp; превышает 32 символов.</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sColCaption</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее заголовок колонки в грид-таблице</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sColECaption</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее заголовок колонки в грид-таблице на иностранном 
	языке</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sColType</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее <a href="types.html">внутренний тип</a>
    значений колонки</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sRekvAtr</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее атрибуты колонки. Их может быть сразу несколько. Они 
	принимают значения:
    <strong>R</strong> (определяет обязательность заполнения данной колонки),
    <strong>H</strong> (определяет невидимость данной колонки. Описания колонок 
	с атрибутом H должны быть завершающими),
    <b>V </b>(отключает проверку колонки при сохранении документа).<strong>
	N</strong> (значение колонки в новой строке заполняется значением колонки 
	последней строки).</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">nColWidth</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">численное 
	выражение, определяющее ширину колонки</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sSourceColName</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее идентификатор колонки источника, для которого в 
	связанной колонке приводятся значения.</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sFieldType</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее поле элемента папки или дерева, чье значение 
	подстанавливается в связанную колонку. Если колонка источник типа 
	<a href="Types/Folder().html">Folder</a>, то в связанную колонку могут подстанавливаться следующие поля 
	элемента папки: DocType, Com, Spec, ECom, ISN. А если колонка источник типа
	<a href="Types/Tree().html">Tree</a>
    или <a href="Types/FULLTREE().html">FullTree</a>, то в связанную колонку 
	могут подстанавливаться следующие поля элемента дерева: Com, Path, Parent, 
	ECom, ISN. </font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">nStartPosition</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">численное 
	выражение, определяющее стартовую позицию, &nbsp; начиная с которой возвращается 
	значение в связанную колонку.</font></td>
  </tr>
</table>

</body>

</html>