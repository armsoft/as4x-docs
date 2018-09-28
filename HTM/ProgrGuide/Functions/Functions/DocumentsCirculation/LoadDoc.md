<html>
<head>
<title>LoadDoc</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция LoadDoc<br>
</font><font size="3"><a href="../../Asdoc.html"><strong>свойства&nbsp;&nbsp; 
методы</strong></a></font></font></h1>

<p><font face="Arial">Загружает существующий экземпляр документа по 
ISN.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sDoc</em><strong> = 
LoadDoc (</strong><em>nISN</em><strong>,
</strong>[<em>nLockDoc</em>]<strong>, </strong>[<em>bNotRaiseErr</em>]<strong>, </strong>[<em>bLookInArc</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>LoadDoc</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sDoc</em></font></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на 
	загружаемый документ</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN загружаемого документа. Если задается несуществующий ISN, 
	то выдается сообщение об ошибке.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nLockDoc</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, принимающее значения 0 (по умолчанию) или 1, определяющее признак 
	блокировки загружаемого документа, во избежание изменения другими.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bNotRaiseErr</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак генерации ошибки при попытке загрузки 
	удаленного документа в состоянии 999. По умолчанию принимается значение 
	False, при котором генерируется сообщение об ошибке.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bLookInArc</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее загрузку существующего экземпляра документа по ISN из 
        архива. Значение данного параметра имеет смысл, если загружаемый документ был 
        удален из системы. Тогда,&nbsp; если значение&nbsp; <em>bLookInArc</em> = <em>True</em> 
        и документ с <em>nISN</em> - ом отсутствует в архиве, то&nbsp; выдается сообщение 
        о том, что данный документ отсутствует в системе, в противном случае загружает 
        соответствующий документ из архива. При значении&nbsp; <em>FALSE</em> выдается 
        то же сообщение об отсутствии документа из системы. </font></td>
    </tr>
</table>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
LoadDoc</strong></font></p>

<p><font face="Arial">В примере вызывается функция LoadDoc, mDoc 
ссылается на обьект типа документ со всеми его свойствами и методами. <br>
Загружается документ для текущей строчки вида просмотра.</font></p>

<p><font face="Arial">Set mDoc =<strong> LoadDoc</strong>(CurrentView.Value(&quot;fISN&quot;))<br>
Set xDoc = <a href="CreateDoc.html">CreateDoc</a>(&quot;HTN92&quot;, mDoc.ISN)<br>
xDoc(&quot;CATEGORY&quot;) = xMsgType<br>
xDoc(&quot;BMDOCNUM&quot;) = nDoc.ISN<br>
xDoc(&quot;REFERENC&quot;) = mDoc(&quot;BMDOCNUM&quot;)<br>
xDoc(&quot;DATE&quot;) = mDoc(&quot;BMIODATE&quot;)<br>
xDoc(&quot;TYPE&quot;) = xMsgType<br>
xDoc.<a href="../../ASDOC/State.html">State</a>=0<br>
xDoc.<a href="../../ASDOC/Show.html">Show</a></font></p>
</body>
</html>
