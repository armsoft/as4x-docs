<html>
<head>
<title>AsErrorsFreeExecutor\Run</title>
    <style type="text/css">

        .style1
        {
            font-family: Arial;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод Run<br>
<br>
</font></strong><font face="Arial"><a href="../Functions/CreateErrorsFreeExecutor.html">
См. также</a>&nbsp;
<a href="../../Examples/E_AsErrorsFreeExecutor.html"><u>Пример</u></a>&nbsp; <a href="../AsErrorsFreeExecutor.html">Применяется к</a></font></p>

<p><font face="Arial">Выполняет скриптовую процедуру, среди возвращаемых значений 
    которого могут быть и ссылки на экземпляр объекта, в зависимости от значения 
    параметра <i><strong>bReturnsObject</strong> </i>функции <a href="../Functions/CreateErrorsFreeExecutor.html">CreateErrorsFreeExecutor</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>Run </strong><i>
xParamsArray()</i></font></p>

<p><font face="Arial">Синтаксис свойства <strong>Run</strong>
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
    <p class="label">
        <b><font face="Arial">Примечание</font></b></p>
    <p class="label">
        <font face="Arial">При использовании данного метода накладывается следующее 
        ограничение:</font>
        <br />
        <br />
    </p>
</body>
</html>
<ul>
    <li>
       <p class="label"><font face="Arial">при задании необязательных параметров предыдущие 
           необязательные параметры должны быть заполнены.<br />
           <br />
           Например:<span class="style1"><br />
           <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) Dim errFree As AsErrorsFreeExecutor<strong><br />
           <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Set errFree = 
           CreateErrorsFreeExecutor(&quot;modname&quot;, &quot;methodname&quot;)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Run( param1, , Param3)
      <br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As Long<strong>, Optional</strong> ByVal param2 
           As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2)&nbsp; Dim errFree As AsErrorsFreeExecutor<strong><br />
           <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Set errFree = 
           CreateErrorsFreeExecutor(&quot;modname&quot;, &quot;methodname&quot;)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Run(param1)
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As Long<strong>,&nbsp;Optional</strong> ByVal param2 
           As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      </span>
      <br><span class="style1">В первом примере задание параметра param2 обязательно, 
           поскольку после него задается&nbsp;еще параметр Param3, а во-втором примере - 
           необязательно.</span></font></p>
  </li>
</ul>