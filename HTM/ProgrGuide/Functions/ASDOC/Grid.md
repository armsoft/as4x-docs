<html>
<head>
<title>Документ\Grid</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Свойство Grid</strong><br>
</font><font size="3"><strong><a href="AsGrid.html">свойства&nbsp;&nbsp; методы</a><br>
</strong></font><a href="../Asdoc.html">См. также</a>&nbsp; <u>Пример</u>&nbsp;
<a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает ссылку на объект 
грид-таблицу в документе. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>set sGrid = object</em><strong>.Grid(</strong><em>GridName</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>Grid</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sGrid</em></font></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на 
	объект грид-таблицу документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>GridName</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее идентификатор грид таблицы в документе.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример </font>свойства 
Grid<br>
</strong><br>
В примере переменная xGrid ссылается на грид-таблицу &quot;RESP&quot; в документе.</font></p>

<p><font face="Arial">Set xGrid = doc.<a href="Grid.html">Grid</a>(&quot;RESP&quot;)<br>
....<br>
If xGrid.<a href="AsGrid/ReadOnly.html">Readonly </a>&lt;&gt; xFix and xGrid.<strong>Name</strong>=&quot;RESP&quot; 
then<br>
&nbsp;&nbsp;&nbsp; Do while xGrid.<a href="AsGrid/RowCount.html">RowCount</a> &gt; 0<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xGrid.<a href="AsGrid/RemoveRow.html">RemoveRow</a>(0)<br>
&nbsp;&nbsp;&nbsp; Loop<br>
&nbsp;&nbsp;&nbsp; xGrid.<a href="AsGrid/ReadOnly.html">Readonly</a> = xFix<br>
&nbsp;&nbsp;&nbsp; xGrid.<a href="AsGrid/Refresh.html">Refresh</a><br>
End if<br>
</font></p>
</body>
</html>