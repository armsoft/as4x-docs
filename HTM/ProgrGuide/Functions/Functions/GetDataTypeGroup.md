<html>
<head>
<title>GetDataTypeGroup</title>
    <style type="text/css">
        .style1
        {
            width: 609px;
        }
        .style5
        {
            width: 86%;
        }
        .style7
        {
            width: 78%;
            font-family: Arial;
        }
        .style9
        {
            font-weight: normal;
        }
        .style10
        {
            width: 78%;
        }
    </style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция GetDataTypeGroup</strong></font></p>

<p class="label"><font face="Arial">Возвращает группу заданного типа
    данных.</font></p>


<p><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>GetDataTypeGroup (</strong><em>sDataType</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>GetDataTypeGroup </strong>состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sDataType</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, оределяющее 
        внутенный тип 
        данных.</font></td>
  </tr>
  </table>

    <p>
        &nbsp;</p>
    <p class="label">
        <font face="Arial"><b>Примечание</b></font></p>
    <p class="label">
        &nbsp;&nbsp;&nbsp; <font face="Arial">Например, если sDataType равно &quot;<strong>NP</strong>&quot; 
        , &quot;<strong>N</strong>&quot;, &quot;<strong>SUMMA</strong>&quot;&nbsp; или &quot;<strong>SUMMAP</strong>&quot;, 
        то возвращаемое значение будет равно &quot;<strong>Numeric</strong>&quot;, поскольку 
        заданные типы данных принадлежат группе &quot;<strong>Numeric</strong>&quot;. При sDataType 
        равное &quot;<strong>BOOLEAN</strong>&quot;, возвращаемое значение будет &quot;<strong>Logical</strong>&quot; 
        и т.д.</font></p>
    <p class="label">
        &nbsp;</p>
    <p class="label">
        <strong>&nbsp;</strong><font face="Arial"><strong>Группы</strong> <strong>
        внутренных типов
        данных</strong></font></p>
    <p class="label">
        <table border="1" class="style1">
            <tr>
                <td class="style10">
                    <font face="Arial" size="3"><b>Тип данных</b></font></td>
                <td class="style5">
                    <font face="Arial" size="3"><b>Группа</b></font></td>
            </tr>
            <tr>
                <td class="style10">
                    <font face="Arial">&quot;NP&quot;, &quot;N&quot;, &quot;SUMMA&quot;, &quot;SUMMAP&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">Numeric</strong></font></td>
            </tr>
            <tr>
                <td class="style10">
                    <font face="Arial">&quot;NUMPAIR&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">NumericPair</strong></font></td>
            </tr>
            <tr>
                <td class="style7">
                    <font face="Arial">&quot;C&quot;, &quot;CH&quot;, &quot;FOLDER&quot;, &quot;FULLTREE&quot;, &quot;TREE&quot;, &quot;AMACC&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">Charset</strong></font></td>
            </tr>
            <tr>
                <td class="style10">
                    <font face="Arial">&quot;BOOLEAN&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">Logical</strong></font></td>
            </tr>
            <tr>
                <td class="style10">
                    <font face="Arial">&quot;DATE&quot;, &quot;DATELONG&quot;, &quot;DATEREP&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">DateType</strong></font></td>
            </tr>
            <tr>
                <td class="style10">
                    <font face="Arial">&quot;TIME&quot;, &quot;TIMELONG&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">TimeType</strong></font></td>
            </tr>
            <tr>
                <td class="style10">
                    <font face="Arial">&quot;PATH&quot;, &quot;FILE&quot;</font></td>
                <td class="style5">
                    <font face="Arial"><strong class="style9">PathType</strong></font></td>
            </tr>
        </table>
    </p>
    <p class="label">
        &nbsp;</p>
    <p class="label">
        <font face="Arial"><a href="../../functions.html">См. также</a></font></p>
    <p>
        &nbsp;</p>

</body>
</html>
