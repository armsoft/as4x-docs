<html>
<head>
<title>Документ\SendMessage</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод SendMessage<br>
<br>
</font></strong><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Посылает сообщение от текущего 
документа к документу-получателю с указанным ISN. В документе-получателе 
сообщения срабатывает системное событие <a
href="../../ScriptProcs/PostMessage.html">PostMessage</a> (если, конечно, она 
имеется в описании документа-получателя), в <a
href="../../Database/DocLog.html">историю</a>
документа-получателя <a href="WriteLog.html">записывается</a>
посланное сообщение и в конце, для документа-получателя срабатывает метод <a
href="CheckAndStore.html">CheckAndStore</a> с аргументом 2.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.SendMessage </strong>(<em>
sMessage, </em>[<em>nISN</em>], [<em>sMessageForDOCLOG</em>], [<em>bRaiseErrIFParentNotExixsts</em>] 
)</font></p>

<p><font face="Arial">Синтаксис метода <strong>SendMessage</strong>
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
	ссылкой на экземпляр документа.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>sMessage</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее текст посылаемого сообщения.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nISN</font></em></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Long, определяющее ISN документа-получателя сообщения. Если 
	параметр опущен, то сообщение посылается родителю (если, конечно он 
	существует) текущего документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sMessageForDOCLOG</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее текст сообщения для записи в журнал истории 
	изменений документа <a href="../../Database/DocLog.html">DOCLOG</a>. Если 
	данный параметр опущен, то в журнал изменений будет записано значение 
	параметра <em>sMessage</em>. </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bRaiseErrIFParentNotExixsts</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак генерирования ошибки при отcутствии родителя 
	документа-получателя. По умолчанию принимает значение True.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>
</body>
</html>
