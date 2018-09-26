<html>
<head>
<title>GetDocPassedState</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция Get</strong></font><strong><font face="Arial" size="4">DocPassedState</font></strong></p>

<p><font face="Arial">Возвращает последнее или первое состояние 
указанного документа из Log-а.</font></p>

<p class="label"><font face="Arial">Возвращает численное значение типа 
Integer. Если элемент не найден, то возвращается -1.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetDocPassedState</strong>(<em>nISN, 
</em><b>[</b><em>LastState</em><b>]</b><em>, </em><b>[</b><em>InStates</em><b>]</b><em>,
</em><b>[</b><em>States</em><b>]</b>)</font></p>

<p><font face="Arial">Синтаксис функции <strong>GetDocPassedState</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">nISN</font></em></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее внутрисистемный идентификационный код (ISN) документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>LastState</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение. Если LastState = True, то возвращается последнее состояние, в 
	противном случае - первое состояние.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>InStates</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак принадлежности искомого состояния к списку 
	указанного в <em>States.</em> 
	Если <em>InStates </em>= True, то состояние должно быть одной из 
	перечисленных в <em>States</em>, в противном случае - любое.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>States</em></font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Variant, определяющее состояние или массив с несколькими состояниями.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="../../../functions.html">
См. также</a></font></p>

<p class="label">&nbsp;</p>

</body>
</html>
