<html>
<head>
<title>LoadTemplate</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция LoadTemplate<br>
</font><font size="3"><u><strong>свойства&nbsp;&nbsp; методы</strong></u></font></font></h1>

<p><font face="Arial">Загружает шаблонную форму документа Word или 
Excel. Шаблонная форма должна быть предварительно описана и введена в систему.</font></p>

<p><font face="Arial">&nbsp;</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sTemplate</em><strong> 
= LoadTemplate (</strong><em>sTmpltID, sTmpltType</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>LoadTemplate</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sTemplate</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр документа типа Word или 
	Excel. Через него можно получить доступ к свойствам и методам объекта.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTmpltID</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор шаблона документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sTmpltType</font></em></td>
    <td width="71%"><font face="Arial">численное выражение целого 
	типа, определяющее тип шаблонной формы загружаемого документа.</font></td>
  </tr>
</table>

<p><font face="Arial">&nbsp;</font></p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>sTmpltType</em>
следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Значение</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">0</font></td>
    <td width="71%"><font face="Arial">загружается документ Word</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">другое</font></td>
    <td width="71%"><font face="Arial">загружается документ Excel</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b>&nbsp;</b></font></p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../../../constructors.html">
См. также</a></font></p>

<p class="label"><font face="Arial">&nbsp;</font></p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
LoadTemplate</strong></font></p>

<p><font face="Arial">Set xWordDoc = LoadTemplate(&quot;Invoice&quot;, 0)<br>
...<br>
xWordDoc.Bookmarks(BookMarkType &amp; CodForm(i)).Select<br>
xWordDoc.Application.Selection.Typetext Text:= sValue</font></p>
</body>
</html>
