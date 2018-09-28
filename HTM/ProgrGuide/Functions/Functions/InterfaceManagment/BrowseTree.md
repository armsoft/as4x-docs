<html>
<head>
<title>BrowseTree</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод BrowseTree</font></strong></p>

<p class="label"><font face="Arial">Вызывает форму прокрутки деревьев 
на экран.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>BrowseTree</strong>(<em>TreeIdOrObj</em>, 
[<em>bAllowEdit</em>], [<em>bAllowView</em>], [<em>bAllowDelete</em>], [<em>bAllowAddNode</em>], 
[<em>bAllowExport</em>])</font></p>

<p><font face="Arial">Синтаксис метода <strong>BrowseTree</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">TreeIdOrObj</font></em></td>
    <td width="71%"><font face="Arial">выражение, определяющее
      <a href="../../ASTREE/Treeid.html">идентификатор дерева</a> или же
      <a href="../SysDefManagment/Tree.html">ссылку на объект дерево</a>.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">bAllowEdit</font></em></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, разрешающее корректировку документа в дереве. Если параметр 
	опущен, то остается в силе соответствующее значение из
      <a href="../../../Defs/Tree.html">описания дерева</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">bAllowView</font></em></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, разрешающее просмотр документа в дереве. Если параметр опущен, то 
	остается в силе соответствующее значение из
      <a href="../../../Defs/Tree.html">описания дерева</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">bAllowDelete</font></em></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, разрешающее удаление документа из дерева. Если параметр опущен, 
	то остается в силе соответствующее значение из
      <a href="../../../Defs/Tree.html">описания дерева</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">bAllowAddNode</font></em></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, разрешающее добавление узла в дерево. Если параметр опущен, то 
	остается в силе соответствующее значение из <a href="../../../Defs/Tree.html">
	описания дерева</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bAllowExport</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, разрешающее экспортирование узла дерева. Если параметр опущен, то 
	остается в силе соответствующее значение из <a href="../../../Defs/Tree.html">
	описания дерева</a>.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../SysDefManagment/Tree.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример метода BrowseTree</strong></font></h1>

<p><font face="Arial">В данном примере дерево вызывается по 
идентификатору :<br>
call <strong>BrowseTree</strong>(&quot;OnePaymt&quot;)<br>
<br>
А в этом примере метод BrowseTree применяется к объектной переменной, 
ссылающейся на дерево:<br>
set xTree = <a href="../SysDefManagment/Tree.html">Tree</a>(&quot;NBTURNV&quot;)<br>
.....<br>
call <strong>BrowseTree</strong>(xTree)</font></p>
</body>
</html>
