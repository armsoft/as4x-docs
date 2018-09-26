<html>
<head>
<title>TreeElProp</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция TreeElProp<br>
</font><a href="../../AsTreeElement.html"><font size="3"><strong>свойства&nbsp;&nbsp; 
методы</strong></font></a></font></h1>

<p><font face="Arial">Возвращает ссылку на существующий объект типа 
элемент дерева по имени дерева и ключу.&nbsp; Функция используется для получения 
значений свойств элемента дерева. Если объект не существует, тогда функция 
возвращает значение Nothing.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set </strong><em>xTreeEl</em><strong> = 
TreeElProp</strong>(<em>TreeId, Code</em>)</font></p>

<p><font face="Arial">Синтаксис функции <strong>TreeElProp</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>xTreeEl</em></font></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на <a href="../../AsTreeElement.html">
	объект типа элемент дерева</a></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>TreeId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Database/Trees.html">идентификатор дерева</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Code</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Database/Trees.html">ключ элемента дерева</a></font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример функции TreeElProp<br>
</strong><br>
Переменная </font><font face="Arial">xTree ссылается на существующий 
объект элемент дерева.&nbsp; </font></p>

<p><font face="Arial">Set xTree=<strong>TreeElProp</strong>(&quot;Banks&quot;,
<a href="../ParameterManagment/Param.html">Param</a>(&quot;CODBANK&quot;))<br>
xCorrAcc=<a href="LoadDoc.html">LoadDoc</a>( xTree.<a href="../../AsTreeElement/ISN.html">ISN</a>
)(&quot;SCHET&quot;)<br>
</font></p>
</body>
</html>
