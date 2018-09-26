<html>
<head>
<title>AsTree</title>
</head>

<body>

<p><strong><font size="3" face="Arial">Пример методов AddDoc, </font><font
face="Arial">ClearAllDocs</font><font size="3" face="Arial">, </font><font
face="Arial">Show</font><font size="3" face="Arial"> и 
свойств
</font><font face="Arial">AllowAddNode, AllowDelete, AllowEdit, 
AllowView, AllowSelectNonDoc, Caption, TreeId, Codelen, TreeTypeInteger. </font></strong></p>

<p><font face="Arial">В примере вызывается функция Tree, через 
переменную mTree возвращается ссылка на обьект дерево - NBACCT3 со всеми его 
свойствами и методами. В дереве добавляется возможность создания документа типа 
NBPUT.</font></p>

<p><font face="Arial">set mTree = <a href="../Functions/Functions/SysDefManagment/Tree.html">
Tree</a>(&quot;NBACCT3&quot;)<br>
mTree.<strong>Caption</strong> = &quot;Выписки счетов&quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
VTOFS(&quot;DATE&quot;, xDialog(&quot;NBSTARTDATE&quot;)) &amp; &quot; - &quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
VTOFS(&quot;DATE&quot;, xDialog(&quot;NBENDDATE&quot;))<br>
mTree.<strong>AddDoc </strong>&quot;NBPUT&quot;<br>
nAllowAddNode=mTree.<strong>AllowAddNode<br>
</strong>nAllowDelete=mTree.<strong>AllowDelete<br>
</strong>nAllowEdit=mTree.<strong>AllowEdit<br>
</strong>nAllowEdit=mTree.<strong>AllowView<br />
</strong>nAllowSelect=mTree.<strong>AllowSelectNonDoc<br>
</strong>mTree.<strong>ClearAllDocs<br>
</strong>mTree.<strong>Show<br />
</strong>mTree.<strong>Codelen<br />
</strong>mTree.<strong>TreeTypeInteger<br>
....<br>
</strong>sTreeId=mTree.<strong>TreeId</strong></font></p>
</body>
</html>
