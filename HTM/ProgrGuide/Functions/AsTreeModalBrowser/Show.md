<html>
<head>
<title>Иерархический вспомогательный список\Show</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод Show<br>
<br>
</font></strong><font face="Arial">
<a href="../AsTreeModalBrowser.html">См. также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../AsTreeModalBrowser.html">
Применяется к</a></font></p>

<p><font face="Arial">Активизирует, выводя на экран, иерархический 
вспомогательный список.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>Show (</strong><em>TreeCode, 
bFullTree, bSelectInternalNodesOnly, bMultiSelectMode</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>Show</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта типа иерархический 
	вспомогательный список.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">TreeCode</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор дерева для которого создается иерархический 
	вспомогательный список.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bFullTree</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее могут 
	ли быть выбраны все элементы дерева образующего иерархический 
	вспомогательный список, или только лепестки дерева. При значении True - 
	выбор не ограничен, при False - могут быть выбр<span lang="ru">а</span>ны<span lang="ru"> лишь</span> лепестки 
	дерева. По умолчанию принимает значение False.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>bSelectInternalNodesOnly<br />
        </em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее 
        выбор только внутренних элементов дерева (не лепестков), имеет смысл только если bFullTree=True. При значении False - выбор не ограничен,&nbsp; 
        при True&nbsp; - выбираются только внутренние элементы дерева</font>. <font face="Arial">
        По умолчанию принимает значение False.</font> </td>
    </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bMultiSelectMode<br />
        </em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, которое при 
        значении True дает возможность выбора нескольких элементов сразу, при значении 
        False возможно выбрать только один элемент. </font>&nbsp;<font face="Arial">По умолчанию 
        принимает значение False.</font>
        
  </tr>
</table>
</body>
</html>
