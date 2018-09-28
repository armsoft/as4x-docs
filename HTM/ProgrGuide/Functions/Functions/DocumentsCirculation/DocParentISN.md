<html>
<head>
<title>Функция ParentISN</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция DocParentIsn</strong></font></p>

<p class="label"><font face="Arial">Возвращает ISN родителя для указанного документа. Если родитель отсутствует, то возвращается&nbsp; 
    значение -1. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial" style="font-style: italic"><strong>DocParentISN ( </strong>
    <em>nISN</em>, 
    sDocType)</font></p>

<p><font face="Arial">Синтаксис функции<strong> DocParentIsn</s
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" width="785">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="215"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="542"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
    <tr>
    <td width="215"><font face="Arial"><em>nISN</em></font></td>
    <td width="542"><font face="Arial">численное выражение типа Long, определяющее 
        внутрисистемный идентификационный код ISN исходного документа, для которого 
        приводится родитель.</font></td>
    </tr>
  <tr>
    <td width="215"><font face="Arial"><em><font face="Arial" 
            style="font-style: italic">sDocType</font><br />
        </em></font></td>
    <td width="542"><font face="Arial">необязательное строковое выражение, определяющее 
        тип возвращаемых или исключаемых типов документа родителя. Если параметр не 
        задан, то функция выдает сообщение об ошибке. Для включения в коллекцию 
        документов определенных типов нужно перечислить типы документов через пробел и 
        значение параметра должно начинаться знаком &quot;+&quot;. Для исключения из коллекции 
        документов определенных типов нужно перечислить типы документов через пробел и 
        значение параметра должно начинаться знаком &quot;-&quot;. </font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>
    </strong>
    <p class="label">Если количество возвращаемых родительских ISN-ов больше одного, то 
        функция выдает сообшение об ошибке.</p>

    <strong> 

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
