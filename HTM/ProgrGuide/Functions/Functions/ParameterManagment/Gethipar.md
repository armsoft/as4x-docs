<html>
<head>
<title>GetHiPar</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция GetHiPar</font></strong></p>

<p><font face="Arial">Возвращает значение параметра на указанную дату 
из таблицы <a href="../../../Database/HiPar.html">HIPAR</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetHiPar</strong>(<em>sParId, sDate, 
SoftGet</em>, [<em>sErrMsg</em>], [<em>ReturnSoftDate</em>], [<em>bNoError</em>])</font></p>

<p><font face="Arial">Синтаксис функции <b>GetHiPar</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sParId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее код искомого параметра </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sDate</em></font></td>
    <td width="71%"><font face="Arial">дата поиска параметра</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>SoftGet</em></font></td>
    <td width="71%"><font face="Arial">логическое выражение, 
	определяющее признак мягкого поиска параметра</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>sErrMsg</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее сообщение об ошибке. Если параметр не задан, то 
	выводится системное сообщение об ошибке.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">ReturnSoftDate</font></em></td>
    <td width="71%"><font face="Arial">ссылочная переменная типа 
	Variant, возвращающая дату найденного значения при <em>SoftGet=True.</em></font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bNoError</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, принимающее значения True или False. Если значение равно True, то сообщение об ошибке 
        <em>sErrMsg</em> не выводится, а значения функции 
        <em>GetHiParr</em> и 
    параметра <em>ReturnSoftDate</em> будут равны пустому. По умолчанию принимает значение False. </font></td>
    </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установкииии</b></font></p>

<p><font face="Arial">Установки для <em>SoftGet</em>
следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Значение</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">True</font></td>
    <td width="71%"><font face="Arial">выводится значение параметра на 
	последнюю имеющуюся в базе дату</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">False</font></td>
    <td width="71%"><font face="Arial">точный поиск параметра по дате</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="Hipar.html"><font face="Arial">См. также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример функции GetHipar</strong></font></h1>

<p><font size="3" face="Arial">Строковой переменной </font><font
face="Arial">sDirtyValue присваивается значение параметра .cur.001 
точно на дату &#39;01/05/99&#39;.</font></p>

<p><font face="Arial">sDirtyValue = GetHiPar(&quot;.cur.001&quot;, &quot;01/05/99&quot;, 
False)<br>
</font></p>
</body>
</html>
