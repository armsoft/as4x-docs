<html>
<head>
<title>AccessDesc</title>
</head>

<body>

<h1><font size="4" face="Arial">Функция AccessDesc<br>
</font><a href="../../AsAccessDesc.html"><font face="Arial" size="3"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Возвращает ссылку на объект типа описатель 
доступа. Если описатель доступа для указанного объекта существует, то он 
загружается, в противном случае он создается.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong><em> sAccessDesc</em><strong> 
= Util.AccessDesc</strong> (<em>nISN, btAccessID, </em>[<em>bExists</em>])<strong><br>
</strong><br>
Синтаксис функции<b> AccessDesc</b> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sAccessDesc</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта типа описатель 
	доступа. Через нее можно получить доступ к свойствам и методам объекта.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">длинное целое, определяющее ISN 
	документа на который установлен либо определяется доступ.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>btAccessID</em></font></td>
    <td width="71%"><font face="Arial">байтовое выражение, 
	определяющее код доступа <a href="../../../Defs/doc.html">из описания 
	документа</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>bExists</em></font></td>
    <td width="71%"><font face="Arial">необязательная логическая 
	переменная, возвращаюущая признак существования описателя доступа. Если 
	значение True, то описатель доступа для указанного объекта уже существовал. 
	При False описатель доступа был создан заново.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>
