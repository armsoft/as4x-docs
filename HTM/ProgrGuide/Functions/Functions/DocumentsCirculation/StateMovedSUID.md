<html>
<head>
<title>StateMovedSUID</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция StateMovedSUID</strong></font></p>

<p><font face="Arial">Возвращает признак существования в журнале 
регистрации операций (<a href="../../../Database/DocLog.html">DOCLOG</a>) над 
указанным документом, строки с заданным состоянием и код пользователя, 
переведшего документ в это состояние. Если такой строки не существует, то 
функция возвращает значение False и код теущего активного пользователя.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>StateMovedSUID (</strong><em>ISN, State</em><strong>,
</strong>[ByRef<em> SUID</em>]<strong>,</strong>[<em>bSort</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>StateMovedSUID</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>ISN</em></font></td>
    <td class="label" width="71%"><font face="Arial">численное 
	выражение типа Long, определяющее внутрисистемный идентификационный код 
	(ISN) документа.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>State</em></font></td>
    <td class="label" width="71%"><font face="Arial">численное 
	выражение целого типа, определяющее состояние документа</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>SUID</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательная 
	ссылочная переменная целого типа, определяющая код пользователя, переведшего 
	документ в указанное состояние.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>bSort</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательная 
	выражение&nbsp; логическое типа, определяющее код первого или последнего 
	пользователя, переведшего документ в указанное состояние. По умолчанию оно 
	принимается True, т.е. код первого пользователя.</font></td>
  </tr>
</table>

<p class="label"><b><font face="Arial">&nbsp;</font></b></p>

<p class="label"><b><font face="Arial">Тип данных</font></b></p>

<p><font face="Arial">Логический</font></p>

<p class="label"><font face="Arial"><b>&nbsp;</b></font></p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../ASDOC/SetFactsCreatorState.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
