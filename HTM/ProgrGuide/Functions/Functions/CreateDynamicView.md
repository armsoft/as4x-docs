<html>
<head>
<title>CreateDynamicView</title>
    <style type="text/css">
        .style1
        {
            font-weight: normal;
        }
        .style2
        {
            height: 30px;
        }
    </style>
</head>

<body>

<h1><font size="4" face="Arial">Функция CreateDynamicView</font></h1>

<p><font face="Arial">Возвращает ссылку на программно созданный объект AsView. 
    Объект создается по-динамическому описанию xDataDesc.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sView</em><strong>= <font face="Arial">
    CreateDynamicView(<span class="style1"><em>DataDesc</em></span>)</font></strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>CreateDynamicView</strong></b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="style2" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="style2" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sView</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся ссылкой на 
        экземпляр объекта вида просмотра.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style1"><font face="Arial"><em>DataDesc</em></font></td>
    <td width="71%" class="style1"><font face="Arial">строковое выражение, определяющее переменную, 
        ссылающуюся на экземпляр объекта динамического источника данных</font></td>
    </tr>
</table>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><strong><font face="Arial" size="3">Пример функции <font face="Arial">CreateDynamicView</b>
</font> </font></strong></p>

    <p><font face="Arial"><br>
Dim sDynDataDesc as AsDataDesc<br>
Dim xView As AsView<br />
        <br>
Set sDataDesc = CreateDataDesc<br>
sDataDesc.<a href="../AsDataDesc/Caption_DDesc.html">Caption</a> = &quot;DynDescCaption&quot;<br>
sDataDesc.<a href="../AsDataDesc/HeadLinesCount_DDesc.html">HeadLinesCount</a> = 1<br>
sDataDesc.<a href="../AsDataDesc/DataIndicate_DDesc.html">DataIndicate</a> = 1<br>
sDataDesc.<a href="../AsDataDesc/AddColumn_DDesc.html">AddColumn</a>(&quot;fCODE&quot;, &quot;Код&quot;, &quot;Code&quot;, &quot;C(8)&quot;, &quot;fCode&quot;, False, True, True)<br>
sDataDesc.<a href="../AsDataDesc/SQL_DDesc.html">SQL</a> = &quot;Select fCODE from Table&quot;<br>
Set xView  = <strong>CreateDynamicView(sDataDesc)</strong><br>
Browse(xView)<br>
</font></p>
</body>
</html>
