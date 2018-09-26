<html>
<head>
<title>DeleteTrans</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод DeleteTrans</strong></font></p>

<p><font face="Arial">Удаляет проводочную транзакцию для указанного 
документа-основания. При удалении генерируется системное событие учета <a href="../../../ScriptProcs/OnDelete.html">
OnDelete</a>,&nbsp;корректируются остатки и потом только проверяются лимиты объекта 
учета. Во время проверок лимита может быть сгенерирована ошибка и для отката 
совершенных действий, перед использованием метода DeleteTrans нужно <a href="../TransactionManagment/BeginTrans.html">
включить</a>
механизм слежения транзакции, а после использования метода <a href="../TransactionManagment/CommitTrans.html">
отключить</a>
его. Если вызов метода происходит из обработчика системного события <a href="../../../ScriptProcs/Action.html">
Action</a>, то нет надобности включать метод DeleteTrans в транзакционный блок, 
т.к. обработчик ссистемного события <a href="../../../ScriptProcs/Action.html">
Action</a> уже находится в нем.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>DeleteTrans (</strong><em>ISNorDOC, 
Trans</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>DeleteTrans</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>ISNorDOC</em></font></td>
    <td class="label" width="71%"><font face="Arial">выражение типа 
	Variant, определяющее либо внутрисистемный идентификационный код ISN либо 
	сам документ-основание удаляемой транзакции. В первом случае проверки 
	лимитов происходят внутри метода <strong>DeleteTrans. </strong>Во втором 
	случае, если вызов метода произошел из обработчика системного события <a href="../../../ScriptProcs/Action.html">
	Action</a>, то проверки лимитов откладываются до завершения выполнения 
	Action.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>Trans</em></font></td>
    <td class="label" width="71%"><font face="Arial">численное 
	выражение типа Long, определяющее номер удаляемой транзакции.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../TransactionManagment/InTrans.html"><font face="Arial">
См. также</font></a></p>

<p>&nbsp;</p>

<p><font face="Arial"><br>
</font></p>
</body>
</html>
