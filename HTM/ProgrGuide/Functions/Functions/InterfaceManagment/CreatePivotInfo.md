<html>
<head>
<title>CreatePivotInfo</title>
</head>

<body>

<h1><font size="3" face="Arial">Функция CreatePivotInfo</strong><br /></h1>
    <a href="../../PivotInfo.html"><font face="Arial" size="3"><strong>
свойства методы</strong></font></a></font><p><font face="Arial">Создает объект типа транспонирование данных.<b><br>
&nbsp;</b></font></p>

<p><font face="Arial"><b><br>
Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>oPivotInfo</em><strong> =
    <font size="3" face="Arial">CreatePivotInfo</font></strong></font></p>
    <p><font face="Arial">Синтаксис функции <strong><font size="3" face="Arial">
        CreatePivotInfo</font></strong> состоит из следующих частей:<br />
        </font></p>
    <p>
        <table border="1" cellpadding="5" cols="2" frame="below" rules="rows">
            <tr valign="top">
                <td class="label" width="29%">
                    <font face="Arial"><b>Параметр</b></font></td>
                <td class="label" width="71%">
                    <font face="Arial"><strong>Описание</strong></font></td>
            </tr>
            <tr valign="top">
                <td width="29%">
                    <font face="Arial"><em>oPivotInfo</em></font></td>
                <td width="71%">
                    <font face="Arial">строковое выражение, определяющее переменную, ссылающуюся на 
                    экземпляр объекта типа транспонирование данных.</font></td>
            </tr>
        </table>
    </p>

<p class="label"><font face="Arial"><b><br>
Примечание<br />
    <br />
    </b></font><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>
    <p>
        <strong><font face="Arial" size="3">Пример функции </font>
        <font size="3" face="Arial">CreatePivotInfo</font></strong></p>
    <p>
        <font face="Arial">В примере вызывается функция CreatePivotInfo, через PivotInfo 
        возвращается ссылка на обьект типа транспонирование данных со всеми его 
        свойствами и методами, где viewColumn1, viewColumn2 и viewColumn3&nbsp; являются 
        колонками вида просмотра &quot;VIEW1&quot;, которые подвергаются транспонированию при 
        экспорте в Excel. </font>
    </p>
    <p>
        <font face="Arial">Dim oPivotInfo As PivotInf<br />
        Dim viewBusExp As AsView<br />
        <br />
        Set viewBusExp = <strong>View</strong>(&quot;VIEW1&quot;)<br />
        Set oPivotInfo = <strong>CreatePivotInfo<br />
        </strong>
        <br />
        oPivotInfo.AddPivotColumn &quot;viewColumn1&quot;<br />
        oPivotInfo.AddPivotRow &quot;viewColumn2&quot;<br />
        oPivotInfo.AddPivotData &quot;viewColum3&quot;, &quot;PivotColumnDataCaption&quot;, -4112<br />
        <br />
        viewBusExp.Pivot oPivotInfo<br />
        viewBusExp.Browse</font></p>

</body>
</html>
