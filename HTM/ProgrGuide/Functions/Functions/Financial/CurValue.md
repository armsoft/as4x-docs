<html>
<head>
<title>CurValue</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция CurValue</font></strong></p>

<p><font face="Arial">Возвращает курс валюты сколько за сколько с 
разделителем &quot; / &quot;, для подстановки прямо в реквизит типа <a href="../../../Types/NumPair().html">
NumPair</a>. Если на указанную дату курс отсутствует, то приводится последний 
имеющийся курс валюты.</font></p>

<p><font face="Arial">Возвращает значение типа строка.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>CurValue</strong> (<em>sCodCurrency, 
sDate</em>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</font></p>

<p><font face="Arial">Синтаксис функции<strong> CurValue</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sCodCurrency</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее код валюты</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sDate</em></font></td>
    <td width="71%"><font face="Arial">дата выдачи курса</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../../../functions.html">
См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример свойства CurValue</strong></font></p>

<p><font face="Arial"><font size="3">Строковой переменной </font>
nCurValue присваивается курс валюты с кодом &#39;001&#39; на дату &#39;01/05/99&#39;.</font></p>

<p><font face="Arial">sCurValue = <strong>CurValue</strong>(&quot;001&quot;, 
&quot;01/05/99&quot;)<br>
</font></p>
</body>
</html>
