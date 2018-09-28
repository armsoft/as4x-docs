<html>
<head>
<title>Диалог\AddControlAtRight</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial, Helvetica, sans-serif;
        }
        .style2
        {
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод AddControlAtRight<br>
<br>
</font></strong><font face="Arial"><a href="../Asustpar.html">См. также</a>&nbsp; 
Пример&nbsp; <a href="../Asustpar.html">Применяется к</a></font></p>

<p>В<font face="Arial"> пользовательский диалог добавляет реквизит 
справа от указанного реквизита.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em>.</font><strong><font face="Arial">AddControlAtRight</font></strong><font face="Arial"><strong>(</strong><em>RekvName, 
ExistingRekvName, TypeRekv</em><strong>, </strong>[<em>AttribRekv</em>]<em>, </em>
[<em>ValueRekv</em>]<strong>,
</strong>[<em>iSaveValue</em>]<em>, </em>[<em>CaptionRekv</em>]<em>, </em>[<em>ECaptionRekv</em>]<strong>, </strong>
[<em>LabelWidth</em>]<strong>, </strong>
[<em>iCommentlen</em>]<strong>, </strong>
[<em>iLeftPosition</em>]<strong>, </strong>
[<em>sShowType</em>]<strong>, </strong>
[<em>iCaptionAlign</em>]<strong>, </strong>
[<em>bDubleControl</em>] <strong>)</strong></font></p>
<p><font face="Arial">Синтаксис метода <strong>AddControlAtRight</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта пользовательского 
	диалога.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>RekvName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор реквизита в диалоге.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>ExistingRekvName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор уже существующего в диалоге реквизита справа от 
	которого будет добален новый.</font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">TypeRekv</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../types.html">тип реквизита</a> в диалоге.</font></td>
  </tr>
	<tr>
    <td width="29%"><em><font face="Arial">AttribRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="Attribute.html">атрибуты</a>
    реквизита (их может быть несколько). </font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">ValueRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное выражение типа 
	Variant, определяющее первоначальное значение реквизита.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">iSaveValue</font></em></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее признак запоминания значений реквизита. При 1 - 
	текущее значение реквизита запоминается в реестре, а при значении 0 - нет. 
	По умолчанию принимает значение 1.</font></td>
  </tr>
<tr>
    <td width="29%"><font face="Arial"><em>CaptionRekv</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее заголовок реквизита в диалоге.</font></td>
  </tr>
<tr>
    <td width="29%"><em><font face="Arial">ECaptionRekv</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее заголовок реквизита в диалоге на иностранном языке.</font></td>
  </tr>
<tr>
    <td width="29%"><font face="Arial"><em>LabelWidth</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее ширину заголовка реквизита. По умолчанию принимает 
	значение 0.</font></td>
  </tr>
<tr>
    <td width="29%" class="style1"><em>iCommentlen</em></td>
    <td width="71%" class="style1"><font face="Arial">необязательное численное 
        выражение, определяющее длину комментарий для типов
        <a href="mk:@MSITStore:D:/DEFS/progr_guide.chm::/progr_guide/htm/ProgrGuide/Types/Folder().html">
        Folder()</a>,
        <a href="mk:@MSITStore:D:/DEFS/progr_guide.chm::/progr_guide/htm/ProgrGuide/Types/Tree().html">
        Tree()</a> и
        <a href="mk:@MSITStore:D:/DEFS/progr_guide.chm::/progr_guide/htm/ProgrGuide/Types/FULLTREE().html">
        FullTree()</a>. По умолчанию принимает значение 32.</font></td>
  </tr>
<tr>
    <td width="29%" class="style1"><em>iLeftPosition</em></td>
    <td width="71%" class="style1">необязательное целое, численное выражение 
        определяющее удаленность реквизита с левой стороны</td>
  </tr>
<tr>
    <td width="29%" class="style2"><em>sShowType</em></td>
    <td width="71%" class="style1"><span lang="RU" 
            style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 12pt; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: RU">
        необязательное строковое выражение, определяющее </span>
        <span style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 12pt; mso-fareast-font-family: 'Times New Roman'">
        внутренний тип данных р<span lang="ru">еквизита</span></span><span 
            style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 12pt; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: RU">
        </span><span lang="RU" 
            style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12pt; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: RU">
        при показе.</span><span 
            style="FONT-FAMILY: 'Arial','sans-serif'; FONT-SIZE: 12pt; mso-fareast-font-family: 'Times New Roman'">
        <span lang="ru">Используется только с
        <a href="mk:@MSITStore:D:/DEFS/progr_guide.chm::/progr_guide/htm/ProgrGuide/Types/C().html">
        символьным типом данных</a>.</span></span></td>
  </tr>
<tr>
    <td width="29%" class="style1"><em>iCaptionAlign</em></td>
    <td width="71%" class="style1">необязательное логическое выражение определяющее 
        положение заголовка реквизита. True - с отступом, False - без отступа, с 
        начальной позиции.</td>
  </tr>
<tr>
    <td width="29%" class="style1"><em>bDubleControl</em></td>
    <td width="71%" class="style1">необязаятельное логическое выражение отвечающее за 
        добавление <font face="Arial">вторичного реквизита ввода в пользовательский 
        диалог. Причем данный реквизит на форме располагается не к низу от текущего 
        реквизита, а рядом с ним, наследуя от него тип и имея общий с ним заголовок. 
        Значение по умолчанию = False.</font></td>
  </tr>
</table>

    <p>
&nbsp;</p>

</body>
</html>
