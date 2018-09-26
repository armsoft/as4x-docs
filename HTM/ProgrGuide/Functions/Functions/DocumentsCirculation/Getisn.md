<html>
<head>
<title>GetISN</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция GetISN</strong></font></p>

<p><font face="Arial">Возвращает ISN документа по имени папки и ключу.</font></p>

<p class="label"><font face="Arial">Возвращает численное значение типа 
Long. Если элемент не найден, то возвращается -1.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetISN</strong>(<em>FolderId, Key</em>)</font></p>

<p><font face="Arial">Синтаксис функции <b>GetISN</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">FolderId</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор папки </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Key</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее ключ элемента в папке</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="FolderElProp.html"><font face="Arial">См. 
также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример свойства GetISN</strong></font></h1>

<p><font size="3" face="Arial">Числовой переменной </font><font
face="Arial">sISN присваивается значение ISN документа в папке ACC с 
ключевым значением равным значению&nbsp; реквизита SCHDEB.</font></p>

<p><font face="Arial">sISN = <strong>GetISN</strong>(&quot;ACC&quot;, 
Doc(&quot;SCHDEB&quot;))<br>
</font></p>
</body>
</html>
