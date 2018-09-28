<html>
<head>
<title>GetSubString</title>
    <style type="text/css">
        .style1
        {
            width: 78%;
        }
    </style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция GetSubString</strong></font></p>

<p><font face="Arial">Возвращает подстроку заданной строки. </font></p>

<p>&nbsp;</p>

<p><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetSubString(</strong><em>pSourceString, 
    pStartPosOrChar,</em>
[<em>pEndPosOrChar</em>]<strong>, </strong>[<em>pBegMatched</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>GetSubString </strong>состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="style1"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">pSourceString</font></em></td>
    <td class="style1"><font face="Arial">строковое выражение, 
	определяющее исходную строку, которую необходимо разбить на подстроки.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>pStartPosOrChar</em></font></td>
    <td class="style1"><font face="Arial">выражение типа вариант, 
	определяющее начальную позицию или символ подстроки.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>pEndPosOrChar</em></font></td>
    <td class="style1"><font face="Arial">необязательное выражение типа вариант, 
        определяющее последний символ конца подстроки. Если данный параметр не задан, 
        то подстрока начинается с <em>pSourceString&nbsp; </em>и заканчивается последним 
        символом заданной строки.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>pBegMatched</em></font></td>
    <td class="style1"><font face="Arial">необязательное&nbsp; численное выражение , 
        определяющее&nbsp; начиная с которого вхождения pStartPosOrChar<em> </em>в 
        заданную строку выделяется подстрока. Задание данного параметра имеет 
        смысл, если pStartPosOrChar является символом. По умолчанию принимает зачение&nbsp; 
        1.</font></td>
    </tr>
</table>

<p class="label">&nbsp;</p>
    <p class="label"><font face="Arial"><b>Примечание</b></font></p>
    <p class="label"><font face="Arial">Рассмотрим следующий пример :<strong>
        </strong>пусть <strong>
        &nbsp;pSourceString</strong> 
        = &quot;Find this character&quot; ,&nbsp; <strong>pStartPosOrChar</strong> = &quot;i&quot;,&nbsp;
        <strong>pEndPosOrChar</strong> = &quot;h&quot;, тогда количество вхождении&nbsp; <strong>pStartPosOrChar</strong> 
        в <strong>pSourceString</strong> будет равно = 2. При <strong>pBegMatched</strong> 
        = 1 функция <strong>GetSubString</strong> вернет значение&nbsp; &quot;nd this c&quot; 
        . При <strong>pBegMatched</strong> = 2 , возврашаемое&nbsp; значение будет равно 
        &quot;s c&quot;.</font></p>

<p class="label">
        <font face="Arial"><a href="../../functions.html">См. также</a></font></p>
</body>
</html>
