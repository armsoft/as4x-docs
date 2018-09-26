<html>
<head>
<title>Folders</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события Folders</strong></font></p>

<p><font size="3" face="Arial">В <a href="../Defs/doc.html">описании 
документа</a> находится обработчик события <strong>Folders</strong>, откуда 
экземпляры документа помещаются в папку и в дерево-справочник</font><font face="Arial">.</font></p>

<p><font face="Arial">Sub <strong>Folders</strong>()<br>
&#39; Добавим экземпляр документа в папку NBACC<br>
&nbsp;&nbsp; Set xFoldEl = <a href="../Functions/Functions/DocumentsCirculation/CreateFolderElement.html">
CreateFolderElement</a>(&quot;NBACC&quot;)<br>
&nbsp;&nbsp; xFoldEl.<a href="../Functions/AsFoldElement/Com.html">Com</a> = 
Doc(&quot;Name&quot;)<br>
&nbsp;&nbsp; xFoldEl.<a href="../Functions/AsFoldElement/ECom.html">Ecom</a> = 
Doc(&quot;EName&quot;)<br>
&nbsp;&nbsp; xFoldEl.<a href="../Functions/AsFoldElement/Spec.html">Spec</a> = 
Doc(&quot;NOMDOK&quot;) &amp; doc.Formatted(&quot;MTCCOUNT&quot;) &amp; Doc(&quot;COMENT&quot;) <br>
&nbsp;&nbsp; xFoldEl.<a href="../Functions/AsFoldElement/Status.html">Status </a>
= &quot;O&quot;<br>
&nbsp;&nbsp; doc.<a href="../Functions/ASDOC/StoreInFolder.html">StoreInFolder</a> 
xFoldEl<br>
&#39; Добавим экземпляр документа в дерево NbalAcc<br>
&nbsp;&nbsp; Set xTreeEl = <a href="../Functions/Functions/DocumentsCirculation/CreateTreeElement.html">
CreateTreeElement<strong>
</strong></a>(&quot;NbalAcc&quot;)<br>
&nbsp;&nbsp; xTreeEl.<a href="../Functions/AsTreeElement/Com.html">Com</a> = 
Doc(&quot;Name&quot;)<br>
&nbsp;&nbsp; xTreeEl.<a href="../Functions/AsTreeElement/ECom.html">Ecom</a> = 
Doc(&quot;EName&quot;)<br>
&nbsp;&nbsp; xTreeEl.<a href="../Functions/AsTreeElement/Key.html">Key</a> = 
Doc(&quot;CODE&quot;)<br>
&nbsp;&nbsp; xTreeEl.<a href="../Functions/AsTreeElement/Parent.html">Parent</a> 
= Doc(&quot;CODEBAL&quot;)<br>
&nbsp;&nbsp; doc.<a href="../Functions/ASDOC/StoreInTree.html">StoreInTree</a> 
xTreeEl<br>
End Sub<br>
</font></p>

<p>&nbsp;</p>
</body>
</html>
