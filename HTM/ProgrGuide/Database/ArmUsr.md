<html>
<head>
<title>Таблица ARMUSR</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица ARMUSR</font></h1>

<p><font face="Arial">Таблицa определения доступа пользователей к 
рабочим местам.<br>
</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font face="Arial"><b>Поле</b></font></td>
    <td class="label" width="20%"><font face="Arial"><strong>Тип 
	данных</strong></font></td>
    <td class="label" width="20%"><font face="Arial"><strong>Null</strong></font></td>
    <td class="label" width="40%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUID</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор пользователя</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fTREEID</font></td>
    <td width="20%"><font face="Arial">char (8)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор дерева навигатора 
	типа &quot;АРМ&quot;</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDEFAULT</font></td>
    <td width="20%"><font face="Arial">char (1)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">&#39;1&#39; - данный АРМ является 
	доступным по умолчанию,<br>
    &#39;2&#39; - данный АРМ доступен как дополнительный</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><b><br>
Индекс</b></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="33%"><font face="Arial"><b>Имя индекса</b></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Тип </strong></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Имя 
	столбцов</strong></font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial">iARMUSR1</font></td>
    <td width="33%"><font face="Arial">UNIQUE,&nbsp; CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fSUID, fTREEID</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial">iARMUSR2</font></td>
    <td width="33%">&nbsp;</td>
    <td width="33%"><font face="Arial">fTREEID, fSUID</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
</b></font></p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
