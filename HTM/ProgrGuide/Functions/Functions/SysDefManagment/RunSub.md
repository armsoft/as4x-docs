<html>
<head>
<title>RunSub</title>
    <style type="text/css">

        .style1 {
            font-family: Arial;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод RunSub</font></strong></p>

<p class="label"><font face="Arial">Вызывает процедуру из указанного модуля, 
    проверяя существование процедуры. В случае отсутствия вызываемой процедуры в 
    указанном модуле, сгенерируется ошибка. Среди возвращаемых значений данного 
    метода могут быть и ссылки на экземпляр объекта.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>RunSub</strong>(<em>ModName, SubName, 
ParArray()</em>)</font></p>

<p><font face="Arial">Синтаксис метода <strong>RunSub</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">ModName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Module.html">идентификатор модуля</a></font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">SubName</font></em></td>
    <td width="71%"><font face="Arial">имя процедуры из указанного 
	модуля </font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">ParArray()</font></em></td>
    <td width="71%"><font face="Arial">массив параметров для 
	подстановки в процедуру. </font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Примечание</font></b></p>

<p class="label"><font face="Arial">При использовании данного метода 
накладываются следующие ограничения:</font> 

<ul>
  <li><p class="label"><font face="Arial">не разрешается передача 
	ссылочных переменных (ByRef)</font></p>
  </li>
  <li><p class="label"><font face="Arial">при</font> <font face="Arial">задании необязательных параметров 
      предыдущие необязательные параметры должны быть заполнены. 
      <br />
      <br />
      Например:<span class="style1"><br />
      <br /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1) 
      RunSub(&quot;modname&quot;,&quot;methodname&quot;, param1, , Param3)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1)RunSub(&quot;modname&quot;,&quot;methodname&quot;, param1, 
      , param3)
      <br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 As 
      Long<strong>,&nbsp;Optional</strong> ByVal param2&nbsp; As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2) RunSub(&quot;modname&quot;,&quot;methodname&quot;, param1)<br />
&nbsp;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub methodname(ByVal param1 
      As Long<strong>,&nbsp;Optional</strong> ByVal param2&nbsp; As Long, <strong>Optional</strong> 
      ByVal param3 As Long)<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      ...<br class="style1" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Sub<br />
      </span>
      <br>В первом примере задание параметра <span class="style1">param2 обязательно, поскольку после него 
      задается&nbsp;еще параметр 
      Param3, а во-втором примере - необязательно.</span><br>
    </font></p>
  </li>
</ul>

<p class="label"><a href="GetModule.html"><font face="Arial">См. также</font></a></p>
</body>
</html>
