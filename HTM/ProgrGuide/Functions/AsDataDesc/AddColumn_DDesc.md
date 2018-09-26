<html>
<head>
<title>AsDataDesc\AddCoLumn</title>
    <style type="text/css">
        .style1
        {
            height: 40px;
        }
    </style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод AddCoLumn<br>
<br>
</strong></font><font face="Arial"><a href="../AsDataDesc.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../AsDataDesc.html">Применяется 
к</a></font></p>

<p><font face="Arial">Добавляет новую колонку в динамический источник данных.</font></p>

<p><font face="Arial">Свойство для чтения. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>AddCoLumn [</strong><em>sName, sCaption, 
    sECaption, sType, vField, [bTotal], 
    [bVisible], [bPermanent]</em><strong>]</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>AddCoLumn</strong>
состоит из следующих частей:</font></p>

    <table border="1" cellpadding="5" cols="2" frame="below" rules="rows">
        <tr valign="top">
            <td class="label" width="29%">
                <font face="Arial"><b>Параметр</b></font></td>
            <td class="label" width="71%">
                <font face="Arial"><strong>Описание</strong></font></td>
        </tr>
        <tr>
            <td width="29%" class="style1">
                <em><font face="Arial">object</font></em></td>
            <td width="71%" class="style1">
                <font face="Arial">обязательное строковое выражение, являющееся ссылкой на 
                экземпляр объекта типа динамический источник данных.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <em><font face="Arial">sName</font></em></td>
            <td width="71%">
                <font face="Arial">обязательное строковое выражение, определяющее идентификатор 
                добавляемой колонки.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>&nbsp;sCaption</em></font></td>
            <td width="71%">
                <font face="Arial">обязательное строковое выражение, определяющее наименование 
                добавляемой колонки.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sECaption</em></font></td>
            <td width="71%">
                <font face="Arial">обязательное строковое выражение, определяющее наименование 
                добавляемой колонки на иностранном языке.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sType</em></font></td>
            <td width="71%">
                <font face="Arial">обязательное строковое выражение, определяющее <a href="../../types.html">внутренний тип</a> 
                добавляемой колонки.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>vField</em></font></td>
            <td width="71%">
                <font face="Arial">обязательное выражение типа вариант, определяющее источник  
                значения добавляемой колонки. Если значение vField строкового типа, то значение 
                добавляемой колонки берется из sql запроса свойства <a href="../AsDataDesc/SQL_DDesc.html">SQL</a>, где vField есть 
                соответствующее поле в sql запросе, а значение свойства <a href="../AsDataDesc/DataMode_DDesc.html">DataMode</a>
                устанавливается равным 0, если же значение vField числовое, то значение колонки берется из массива свойства
                <a href="../AsDataDesc/Columns_DDesc.html">Columns</a>, где <em>vField- </em>есть соответствующий индекс
                добавляемой колонки в массиве, а значение свойства <a href="../AsDataDesc/DataMode_DDesc.html">DataMode</a> устанавливается равным 1.
</tr></td>
        <tr>
            <td width="29%">
                <font face="Arial"><em>bTotal</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное численное выражение, принимающее значения 1 или 0, определяющее 
                наличие итоговой суммы для числовых колонок. По умолчанию равно 0. </td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>bVisible</em></font></td>
            <td width="71%">
                <font face="Arial">&nbsp;необязательное логическое выражение, определяющее признак показа добавляемой колонки. По умолчанию 
                принимает значение True.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>bPermanent</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное логическое выражение, определяющее перманентность добавляемой колонки. По умолчанию принимает значение True</td>
        </tr>
    </table>
    <p>
        &nbsp;</p>
</body>
</html>
