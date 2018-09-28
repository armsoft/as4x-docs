<html>
<head>
<title>Описатель доступа\Load</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод Load<br>
<br>
</strong></font><font face="Arial"><a href="../AsAccessDesc.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../AsAccessDesc.html">Применяется к</a></font></p>

<p><font face="Arial">Загружает описатель доступа для указанного 
объекта. Если описатель доступа для указанного объекта существует, то он 
загружается, в противном случае он создается.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Load (</strong><em>nISN, btAccessID, </em>
[<em>bExists</em>]<b>)</b></font></p>

<p><font face="Arial">Синтаксис метода <strong>Load</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="113">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%" height="18"><font face="Arial"><b>
	Параметр</b></font></td>
    <td class="label" width="71%" height="18"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%" height="36"><font face="Arial"><em>
	nISN</em></font></td>
    <td class="label" width="71%" height="36"><font face="Arial">
	длинное целое, определяющее ISN объекта, для которого загружается дескриптор 
	доступа.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%" height="17"><font face="Arial"><em>
	btAccessID</em></font></td>
    <td class="label" width="71%" height="17"><font face="Arial">
	байтовое выражение, определяющее код доступа из <a
    href="../../Defs/doc.html">описания документа</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bExists</em></font></td>
    <td width="71%"><font face="Arial">необязательная логическая 
	переменная, возвращаюущая признак существования описателя доступа. Если 
	значение True, то описатель доступа для указанного объекта уже существовал. 
	При False описатель доступа был создан заново.</font></td>
  </tr>
</table>
</body>
</html>
