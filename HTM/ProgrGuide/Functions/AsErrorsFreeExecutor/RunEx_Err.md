<html>
<head>
<title>AsErrorsFreeExecutor\RunEx</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод RunEx<br>
<br>
</font></strong><font face="Arial"><a href="../AsErrorsFreeExecutor.html">
См. также</a>&nbsp;
Пример&nbsp; <a href="../AsErrorsFreeExecutor.html">Применяется к</a></font></p>

<p><font face="Arial">Выполняет скриптовую процедуру, с учетом возврата значений 
    ссылочных параметров(<strong><em>Byref</em></strong>). Среди возвращаемых 
    значений данного метода могут быть и ссылки на экземпляр объекта, в зависимости 
    от значения параметра <i><strong>bReturnsObject</strong> </i>функции <a href="../Functions/CreateErrorsFreeExecutor.html">CreateErrorsFreeExecutor</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>RunEx </strong><i>
xParamsArray()</i></font></p>

<p><font face="Arial">Синтаксис свойства <strong>RunEx</strong>
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
	определяющее переменную, ссылающуюся на экземпляр объекта исполнителя 
	процедур.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><i>xParamsArray()</i></font></td>
    <td width="71%"><font face="Arial">массив параметров для 
	подстановки в процедуру в качестве фактических параметров. </font></td>
  </tr>
</table>
    <p>
        &nbsp;</p>
    <p class="style1">
        <strong>Примечание</strong></p>
    <p class="style1">
        <font face="Arial">При использовании данного метода накладываются следующие 
        ограничения:</font> <br />
    </p>
    <ul>
    <li>
    <p class="style1">
        метод <font face="Arial"><strong>RunEx </strong>дает возможность возвращения 
        значений ссылочных параметров(<strong><em>ByRef</em></strong>) только в том случае, если <strong>&nbsp;</strong>их 
        типы являются типами <strong>Variant </strong>или же<strong> </strong>&nbsp;совпадают<strong> </strong>&nbsp;с 
        типами параметров процедуры.</font></p>
    <p class="style1">
        Например<strong>:</strong></p>
    <p>
        <span class="style1">1) Dim errFree As AsErrorsFreeExecutor<br />
&nbsp;&nbsp;&nbsp; Dim param01 As <strong>Long<br />
        <br />
&nbsp;&nbsp;&nbsp; </strong>Set errFree = CreateErrorsFreeExecutor(&quot;modname&quot;, 
        &quot;methodname1&quot;)<br />
        &nbsp;&nbsp;&nbsp; errFree.RunEx( param01)
        <br />
        </span>
        <br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; Sub methodname1(ByRef param01 As <strong>
        Integer</strong>)</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; ...</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; End Sub</span></p>
    <p>
        <span class="style1">2) Dim errFree As AsErrorsFreeExecutor<br />
&nbsp;&nbsp;&nbsp; Dim param01 As <strong>Long<br />
        </strong><br />
        <strong>&nbsp;&nbsp;&nbsp; </strong>Set errFree = 
        CreateErrorsFreeExecutor(&quot;modname&quot;, &quot;methodname2&quot;)<br />
        &nbsp;&nbsp;&nbsp; errFree.RunEx( param01)
        </span>
        <br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; 
        </span>
        <br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; Sub methodname2(ByRef param01 As <strong>
        Long</strong>)</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; ...</span><br class="style1" />
        <span class="style1">&nbsp;&nbsp;&nbsp; End Sub<br />
        <br />
        В первом примере значение параметра <strong>param01</strong> не будет 
        возвращено, поскольку тип <strong>param01 -&gt; Long</strong>, а тип 
        соответствующего параметра процедуры <strong>-&gt; Integer</strong>. Во-втором 
        примере значение возвратится, т.к. типы у обоих парамтеров совпадают и равны&nbsp;
        <strong>Long</strong></span></p>
    </li>
  <li><p class="label"><font face="Arial">при задании необязательных параметров 
      предыдущие необязательные параметры должны быть заполнены.
      <br />
      <br />
      Например:<span class="style1"><br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) 
      Dim errFree As AsErrorsFreeExecutor<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set errFree = CreateErrorsFreeExecutor(&quot;modname&quot;, 
        &quot;methodname&quot;)<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RunEx(&quot;modname&quot;,&quot;methodname&quot;, param1, , Param3)
      <br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As 
      Long<strong>,&nbsp;Optional</strong> ByVal param2 As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) Dim errFree As AsErrorsFreeExecutor<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set errFree = CreateErrorsFreeExecutor(&quot;modname&quot;, 
        &quot;methodname&quot;)<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RunEx(&quot;modname&quot;,&quot;methodname&quot;, param1)<br />
&nbsp;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As 
      Long<strong>,&nbsp;Optional</strong> ByVal param2 As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      </span>
      <br>В первом примере задание параметра param2 обязательно, поскольку после него 
      задается&nbsp;еще параметр Param3, а во-втором примере - необязательно.</font></p>
  </li>
</ul>

</body>
</html>
