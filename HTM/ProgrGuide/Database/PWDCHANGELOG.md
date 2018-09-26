<html>
<head>
<title>Таблица PWDCHANGELOG</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица PWDCHANGELOG</font></h1>

<p><font face="Arial">Журнал изменения паролей пользователей.<br>
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
    <td width="40%"><font face="Arial">идентификатор пользователя, 
	пароль которого был изменен</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCHANGEDBY</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор пользователя 
	изменившего пароль</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDATE</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">время изменения пароля</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCOMPNAME</font></td>
    <td width="20%"><font face="Arial">varchar(32)</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">рабочая станция</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><b><br>
Индексы</b></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="33%"><font face="Arial"><b>Имя индекса</b></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Тип </strong></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Имя 
	столбцов</strong></font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial">iPWDCHANGELOG</font></td>
    <td width="33%"><font face="Arial">CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fSUID</font></td>
  </tr>
  </table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
