<html>
<head>
<title>HiPar</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Процедура HiPar</font></strong></p>

<p><font face="Arial">Устанавливает новое значение параметра на 
указанную дату.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>call HiPar</strong>(<em>sParId, dDate, 
nISN</em>, <em>vValue</em>, [<em>sErrMsg</em>], [<em>dCreationDate</em>])<br>
<br>
Синтаксис процедуры <b>HiPar</b> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sParId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее код параметра в таблице <a href="../../../Database/HiPar.html">
	HIPAR</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dDate</em></font></td>
    <td width="71%"><font face="Arial">выражение типа даты, 
	определяющее дату подстановки параметра</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">числовое выражение типа Long, 
	определяющее ISN документа основания нового параметра</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>vValue</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее подставляемое новое значение параметра</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>sErrMsg</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее сообщение об ошибке, возникающее при существовании 
	строки со значениями <em>sParId</em>+<em>dDate</em>+<em>nISN</em> в таблице
      <a href="../../../Database/HiPar.html">HIPAR</a>. Если значение параметра 
	опущено, то выводится системное сообщение об ошибке.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>dCreationDate</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Date, определяющее дату создания параметра.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Если параметр для подставляемого 
значения не существует в базе, то он добавляется. Если по указанной дате по 
одному и тому же документ-основанию уже существует значение, то выводится 
сообщение об ошибке.</font></p>

<p class="label"><font face="Arial"><a href="Gethipar.html">См. также</a></font></p>

<p>&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример </font>процедуры<font
size="3"> Hipar</font></strong></font></p>

<p><font size="3" face="Arial">Приведен пример подстановки значения 
курса валюты процедурой <strong>HiPar</strong>:</font></p>

<p><font face="Arial"><strong>call HiPar</strong> (&quot;.cur.&quot; &amp; 
doc.GRID(&quot;CurGrid&quot;).Value(i,&quot;CODE&quot;), doc(&quot;DATE&quot;), doc<a href="../../ASDOC/ISN.html">.ISN</a>),&nbsp; 
_<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="../Conversion/VTOFS.html">
VTOFS</a>(&quot;N(11,2)&quot;,doc.<a href="../../ASDOC/Grid.html">GRID</a>(&quot;CurGrid&quot;).Value(i,&quot;VALUE&quot;)) 
_<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &amp; 
VTOFS(&quot;N(5,0)&quot;,doc.GRID(&quot;CurGrid&quot;).Value(i,&quot;COUNT&quot;))</font></p>
</body>
</html>
