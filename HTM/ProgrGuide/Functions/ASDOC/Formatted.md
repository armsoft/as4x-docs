<html>
<head>
<title>Документ\Formatted</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство Formatted</font></strong></p>

<p><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp; <u>
Пример</u>&nbsp;
<a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает форматированное 
представление значения реквизита. </font></p>

<p class="label"><font face="Arial">Свойство для чтения. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.Formated(</strong><em>RekvName</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>Formated</strong>
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
	ссылкой на экземпляр документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>RekvName</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее идентификатор реквизита документа</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Свойство обычно применяется при 
формировании специальных строк в папках, проводках. Оно обеспечивает 
преобразование реквизитов в строки с фиксированными длинами для хранения в базах 
данных. При этом для преобразования учитывается максимально допустимая длина для 
типа реквизита. Например если тип реквизита ULIMIT указан как <a
href="../../Types/Summa.html">Summa</a>, и введенное значение реквизита равно 
152.21, то учитывая максимально допустимую длину типа Summa&nbsp; это 16 
символов, длина Formatted(&quot;ULIMIT&quot;) тоже будет равна 16 символов:<br>
&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
152.21&quot;.<br>
<a href="../Asdoc.html">См. также</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Тип данных</b></font></p>

<p class="label"><font face="Arial">Строка</font></p>
</body>
</html>
