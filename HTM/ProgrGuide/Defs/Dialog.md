<html>
<head>
<title>DialogEx Definition</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Описание описательного диалога</strong></font></p>

<p><font face="Arial">Описывается диалоговое окно с элементами 
управления. Оно служит для получения от пользователя дополнительных параметров 
перед вызовом отчетов или видов просмотра. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font color="#000000" face="Arial"><strong>Dialog</strong> {<strong>Name</strong>
= <em>sDlgName</em>; <br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Caption</strong> = <em>sDlgCaption</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECaption</strong> = <em>sDlgECaption</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Version</strong> = <em>nVersion</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Control</strong> {<strong> Name</strong>
= <em>sNameControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
Caption</strong>
= <em>sCaptionControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
ECaption</strong>
= <em>sECaptionControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Type</strong> 
=
<em>sTypeControl</em>1;</font><font face="Arial"><strong><br>
</strong>
    </font><font color="#000000" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
</font><font face="Arial"><strong>Atributs</strong>=<em>sAtrControl</em>1;</font><font color="#000000" face="Arial"><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
LinkedControl</strong>
= <em>sLinkedControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Top</strong> 
= <em>nTopControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Left</strong> 
=
<em>nLeftControl</em>1; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Width</strong>
= <em>nWidthControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
Height</strong>
= <em>nHeightControl</em>1;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
CommentLen</strong>
= <em>nCommentLenControl</em>1;};<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. . . . .</strong><br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Control</strong> {<strong> Name</strong>
= <em>sNameControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
Caption</strong>
= <em>sCaptionControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
ECaption</strong>
= <em>sECaptionControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Type</strong> 
=
<em>sTypeControl</em>N;</font><font face="Arial"><strong><br>
</strong>
    </font><font color="#000000" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
</font><font face="Arial"><strong>Atributs</strong>=<em>sAtrControl</em></font><font color="#000000" face="Arial">N</font><font face="Arial">;</font><font color="#000000" face="Arial"><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
LinkedControl</strong>
= <em>sLinkedControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Top</strong> 
= <em>nTopControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Left</strong> 
=
<em>nLeftControl</em>N; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Width</strong>
= <em>nWidthControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
Height</strong>
= <em>nHeightControl</em>N;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>
CommentLen</strong>
= <em>nCommentLenControl</em>N;};<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Script</strong> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Subs and Functions</i><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>
</font></p>

<p><font face="Arial">Синтаксис описания описательного диалога состоит 
из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="621">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%" height="1"><font face="Arial"><b>
	Параметр</b></font></td>
    <td class="label" width="71%" height="1"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%" height="12"><font face="Arial"><em>sDlgName</em></font></td>
    <td width="71%" height="12"><font face="Arial">строковое 
	выражение, определяющее идентификатор описательного диалога.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>sDlgCaption</em></font></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее наименование описательного диалога.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>sDlgECaption</em></font></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее наименование описательного диалога на иностранном 
	языке.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>nVersion</em></font></td>
    <td width="71%" height="36"><font face="Arial">численное выражение 
	целого типа, определяющее номер версии описания диалога.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>sNameControl</em></font></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее идентификатор элемента управления.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>sCaptionControl</em></font></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее наименование элемента управления.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>
	sECaptionControl</em></font></td>
    <td width="71%" height="36"><font face="Arial">строковое 
	выражение, определяющее наименование элемента управления на иностранном 
	языке.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%" height="18"><font face="Arial"><em>sTypeControl</em></font></td>
    <td width="71%" height="18"><font face="Arial">строковое 
	выражение, определяющее тип элемента управления.
    </font></td>
  </tr>
  <tr>
    <td width="29%" height="18"><font face="Arial"><em>sAtrControl</em></font></td>
    <td width="71%" height="18"><font face="Arial">строковое 
	выражение, определяющее атрибуты элемента управления. Их может быть сразу 
	несколько. Они принимают значения:<br>
    <strong>B</strong> (скрывает кнопку выбора из списка, а для числовых типов 
	означает показ либо калькулятора либо обработки события DropDown), <br>
    <strong>C</strong> (после выбора значения реквизита (типа Folder или Tree) 
	его наименование не приводится рядом с выбранным значением кода), <br>
	<strong>D</strong> (данный реквизит доступен только для чтения), <strong><br>
	R</strong> (определяет обязательность заполнения данного реквизита),<br>
      <strong>U</strong> (определяет признак преобразования латинских строчных 
	букв на прописные)</font></td>
  </tr>
  <tr>
    <td width="29%" height="72"><font face="Arial"><em>sLinkedControl</em></font></td>
    <td width="71%" height="72"><font face="Arial">строковое 
	выражение, определяющее имя того элемента управления, с которым связывается 
	данный элемент управления. При получения фокуса данный элемент передает его 
	тому элементу с которым он связан. </font></td>
  </tr>
  <tr>
    <td width="29%" height="54"><font face="Arial"><em>nTopControl</em></font></td>
    <td width="71%" height="54"><font face="Arial">числовое выражение, 
	определяющее растояние между верхней гранью диалога и верхней гранью 
	элемента управления.</font></td>
  </tr>
  <tr>
    <td width="29%" height="54"><font face="Arial"><em>nLeftControl</em></font></td>
    <td width="71%" height="54"><font face="Arial">числовое выражение, 
	определяющее растояние между левой вертикальной гранью диалога и левой 
	вертикальной гранью элемента управления.</font></td>
  </tr>
  <tr>
    <td width="29%" height="36"><font face="Arial"><em>nWidthControl</em></font></td>
    <td width="71%" height="36"><font face="Arial">числовое выражение, 
	определяющее ширину элемента управления.</font></td>
  </tr>
  <tr>
    <td width="29%" height="16"><font face="Arial"><em>nHeightControl</em></font></td>
    <td width="71%" height="16"><font face="Arial">числовое выражение, 
	определяющее высоту элемента управления. Он имеет смысл только если тип 
	элемента управления установлен Frame.</font></td>
  </tr>
  <tr>
    <td width="29%" height="14"><font color="#000000" face="Arial"><em>
	nCommentLenControl</em></font></td>
    <td width="71%" height="14"><font face="Arial">числовое выражение, 
	определяющее максимальное количество символов комментария для элементов 
	управлений типов </font><font face="Arial"> <a
href="../Types/Folder().html">Folder ()</a>,</font><font face="Arial"> </font><font face="Arial"><a
href="../Types/Tree().html">Tree ()</a> </font><font face="Arial"> и </font><font face="Arial"><a
href="../Types/Amacc.html">AmAcc</a></font><font face="Arial">.&nbsp;</font></td>
  </tr>
  <tr>
    <td width="29%" height="54"><font color="#000000" face="Arial"><i>
	Subs and Functions</i></font></td>
    <td width="71%" height="54"><font face="Arial">скриптовый раздел 
	описания, который может содержать <a
    href="../scriptstproced.html">обработчики системных событий</a>
    и пользовательские процедуры и функции.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p class="label"><font face="Arial">Тип элемента управления может быть 
одним из внутреннних типов <a
href="../Types/Amacc.html">AmAcc</a>, <a href="../Types/Boolean.html">Boolean</a>, <a
href="../Types/c().html">C ()</a>, <a href="../Types/Ch().html">Ch ()</a>, <a
href="../Types/Date.html">Date</a>, <a href="../Types/Daterep.html">DateRep</a>, <a
href="../Types/Folder().html">Folder ()</a>, <a href="../Types/FULLTREE().html">
FullTree ()</a>,
<a href="../Types/n().html">N ()</a>, <a href="../Types/np().html">NP ()</a>, <a
href="../Types/Summa.html">Summa</a>, <a href="../Types/Summap.html">SummaP</a>, <a
href="../Types/Tree().html">Tree ()</a> или одним из следующих типов:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr>
    <td width="29%"><font face="Arial"><em>Frame</em></font></td>
    <td width="71%"><font face="Arial">для разделения функциональности 
	диалога и группировки злементов управления.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Label</em></font></td>
    <td width="71%"><font face="Arial">для показа текста в виде метки, 
	не подлежащее изменению пользователем.</font></td>
  </tr>
  <tr>
    <td width="29%"><font color="#000000" face="Arial"><i>Line</i></font></td>
    <td width="71%"><font face="Arial">для изображения горизонтальной 
	линии.</font></td>
  </tr>
  <tr>
    <td width="29%"><i><font face="Arial">View</font></i></td>
    <td width="71%"><font face="Arial">реквизит типа 
    <a href="../Functions/AsModalBrowser.html">произвольный вспомогательный 
	список выбора</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><i><font face="Arial">MultiSelectView</font></i></td>
    <td width="71%"><font face="Arial">реквизит типа 
    <a href="../Functions/AsModalBrowser.html">произвольный вспомогательный 
	список выбора</a>, с возможностью <a href="../Functions/AsModalBrowser/MultiSelect.html">
	отбора нескольких строк</a>.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Дальнейшая загрузка и <a href="../Functions/AsDialogEx/Show.html">показ</a>
описанного диалога осуществляется методом <a href="../Functions/Functions/SysDefManagment/LoadDialog.html">
LoadDialog</a>.</font></p>

<p class="label"><font face="Arial"><a href="../Defs.html">См. также</a></font></p>
</body>
</html>
