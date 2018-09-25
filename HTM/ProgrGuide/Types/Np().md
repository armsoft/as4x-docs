<html>

<head><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">
<meta name="GENERATOR" content="Microsoft FrontPage 12.0">
<title>NP()</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Тип данных NP( )</font></strong></p>

<p class="label"><font face="Arial">Числовой тип данных, состоящий 
только из положительных чисел и принимающий значения от 0 до 99999999999999.9999</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>NP</strong>(<em>nNumLen, nDecLen</em>)</font></p>

<p><font face="Arial">Синтаксис типа <strong>NP</strong>() состоит из 
следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nNumLen</font></em></td>
    <td width="71%"><font face="Arial">числовое выражение, 
	определяющее общее количество символов числа (включая десятичную запятую). 
	Максимальное общее количество чисел 19.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nDecLen</em></font></td>
    <td width="71%"><font face="Arial">числовое выражение, 
	определяющее количество символов после запятой, т.е. длину дробной части. 
	Максимальное количество чисел после запятой 4.</font></td>
  </tr>
    <tr>
    <td width="29%" class="style1"><em>nDiv</em></td>
    <td width="71%" class="style1">необязательное численное выражение отвечающее за 
        отображение разделителей (запятых) групп разрядов числа. Разделение идет 
        тысячами по три цифры. Когда принимает значене 1 разделители 
        отображаются, когда 0 - не отображаются (по умолчанию).</td>
    </tr>
</TBODY>
</table>

<p class="label"><font face="Arial">Причем аргументы связаны следующим 
соотношением: <em>nDecLen &lt;&gt; 0&nbsp; и&nbsp; nNumLen</em> - <em>nDecLen</em>
    - 1 &lt;= 14&nbsp; <em>или&nbsp; nDecLen = 0&nbsp; и&nbsp; 
    nNumLen&nbsp; &lt;&nbsp; 15</em>.</font></p>

<p class="label"><font face="Arial"><a href="../types.html">См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример использования 
положительного числового типа</strong></font></p>

<p><font face="Arial">NP(15, 2) - положительное число с 2 символами 
после запятой и с целой частью в 12 символов (12+1+2=15).</font></p>
</body>
</html>
