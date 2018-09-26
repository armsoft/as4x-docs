<html>
<head>
<title>Документ\Show</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Метод Show<br>
<br>
</strong></font><a href="../../Constants/const_doc_States.html">См. также</a>&nbsp; <u>
Пример</u>&nbsp;
<a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Активизирует документ выводя его 
на экран в указанном режиме.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.Show </strong>[<em>intMode</em>]<em>,
</em>[<em>xForm</em>, <em>lngISN</em>], [<em>nTop</em>], [<em>nLeft</em>], [<em>bDisableDraft</em>]</font></p>

<p><font face="Arial">Синтаксис метода <strong>Show</strong>
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
  <tr>
    <td width="29%"><font face="Arial"><em>intMode</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее режим в котором открывается данный документ. По 
	умолчанию вызывается в режиме создания нового документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>xForm</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее форму из которой вызывается документ. Если 
	необходимо отобразить изменения в форме вида просмотра, то в качестве 
	параметра передается &quot;CurrentView&quot;.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>lngISN</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее ISN документа, для которого по умолчанию 
	производится обновление формы. При значении -1 обновление в форме прокрутки 
	документов производится для текущего документа, при значении -2 - для всей 
	формы, а при других значений - для документов с данным ISN-ом.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nTop</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Single, определяющее расстояние между верхним краем экрана и 
	верхним краем формы документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nLeft</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Single, определяющее расстояние между левым краем экрана и левым краем формы 
	документа.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bDisableDraft</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее признак выключения кнопки Draft. 
        По умолчанию принимает значение False.</font></td>
    </tr>
</table>

<p class="label"><font face="Arial">Следует заметить, что без задания 
второго параметра <em>xForm,</em> передача третьего параметра <em>lngISN</em> не 
имеет смысла.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>intMode</em> <a
href="../../Constants/const_doc_States.html">следующие</a>.</font></p>

<p><font face="Arial"><b><br>
Примечание<br>
<br>
</b>Если параметр <em>intMode</em> опущен и активизируемый документ не новый, то 
он открывается в режиме <a href="../../Constants/const_doc_States.html"><strong>
ASOriginalMode</strong></a>.</font></p>
</body>
</html>
