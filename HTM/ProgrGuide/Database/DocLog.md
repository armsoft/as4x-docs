﻿<html>
<head>
<title>Таблица DOCLOG</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица DOCLOG</font></h1>

<p><font face="Arial">Таблицa регистрации истории действий над 
документами.<br>
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
    <td width="20%"><font face="Arial">fISN</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор документа</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUID</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор пользователя</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDATE</font></td>
    <td width="20%"><font face="Arial">datetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">время произведенного действия</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fOP</font></td>
    <td width="20%"><font face="Arial">char (1)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">код действия над документом:<br>
    &#39;N&#39; - создание<br>
    &#39;E&#39; - корректировка<br>
    &#39;S&#39; - вторичный ввод<br>
    &#39;W&#39; - завизирован<br>
    &#39;V&#39; - отказ визирования<br>
    &#39;T&#39; - проводка<br>
    &#39;R&#39; - удаление проводки<br>
    &#39;M&#39; - сообщение из скрипта<br>
    &#39;D&#39; - удаление документа<br>
    &#39;H&#39; - програмное удаление документа из другого документа <br>
    &#39;I&#39; - импорт документа<br>
    &#39;A&#39; - изменение доступа<br>
    &#39;C&#39; - изменение <a href="../Functions/ASDOC/State.html">состояния</a><br>
	&#39;U&#39; - системное изменение<br />
	&#39;L&#39; - ISN 
        базового документа</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSTATE</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">состояние документа после 
	действия</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUIDCOR</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор пользователя 
	получателя результата действия</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCOM</font></td>
    <td width="20%"><font face="Arial">varchar (32)</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">комментарий к действию над 
	документом</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCOMPNAME</font></td>
    <td width="20%"><font face="Arial">varchar (32)</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">имя компьютера, с которого 
	производилось действие</font></td>
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
    <td width="33%"><font face="Arial">iDOCLOG1</font></td>
    <td width="33%"><font face="Arial">CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fISN, fDATE</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
<br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>