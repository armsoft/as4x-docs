<html>
<head>
<title>ImportFromString</title>
<style type="text/css">
.style1 {
	font-family: Arial;
}
</style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция CreateDocsFromString</strong></font></p>

<p class="label"><span class="style1">Создает массив</span><font face="Arial"> <a href="../Asdoc.html">
документов</a> из 
строки в формате экспорта/импорта AS-3X. Возвращает количество ошибок при 
создании или -1, если строку не возможно импортировать. Созданные документы не 
сохранены еще в базе.<br>
&nbsp;</font></p>

<p class="label"><font face="Arial">Возвращаемое значение длинное 
целое.</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.CreateDocsFromString(</strong><em>sString</em><em>, 
xDocs<span lang="en-us">, </span>xErrRepViewer, RaiseErrorIfRekvNotExists, </em>[<em>sDocList</em>]<strong>)</strong></font></p>
<p><font face="Arial">Синтаксис функции <strong>ImportFromString </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" width="758">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="231"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="499"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="231"><font face="Arial"><em>s</em></font><em><font face="Arial">FileName</font></em></td>
    <td width="499"><font face="Arial">строковое выражение, содержащее 
	в себе импортируюмую информацию.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>xDocs</em></font></td>
    <td width="499"><font face="Arial">массив созданых документов.</font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">xErrRepViewer</font></em></td>
    <td width="499"><font face="Arial">переменная, ссылающаяся на 
	предварительно созданный экземпляр объекта <a href="../AsRepViewer.html">
    отчет</a>, в который добавляются сообщения об ошибках при импорте.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>RaiseErrorIfRekvNotExists</em></font></td>
    <td width="499"><font face="Arial"><span lang="ru">признак генерировать ли 
	ошибку, если реквизит с данным именем в описании документа не найден</span>.</font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">sDocList</font></em></td>
    <td width="499"><font face="Arial">необязательное строковое 
	выражение, определяющее фильтр для документов. Если параметр не задан, то 
	создаются все документы. Для создания только определенных типов нужно 
	перечислить эти типы через запятую.</font></td>
  </tr>
  </table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b> </font></p>

<p class="label"><a href="../../functions.html"><font face="Arial">См. 
также</font></a></p>

</body>
</html>
