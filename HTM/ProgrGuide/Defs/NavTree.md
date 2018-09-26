<html>
<head>
<title>Описание дерева навигации</title>
    <style type="text/css">
        .style1
        {
            width: 4%;
            height: 47px;
        }
        .style2
        {
            height: 47px;
        }
    </style>
</head>

<body>

<strong><font size="4" face="Arial">Описание дерева навигации<br />
</font></strong><font face="Arial"><span lang="ru"><br>
</span><b><br>
Синтаксис</b></font>

<font face="Arial"><strong>
    <br />
    <br>
    NAVTREE&nbsp; {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Name </strong>=<em> sNavTreeName</em>;
<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Caption </strong>=<em> sNavTreeCaption</em>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ECaption </strong>= <em>sNavTreeECaption</em>;<em><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<strong>Type</strong> = nNavTreeType;
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<strong>Attributs</strong>
= nAttributs ; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    System</strong> 
=
nSystem;<br>
&nbsp;&nbsp;&nbsp;&nbsp;</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span lang="en-us"><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><a href="../NavTreeNode.html">{Узлы <span lang="en-us"> дерева навигации };</span></a><br />
    <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    };<br>
</strong>&nbsp;&nbsp;<span lang="en-us">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></font>

<p><font face="Arial">Синтаксис описания дерева навигации
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" style="height: 31px; width: 4%;">&nbsp;</td>
    <td class="label" width="29%" style="height: 31px"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%" style="height: 31px"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td style="width: 4%">
	<img src="../../../IMAGES/pubfield.gif" width="16" height="16"></td>
    <td width="29%"><em><font face="Arial">sNavTreeName</font></em></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, определяющее 
	идентификатор дерева навигации</font></td>
  </tr>
  <tr>
    <td style="width: 4%">
	<img src="../../../IMAGES/pubfield.gif" width="16" height="16"></td>
    <td width="29%"><em><font face="Arial">sNavTreeCaption</font></em></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, определяющее 
	заголовок дерева навигации</font></td>
  </tr>
  <tr>
    <td class="style1">
	<img src="../../../IMAGES/pubfield.gif" width="16" height="16"></td>
    <td width="29%" class="style2"><em><font face="Arial">sNavTreeECaption</font></em></td>
    <td width="71%" class="style2"><font face="Arial">необязательное строковое выражение, определяющее 
	заголовок дерева навигации на иностранном языке</font></td>
  </tr>
  <tr>
    <td style="width: 4%">
	<img src="../../../IMAGES/pubfield.gif" width="16" height="16"></td>
    <td width="29%">

<font face="Arial"><em>nNavTreeType</em></font></td>
    <td width="71%"><font face="Arial">обязательное числовое выражение, определяющее тип 
        дерева навигации. Может принимать значения 0, 1 или 2. Значение = 0 определяет 
        само дерево навигации, значении = 1 определяет узел вспомогательного дерева, 
        а значение = 2 определяет узел пользовательского дерева </font></td>
  </tr>
  <tr>
    <td style="width: 4%">
	<img src="../../../IMAGES/pubfield.gif" width="16" height="16"></td>
    <td width="29%">

<font face="Arial"><em>nAttributs</em></font></td>
    <td width="71%"><font face="Arial">необязательное бинарное выражение, определяющее 
        метки дерева навигатора, доступные&nbsp; из дизайнера. Максимальная длина равно = 
        7. Если его значение начинается с единицы, то данное дерево-навигации будет 
        невидимым, поскольку на первом месте стоит метка невидения. Допустимые значения 
        можно увидеть <a href="../../../IMAGES/Tag.PNG"><span lang="en-us">здесь</span></a>.</font></td>
  </tr>
  <tr>
    <td style="width: 4%">
	<img src="../../../IMAGES/pubfield.gif" width="16" height="16"></td>
    <td width="29%">

<font face="Arial"><em>nSystem</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
        разрешимость редактирования со сторорны юзера при помощи дизайнера. При <em>System =
        </em>&quot;1&quot;<em>&nbsp; </em>редактирование не разрешается. </font></td>
  </tr>
</TBODY>
  </table>


<font face="Arial"><b><br>
Примечание</b></font>

<font face="Arial"><br>
    <br>
<br>
</font><a href="../Defs.html"><font face="Arial">См. также</font></a>
</body>
</html>