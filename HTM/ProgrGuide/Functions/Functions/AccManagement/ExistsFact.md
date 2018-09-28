<html>
<head>
<title>ExistsFact</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция ExistsFact</font></strong></p>

<p class="label"><font face="Arial">Возвращает признак существования 
проводок для указанного документа-основания и/или для указанного объекта.</font></p>

<p class="label"><font face="Arial">Возвращаемое значение логическое.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>ExistsFact</strong>(<em>BaseISN, 
ObjectISN, </em>[<em>Accounting</em>]<em>, </em>[<em>Op</em>])</font></p>

<p><font face="Arial">Синтаксис функции <strong>ExistsFact </strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>BaseISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN <a href="../../ASFACT/Base.html">документа основания</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ObjectISN</em></font></td>
    <td width="71%"><font face="Arial">исленное выражение типа Long, 
	определяющее ISN <a href="../../ASFACT/ObjectISN.html">объекта учета</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Accounting</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="../../ASFACT/TypeAcc.html">код учета</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Op</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее список
      <a href="../../ASFACT/Op.html">кодов операций</a>. Если список начинается 
	знаком &quot;+&quot;, то учитываются все коды операции, которые перечислены после 
	него. При знаке &quot;-&quot; игнорируются те операции, коды которых перечислены в 
	списке. Коды операции перечисляются друг за другом через пробел. Список 
	также может содержать единственный элемент без знака.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
