<html>
<head>
<title>Структура документа\PageCaption</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство PageCaption<br>
<br>
</font></strong><font face="Arial"><a href="../ASDocStructure.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../ASDocStructure.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Меняет заголовок страницы документа перед его показом. 
    </font></p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial">object<strong>.PageCaption(</strong><em>pageName</em><strong>) </strong>
    = caption</font></p>

<p><font face="Arial">Синтаксис свойства <strong>PageCaption</strong>
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
	ссылкой на экземпляр объекта структуры документа.</font></td>
  </tr>
    <tr>
    <td width="29%"><em><font face="Arial">pageName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее идентификатор 
        или индекс страницы документа.</font></td>
    </tr>
    <tr>
    <td width="29%"><em><font face="Arial">caption</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее новый 
        заголовок страницы документа.</font></td>
    </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>
    <p class="label"><font face="Arial"><b>Примечание</b></font></p>
    <p class="label"><font face="Arial">Заметим, что заголовок, установленный свойством
        <strong>PageCaption</strong> 
                                                    и заголовок, возвращаемый функцией <a href="../Functions/DocumentsCirculation/DocPageCaption.html">PageCaption</a> 
                                                    не будут совпадать, поскольку функция <a href="../Functions/DocumentsCirculation/DocPageCaption.html">PageCaption</a> 
                                                    возвращает заголовок, зафиксированный в классе 
        <strong>ASDocDef</strong> при описании документа, а свойство <strong>PageCaption</strong> меняет 
                                                    не заголовок страницы в классе 
        <strong>ASDocDef</strong>, а его визуальное значение, которое мы видим при показе документа. </font></p>

</body>
</html>
