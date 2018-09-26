<html>
<head>
<title>Таблица HI2ARC</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица HI2ARC</font></h1>

<p><font face="Arial">Архив таблицы <a href="Hi2.html">HI2</a>. Таблица 
HI2ARC в зависимости от настройки может находиться как в основной, так и в 
архивной БД.<br>
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
    <td width="20%"><font face="Arial">fDATE</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">дата операции</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fTYPE</font></td>
    <td width="20%"><font face="Arial">char (2)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">код типа учета</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fOBJECT</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">ISN объекта над которым ведется 
	данный учет</font></td>
  </tr>
  <tr>
    <td width="20%">fGLACC</td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">ISN аккумулирующего объекта</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUM</font></td>
    <td width="20%"><font face="Arial">money</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">сумма в НДЕ</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCUR</font></td>
    <td width="20%"><font face="Arial">char (3)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">код валюты</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCURSUM</font></td>
    <td width="20%"><font face="Arial">money</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">сумма в валюте</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fOP</font></td>
    <td width="20%"><font face="Arial">char (3)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">код операции из данного учета</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fBASE</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">ISN документа основания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDBCR</font></td>
    <td width="20%"><font face="Arial">char (1)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">дебет или кредит?</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fADB</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">ISN дебетового синтетического 
	счета</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fACR</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">ISN кредитового синтетического 
	счета</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSPEC</font></td>
    <td width="20%"><font face="Arial">varchar (255)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">специальная строка, для чего 
	угодно</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUID</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор пользователя, 
	породившего данную строку</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fTRANS</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">номер транзакции, в которую 
	входит данная проводка</font></td>
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
    <td width="33%">iHI2ARC1</td>
    <td width="33%"><font face="Arial">CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fTYPE, fOBJECT, </font>fGLACC,<font face="Arial">
      fDATE</font></td>
  </tr>
  <tr>
    <td width="33%">iHI2ARC2</td>
    <td width="33%">&nbsp;</td>
    <td width="33%"><font face="Arial">fBASE, fTRANS</font></td>
  </tr>
  <tr>
    <td width="33%">iHI2ARC3</td>
    <td width="33%">&nbsp;</td>
    <td width="33%"><font face="Arial">fTYPE, fDATE</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>
