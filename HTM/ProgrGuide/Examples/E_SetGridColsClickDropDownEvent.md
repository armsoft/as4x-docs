<html>
<head>
<title>SetGridColsClickDropDownEvent</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial;
        }
    </style>
</head>

<body>

<p><font face="Arial"><strong><font size="3">Пример свойства 
    SetGridColsClickDropDownEvent</font></strong></font></p>

<p><font face="Arial">приведены примеры устанавливания признака генерации системного 
    события <a href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a> 
    для столбцов <strong><em>Docnum</em></strong> <strong><em>, 
        PartCode </em></strong>&nbsp;и <strong><em>Comment&nbsp;&nbsp;</em></strong>для<strong><em> </em></strong>
    грид-таблицы <strong><em>GridBase</em></strong>, которые задаются через запятые, 
    пробелы или любой другой символ. Например:<br>
</font></p>

    <p>
        <strong><font face="Arial"><em>Doc</em></font></strong>.<font face="Arial"><strong><font size="3">SetGridColsClickDropDownEvent</font></strong><em><strong>(&quot;GridBase&quot;, 
        &quot;Docnum,PartCode,Comment&quot;,&nbsp; True,&nbsp; &quot;,&quot;)&nbsp; ,</strong></em></font></p>
    <p class="style1">
        <strong><font face="Arial"><em>Doc</em></font></strong>.<font face="Arial"><strong><font size="3">SetGridColsClickDropDownEvent</font></strong><em><strong>(&quot;GridBase&quot; 
        &quot;Docnum,PartCode,Comment&quot;,&nbsp; True,&nbsp; &quot; &quot;)&nbsp;&nbsp; </strong>или</em></font></p>
    <p class="style1">
        <font face="Arial"><strong><em>Doc.<font size="3">SetGridColsClickDropDownEvent</font>(&quot;GridBase&quot;, &quot;Docnum&amp;PartCode&amp;Comment&quot;,&nbsp; 
        True,&nbsp; &quot;&amp;&quot;).&nbsp; </em></strong></font>
    </p>
</body>
</html>
