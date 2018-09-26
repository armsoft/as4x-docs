<html>
<head>
<title>ReindexDocs</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод ReindexDocs</strong></font></p>

<p class="label"><font face="Arial">Выполняет переиндексацию для 
указанных типов документов.</font></p>
<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.ReindexDocs (</strong><em>xErrRepViewer, 
sParam1, </em>[<em>sParam2</em>]<em>, </em>[<em>dStartDate</em>],[<em>dEndDate</em>],[bCheckDocType])</font></p>

<p><font face="Arial">Синтаксис метода <strong>ReindexDocs </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" width="758">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="231"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="499"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="231"><em><font face="Arial">xErrRepViewer</font></em></td>
    <td width="499"><font face="Arial">переменная, ссылающаяся на 
	предварительно созданный экземпляр объекта <a href="../AsRepViewer.html">
    отчет</a>, в который добавляются сообщения об ошибках при индексации.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>sParam1</em></font></td>
    <td width="499"><font face="Arial">строковое выражение, 
	определяющее фильтр типов индексируемых документов. Типы документов нужно 
	перечислить через запятую.</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>sParam2</em></font></td>
    <td width="499"><font face="Arial">необязательное строковое 
	выражение, определяющее постфиксы для типов документ, перечисляемые через 
	запятую. Если данный параметр задан, то чтобы получить типы индексируемых 
	документ нужно взять декартовое произведение <em>sParam1 </em>и <em>sParam2</em>. 
	Например, если <em>sParam1</em>={SS,MemOrd} и <em>sParam2</em>={1,2,3}, то
    <i>типы_индексируемых_документов</i> ={SS1,SS2,SS3,MemOrd1,MemOrd2,MemOrd3}</font></td>
  </tr>
  <tr>
    <td width="231"><font face="Arial"><em>dStartDate</em></font></td>
    <td width="499"><font face="Arial">необязательное выражение типа 
	Variant, определяющее дату. Индексируются только те документы, которые были 
	созданны после этой даты.</font></td>
  </tr>
    <tr>
    <td width="231"><font face="Arial"><em>dEndDate</em></font></td>
    <td width="499"><font face="Arial">необязательное выражение типа 
	Variant, определяющее дату. Индексируются только те документы, которые были 
	созданны до этой даты.</font></td>
    </tr>
  <tr>
    <td width="231"><font face="Arial"><em>bCheckDocType</em></font></td>
    <td width="499"><font face="Arial">       
        необязательное выражение логического типа, определяющее проверку типа документа.&nbsp; 
        При значении True проверяется существование описаний индексируемых типов 
        документов. Если не задан, то принимается значение по умолчанию True.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b> </font></p>

<p class="label"><a href="../../functions.html"><font face="Arial">См. 
также</font></a></p>

</body>
</html>
