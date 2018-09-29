<html>
<head>
<title>FormattedNum</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция FormattedNum</font></strong></p>

<p><font face="Arial"><a href="RightAlign.html">Выравнивает справа</a> 
и <a href="NTOFS.html">форматирует</a> заданную <a
href="AsRoundDiv.html">округленную сумму с убранными нулями после округления</a>. 
При этом учитывается степень округления, для выбора подходящего типа при 
форматировании. Тип выбирается автоматически функцией. Длина результирующей 
форматированной суммы равна всегда 20 символов.</font></p>

<p><font face="Arial">Возвращает строку.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>FormattedNum</strong>(<em>Number, 
Precision</em>)<br>
</font></p>

<p><font face="Arial">Синтаксис функции <strong>FormattedNum</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Number</em></font></td>
    <td width="71%"><font face="Arial">округленное численное 
	выражение, подлежащее <a href="NTOFS.html">форматированию</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Precision</em></font></td>
    <td width="71%"><font face="Arial">численное выражение целого 
	типа, указывающее степень, до которой производилось округление числа.<br>
	Если <em>Precision&gt;2</em>, то принимается <em>Precision=</em>2.<br>Если <em>Precision&lt;0</em>, 
	то принимается <em>Precision=</em>0.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>