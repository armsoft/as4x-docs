<html>
<head>
<title>Грид-таблица</title>
<style type="text/css">
.style5 {
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
	font-weight: bold;
	border: 1px solid #C5C5C5;
}
.style17 {
	font-weight: bold;
	border: 0 solid #C5C5C5;
}
    .style18
    {
        border: 0 solid #C5C5C5;
        font-family: Arial;
    }
</style>
</head>

<body style="background-color: #FFFFFF">































































<span lang="ru" class="style5"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span lang="en-us">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>&nbsp;Описание грид-таблицы<br />
</strong></span><font face="Arial"><a name="Grid">Грид-таблица</a> состо<span lang="ru">ит</span> из колонок различных типов. В грид<span lang="ru">-</span>таблице могут находиться как самостоятельные
    колонки, так и связанные с другими. Значение
    связанной колонки заполняется автоматически при
    выборе значения в родительской колонке. Тип
    родительской колонки может быть <a
    href="../Types/Folder().html">Folder</a>, <a href="../Types/Tree().html">Tree</a> или 
<a
    href="../Types/FULLTREE().html">FullTree</a>. Значение в связанной
    колонке только для чтения.</font>
<font face="Arial"><strong><br />
<br />
Синтаксис</strong></font>
<font face="Arial">
<strong><br />
<br />
Grid</strong> { <strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Name </strong>=<em> sGridName</em>;<strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Caption </strong>=<em> sGridCaption</em>;<br />
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ECaption </strong>=<em> sGridECaption</em>; 
    &nbsp;<strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Width </strong>
=<em> nGridWidth</em>;<br />
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Height </strong>=<em> nGridHeight</em>;
    <strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Atributs </strong>=<em> sGridAtr</em>
    <span lang="ru">;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Headlines</strong> = nHeadLines; <strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Allowsort</strong> = nAllowSort;<strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
StrictCheckKey</strong> = sStrictCheckKey;<br />
<span lang="hy"><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<strong>CaptionVisible </strong>&nbsp;= bCaptionVisible;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<strong>ColumnFooters </strong>&nbsp;= bColumnsFooters;</em></span><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="gridcolumn.html"><em>{</em><span lang="ru"><em>Колонки грид-таблицы</em></span><em>};</em></a>.<br />
<br />
</font>


</div>


<span lang="en-us">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
};<br />
<br />
</span>


<table cellPadding="5" cols="2" frame="below" rules="rows" class="style15">
  <tr>
    <td class="style17" style="width: 2%">&nbsp;</td>
    <td class="style16" width="29%"><font face="Arial">Параметр</font></td>
    <td class="style14" style="width: 71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial" color="#000000">
	sGridName</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее идентификатор грид-таблицы</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sGridCaption</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее заголовок грид-таблицы</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sGridECaption</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее заголовок грид-таблицы на иностранном языке</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">nGridWidth</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">численное 
	выражение, определяющее ширину грид-таблицы в пикселях</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">nGridHeight</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">численное 
	выражение, определяющее высоту грид-таблицы в пикселях</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><em><font face="Arial">sGridAtr</font></em></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее атрибуты грид-таблицы. Их может быть сразу несколько. Они принимают значения:
	<br />
	<strong>- T </strong>грид-таблица определяется как временная, т.е. ее данные не сохраняются в базе данных.
	<br />
	<strong>- S </strong>грид-таблица определяется как сохраняющаяся в 
	специальных таблицах. Для него собития <a href="ScriptProcs/LoadGrid.html">LoadGrid</a>, 
	<a href="ScriptProcs/StoreGrid.html">StoreGrid</a> срабатывают и при 
	удалении.&nbsp; <br />
	По умолчанию, когда определение данного свойства опущено, данные грид-таблицы 
	сохраняются в базе данных.</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><font face="Arial">nHeadLines</font></td>
    <td style="width: 71%" class="style14"><font face="Arial">численное 
	выражение, определяющее количество заголовков в грид-таблице.</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><font face="Arial">nAllowSort</font></td>
    <td style="width: 71%" class="style14"><font face="Arial">численное 
	выражение,принимающее значение 0 или 1 и определяющее признак сортировки 
	строчек грид-таблицы.</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14"><font face="Arial">sStrictCheckKey&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font></td>
    <td style="width: 71%" class="style14"><font face="Arial">строковое 
	выражение, определяющее признак строгой проверки KEY банка</font></td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14">
        <span lang="hy">
        <font face="Arial">
        <em>nCaptionVisible</em></font></span></td>
    <td style="width: 71%" class="style18">численное выражение отвечающее за видимость 
        заголовка колонки. 0 - не видим 1 - видим (по умолчанию) </td>
  </tr>
  <tr>
    <td class="style14" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style14">
        <span lang="hy">
        <font face="Arial">
        <em>nColumnsFooters</em></font></span></td>
    <td style="width: 71%" class="style18">численное выражение отвечающее за видимость 
        подзаголовка колонки. 0 - не видим (по умолчанию)&nbsp; 1 - видим</td>
  </tr>
</table>

</body>

</html>
