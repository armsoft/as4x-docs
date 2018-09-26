<html>
<head>
<title>Документ\Run</title>
    <style type="text/css">


        .style1 {
            font-family: Arial;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод Run<br>
<br>
</font></strong><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Вызывает скриптовую процедуру или 
функцию, описанную в документе. С помощью метода Run нельзя вызывать обработчики <a
href="../../scriptstproced.html">системных событий</a> документа .Среди возвращаемых 
    значений данного метода могут быть и ссылки на экземпляр объекта</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.Run(</strong><em>SubName</em><strong>,
</strong><em>ParArray</em><strong>())</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>Run</strong>
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
    <td width="29%"><font face="Arial"><em>SubName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее имя вызываемой процедуры или функции</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ParArray()</em></font></td>
    <td width="71%"><font face="Arial">массив параметров для передачи 
	вызываемой процедуре или функции. Количество передаваемых параметров должно 
	быть не больше 10.</font></td>
  </tr>
</table>
    <p>
        &nbsp;</p>

<p class="label"><b><font face="Arial">Примечание</font></b></p>

<p class="label"><font face="Arial">При использовании данного метода 
накладываeтся следующиe ограничениe:</font> 

<ul>
  <li><p class="label"><font face="Arial">при</font> <font face="Arial">задании необязательных параметров 
      предыдущие необязательные параметры должны быть заполнены. 
      <br />
      <br />
      Например:<span class="style1"><br />
      <br /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) 
      RunSub(&quot;modname&quot;,&quot;methodname&quot;, param1, , Param3)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)Run(&quot;methodname&quot;, param1, , param3)
      <br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sub methodname(ByVal param1 As 
      Long<strong>,&nbsp;Optional</strong> ByVal param2&nbsp; As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) Run(&quot;methodname&quot;, param1)
      <br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 
      As Long<strong>,&nbsp;Optional</strong> ByVal param2&nbsp; As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      </span>
      <br>В первом примере задание параметра <span class="style1">param2 обязательно, поскольку после него 
      задается&nbsp;еще параметр 
      Param3, а во-втором примере - необязательно.</span></font></p>
  </li>
</ul>

</body>
</html>
