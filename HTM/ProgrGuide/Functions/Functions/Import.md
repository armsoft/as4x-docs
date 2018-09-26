<html>
<head>
<title>Import</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция Import</strong></font></p>

<p class="label"><font face="Arial">Импортирует <a href="../Asdoc.html">
документы</a>, <a href="../AsTreeElement.html">элементы дерева</a> и параметры из 
файла в формате экспорта/импорта AS-3X. Возвращает количество ошибок при импорте 
или -1, если файл не возможно импортировать.<br>
&nbsp;</font></p>

<p class="label"><font face="Arial">Возвращаемое значение длинное 
целое.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.Import (</strong><em>sFileName, 
sFailedFileName, xErrRepViewer, </em>[<em>sDocList</em>]<em>, </em>[<em>sTreeList</em>]<em>, </em>
[<em>sParamList</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>Import </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" width="758">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="231"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="499"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="231"><font face="Arial"><em>s</em></font><em><font face="Arial">FileName</font></em></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее путь к файлу из которого осуществляется импорт.</font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">sFailedFileName</font></em></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее путь к файлу в который будут записаны объекты при импорте 
	которых произошла ошибка.</font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">xErrRepViewer</font></em></td>
    <td width="499"><font face="Arial">переменная, ссылающаяся на 
	предварительно созданный экземпляр объекта <a href="../AsRepViewer.html">
    отчет</a>, в который добавляются сообщения об ошибках при импорте.</font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">sDocList</font></em></td>
    <td width="499"><font face="Arial">необязательное строковое 
	выражение, определяющее фильтр для документов. Если параметр не задан, то 
	импортируются все документы. Для импорта только определенных типов нужно 
	перечислить эти типы через запятую.</font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">sTreeList</font></em></td>
    <td width="499"><font face="Arial">необязательное строковое 
	выражение, определяющее фильтр для элементов дерева. Если параметр не задан, 
	то импортируются все элементы дерева. Для импорта только определенных типов 
	нужно перечислить эти типы через запятую. </font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">sParamList</font></em></td>
    <td width="499"><font face="Arial">необязательное строковое 
	выражение, определяющее фильтр для параметров. Если параметр не задан, то 
	импортируются все параметры. Для импорта только определенных типов нужно 
	перечислить эти типы через запятую.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b> </font></p>

<p class="label"><a href="../../functions.html"><font face="Arial">См. 
также</font></a></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Пример функции Import</b></font></p>

<p class="label"><font face="Arial">Dim xRepVier As AsRepViewer<br>
Dim ErrCount As Long<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; ErrCount = Util.Import(&quot;C:\12.txt&quot;, &quot;C:\errDocs.txt&quot;, 
xRepVier, &quot;MemOrd,Cli&quot;)<br>
&nbsp;&nbsp;&nbsp;&nbsp; If ErrCount = -1 Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AsMsgBox &quot;Invalid file&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; ElseIf ErrCount &gt; 0 Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xRepVier.Show<br>
&nbsp;&nbsp;&nbsp;&nbsp; Else<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AsMsgBox &quot;Succeed&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; End If</font></p>

</body>
</html>
