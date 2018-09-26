<html>
<head>
<title>Документ\GetNextTrans</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство GetNextTrans<br>
<br>
</strong></font><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p><font face="Arial">Возвращает новый логический номер очередной 
транзакции для данного документа, которая увеличивается на единицу при каждом 
его запросе.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.GetNextTrans</strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>GetNextTrans</strong>
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
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Для объединения нескольких проводок в одну транзакцию, необходимо свойству <a href="../ASFACT/Trans.html">
Trans</a>
присвоить одинаковый номер транзакции. Этот номер лучше заранее получить с 
помощью функции GetNextTrans, для генерирования несуществующего номера 
транзакции. Использование этой функции полезно для проводок массовых начислений.</font></p>

<p class="label"><font face="Arial"><a href="../ASFACT/Trans.html">См. 
также<br>
</a></font></p>

<p class="label"><font face="Arial"><b>Тип данных</b></font></p>

<p class="label"><font face="Arial">Длинное целое</font></p>
</body>
</html>
