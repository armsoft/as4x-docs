<html>
<head>
<title>Таблица USERS</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица USERS</font></h1>

<p><font face="Arial">Таблица пользователей системы.<br>
</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="428">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%" height="18"><font face="Arial"><b>
	Поле</b></font></td>
    <td class="label" width="20%" height="18"><font face="Arial"><strong>
	Тип данных</strong></font></td>
    <td class="label" width="20%" height="18"><font face="Arial"><strong>
	Null</strong></font></td>
    <td class="label" width="40%" height="18"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%" height="36"><font face="Arial">SID</font></td>
    <td width="20%" height="36"><font face="Arial">varbinary(85)</font></td>
    <td width="20%" height="36"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="36"><font face="Arial">идентификатор 
	пользователя из системной таблицы master.syslogins</font></td>
  </tr>
  <tr>
    <td width="20%" height="36"><font face="Arial">NAME</font></td>
    <td width="20%" height="36"><font face="Arial">varchar (30)</font></td>
    <td width="20%" height="36"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="36"><font face="Arial">имя пользователя из 
	системной таблицы master.syslogins</font></td>
  </tr>
  <tr>
    <td width="20%" height="18"><font face="Arial">fSUID</font></td>
    <td width="20%" height="18"><font face="Arial">smallint</font></td>
    <td width="20%" height="18"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="18"><font face="Arial">внутрисистемный 
	идентификатор пользователя</font></td>
  </tr>
  <tr>
    <td width="20%" height="18"><font face="Arial">fFULLNAME</font></td>
    <td width="20%" height="18"><font face="Arial">varchar (50)</font></td>
    <td width="20%" height="18"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="18"><font face="Arial">имя пользователя</font></td>
  </tr>
  <tr>
    <td width="20%" height="18"><font face="Arial">fDESCR</font></td>
    <td width="20%" height="18"><font face="Arial">varchar (50)</font></td>
    <td width="20%" height="18"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="18"><font face="Arial">описание 
	пользователя</font></td>
  </tr>
  <tr>
    <td width="20%" height="54"><font face="Arial">fADM</font></td>
    <td width="20%" height="54"><font face="Arial">char (1)</font></td>
    <td width="20%" height="54"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="54"><font face="Arial">признак 
	администратора:<br>
    &#39;1&#39; - администратор системы,<br>
    &#39;0&#39; - обычный пользователь</font></td>
  </tr>
  <tr>
    <td width="20%" height="54"><font face="Arial">fDIS</font></td>
    <td width="20%" height="54"><font face="Arial">char (1)</font></td>
    <td width="20%" height="54"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="54"><font face="Arial">запрет входа 
	пользователя в систему:<br>
    &#39;1&#39; - вход запрещен<br>
    &#39;0&#39; - вход разрешен</font></td>
  </tr>
  <tr>
    <td width="20%" height="17"><font face="Arial">fEXPIRED </font></td>
    <td width="20%" height="17"><font face="Arial">int</font></td>
    <td width="20%" height="17"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="17"><font face="Arial">через сколько дней 
	устаревает пароль, -1 - никогда не устаревает </font></td>
  </tr>
  <tr>
    <td width="20%" height="19"><font face="Arial">fCHANGED </font></td>
    <td width="20%" height="19"><font face="Arial">smalldatetime </font></td>
    <td width="20%" height="19"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="19"><font face="Arial">время последнего 
	изменения пароля</font></td>
  </tr>
  <tr>
    <td width="20%" height="7"><font face="Arial">fHIDDEN</font></td>
    <td width="20%" height="7"><font face="Arial">smallint</font></td>
    <td width="20%" height="7"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="7"><font face="Arial">признак скрытого 
	пользователя (он не виден в списках), 0 - есть в списках, 1 - нет в списках</font></td>
  </tr>
  <tr>
    <td width="20%" height="6">fMUSTCHANGEPWD</td>
    <td width="20%" height="6"><font face="Arial">smallint</font></td>
    <td width="20%" height="6"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="6"><font face="Arial">при входе в систему 
	пользователь должен поменять пароль</font></td>
  </tr>
  <tr>
    <td width="20%" height="6">fCONNCOUNT</td>
    <td width="20%" height="6"><font face="Arial">smallint</font></td>
    <td width="20%" height="6"><font face="Arial">NOT NULL</font></td>
    <td width="40%" height="6"><font face="Arial">количество 
	соединений</font></td>
  </tr>
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
    <td width="33%"><font face="Arial">iUSERS</font></td>
    <td width="33%"><font face="Arial">UNIQUE,&nbsp; CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fSUID</font></td>
  </tr>
</table>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
