<html>
<head>
<title>CheckAccess</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция CheckAccess</font></strong></p>

<p><font face="Arial">Возвращает установленное значение доступа для 
пользователя к объекту учета, т.е. определяет имеет ли пользователь доступ к 
указанному объекту или нет.<br>
<br>
Возвращаемое значение логическое.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.CheckAccess</strong> (<em>nISN, 
nAccessID</em>, [<em>nSUID</em>])</font></p>

<p><font face="Arial"><br>
Синтаксис функции <strong>CheckAccess</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">nISN</font></em></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN документа, для которого выясняется доступ</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nAccessID</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения от 1 до 255, определяющее код доступа, из <a href="../../../Defs/doc.html">
	описания документа</a>.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>nSUID</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее код пользователя, для которого выясняется доступ. 
	Если параметр не задан, доступ определяется для текущего пользователя 
	системы. </font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Примечание</font></b></p>

<p class="label"><font face="Arial"><a href="../../../functions.html">
См. также</a></font></p>
</body>
</html>
