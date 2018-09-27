﻿<html>
<head>
<title>Проводка</title>
</head>

<body>

<h1><font size="4" face="Arial">Объект проводка</font></h1>

<p><font face="Arial">Создание новых или доступ к ранее проведенным 
проводкам обеспечивается через функции <a href="Functions/AccManagement/CreateFact.html">
CreateFact</a>,
<a href="Functions/AccManagement/LoadFactByBase.html">LoadFactByBase</a>, <a href="Functions/AccManagement/LoadFactByObject.html">
LoadFactByObject</a>,
<a href="Functions/AccManagement/LoadFactByTrans.html">LoadFactByTrans</a>.</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Свойства</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASFACT/AccCrd.html">
	AccCrd</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает кредитуемый объект проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASFACT/AccCrdISN.html">
	AccCrdISN</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает внутрисистемный код ISN для кредитуемого объекта.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="AsFact/AccDeb.html">
	AccDeb</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает дебетуемый объект проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="AsFact/AccDebISN.html">
	AccDebISN</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает внутрисистемный код ISN для дебетуемого объекта.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/Accounting.html"><font face="Arial">
	Accounting</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает ссылку 
	на объект типа учет для текущей проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/Base.html"><font face="Arial">
	Base</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает внутрисистемный код ISN документа основания проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	<a href="ASFACT/Branch.html">Branch</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает значение кода филиала проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="AsFact/Cur.html">
	Cur</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает код валюты проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/CurSumma.html"><font face="Arial">
	CurSumma</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает для проводки сумму в валюте.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASFACT/DbCr.html">
	DbCr</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает признак дебетования или кредитования объекта проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	<a href="ASFACT/Depart.html">Depart</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает значение кода отдела проводки.
	</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASFACT/GLAccISN.html">
	GLAccISN</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает внутрисистемный код ISN аккумулирующего объекта.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	<a href="ASFACT/Info.html">Info</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает значение поля для специальной обработки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="AsFact/Object.html">
	Object</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает объект проводки. </font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="AsFact/ObjectISN.html">
	ObjectISN</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает внутрисистемный код ISN объекта проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/ObjectSpec.html"><font face="Arial">
	ObjectSpec</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает 
	значение специальной строки для объекта проводки из его папки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="AsFact/Op.html">
	Op</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает код операции.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/OpDate.html"><font face="Arial">
	OpDate</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает дату операции.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/Spec.html"><font face="Arial">
	Spec</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает значение специальной строки для хранения различной 
	дополнительной информации о проводке.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a href="ASFACT/Suid.html">
	Suid</a></font></td>
    <td class="label" width="71%"><font face="Arial">Возвращает код 
	оператора для данной проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/Summa.html"><font face="Arial">
	Summa</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает для проводки сумму в национальной денежной единице.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/Trans.html"><font face="Arial">
	Trans</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает для проводки номер транзакции. </font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/TypeAcc.html"><font face="Arial">
	TypeAcc</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает код 
	учета для данной проводки.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><a href="ASFACT/Visible.html"><font face="Arial">
	Visible</font></a></td>
    <td class="label" width="71%"><font face="Arial">Возвращает или 
	устанавливает признак показа проводок при сохранении документа 
	регистрирующего факты.</font></td>
  </tr>
</table>
</body>
</html>