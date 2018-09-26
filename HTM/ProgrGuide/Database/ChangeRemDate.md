<html>
<head>
<title>Таблица CHACHEREMDATE</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица CHACHEREMDATE</font></h1>

<p><font face="Arial">Таблица дат промежуточных остатков по типу 
учета.<br>
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
    <td width="20%"><font face="Arial">fTYPE</font></td>
    <td width="20%"><font face="Arial">char (2)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">код типа учета</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDATE1</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">первая дата промежуточного 
	остатка </font></td>
  </tr>
	<tr>
    <td width="20%"><font face="Arial">fDATE2</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">вторая дата промежуточного 
	остатка </font></td>
  </tr>
	<tr>
    <td width="20%"><font face="Arial">fDATE3</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial"><span lang="en-us">третья
	</span>дата промежуточного îñòàòêà </font></td>
  </tr>
	<tr>
    <td width="20%"><font face="Arial">fDATE4</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial"><span lang="en-us">четвертая 
	</span>дата промежуточного остатка </font></td>
  </tr>
	<tr>
    <td width="20%"><font face="Arial">fDATE5</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial"><span lang="en-us">пятая </span>
	дата промежуточного остатка </font></td>
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
    <td width="33%">iCACHEREMDATE1</td>
    <td width="33%"><font face="Arial">UNIQUE, CLUSTERED </font></td>
    <td width="33%"><font face="Arial">fTYPE</font></td>
  </tr>
  </table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
