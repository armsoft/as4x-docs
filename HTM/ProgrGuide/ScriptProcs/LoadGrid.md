<html>
<head>
<title>Системное событие LoadGrid </title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие LoadGrid<br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Defs/doc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Генерируется при загрузке 
грид-таблицы документа. Обработка события LoadGrid обязательна, если сохранение 
данной грид-таблицы была обработанна разработчиком в событии
<a href="StoreGrid.html">StoreGrid</a>. После попытки загрузить грид-таблицу из
<a href="../Database/DocsG.html">DOCSG</a>, система генерирует данное событие.&nbsp; </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>LoadGrid</strong> (<em>sGridName</em>) <br>
<em>&nbsp;&nbsp;&nbsp;statements</em><br>
End Sub</font></p>

<p><font face="Arial">Синтаксис события <strong>LoadGrid</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" id="table1">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sGridName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор <a href="../Functions/ASDOC/AsGrid.html">
	грид-таблицы</a>.</font></td>
  </tr>
  </table>

<p class="label">&nbsp;</p>
</body>
</html>
