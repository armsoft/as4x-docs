<html>
<head>
<title>Системное событие BeforeShow</title>
<style type="text/css">
.auto-style1 {
	font-family: Arial;
}
.auto-style2 {
	color: #000000;
}
</style>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие BeforeShow <br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; Пример&nbsp;
<a href="../Functions/Astree.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Происходит перед открытием немодального&nbsp; 
браузера дерева .</font></p>

<p class="label">&nbsp;</p>
<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong><font size="4" face="Arial"><font size="3">
BeforeShow</font></font></strong>(ByRef <em>AllowEdit</em> as Boolean,ByRef <em>
AllowView</em> as Boolean,ByRef <em>AllowDelete</em> as Boolean,ByRef <em>
AllowAddNode</em> as Boolean,ByRef <em>AllowExport</em> as Boolean, ByRef <em>
AllowAddDocs</em> as Boolean)<br>
<em>&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial">Синтаксис события <strong><font size="4" face="Arial">BeforeShow
</font></strong>состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
    <tr>
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>AllowEdit</em> </font></td>
    <td width="71%"><span class="auto-style1">Разрешение на редактирования 
	элемента дерева</span><font face="Arial">.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>AllowView</em> </font></td>
    <td width="71%"><span class="auto-style1">Разрешение на просмотр элемента 
	дерева</span><font face="Arial">.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>AllowDelete</em> </font></td>
    <td width="71%"><span class="auto-style1">Разрешение на удаление элемента 
	дерева</span><font face="Arial">.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>AllowAddNode</em> </font></td>
    <td width="71%"><span class="auto-style1">Разрешение на добавления узла 
	дерева</span><font face="Arial">.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>AllowExport</em> </font></td>
    <td width="71%"><span class="auto-style1">Разрешение на экспорт дерева</span><font face="Arial">.</font></td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>AllowAddDocs</em> </font></td>
    <td width="71%"><span class="auto-style1">Разрешение на добавление 
	документов в дерево.</span></td>
  </tr>
</table>
<p><font face="Arial"><b>Примечание</b></font></p>
<p><font face="Arial">Если событие <font size="3" face="Arial">
BeforeShow </font>обрабатывает<font size="4" face="Arial">,<span class="auto-style2"><font size="3">то 
значения свойств дерева
<font face="Arial" size="3"><a
    href="../Functions/ASTree/AllowAddNode.html">AllowAddNode</a></font>,
<font face="Arial" size="3"><a
    href="../Functions/ASTree/AllowDelete.html">AllowDelete</a>, <font face="Arial">
<a href="../Functions/ASTree/AllowEdit.html">
	AllowEdit</a>, <font face="Arial" size="3">
	<a href="../Functions/ASTREE/AllowExport.html">AllowExport</a>,
<a href="../Functions/ASTREE/AllowView.html"><font face="Arial">
	AllowView</font></a>&nbsp; игнорируются.</font></font></font></font></span></font></font></p>
</body>
</html>
