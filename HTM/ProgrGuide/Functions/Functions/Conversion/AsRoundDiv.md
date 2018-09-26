<html>
<head>
<title>AsRoundDiv</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция AsRoundDiv</font></strong></p>

<p><font face="Arial">Округляет заданное число до указанной позиции, 
удаляя после округления завершающие нули, которые образуются после округления. <br>
<br>
Возвращаемое значение типа Currency.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>AsRoundDiv (</strong><em>Number, 
Precision</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>AsRoundDiv</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>Number</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, подлежащее 
	округлению.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Precision</em></font></td>
    <td width="71%"><font face="Arial">численное выражение целого 
	типа, определяющее степень, до которой производится округление</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>Precision</em>
следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font face="Arial"><strong>Значение</strong></font></td>
    <td class="label" width="80%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">....</font></td>
    <td width="80%">&nbsp;</td>
  </tr>
  <tr vAlign="top">
    <td width="20%"><font face="Arial">2</font></td>
    <td width="80%"><font face="Arial">Округление проводится до сотых 
	долей после запятой</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">1</font></td>
    <td width="80%"><font face="Arial">Округление проводится до 
	десятых долей после запятой</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">0</font></td>
    <td width="80%"><font face="Arial">Округление проводится до единиц</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">-1</font></td>
    <td width="80%"><font face="Arial">Округление проводится до 
	десятков числа</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">-2</font></td>
    <td width="80%"><font face="Arial">Округление проводится до сотых 
	числа</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">-3</font></td>
    <td width="80%"><font face="Arial">Округление проводится до 
	тысячных числа</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">-4</font></td>
    <td width="80%"><font face="Arial">Округление проводится до сотни 
	тысячных</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">...</font></td>
    <td width="80%">....</td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Например AsRoundDiv(542147.2574, -2) = 5421</font></p>

<p class="label"><a href="AsRound.html"><font face="Arial">См. также</font></a></p>
</body>
</html>
