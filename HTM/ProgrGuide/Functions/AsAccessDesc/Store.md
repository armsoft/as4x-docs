<html>
<head>
<title>Описатель доступа\Store</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод Store<br>
<br>
</strong></font><font face="Arial"><a href="../AsAccessDesc.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../AsAccessDesc.html">Применяется к</a></font></p>

<p><font face="Arial">Сохраняет дескриптор доступа объекта.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Store (</strong>[<em>nISN</em>]<em>, </em>
[<em>btAccessID</em>],[<em>DocType</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>Store</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	длинное целое, определяющее ISN документа для которого сохраняется доступ. 
	Если параметр не задан, то вместо <em>nISN</em> и <em>btAccessID</em> 
	берутся значения параметров, которые были переданы при
      <a href="../Functions/AccessControl/AccessDesc.html">создании ссылки</a> на 
	объект типа описатель доступа.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>btAccessID</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	байтовое выражение, определяющее код доступа из <a
    href="../../Defs/doc.html">описания документа</a>.</font></td>
  </tr>
	<tr>
    <td class="label" width="29%"><font face="Arial"><em>DocType</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	строковое выражение, определяющее тип документа.</font></td>
  </tr>
</table>
</body>
</html>
