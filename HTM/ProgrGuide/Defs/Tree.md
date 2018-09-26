<html>
<head>
<title>Tree Definition</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Описание дерева-справочника</font></strong></p>

<p><font face="Arial">Описывается дерево-справочник. Оно может быть 
либо одноуровневым либо многоуровневым иерархическим. Дерево может содержать 
простые узлы, содержащие только код и наименование, узлы документов и конечные 
лепестки документы. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>TREE</strong> { <strong>Name</strong> = <em>
sTreeName</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Caption</strong> 
= <em>sTreeCaption</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ECaption</strong> 
= <em>sTreeECaption</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Description</strong> 
= <em>sTreeDescription</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Type</strong> =<em> 
nType</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CodeLen</strong> 
= <em>nCodeLen</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UpperCase </strong> 
= <em>
nUpperCase</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowEdit</strong> 
= <em>nAllowEdit</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowView</strong> 
= <em>nAllowView</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowDelete</strong> 
=<em>
nAllowDelete</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowAddNode</strong> 
= <em>nAllowAddNode</em>;<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowExport</strong> = <em>
nAllowExport</em>;<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowHistory</strong> = <em>
nAllowHistory</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doc</strong> { = <em>
sDocName1</em>;&nbsp; . . . . .; = <em>sDocNameN</em>; };<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DefaultFunction</strong> 
= <em>sFuncName</em>;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&nbsp;&nbsp;&nbsp; SelectNonDoc</strong> 
    = <em>nAllowSelectNonDoc</em><br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Version</strong> 
= <em>nVersion</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Script</strong> {<br>
<em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
&nbsp;&nbsp;&nbsp; </em></font><font color="#000000"
face="Arial"><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Subs and Functions</i></font></p>

<p><font face="Arial"><em>&nbsp;&nbsp;&nbsp; </em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; };</font></p>

<p><font face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }; <br>
<br>
</font></p>

<p><font face="Arial">Синтаксис описания дерева-справочника состоит из 
следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее значение идентификатора дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeECaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок дерева на иностранном языке.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sTreeDescription</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее краткое описание дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nType</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	определяющее тип дерева. Оно принимает значения: <br>
    1 - одноуровневый справочник или <br>
    2 - многоуровневое дерево-справочник</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nCodeLen</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	определяющее длину кода дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nUpperCase</font></em></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, принимающее значения 1 или 0, определяющее признак транслации 
	строчных букв английского алфавита в заглавные в коде добавляемой ветви. По 
	умолчанию - 0.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nAllowEdit</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0, <br>
    определяющее разрешение на корректировку узла дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nAllowView</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0, <br>
    определяющее разрешение на просмотр узла дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nAllowDelete</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0,<br>
    определяющее разрешение на удаление узла дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nAllowAddNode</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0,<br>
    определяющее разрешение на добавление узла в дереве.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nAllowExport</font></em></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0,<br>
    определяющее разрешение на экспортирование узла дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nAllowHistory</font></em></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0,<br>
    определяющее разрешение на просмотр истории документов узлов дерева. По умолчанию - 1.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sDocName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификаторы <a href="doc.html">документов</a>, входящих в 
	дерево справочник. Узлами и лепестками дерева могут быть различного рода 
	документы, причем их чередование в иерархии дерева никак не определяется. 
	Накладывается только следующее ограничение: к узлу-документу нельзя добавить 
	бездокументный, группировочный, простой узел, к нему разрешается добавлять 
	лишь документные узлы.&nbsp;Следует помнить: необходимым условием для возможности 
	создания документа из дерева является наличие в АРМ-е дерева&nbsp; описанной 
	ветви для создания данного документа.</font></td>
  </tr>
</TBODY>
    <tr>
    <td width="29%"><font face="Arial"><em>nAllowSelectNonDoc</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, 
	принимающее значения 1 или 0,<br>
        определяющее разрешение на 
        возможность выбора не документальных узлов из дерева-справочника.</font></td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sFuncName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее имя контекстно-вызываемой процедуры при двойном щелчке мыши 
	либо при нажатии&nbsp;клавиши Enter.</font></td>
  </tr>
  <tr>
    <td width="29%"><font color="#000000" face="Arial"><i>nVersion</i></font></td>
    <td width="71%"><font face="Arial">численное выражение целого 
	типа, определяющее номер версии описания дерева.</font></td>
  </tr>
  <tr>
    <td width="29%"><font color="#000000" face="Arial"><i>Subs and 
	Functions</i></font></td>
    <td width="71%"><font face="Arial">скриптовый раздел описания, 
	который может содержать как <a
    href="../scriptstproced.html">обработчики системных событий</a>, так и 
	пользовательские процедуры и функции</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>sFuncName</em>
следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><strong>Значение</strong></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">EDITITEM</font></td>
    <td width="71%"><font face="Arial">документ вызывается в режиме 
	корректировки</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">VIEWITEM</font></td>
    <td width="71%"><font face="Arial">документ вызывается в режиме 
	просмотра</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">DELETEITEM</font></td>
    <td width="71%"><font face="Arial">документ вызывается для 
	удаления</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">VISAITEM</font></td>
    <td width="71%"><font face="Arial">документ вызывается для 
	визирования</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">SECONDENTRYITEM</font></td>
    <td width="71%"><font face="Arial">документ вызывается для 
	повторного ввода</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial">другое значение</font></td>
    <td width="71%"><font face="Arial">вызывается пользовательская 
	процедура, указанная как контекстно-вызываемая (т.е. указана в 
	RegistrFunction).</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../Defs.html">См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример описания древовидного 
справочника</strong></font></p>

<p><font face="Courier Cyrillic">TREE {<br>
&nbsp;&nbsp;&nbsp;&nbsp; NAME = OtdEmpl;<br>
&nbsp;&nbsp;&nbsp;&nbsp; CAPTION = &quot;Справочник сотрудников&quot;;<br>
&nbsp;&nbsp;&nbsp;&nbsp; DESCRIPTION = &quot;Справ-к сотрудников, по отделам&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp; TYPE = 2;<br>
&nbsp;&nbsp;&nbsp;&nbsp; CODELEN = 6;<br>
&nbsp;&nbsp;&nbsp;&nbsp; ALLOWEDIT = 1;<br>
&nbsp;&nbsp;&nbsp;&nbsp; ALLOWVIEW = 1;<br>
&nbsp;&nbsp;&nbsp;&nbsp; ALLOWDELETE = 1;<br>
&nbsp;&nbsp;&nbsp;&nbsp; ALLOWADDNODE = 1;<br>
&nbsp;&nbsp;&nbsp;&nbsp; DOC { = Employee; = Otdel; };<br>
&nbsp;&nbsp;&nbsp; };<br>
</font></p>
</body>
</html>
