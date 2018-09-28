<html>
<head>
<title>AddPart</title>
<style type="text/css">
.auto-style1 {
	text-decoration: underline;
}
    .style1
    {
        font-family: Arial;
    }
    .style2
    {
        color: #009933;
    }
    .style3
    {
        color: #000000;
    }
    .style4
    {
        color: #009900;
    }
    .style6
    {
        color: #000000;
        font-family: Arial;
    }
    .style7
    {
        color: #009933;
        font-family: Arial;
        font-weight: 700;
    }
    .style8
    {
        color: #009933;
        font-family: Arial;
    }
    .style9
    {
        color: #009900;
        font-family: Arial;
    }
</style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод AddPart<br>
<br>
</font></strong><font face="Arial"><span class="auto-style1"><a href="../SpreadsheetExportRowStyle.html">См. также</a></span>&nbsp;
Пример&nbsp; <a href="../SpreadsheetExportRowStyle.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Задает описание стиля экспорта строки справки в 
    Excel.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.AddPart(</strong><em>start</em><strong>, </strong><em>
    type<strong>, </strong></em>
    [<em>exportColumnIndex</em>]<strong>, </strong>[<em>exportAsBold</em>]<em><strong>, </strong></em>
    [<em>isFormatted</em>]<strong>, </strong>[<em>trimBeforeExport</em>]<strong><em>, </em> </strong>
    [<em>useForWidth</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода  <strong>AddPart</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, являющееся ссылкой на 
        экземпляр объекта типа <a href="../SpreadsheetExportRowStyle.html">SpreadsheetExportRowStyle</a>.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>start</em></font></td>
    <td width="71%"><font face="Arial">обязательное численное выражение, определяющее стартовую 
        позицию строки, начиная с которого данные данной строки будут экспортированы в Excel.&nbsp; </font></td>
    </tr>
  <tr>
    <td width="29%"><em><font face="Arial">type</font></em></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, определяющее 
	<a href="../../types.html">системный тип</a> экспортируемых данных.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>exportColumnIndex</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное выражение, определяющее индекс колонки 
        Excel, в которую будут экспортированы данные строки. По умолчанию берется  
        колонка с индексом = 1.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>exportAsBold</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее жирность 
        текста экспортируемых данных строки. По умолчанию принимает значение = False.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>isFormatted</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее форматирование 
        исходных данных строки. По умолчанию принимает значение = True. Применима только для данных типа 
        <em>Numeric</em>.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>trimBeforeExport</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее 
        удаление всех начальных и конечных символов-разделителей. 
        По умолчанию принимает значение = True. Применима только для строковых типов данных.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>useForWidth</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее разрешимость 
        расширения размеров той колонки, в которую будут экспортированы данные строки, в 
        зависимости от их размера. 
        По умолчанию принимает значение = True.</font></td>
    </tr>
</table>
    <p>
        <br class="style1" />
        <span class="style1"><strong>Например<br />
        </strong>Пусть имеем отчет со следующими данными:<br />
        <br />
        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></span><strong><span 
            class="style1">Non-Current Assets - account: 11-12</span><br 
            class="style1" />
        <br class="style1" />
        <span class="style1">Openning Balance At August&nbsp; 01, 2010&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        168.11</span><br class="style1" />
        <span class="style1">Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Acc.Debit&nbsp;&nbsp;&nbsp;&nbsp; Credit Document&nbsp;
        </span>
        <br class="style1" />
        <span class="style1">19/01/11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1131&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A 901&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;
        </strong>
        <br />
        <br />
        <span class="style1">Рассмотрим каждую строку по отдельности. 
        Возьмем (19/01/11<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>1131<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>A 901) - данную строку. Допустим хотим, чтобы данная строка экспортировалось следующим образом: из даты(19/01/11 ) экспортировалось только его год жирным 
        текстом, 1131- не жирным, а&nbsp;A 901 - без&nbsp;символа-разделителя между A и 901 
        и не жирным текстом.<br />
        Сначала об<font face="Arial">ъявим</font> некоторую переменную <strong>sArr </strong>
        и присвоим ему нашу строку:<strong><br />
        <br />
        Dim sArr as String</strong> &nbsp;<strong><br />
        sArr = &quot;19/01/11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1131&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        A 901&quot;<br />
        </strong>
        <br />
        Потом для каждой части данной строки задатим его описание с 
        помощью метода<font face="Arial">  <strong>AddPart</strong> </font>:</span><br 
            class="style1" />
        <br />
        <span class="style1">Dim oStyle As SpreadsheetExportRowStyle</span><br 
            class="style1" />
        <span class="style4"><span class="style3">
        <span class="style1">Dim xRep As AsRepViewer<br />
        </span></span></span><br class="style1" />
        <span class="style2">
        <span class="style6">Set oStyle = New SpreadsheetExportRowStylee<br />
        </span></span><span class="style3"><br class="style1" />
        <span class="style1">oStyle.AddPart 7, &quot;C(2)&quot;, , True, , , False&nbsp;
        </span><span class="style4">&#39;</span><span class="style3"><span class="style2"><span 
            class="style9">7 - это стартовая позиция строки - &quot;19/01/11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1131&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        A 901&quot;,<strong> </strong>начиная с которого данные нашей строки будут 
        экспортированы в Excel. Под 7-мым индексом находится символ 
        &quot;1&quot;</span></span><br />
        </span>
        </span><span class="style2"><br 
            class="style1" />
        </span>
        <span class="style6">oStyle.AddPart 7+2+8, &quot;C(4)&quot;, , False</span>
        <span 
            class="style7">
        &#39;</span><span 
            class="style8"><span class="style4"><span class="style1">7+2+8(начальная позиция + длина 11 + расстояние 
        от 7+2 до 1131, т.e. 1131 в строке sArr&nbsp; начинается с 17-ой 
        позиции) 
        </span>
        </span><span 
            class="style9">
        </span>
        </span>
        </span><span 
            class="style7">
        &nbsp;<br />
        </span><span class="style4"><br class="style1" />
        <span class="style1">
        <span class="style3">oStyle.AddPart 7+2+8+4+14, &quot;C(4)&quot;, , False, , True<br />
        <br />
        После того как описали стили экспорта, задатим имя 
        стиля на основе уже имеющихся описаний с помощью метода <strong>AddExportStyle</strong>
        </span></span></span><span class="style3"><br 
            class="style1" />
        <span class="style1">xRep.<a href="../AsRepViewer/AddExportStyle.html">AddExportStyle</a> &quot;<strong>RowStyle</strong>&quot;, 
        oStyle</span></span><span class="style1"><span class="style4">
        <br />
        <br />
        </span><span class="style3">
        С помощью метода <strong>AddRow</strong> присвоим заданный стиль к строке 
        sArr, в которм находятся те данные, которые хотели экспортировать в Excel.</span><span class="style4"><span class="style3">
        </span></span><span class="style3"><br />
        </span>
        </span><span class="style3"><span class="style1">xRep.<a href="../AsRepViewer/AddRow.html">AddRow</a> sArr, , , &quot;<strong>RowStyle</strong></span>&quot;</span><span 
            class="style4"> </span><span class="style1"><span class="style3">
        <br />
        <br />
        &nbsp;</span></span><span class="style3"><span class="style1">Присвоение заданых стилей к строкам данных отчета можно осуществить 
        еще с 
        помощью таких методов, как <a href="../AsRepViewer/AddHeader.html">AddHeader</a> 
        и <a href="../AsRepViewer/AddFooter.html">AddFooter</a>.</span></span><br />
    </p>
</body>
</html>
