<html>
<head>
<title>Таблица USERREPORTS </title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица USERREPORTS</font></h1>

<p><font face="Arial">Таблицa пользовательских отчетов. <br>
</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%" align="left" nowrap><font face="Arial"><b>
	Поле</b></font></td>
    <td class="label" width="20%" align="left" nowrap><font face="Arial"><strong>
	Тип данных</strong></font></td>
    <td class="label" width="20%" align="left" nowrap><font face="Arial"><strong>
	Null</strong></font></td>
    <td class="label" align="left" width="40%"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%" align="left" nowrap><font face="Arial">fNAME</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">char(20)</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">NOT NULL</font></td>
    <td align="left" width="40%"><font face="Arial">идентификатор 
	пользовательского отчета</font></td>
  </tr>
  <tr>
    <td width="20%" align="left" nowrap><font face="Arial">fCAPTION</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">varchar(50)</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">NOT NULL</font></td>
    <td align="left" width="40%"><font face="Arial">наименование&nbsp; 
	пользовательского отчета</font></td>
  </tr>
  <tr>
    <td width="20%" align="left" nowrap><font face="Arial">fECAPTION</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">varchar(50)</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">NULL</font></td>
    <td align="left" width="40%"><font face="Arial">наименование&nbsp; 
	пользовательского отчета на иностранном языке</font></td>
  </tr>
  <tr>
    <td width="20%" align="left" nowrap><font face="Arial">fDATA</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">char(20)</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">NOT NULL</font></td>
    <td align="left" width="40%"><font face="Arial">имя базового 
	источника данных</font></td>
  </tr>
  <tr>
    <td width="20%" align="left" nowrap><font face="Arial">fDESCR</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">Text</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">NOT NULL</font></td>
    <td align="left" width="40%"><font face="Arial">описание в 
	текстовом формате</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="20%" align="left" nowrap><font face="Arial">fROWID</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">int</font></td>
    <td width="20%" align="left" nowrap><font face="Arial">NOT NULL, 
	IDENTITY</font></td>
    <td align="left" width="40%"><font face="Arial">колонка 
	идентичности</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
<br>
Индекс</b></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="33%" align="left" nowrap><font face="Arial"><b>
	Имя индекса</b></font></td>
    <td class="label" width="33%" align="left" nowrap><font face="Arial"><strong>
	Тип</strong></font></td>
    <td class="label" align="left" width="33%"><font face="Arial"><strong>
	Имя столбцов</strong></font></td>
  </tr>
  <tr>
    <td width="33%" align="left" nowrap>iUSERREPORTS1 </td>
    <td width="33%" align="left" nowrap><font face="Arial">UNIQUE, 
	CLUSTERED</font></td>
    <td align="left" width="33%"><font face="Arial">&nbsp;fNAME</font></td>
  </tr>
  <tr>
    <td width="33%" align="left" nowrap>iUSERREPORTS2</td>
    <td width="33%" align="left" nowrap><font face="Arial">UNIQUE</font></td>
    <td align="left" width="33%"><font face="Arial">&nbsp;fROWID</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
