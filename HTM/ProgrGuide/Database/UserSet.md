<html>
<head>
<title>Таблица USERSET</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица USERSET</font></h1>

<p><font face="Arial">Таблицa хранения пользователе-зависимых видов 
просмотра.<br>
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
    <td width="20%"><font face="Arial">fSYSTYPE</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">Тип системного описания. Пока 
	реализован случай fSYSTYPE=2.</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fNAME</font></td>
    <td width="20%"><font face="Arial">char (20)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор базового вида 
	просмотра</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUID</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">внутрисистемный идентификатор 
	пользователя, для которого сохраняются установки</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCAPTION</font></td>
    <td width="20%"><font face="Arial">char (32)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">заголовок сохраненного вида 
	просмотра</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDS</font></td>
    <td width="20%"><font face="Arial">char (20)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор источника данных 
	для указанного вида просмотра</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDESCR</font></td>
    <td width="20%"><font face="Arial">text</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">сохраненные установки 
	параметров&nbsp; фильтрации и проекции для данного вида просмотра</font></td>
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
    <td width="33%"><font face="Arial">iUSERSET1</font></td>
    <td width="33%"><font face="Arial">UNIQUE,&nbsp; CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fSYSTYPE, fNAME, fSUID, 
	fCAPTION</font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial">iUSERSET2</font></td>
    <td width="33%">&nbsp;</td>
    <td width="33%"><font face="Arial">fDS</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
