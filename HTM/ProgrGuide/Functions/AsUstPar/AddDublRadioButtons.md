<html>
<head>
<title>Диалог\AddDublRadioButtons</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод AddDublRadioButtons<br>
<br>
</font></strong><font face="Arial"><a href="../Asustpar.html">См. также</a>&nbsp;
<a href="../../Examples/E_AsUstPar.html">Пример</a>&nbsp; <a href="../Asustpar.html">
Применяется к</a></font></p>

<p><font face="Arial">Добавляет вторичную группу селективных кнопок в 
пользовательский диалог. Причем данный группа на форме располагается не к низу 
от текущей группы с селективных кнопок, а рядом с ней.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>call</strong> <em>object</em>.<strong>AddDublRadioButtons(</strong><em>DublRekvName</em><strong>,
</strong><em>RekvName, CaptionRekv, xButtonArray</em></font>, <font face="Arial"><em>
TypeRekv</em><strong>, </strong>[<em>AttribRekv</em>]<em>, </em>[<em>ValueRekv</em>]<strong>,
</strong>[<em>nlblDistance</em>]<strong>, </strong>[<em>bAtLeft</em>]<strong>, </strong>
[<em>ECaptionRekv</em>]<strong>, </strong>[<em>iSaveValue</em>]<strong> )</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>AddDublRadioButtons </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="330">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%" height="18"><font face="Arial"><b>
	Параметр</b></font></td>
    <td class="label" width="71%" height="18"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><em><font face="Arial">object</font></em></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее переменную, ссылающуюся на экземпляр объекта 
	пользовательского диалога.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><em><font face="Arial">DublRekvName</font></em></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее идентификатор вторичной группы селективных кнопок в 
	диалоге.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>RekvName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор группы селективных кнопок в диалоге, рядом с 
	которым будет расположена данная группа селективных кнопок.</font></td>
  </tr>
	<tr>
    <td width="29%"><font face="Arial"><em>CaptionRekv</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок группы селективных кнопок в диалоге.</font></td>
  </tr>
	<tr>
    <td width="29%"><font face="Arial"><em>xButtonArray</em></font></td>
    <td width="71%"><font face="Arial">выражение типа
	<a href="../Functions/CreateXArrayDB.html">XArrayDB</a>, определяющее 
	коллекцию селективных кнопок. Состоит из двух колонок. В первой колонке 
	задается код селективной кнопки, а во второй колонке - наименование. </font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">TypeRekv</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../types.html">тип</a> кода селективной кнопки в 
	диалоге.</font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">AttribRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="Attribute.html">атрибут</a> группы 
	селективных кнопок.</font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">ValueRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Variant, определяющее код селективной кнопки, значение которого равно 1. </font></td>
  </tr>
	<tr>
    <td width="29%"><font face="Arial"><em>nlblDistance</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее расстояние между кнопкой и наименованием. По 
	умолчанию принимает значение 0.</font></td>
  </tr>
	<tr>
    <td width="29%"><font face="Arial"><em>bAtLeft</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак показа наименования слева от кнопки. При 
	значении True - наименование слева от кнопки, а при False - справа. По 
	умолчанию принимает значение True.</font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">ECaptionRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее заголовок группы селективных кнопок в диалоге на 
	иностранном языке.</font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">iSaveValue</font></em></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее признак запоминания значений группы селективных 
	кнопок. При 1 - текущее значение реквизита запоминается в реестре, а при 
	значении 0 - нет. По умолчанию принимает значение 1.</font></td>
  </tr>
</TBODY>
  </table>

</body>
</html>
