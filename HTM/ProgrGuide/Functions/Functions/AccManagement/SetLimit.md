<html>
<head>
<title>SetLimit</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод SetLimit</font></strong></p>

<p><font face="Arial">Устанавливает значения лимитов контроля для 
объекта учета. Лимиты проверяются во время проведения проводок с помощью функции <a
href="CheckLimit.html">CheckLimit</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.SetLimit</strong> (<em>TypeAcc, 
ObjectISN, ULimit, LLimit</em>)</font></p>

<p><font face="Arial"><br>
Синтаксис метода <strong>SetLimit</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>TypeAcc</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a> из его 
	описания.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ObjectISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN объекта учета, для которого устанавливаются лимиты.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ULimit</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа 
	Currency, определяющее верхний лимит для объекта учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>LLimit</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа 
	Currency, определяющее нижний&nbsp; лимит для объекта учета.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
</b><br>
Лимиты полезны для наложения ограничений на остатки счетов.</font></p>

<p class="label"><font face="Arial"><a href="../../../functions.html">
См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример процедуры SetLimit<br>
</strong><br>
Ниже приводится пример использования процедуры <strong>SetLimit</strong>
в скриптовой процедуре<a href="../../../ScriptProcs/Action.html"> Action</a>.</font></p>

<p><font face="Arial">Sub&nbsp;</font><font size="3" face="Arial"><a href="../../../ScriptProcs/Action.html">
Action</a></font><font face="Arial">()<br>
&nbsp;&nbsp; If doc(&quot;DK&quot;)=&quot;2&quot; Then<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Util.SetLimit</strong> &quot;01&quot;, doc.<a href="../../ASDOC/ISN.html">ISN</a>, 
-doc(&quot;LLIMIT&quot;), -doc(&quot;ULIMIT&quot;)<br>
&nbsp;&nbsp; Else <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Util.SetLimit</strong> &quot;01&quot;, doc.ISN, 
doc(&quot;ULIMIT&quot;), doc(&quot;LLIMIT&quot;) <br>
&nbsp;&nbsp; End If <br>
End Sub <br>
</font></p>
</body>
</html>
