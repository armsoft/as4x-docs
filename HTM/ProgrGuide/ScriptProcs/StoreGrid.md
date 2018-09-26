<html>
<head>
<title>Системное событие StoreGrid</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие StoreGrid<br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Defs/doc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Генерируется при сохранении 
грид-таблицы документа. При наличии данного события система не сохраняет 
грид-таблицу в <a href="../Database/DocsG.html">DOCSG</a>, а передает сохранение 
разработчику. Если при выходе из события возвращаемое значение ложное, тогда 
система сама сохраняет грид-таблицу. Таким способом разработчик может взять на 
себя сохранение только некоторых грид-таблиц. При наличии данного события 
разработчик должен обеспечить корректную <a href="LoadGrid.html">загрузку 
грид-таблицы</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Function <strong>StoreGrid</strong> (<em>sGridName</em>) 
as boolean<br>
<em>&nbsp;&nbsp;&nbsp;statements</em><br>
End Function</font></p>

<p><font face="Arial">Синтаксис события <strong>StoreGrid</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
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
