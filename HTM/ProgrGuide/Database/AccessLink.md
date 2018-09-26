<html>
<head>
<title>Таблица ACCESSLINK</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица ACCESSLINK</font></h1>
<font FACE="Arial">

<p>Таблица доступов к объектам. <br>
</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font FACE="Arial"><b>Поле</b></font></td>
    <td class="label" width="20%" height="18"><font FACE="Arial"><strong>
	Тип данных</strong></font></td>
    <td class="label" width="20%" height="18"><font FACE="Arial"><strong>
	Null</strong></font></td>
    <td class="label" width="40%" height="18"><font FACE="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%"><font FACE="Arial">fLINK</font></td>
    <td width="20%" height="9"><font FACE="Arial">int</font></td>
    <td width="20%" height="9"><font FACE="Arial">NOT NULL</font></td>
    <td width="40%" height="9"><font face="Arial">Код линковки, 
	который определяет группу объектов</font></td>
  </tr>
  <tr>
    <td width="20%"><font FACE="Arial">fVALUE</font></td>
    <td width="20%" height="9"><font FACE="Arial">tinyint</font></td>
    <td width="20%" height="9"><font FACE="Arial">NOT NULL</font></td>
    <td width="40%" height="9"><font face="Arial">Значение доступа</font></td>
  </tr>
  <tr>
    <td width="20%"><font FACE="Arial">fACCESSID</font></td>
    <td width="20%" height="9"><font FACE="Arial">tinyint</font></td>
    <td width="20%" height="9"><font FACE="Arial">NOT NULL</font></td>
    <td width="40%" height="9"><font FACE="Arial">Идентификатор кода 
	доступа </font></td>
  </tr>
  <tr>
    <td width="20%"><font FACE="Arial">fCHANGEID</font></td>
    <td width="20%" height="9"><font FACE="Arial">int</font></td>
    <td width="20%" height="9"><font FACE="Arial">NOT NULL</font></td>
    <td width="40%" height="9"><font FACE="Arial">Идентификатор 
	модификации для связи с таблицой AccessLog</font></td>
  </tr>
  <tr>
    <td width="20%"><font FACE="Arial">fTYPE</font></td>
    <td width="20%" height="9"><font FACE="Arial">int</font></td>
    <td width="20%" height="9"><font FACE="Arial">NOT NULL</font></td>
    <td width="40%" height="9"><font face="Arial">Тип ISN, возможны 
	следующие варианты 0 - ISN объекта, 1 - ISN OLAP объекта, 2 - OLAP табличный 
	параметр. Значение по умолчанию 0.</font></td>
  </tr>
  <tr>
    <td width="20%"><font FACE="Arial">fBASEFOLD</font></td>
    <td width="20%" height="9"><font face="Arial">varchar(20)</font></td>
    <td width="20%" height="9"><font FACE="Arial">NOT NULL</font></td>
    <td width="40%" height="9"><font face="Arial">Идентификатор папки</font></td>
  </tr>
</TBODY>
</table>
<p class="label"><font FACE="Arial"><b><br>
Индекс</b></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="33%" height="18"><font FACE="Arial"><b>
	Имя индекса</b></font></td>
    <td class="label" width="33%" height="18"><font FACE="Arial"><strong>
	Тип </strong></font></td>
    <td class="label" width="33%" height="18"><font FACE="Arial"><strong>
	Имя столбцов</strong></font></td>
  </tr>
  <tr>
    <td width="33%" height="2">iACCESSLINK1</td>
    <td width="33%" height="2"><font FACE="Arial">CLUSTERED</font></td>
    <td width="33%" height="2"><font FACE="Arial">fLINK</font></td>
  </tr>
  <tr>
    <td width="33%" height="2">iACCESSLINK2</td>
    <td width="33%" height="2"></td>
    <td width="33%" height="2"><font FACE="Arial">fCHANGEID</font></td>
  </tr>
</table>

<p class="label"><font FACE="Arial"><b><br>
<br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font FACE="Arial">См. 
также</font></a></p>
</body>
</html>
