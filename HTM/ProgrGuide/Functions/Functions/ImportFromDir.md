<html>
<head>
<title>ImportFromDir</title>
</head>

<body>

<p><strong><font face="Arial" size="4">Метод</font></strong><font size="4" face="Arial"><strong> 
ImportFromDir<br>
</strong></font><font face="Arial"><a href="Import.html">См. также</a>&nbsp;
</font></p>

<p class="label"><font face="Arial">Импортирует файлы в формате 
экспорта/импорта AS-3X из определенного каталога.<br>
&nbsp;</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.ImportFromDir </strong><em>
sFolderName, sMoveToFolderName, sErrDocsFolder, sLogFileName, </em>[<em>sFileMask</em>]<em>, </em>
[<em>nErrCount</em>]<em>,&nbsp; </em>[<em>nFileCount</em>]<em>,</em>[<em>sDocList</em>]<em>, </em>
[<em>sTreeList</em>]<em>, </em>[<em>sParamList</em>]</font></p>

<p><font face="Arial">Синтаксис функции <strong>ImportFromDir </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" width="758">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="231"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="499"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="231"><em><font face="Arial">sFolderName</font></em></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее путь к каталогу из которого осуществляется импорт.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>sMoveToFolderName</em></font></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее путь к каталогу куда перемещаются принятые файлы.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>sErrDocsFolder</em></font></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее путь к каталогу в который будут записаны объекты при импорте 
	которых произошла ошибка.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>sLogFileName</em></font></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее путь к файлу лога.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>sFileMask</em></font></td>
    <td width="499"><font face="Arial">необязательное строковое 
	выражение, определяющее маску импортируемых файлов. По умолчанию - &quot;*.txt&quot;.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>nErrCount</em></font></td>
    <td width="499"><font face="Arial">необязательная переменная, 
	возвращающая количество произошедших ошибок.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>nFileCount</em></font></td>
    <td width="499"><font face="Arial">необязательная переменная, 
	возвращающая количество рассмотренных файлов.</font></td>
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

<p class="label"><font face="Arial"><a href="Import.html">См. также</a></font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Пример функции </b></font>
<font size="4" face="Arial"><strong>ImportFromDir</strong></font></p>

<p class="label"><font face="Arial">Dim ErrCount As Long, FileCount as 
Long<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; call Util.ImportFromDir(&quot;C:\ImpFold&quot;, &quot;C:\InFold&quot;, 
&quot;C:\ErrFold&quot;, &quot;C:\log.txt&quot;, &quot;*.as&quot;, ErrCount, FileCount, &quot;MemOrd,Cli&quot;)<br>
&nbsp;&nbsp;&nbsp;&nbsp; If ErrCount &gt; 0 Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AsMsgBox &quot;Imported with 
errors.&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; Else<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AsMsgBox &quot;Succeed&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; End If</font></p>

</body>
</html>
