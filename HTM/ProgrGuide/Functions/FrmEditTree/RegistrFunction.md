<html>
<head>
<title>Текущее дерево\RegistrFunction</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод RegistrFunction<br>
<a href="RegistrNode.html"><br>
</font></strong><font face="Arial">См. также</a>&nbsp; <a
href="../../Examples/E_FrmEditTree_RegistrFunction.html">Пример</a>&nbsp; <a
href="../FrmEditTree.html">Применяется к</a></font></p>

<p><font face="Arial">Добавляет в контекстное меню вызов 
пользовательской функции.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.RegistrFunction</strong>(<em>Caption,
</em>[<em>RunSub</em>]<em>, </em>[<em>AccessCode</em>]<em>, </em>[<em>ParentId</em>]<em>,
</em>[<em>ECaption</em>]<em>,
</em>[<em>FuncParam</em>])</font></p>

<p><font face="Arial">Синтаксис метода <strong>RegistrFunction</strong>
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
	ссылкой на форму прокрутки деревьев-справочников</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Caption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок строки добавляемой в контекстное меню. Значение &quot;-&quot; 
	данного выражения означает добавление в меню, разделительной линии.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>RunSub</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее имя процедуры, вызываемой при выборе данной строчки 
	в контекстном меню. Если данный параметр не задан, то в контекстное меню 
	добавляется разделитель.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>AccessCode</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее идентификаторы рабочих мест на которых срабатывает 
	данный вызов. При перечислении нескольких идентификаторов АРМ-ов они 
	отделяются друг от друга символами &quot;;&quot;. Для пользователя, имеющего доступ 
	хотя бы к одному из перечисленных АРМ-ов, данная функция будет доступна из 
	всех АРМ-ов (даже не перечисленных!), где данное дерево существует.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ParentId</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее ссылку <a
    href="RegistrNode.html">на идентификатор вышестоящего подменю</a> контекстных 
	вызовов.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>ЕCaption</em></font></td>
    <td width="79%"><font face="Arial">необязательное строковое 
	выражение, определяющее запись добавляемой в контекстное меню строки на 
	иностранном языке. По умолчанию значение равно <em>Caption.</em></font></td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>FuncParam</em></font></td>
    <td width="79%"><font face="Arial">необязательное выражение типа 
        Variant, определяющее параметр для процедуры заданной параметром <em>RunSub.</em></font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Данный метод должен быть вызван в 
обработчике системного события
<a href="../../ScriptProcs/FunctionsTree.html">Functions</a>. Процедура, 
срабатывающая при вызове должна быть описана в скриптовой части <a href="../../Defs/Tree.html">
описания дерева</a>, где используется данный метод.</font></p>

<p class="label">&nbsp;</p>
</body>
</html>
