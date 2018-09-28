<html>
<head>
<title>LoadFactByBase</title>
</head>

<body>

<h1><font size="4" face="Arial">Функция LoadFactByBase<br>
</font><a href="../../Asfact.html"><font size="3" face="Arial"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Возвращает коллекцию проводок для указанного 
документа-основания.<br>
<br>
При отсутствии проводок с заданными параметрами возвращается Nothing. Каждый 
элемент возвращаемой коллекции является <a href="../../Asfact.html">ссылкой на 
объект типа проводки.</a></font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sFacts</em><strong> = 
LoadFactByBase (</strong><em>BaseISN, </em>[<em>Accounting</em>]<em>, </em>[<em>Op</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>LoadFactByBase</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>BaseISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN <a href="../../ASFACT/Base.html">документа основания</a></font></td>
  </tr>
  <tr vAlign="top">
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

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Индекс элементов коллекции начинается от 1 до Count.</font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
LoadFactByBase<br>
<br>
</strong>Ниже приведен пример подсчета сумм проводок в НДЕ и валюте для 
возвращаемой коллекции проводок.</font></p>

<p><font face="Arial">Set xFact =<strong>LoadFactByBase</strong>(ISN)<br>
For i=1 to xFact.Count <br>
&nbsp; nSum=xFact(i).<a href="../../ASFACT/Summa.html">Summa</a><br>
&nbsp; nCurSum=xFact(i).<a href="../../ASFACT/CurSumma.html">CurSumma</a><br>
&nbsp;&nbsp; nSuid = xFact(i).<a href="../../ASFACT/Suid.html">Suid</a><br>
Next </font></p>

<p>&nbsp;</p>
</body>
</html>
