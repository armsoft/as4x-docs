<html>
<head>
<title>CurrentTree</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция CurrentTree<br>
</font><a href="../../FrmEditTree.html"><font size="3"><strong>свойства&nbsp;&nbsp; 
методы</strong></font></a></font></h1>

<p><font face="Arial">Возвращает ссылку на текущую форму прокрутки 
деревьев-справочников. Используется только из скриптовой части <a href="../../../Defs/Tree.html">
описания деревьев справочников.</a></font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong><em> sTreeName</em><strong> 
= CurrentTree</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>CurrentTree</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на форму прокрутки 
	деревьев-справочников. Через нее можно получить доступ к свойствам и методам 
	объекта.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Данную функцию можно вызывать не только из скриптовых процедур <a href="../../../Defs/Tree.html">
описания дерева</a>, но и из обработчика системного события
<a href="../../../ScriptProcs/FunctionsTree.html">Functions</a> в описании 
документа.</font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><strong><font size="3" face="Arial">Пример функции </font><font
face="Arial">CurrentTree</font></strong></p>

<p><font face="Arial">В примере вызывается функция CurrentTree, через 
переменную xTree возвращается ссылка на форму прокрутки деревьев-справочников со 
всеми его свойствами и методами. </font></p>

<p><font face="Arial">set xTree = <strong>CurrentTree</strong></font></p>
</body>
</html>
