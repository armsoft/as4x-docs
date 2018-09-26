<html>
<head>
<title>Документ\SetFactsCreatorState</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство SetFactsCreatorState<br>
<br>
</strong></font><font face="Arial"><a href="../Functions/DocumentsCirculation/StateMovedSUID.html">
См. также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Задает состояние определяющее 
идентификатор пользователя-автора проводок документа. Функция возвращает True, 
если в системном журнале регистрации событий найдено указанное состояние. 
Пользователь, переведший документ в указанное состояние, становится автором 
регистрируемых проводок. Если строки с указанным состоянием в журнале не 
найдено, то функция возвращает False и автор будущих проводок не меняется. <br>
Таким образом данная функция скрытым образом неявно задает автора будущих 
проводок, который определяется из журнала по состоянию. </font></p>

<p class="label"><font face="Arial">Свойство для чтения.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial"><em>object</em><strong>.SetFactsCreatorState</strong> 
(<em>nValue</em>)</font></p>

<p><font face="Arial">Синтаксис свойства <strong>SetFactsCreatorState</strong>
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
	типа, определяющее номер состояния документа, по которому будет определяться 
	автор проводок. Идентификатор автора проводок определяется из таблицы <a href="../../Database/DocLog.html">
	DOCLOG</a>
    по коду пользователя переведшего документ в это состояние. Идентификатор 
	автора проводок фиксируется в таблице <a href="../../Database/Hi.html">HI</a> 
	в поле fSUID. </font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Свойство нужно запрашивать в 
обработчике системного события <a
href="../../ScriptProcs/Action.html">Action</a> перед сохранением проводок. </font></p>
</body>
</html>
