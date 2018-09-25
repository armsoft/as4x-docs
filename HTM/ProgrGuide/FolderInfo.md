<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Language" content="ru" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Дескриптор папки документа&nbsp;&nbsp; Дес</title>
<style type="text/css">
.style1 {
	font-size: large;
}
.style3 {
	font-weight: bold;
	border: 1px solid #C5C5C5;
}
.style4 {
	border: 1px solid #C5C5C5;
}
.style5 {
	border-color: #C5C5C5;
	border-width: 0;
}
.style6 {
	font-weight: bold;
	border: 0 solid #C5C5C5;
}
</style>
</head>

<body>

<font face="Arial"><span lang="ru" class="style1"><a name="FolderInfo"><strong>
Дескриптор папки документа </strong></a></span></font>
<span lang="ru" class="style1"><br />
<br />
Дескриптор папки документа содержит 
описание того</span><span lang="en-us"><span class="style1">,</span></span><span lang="ru" class="style1"> в каком сотоянии и в какой папке находится каждый документ. Описание папок документа 
используется системой для правильного оформления истории документа.</span>
<font face="Arial"><b>&nbsp;<br />
<br />
Синтаксис<br />
<br />
</b><strong>FolderInfo</strong> {<strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; State </strong>=<em> nState</em>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Caption</strong> =<em> sFolderCaption</em>; <br>
&nbsp;&nbsp;<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ECaption</strong>
=<em> sEFolderCaption</em>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>
Description </b>=<b> </b><em>sStateDesription;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </em>};
<br />
<br />
</font>

<table cellPadding="5" cols="2" frame="below" rules="rows" class="style5">
<TBODY>
  <tr vAlign="top">
    <td class="style6" style="width: 2%">&nbsp;</td>
    <td class="style3" width="29%"><font face="Arial">Параметр</font></td>
    <td class="style4" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="style4" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style4"><em><font face="Arial">nState</font></em></td>
    <td width="71%" class="style4"><font face="Arial">численное выражение,
    определяющее состояние документа</font></td>
  </tr>
<tr>
    <td class="style4" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style4"><em><font face="Arial">sFolderCaption</font></em></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение,
    определяющее название папки в которой находится документ в состоянии </font><em>
	<font face="Arial">nState</font></em></td>
  </tr>
<tr>
    <td class="style4" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style4"><em><font face="Arial">sЕFolderCaption</font></em></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение,
    определяющее название папки на иностранном
    языке в которой находится документ в состоянии </font><em>
	<font face="Arial">nState</font></em></td>
  </tr>
  <tr>
    <td class="style4" style="width: 2%">
	<img src="../../IMAGES/pubfield.gif" width="16" height="16" /></td>
    <td width="29%" class="style4"><em><font face="Arial">sStateDesription</font></em></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение,
    описывающее в состоянии </font><em><font face="Arial">nState</font></em></td>
  </tr>
</TBODY>
</table>

</body>

</html>
