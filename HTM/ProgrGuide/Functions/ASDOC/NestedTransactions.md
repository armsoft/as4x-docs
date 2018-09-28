<html>
<head>
<title>Документ\NestedTransactions</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство NestedTransactions</strong></font></p>

<p><font face="Arial"><a href="../../ScriptProcs/NestedTransaction.html">
См. также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает количество элементов 
массива, не прошедших вложенную транзакцию, и объект типа <a href="../AsRepViewer.html">
отчет</a>, содержащий сообщения об ошибках. На вход получает одномерный массив, 
для каждого элемента которого автоматически вызывается обработчик системного 
события <a href="../../ScriptProcs/NestedTransaction.html">NestedTransaction</a>
документа. Данное свойство необходимо вызывать в обработчике системного события <a
href="../../ScriptProcs/Action.html">Action</a>. До использования данного 
свойства необходимо закрыть методом <a
href="../ASDATA/CloseCursor.html">CloseCursor</a> все открытые источники данных.</font></p>

<p class="label"><font face="Arial">Свойство для чтения. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.NestedTransactions (</strong><em>
arr, objRepView, </em>[<em>bSeparateTrans</em>], </em>[<em>bShowInStatusBar</em>], </em>[<em>bCheckDocExistence</em>]<strong> )</strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>NestedTransactions</strong>
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
	ссылкой на экземпляр документа</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>arr</em></font></td>
    <td width="71%"><font face="Arial">одномерный массив значений, 
	элементы которого в качестве аргументов автоматически передаются на вход 
	обработчика системного события <a
    href="../../ScriptProcs/NestedTransaction.html">NestedTransaction</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>objRepView</em></font></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на 
	предварительно созданный экземпляр объекта <a
    href="../AsRepViewer.html">отчет</a>, в который автоматически добавляются 
	сгенерированные сообщения об ошибках.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bSeparateTrans</em><strong>
    </strong></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак раздельности транзакций. При значении True 
	транзакции выполняются раздельно, а при значении False - в одной большой 
	транзакции. По умолчанию принимает значение False.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bShowInStatusBar</em><strong>
    </strong></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак показа прогресса в статус баре. По умолчанию принимает значение 
        True.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bCheckDocExistence</em><strong>
    </strong></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак проверки наличия документа в базе данных. По умолчанию принимает значение 
        True.</font></td>
    </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Тип данных</b></font></p>

<p class="label"><font face="Arial">Длинное целое</font></p>
</body>
</html>
