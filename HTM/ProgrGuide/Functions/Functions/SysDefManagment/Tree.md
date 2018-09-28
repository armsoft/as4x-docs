<html>
<head>
<title>Tree</title>
</head>

<body>

<h1><font size="4" face="Arial">Функция Tree<br>
</font><a href="../../Astree.html"><font face="Arial" size="3"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Возвращает ссылку на экземпляр объекта 
дерева-справочника. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Set </strong>&nbsp;<em>xTree</em><strong> 
= Tree</strong>(<em>TreeId</em>)</font></p>

<p><font face="Arial">Синтаксис функции <b>Tree</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeName</em></font></td>
    <td width="71%"><font face="Arial">переменная типа элемент дерева, ссылающуюся на экземпляр объекта дерева. Через нее 
	можно получить доступ к свойствам и методам объекта.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>TreeId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор дерева-справочника</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font face="Arial" size="3"><strong>Пример функции Tree</strong></font></h1>

<p><font face="Arial">Вызывается функция Tree, через mTree 
возвращается ссылка на обьект дерево со всеми его свойствами и методами.<br>
<br>
set xTree = <strong>Tree</strong>(&quot;NBACCT3&quot;)<br>
xTree.<a href="../../ASTREE/Caption.html">Caption</a> = &quot;Выписки счетов&quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
VTOFS(&quot;DATE&quot;, xDialog(&quot;NBSTARTDATE&quot;)) &amp; &quot; - &quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
VTOFS(&quot;DATE&quot;, xDialog(&quot;NBENDDATE&quot;))<br>
xTree.<a href="../../ASTREE/AddDoc.html">AddDoc</a><strong> </strong>&quot;NBPUT&quot;<br>
<a href="../InterfaceManagment/BrowseTree.html">BrowseTree</a>(xTree)</font></p>

<p>&nbsp;</p>
</body>
</html>
