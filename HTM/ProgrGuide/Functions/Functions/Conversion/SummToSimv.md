<html>
<head>
<title>SummToSimv</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция SummToSimv</font></strong></p>

<p><font face="Arial">Расчитывает и возвращает сумму прописью, в виде 
одномерного массива с элементами заданной ширины.</font></p>

<p><font face="Arial">Возвращает строку.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>SummToSimv</strong>(<em>curSumm</em> [<em>,intDlina</em>] 
[<em>,strBigCur</em>] [<em>,strSmallCur</em>] [<em>,intLanguage</em>] [<em>,bUpperCase</em>])<br>
</font></p>

<p><font face="Arial">Синтаксис функции <strong>SummToSimv</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>curSumm</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	расчитываемая сумма</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>intDlina</em></font></td>
    <td width="71%"><font face="Arial">необязательный параметр типа 
	Variant, максимальная длина строк возвращаемого массива. Если не задан, то 
	принимается значение по умолчанию 60. </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>strBigCur</em></font></td>
    <td width="71%"><font face="Arial">необязательный параметр типа 
	Variant, символьное значение денежной единицы (руб.). Если не задан, то 
	принимается значение по умолчанию &quot;Dram&quot;. </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>strSmallCur</em></font></td>
    <td width="71%"><font face="Arial">необязательный параметр типа 
	Variant, символьное значение разменной денежной единицы (коп.). Если не 
	задан, то принимается значение по умолчанию &quot;Luma&quot;.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>intLanguage</em></font></td>
    <td width="71%"><font face="Arial">необязательный параметр типа 
	Variant, вариант языка, пока есть русский, армянский. Если не задан, то 
	принимается значение по умолчанию 1 - армянский.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>bUpperCase</em></font></td>
    <td width="71%"><font face="Arial">необязательный параметр 
	логического типа, определяющий признак возврата начальной буквы первого 
	слова в верхнем регистре. Если не задан, то принимается значение по 
	умолчанию True - начальная буква первого слова выводится в верхнем регистре. </font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Эту функцию удобно использовать в 
первичных печатных документах.</font></p>

<p class="label"><a href="DateToSimv.html"><font face="Arial">См. также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример функции SummToSimv</strong></font></h1>

<p><font face="Arial"><font size="3">Переменной </font>strprop 
присваивается сумма прописью соответствующая числу intItog в виде массива.</font></p>

<p><font face="Arial">intItog = 25423</font></p>

<p><font face="Arial">strprop = SummToSimv(intItog, 60, &quot;Руб.&quot;, 
&quot;Коп.&quot;, 1)</font></p>

<p>&nbsp;</p>
</body>
</html>
