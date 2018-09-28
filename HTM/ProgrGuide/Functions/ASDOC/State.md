<html>
<head>
<title>Документ\State</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство State<br>
<br>
</font></strong><font face="Arial"><a href="LastFixedState.html">См. 
также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает или устанавливает 
состояние документа.</font></p>

<p class="label"><font face="Arial">Свойство для чтения и записи.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial"><em>object</em><strong>.State</strong>[=<em>nValue</em>] 
&nbsp;</font></p>

<p><font face="Arial">Синтаксис свойства <strong>State</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nValue</em></font></td>
    <td width="71%"><font face="Arial">численное выражение целого 
	типа, определяющее номер состояния документа.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">При создании нового экземпляра 
документа, его состояние равно 0. При первой регистрации документа состояние 
переходит в 1. Дальнейшие наращивания состояния производятся из обработчика 
системного события <a
href="../../ScriptProcs/Action.html">Action</a>. Изменения состояния документа 
регистрируются в таблице <a
href="../../Database/DocLog.html">DOCLOG</a> с признаком &#39;C&#39;. <br>
В отличие от свойства <a href="LastFixedState.html">LastFixedState</a>, свойство <strong>
State</strong> возвращает текущее (возможно измененное в скрипте, но не 
запомненное) состояние документа.</font></p>
</body>
</html>
