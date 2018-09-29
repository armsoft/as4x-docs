<html>
<head>
<title>Диалог\AddMultiSelectFolderControl</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод AddMultiSelectFolderControl<br>
<br>
</strong></font><font face="Arial"><a href="AddMultiSelectViewControl.html">См. 
также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asustpar.html">Применяется к</a></font></p>

<p><font face="Arial">Добавляет в пользовательский диалог реквизит 
типа папки, с возможностью отбора нескольких 
строк. Вспомогательный список содержит две колонки: код и наименование папки. 
Наименование приводится исходя из системного языка.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>call</strong> <em>object</em>.<strong>AddMultiSelectFolderControl 
(</strong><em>sControlName, sControlCaption, sControlЕCaption, sFolderId</em><strong>, </strong><em>
nKeyLen, </em>[<em>AttribRekv</em>]<em>, </em>[<em>ValueRekv</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>
AddMultiSelectViewControl</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта пользовательского 
	диалога.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sControlName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор реквизита в диалоге.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sControlCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок реквизита в диалоге.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sControlЕCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок реквизита в диалоге на иностранном языке.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sFolderId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее 
	идентификатор папки. Максимально допустимая длина идентификатора папки 20 
	символов.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>nKeyLen</em></font></td>
    <td width="71%"><font face="Arial">числовое выражение, определяющее длину 
	ключа папки.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">AttribRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="Attribute.html">атрибуты</a>
    реквизита (их может быть несколько). </font></td>
  </tr>
<tr>
    <td width="29%"><em><font face="Arial">ValueRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Variant, определяющее первоначальное значение реквизита.</font></td>
  </tr>
  </table>

</body>
</html>