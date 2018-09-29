<html>
<head>
<title>CreateFact</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция CreateFact<br>
</font><a href="../../Asfact.html"><font size="3"><strong>свойства&nbsp;&nbsp; 
методы</strong></font></a></font></h1>

<p><font face="Arial">Создает новый экземпляр объекта-проводки для 
дальнейшего заполнения и запоминания.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sNewFact</em><strong> = 
CreateFact (</strong><em>sTypeAccounting</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>CreateFact</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sNewFact</em></font></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на 
	новый экземпляр проводки</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTypeAccounting</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор учета для которой создается проводка</font></td>
  </tr>
</table>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p>&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
CreateFact</strong></font></p>

<p><font face="Arial">В примере вызывается функция CreateFact, xFact 
ссылается на вновь созданный объект-проводку со всеми его свойствами и методами. </font></p>

<p><font face="Arial">Set xFact = <strong>CreateFact</strong>(&quot;02&quot;)<br>
xFact.OpDate = Doc(&quot;DATEPUT&quot;)<br>
xFact.Object = xFOLDER.Key<br>
xFact.Summa = CurValue(xDOC(&quot;CODVAL&quot;),Doc(&quot;DATEPUT&quot;))*Doc(&quot;DOCSUMMA&quot;)<br>
xFact.Cur = xDOC(&quot;CODVAL&quot;)<br>
xFact.CurSumma = Doc(&quot;DOCSUMMA&quot;)<br>
xFact.Op = &quot;MSC&quot;<br>
xFact.DBCR = &quot;C&quot;<br>
xFact.Spec = Doc(&quot;NOMDOK&quot;) &amp; doc.Formatted(&quot;MTCCOUNT&quot;) &amp; Doc(&quot;COMENT&quot;) <br>
doc.StoreFact xFact<br>
</font></p>
</body>
</html>