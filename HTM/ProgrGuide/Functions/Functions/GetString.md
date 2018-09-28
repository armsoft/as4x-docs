<html>
<head>
<title>GetString</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция GetString</strong></font></p>

<p><font face="Arial">Выдает значение текстовой константы из таблицы <a href="../../Database/ApLezu.html">
APLEZU</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetString</strong> (<em>strObject, 
varArrParams()</em>)</font></p>

<p><font face="Arial">Синтаксис функции <strong>GetString</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>strObject</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор текстовой константы</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>varArrParams()</em></font></td>
    <td width="71%"><font face="Arial">необязательный массив значений 
	параметров, для макроподстановки в константу. Допускается передача до 5 
	параметров. Вставляет вместо символов %n1, %n2, ... поочередно 
	соответствующие элементы массива.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../../functions.html">См. 
также</a></font></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><font size="3"><strong>Пример функции GetString<br>
</strong><br>
Ниже приводится пример использования функции <strong>GetString</strong>, где 
переменная </font>State получает значение текстовой константы OperEdit, 
хранящейся в таблице <a
href="../../Database/ApLezu.html">APLEZU</a>.</font></p>

<p><font face="Arial">State = <strong>GetString</strong>(&quot;OperEdit&quot;)</font></p>
</body>
</html>
