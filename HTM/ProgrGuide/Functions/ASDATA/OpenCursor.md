<html>
<head>
<title>Источник данных\OpenCursor</title>
    <style type="text/css">
        .style1 {
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Метод OpenCursor<br>
<br>
</strong></font><a href="../Asdata.html">См. также</a>&nbsp; <a
href="../../Examples/E_AsData.html">Пример</a>&nbsp; <a href="../Asdata.html">
Применяется к</a></font></p>

<p><font face="Arial">Открывает курсор источника данных. Курсор - это 
логическое множество строк в источнике данных.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.OpenCursor (</strong><em> </em>
[<em>CursorType</em>]<em>,
</em>[<em>LockType</em>]<em>, </em>[<em>Indicate</em>]<em>, </em>[<em>blnWithPrevious</em>]
    <em> )</em></font></p>

<p><font face="Arial">Синтаксис метода <strong>OpenCursor</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр объекта источник данных.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>CursorType</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a
    href="../../Constants/const_opencursor_cursortype.html">константу типа 
	открываемого курсора источника данных</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>LockType</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a
    href="../../Constants/const_opencursor_locktype.html">константу типа 
	обработки конфликтов параллельной обработки данных (тип блокировок)</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Indicate</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее <a
    href="../../Constants/const_opencursor_Indicate.html">константу внешнего вида 
	индикации продвижения процесса</a>. Если значение не задано, то остается в 
	силе значение индикатора, заданное в <a href="../../Defs/Data.html">описании 
	источника данных</a>.</font></td>
  </tr>
  <tr>
    <td width="29%" class="style1"><em>blnWithPrevious</em></td>
    <td width="71%" class="style1">необязательное логическое выражение, определяющее 
        положение курсора соответственно в начале или конце источника данных. Когда 
        аргумент принимает значение True тогда курсор располагается в конце источника 
        данных и используется метод .MovePrevious.</td>
  </tr>
</table>
</body>
</html>
