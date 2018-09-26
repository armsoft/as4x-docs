<html>
<head>
<title>SendNotification</title>
</head>

<body>

<p><strong><font face="Arial" size="4">Метод </font></strong><font size="4" face="Arial"><strong>
SendNotification</strong></font></p>

<p><font face="Arial">Посылает оповещение пользователям. Адресат 
оповещения является ползователем перечисленных АРМ-ов, указанного явно в списке 
АРМ-ов или через тип в списке типов.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.SendNotification (</strong><em>sNotificationName, 
sNotificationBody </em>[<em>, nDocISN</em>] [<em>, nDocMode</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>SendNotification</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>
	sNotificationName</em></font></td>
    <td class="label" width="71%"><font face="Arial">строковое 
	выражение, определяющее идентификатор оповощения.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>
	sNotificationBody&nbsp;</em></font></td>
    <td class="label" width="71%"><font face="Arial">строковое 
	выражение, определяющее тело оповещения.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>nDocISN</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	численное выражение, определяющее внутрисистемный уникальный идентификатор 
	документа, который отправляется с оповещением. По умолчанию принимает 
	значение -1.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>nDocMode</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	численное выражение, определяющее состояние документа. При (<em>nDocMode </em><b>
	and</b><em>
      1) </em>- редактирование,<em> </em>(<em>nDocMode </em><b>and</b><em>
      2) </em>- визирование,<em> </em>(<em>nDocMode </em><b>and</b><em>
      4) </em>- повторный ввод. Состоянием документа может быть любая комбинация 
	этих состояний.</font> </td>
  </tr>
</table>

<p class="label">&nbsp;</p>
<p class="label"><font face="Arial"><b>Примечание</b></font></p>
<p class="label"><a href="../../Defs/notification.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
