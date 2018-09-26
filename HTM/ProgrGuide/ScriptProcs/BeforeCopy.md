<html>
<head>
<title>Системное событие BeforeCopy</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Событие BeforeCopy<br>
<br>
</font></strong><font face="Arial"><a href="../scriptstproced.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a
href="../Defs/doc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Происходит после копирования документа.</font></p>

<p class="label">&nbsp;</p>
<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial">Sub <strong>BeforeCopy</strong>([ByVal <em>BeforeCopyParam</em> 
As Variant])<br>
<em>&nbsp;&nbsp;&nbsp;&nbsp; statements</em><br>
End Sub</font></p>

<p><font face="Arial">Синтаксис события <strong>BeforeCopy</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"> <em>BeforeCopyParam</em> 
</font></td>
    <td width="71%"><font face="Arial">необязательное выражение типа Variant,
    может быть передано посреством вызова функции
	<a href="../Functions/Functions/DocumentsCirculation/CopyDoc.html">CopyDoc</a>. 
	Если копирование документа произведено визуально, то <em>BeforeCopyParam</em> 
	=0.</font></td>
  </tr>
  </table>

<p class="label">&nbsp;</p>

</body>
</html>
