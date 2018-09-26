<html>
<head>
<title>SelectItem</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод SelectItem<br>
<br>
</strong></font><font face="Arial"><a href="../FrmEditTree.html">См. 
также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../FrmEditTree.html">Применяется к</a></font></p>

<p><font face="Arial">Данный метод определяет текущий элемент формы прокрутки дерева-спаравочника 
    по заданному коду, т.е. 
перемещает курсор текущего выбора к тому элементу, которая соответствует значению sCode.
</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.SelectItem</strong>([<em>sCode</em>])</font></p>

<p><font face="Arial">Синтаксис метода <strong>SelectItem</strong>
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
	ссылкой на форму прокрутки текущего дерева-справочника.</font></td>
  </tr>
   <tr>
    <td width="29%"><font face="Arial"><em>sCode</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
        код текущего элемента. Если значение sCode не задано, то курсор перемещается к 
        корню&nbsp; дерева.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Перед вызовом данного метода 
необходимо, чтобы значение <em>sCode </em>&nbsp;было загружено из базы данных.</font></p>
    <p class="label">&nbsp;</p>
    <p class="label"><strong><font size="3" face="Arial">Пример метода </font><font size="4" face="Arial">
        SelectItem</font></strong></p>

<p><font face="Arial">В данном примере метод <strong>SelectItem </strong>вызывается<strong> </strong>в скриптовой части текущего дерева 
    при обработке события <a href="../../ScriptProcs/OnFunctionAdd_Tree.html">OnFunctionAdd</a>. 
    Поскольку&nbsp; <strong>SelectItem</strong>("") вызывается без параметра, то при 
    попытке добавления какого-нибудь узла в форму прокрутки текущего 
    дерева-справочника, курсор переместиться к корню дерева.</font></p>

<p><font face="Arial">
Public Sub OnFunctionAdd()
    <br />
&nbsp;&nbsp;&nbsp; CurrentTree.<strong>SelectItem</strong>("")<br />
End Sub</strong></font></p>
    <p class="label">&nbsp;</p>

<p class="label">&nbsp;</p>
</body>
</html>
