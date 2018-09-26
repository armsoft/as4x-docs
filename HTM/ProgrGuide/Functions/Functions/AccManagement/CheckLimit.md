<html>
<head>
<title>CheckLimit</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция CheckLimit</font></strong></p>

<p><font face="Arial">Проверяет установленные пределы остатков для 
объекта учета. Предварительно до проведения проводки ее сумма проверяется на 
нарушение установленных пределов. Сумма проводки и текущий остаток объекта 
должны вместе не превышать пределов. <br>
Лимиты должны быть заранее установлены при помощи метода <a href="SetLimit.html">
SetLimit</a>. <br>
Для автоматической проверки лимитов необходимо наличие свойства Limit=1 <a href="../../../Defs/Accounting.html">
в описании учета</a>. <br>
По умолчанию лимиты проверяются во время процедур <a href="../../ASDOC/CheckAndStore.html">
CheckAndStore</a>, <a href="../../ASDOC/HiDelete.html">HiDelete</a>.<br>
<br>
Возвращаемое значение целое число.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.CheckLimit</strong> (<em>TypeAcc, 
ObjectISN</em>, [<em>Increment</em>], [<i>Overrunning</i>])</font></p>

<p><font face="Arial"><br>
Синтаксис функции <strong>CheckLimit</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>TypeAcc</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a> из его 
	описания.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ObjectISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN объекта учета, для которого проверяются пределы.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>Increment</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Currency, определяющее сумму приращения к текущему остатку 
	объекта, для проверки ее принадлежности к интервалу пределов.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><i>Overrunning</i></font></td>
    <td width="71%"><font face="Arial">необязательная переменная типа 
	Currency, возвращаюущую величину выхода из пределов. Если значение 
	отрицательно то имел место выход за рамки нижнего прeдела. При положительной 
	величине имел место выход за рамки верхнего прeдела.&nbsp;</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Функция <strong>CheckLimit</strong>
возвращает следующие значения:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font face="Arial"><strong>Значение</strong></font></td>
    <td class="label" width="80%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">0</font></td>
    <td width="80%"><font face="Arial">проверка пределов прошла 
	успешно</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">1</font></td>
    <td width="80%"><font face="Arial">произошел выход за пределы в 
	основном учете</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">2</font></td>
    <td width="80%"><font face="Arial">произошел выход за пределы в 
	связанном учете</font></td>
  </tr>
</table>

<p class="label"><b><font face="Arial">&nbsp;</font></b></p>

<p class="label"><font face="Arial"><b>Примечание<br>
</b><br>
Если в <a href="../../../Defs/Accounting.html">описании учета</a>
установлен параметр LinkedAccounting, то проверка на не нарушение пределов 
проводится с учетом текущего остатка объекта и в связанном учете.</font></p>

<p class="label"><a href="SetLimit.html"><font face="Arial">См. также</font></a></p>
</body>
</html>
