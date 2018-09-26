<html>
<head>
<title>UserElProp</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Функция UserElProp<br>
<br>
</strong></font>Возвращает объект Dictionary, где содержатся свойства 
пользователя системы в виде. Доступ к элементам коллекции происходит в 
соответствии с правилами языка SaxBasic при помощи <a href="../../ASDOC/Properties.html#Dictionary">
методов и свойств объекта Dictionary</a>. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>UserElProp (</strong><em>nSUID</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>UserElProp</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">nSUID</font></em></td>
    <td width="71%"><font face="Arial">численное выражение, 
	определяющее внутрисистемный код пользователя системы.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Ключевые элементы коллекции следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font face="Arial"><strong>Значение</strong></font></td>
    <td class="label" width="80%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">NAME</font></td>
    <td width="80%"><font face="Arial">идентификатор пользователя из 
	системной таблицы master.syslogins</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">SUID</font></td>
    <td width="80%"><font face="Arial">внутрисистемный идентификатор 
	пользователя</font></td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial">FULLNAME</font></td>
    <td width="80%"><font face="Arial">имя пользователя</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">DESCR</font></td>
    <td width="80%"><font face="Arial">описание пользователя</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">ADM</font></td>
    <td width="80%"><font face="Arial">признак администратора:<br>
    &#39;1&#39; - администратор системы,<br>
    &#39;0&#39; - обычный пользователь</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">DIS</font></td>
    <td width="80%"><font face="Arial">запрет входа пользователя в 
	систему:<br>
    &#39;1&#39; - вход запрещен<br>
    &#39;0&#39; - вход разрешен</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
