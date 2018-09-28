<html>
<head>
<title>ShowImportWindow</title>
</head>

<body>

<p><strong><font face="Arial" size="4">Метод </font></strong><font size="4" face="Arial"><strong>
ShowImportWindow</strong></font></p>

<p><font face="Arial">Активизирует окно импорта для указанных 
документов, деревьев и параметров. Если списки указываемых типов пусты, то 
импортируются все документы.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.ShowImportWindow (</strong>[<em>sDocList</em>] 
[<em>, sTreeList</em>] [<em>, sParamList</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>ShowImportWindow</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>sDocList</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	строковое выражение, определяющее список типов импортируемых документов. В 
	списке значения перечисляются через запятую.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>sTreeList</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	строковое выражение, определяющее список типов импортируемых деревьев. В 
	списке значения перечисляются через запятую.</font> </td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>sParamList</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	строковое выражение, определяющее список типов импортируемых параметров. В 
	списке значения перечисляются через запятую.</font> </td>
  </tr>
</table>

<p class="label">&nbsp;</p>
<p class="label"><font face="Arial"><b>Примечание</b></font></p>
<p class="label"><a href="../../functions.html"><font face="Arial">См. 
также</font></a></p>
<p class="label">&nbsp;</p>
<p><strong><font face="Arial" size="3">Пример
</font></strong><font face="Arial"><b>метода</b> </font><strong><font face="Arial">
ShowImportWindow</font></strong></p>
<p><font face="Arial">call Util.ShowImportWindow 
(&quot;MemOrd,ConvOrd&quot;,&quot;KASSA,IncExp&quot;,&quot;BANKWEBPORT,BANKWEBURL&quot;)<br>
</font></p>
</body>
</html>
