<html>
<head>
<title>Документ\RunEx</title>
    <style type="text/css">

        .style1
        {
            font-family: Arial;
        }
        .style2
        {
            font-style: italic;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод RunEx<br>
<br>
</font></strong><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Вызывает скриптовую процедуру или 
функцию, описанную в документе, с учетом возврата значений ссылочных параметров(<strong><em>ByRef</em></strong>). С помощью метода RunEx нельзя вызывать обработчики <a
href="../../scriptstproced.html">системных событий</a> документа. Среди возвращаемых 
    значений данного метода могут быть и ссылки на экземпляр объекта</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b class="style2">Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.RunEx(</strong><em>SubName</em><strong>,
</strong><em>ParArray</em><strong>())</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>RunEx</strong>
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
накладываются следующие ограничения:</font> 

<ul>
    <li>
        <p class="label">
            <font face="Arial">разрешается передача 
	ссылочных переменных (<strong>ByRef</strong>), с учетом возвращения их значений, если 
            типы этих переменных совпадают с типами процедуры или же имеют тип <strong>
            Variant</strong>.<br />
            <br />
            Например:<br />
            <br />
&nbsp;&nbsp;&nbsp; </font><span class="style1">1) Dim param01 As <strong>Long<br />
&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp; Dim xDoc As AsDoc<br />
        <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set xDoc= CreateDoc(&quot;DocName&quot;)</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xDoc.RunEx(&quot;methodname1&quot;, param01)
            <br />
        </span>
        <br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname1(ByRef param01 As <strong>
        Integer</strong>)</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
            <br />
&nbsp;&nbsp; 2) Dim param01 As <strong>Long<br />
&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp; Dim xDoc As AsDoc<br />
        <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set xDoc= CreateDoc(&quot;DocName&quot;)</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xDoc.RunEx(&quot;methodname2&quot;, param01)
            <br />
        </span>
        <br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname2(ByRef param01 As <strong>Long</strong>)</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
        <br />
        В первом примере значение параметра <strong>param01</strong> не будет 
        возвращено, поскольку тип <strong>param01 -&gt; Long</strong>, а тип 
        соответствующего параметра процедуры <strong>-&gt; Integer</strong>. Во-втором 
        примере значение возвратится, т.к. типы у обоих параметров совпадают и равны&nbsp;
        <strong>Long</strong>.</span></p>
    </li>
    <li>
        <p class="label">
            <font face="Arial">при задании необязательных параметров 
      предыдущие необязательные параметры должны быть заполнены.
            <br />
      <br />
      Например:<span class="style1"><br />
            <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) 
      Dim xDoc As AsDoc
            <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set xDoc= CreateDoc(&quot;DocName&quot;)<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xDoc.RunEx(&quot;methodname&quot;, param1, 
            , param3)<br />
&nbsp;<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As 
            Long, <strong>Optional</strong> ByVal param2 As Long, <strong>Optional</strong> 
            ByVal param3 As Long)<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) Dim xDoc As AsDoc
            <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set xDoc= CreateDoc(&quot;DocName&quot;)<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xDoc.RunEx(&quot;methodname&quot;, param1)<br />
&nbsp;<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As 
            Long, <strong>Optional</strong> ByVal param2 As Long, <strong>Optional</strong> 
            ByVal param3 As Long)<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...<br class="style1" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      </span>
      <br>В первом примере задание параметра <span class="style1">param2 обязательно, поскольку после него 
      задается&nbsp;еще параметр 
      Param3, а во-втором примере - необязательно.</span></font></p>
    </li>
</ul>
    <p>
        &nbsp;</p>
    </body>
</html>
