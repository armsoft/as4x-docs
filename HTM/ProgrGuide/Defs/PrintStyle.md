<html>
<head>
<title>Print Style Definition</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Описание стиля печати</strong></font></p>

<p class="label"><font face="Arial">Описывается стиль печати. Стили 
печати с помощью свойства <a
href="../Functions/AsRepViewer/PrintStyle.html">PrintStyle</a> приписываются к 
отчетам, для определения параметров печати перед выводом отчета на принтер. 
Система поддерживает 4 режима печати, каждый из которых применим к определенному 
классу принтеров.</font></p>

<table border="1">
  <tr>
    <td width="25%"><font face="Arial"><strong>Имя режима</strong></font></td>
    <td width="25%"><font face="Arial"><strong>Идентификатор режима в 
	описании</strong></font></td>
    <td width="50%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="25%"><font face="Arial">Windows Default</font></td>
    <td width="25%"><font face="Arial"><strong>Default</strong></font></td>
    <td width="50%"><font face="Arial">данный режим применим к любому 
	типу принтера.</font></td>
  </tr>
  <tr>
    <td width="25%"><font face="Arial">EpsonEsc <br>
    (9-dot matrix printers)</font></td>
    <td width="25%"><font face="Arial"><strong>Epson9</strong></font></td>
    <td width="50%"><font face="Arial">данный режим применим к 
	матричным 9-и игольчатым принтерам типа Epson. Печать производится по 
	загружаемым из ресурсного файла фонтам.</font></td>
  </tr>
  <tr>
    <td width="25%"><font face="Arial">GeneralMatrix <br>
    </font></td>
    <td width="25%"><font face="Arial"><strong>GenMatr</strong></font></td>
    <td width="50%"><font face="Arial">данный режим применим к 
	матричным принтерам. Печать производится по загружаемым из ресурсного файла 
	фонтам, но в отличие от EpsonEsc, загрузка фонта производится автоматически 
	каждый раз при печати очередного символа.&nbsp; </font></td>
  </tr>
  <tr>
    <td width="25%"><font face="Arial">PCL (LaserJet printers)</font></td>
    <td width="25%"><font face="Arial"><strong>PCL</strong></font></td>
    <td width="50%"><font face="Arial">данный режим применим к 
	лазерным принтерам. Печать производится по загружаемым фонтам.</font></td>
  </tr>
</table>

<p class="label"><font face="Arial">Стиль печати может содержать 
описания всех 4-х режимов. Перед выводом на печать пользователю необходимо лишь 
выбрать один из четырех режимов, применимый к его принтеру и загрузить фонты. 
Каждый режим печати характеризуется своим набором параметров. Режимом по 
умолчанию является первый описанный стиль печати.</font></p>

<p class="label"><font face="Arial"><b><br>
Синтаксис</b></font></p>

<p><font face="Arial"><strong>PRINTSTYLE</strong> { <strong>Name</strong> 
= <em>sName</em>;
<strong>Caption</strong> = <em>sCaption</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Copies</strong> = <em>nCopyCount</em>; <strong>Collate</strong> = <em>nCollate</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
MergeCopies</strong> = <em>nMergeCopies;</em><strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
PrintHeader</strong> = <em>nPrintHeader</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
PageNumbering</strong> = <em>nPageNumbering</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
PrintSpec</strong> =<em> nPrintSpec</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Version</strong> =<em> nVersion</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MARGINS</strong> { <strong>
Left </strong>=
<em>nLeft</em>; <strong>Right</strong> = <em>nRight</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Top </strong>= <em>nTop</em>; <strong>Bottom</strong> = <em>nBottom</em>; };<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STYLE</strong> { <strong>Name</strong>
=<strong> Default</strong>; <strong>Orientation</strong> = <em>nDefOrientation</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
FontSize</strong> = <em>nDefFontSize</em>; };<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STYLE</strong> { <strong>Name</strong>
=<strong> Epson9</strong>; <strong>Orientation</strong> = <em>nEpsOrientation</em>;<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Condensed</strong> = <em>nEpsCondensed</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
CPI</strong> = <em>nEpsCPI</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Paper</strong> = <em>nEpsPaper</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Length</strong> = <em>nEpsLength</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Width</strong> = <em>nEpsWidth</em>; };<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STYLE</strong> { <strong>Name</strong>
=<strong> GenMatr</strong>; <strong>Orientation</strong> = <em>nGenOrientation</em>;<strong>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
DPI</strong> = <em>nGenDPI</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Paper</strong> = <em>nGenPaper</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Length</strong> = <em>nGenLength</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Width</strong>= <em>nGenWidth</em>; };<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STYLE</strong> { <strong>Name</strong>
=<strong> PCL</strong>; <strong>Orientation</strong> = <em>nPclOrientation</em>;<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Condensed</strong> = <em>nPclCondensed</em>; <strong>CPI</strong> = <em>nPclCPI</em>; 
};<br>
};<br>
</font></p>

<p><font face="Arial">Синтаксис описания стиля печати состоит из 
следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор стиля печати. С помощью данного идентификатора 
	стиль печати <a
    href="../Functions/AsRepViewer/PrintStyle.html">приписывается к отчету</a>.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее пояснительный заголовок стиля печати.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nCopyCount</em></font></td>
    <td width="71%"><font face="Arial">целочисленное выражение в 
	интервале от 1 до 99, определяющее количество копий печати каждой страницы.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nCollate</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее порядок печати копий страниц. По умолчанию 
	параметр принимает значение 1, означающее, что при печати более одной копии 
	отчета, система распечатает целиком отчет один раз и затем снова начнет его 
	печатать. Значение 0 означает, что будут отпечатаны сначала первые страницы 
	копий, затем вторые страницы и так далее.</font></td>
  </tr>
  <tr>
    <td width="29%"> <em><font face="Arial">nMergeCopies</font></em></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее признак соединения копий в одной странице, 
	если это возможно.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nPrintHeader</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее наличие верхнего колонтитула страниц. По 
	умолчанию параметр принимает значение 1, означающее, что при печати каждой 
	страницы появляется верхний колонтитул, состоящий в общем случае из 
	нумерации страниц, разделительной верхней линии, даты печати и 
	идентификатора программы. Если данный параметр установлен 0, то параметры <em>
	nPageNumbering </em>и<em> nPrintStyle </em>игнорируются.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nPageNumbering</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее наличие нумерации страниц. По умолчанию 
	параметр принимает значение 1, означающее, что при печати каждой страницы 
	появляется номер страницы. Если ширина отчета больше ширины страницы, то 
	печатаются дополнительные фрагменты текущей страницы, с нумерацией вида 
	&quot;K-N&quot;, где K - это текущий номер страницы, N - номер фрагмента.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nPrintSpec</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее наличие специальной строки, состоящей из даты 
	и идентификатора программы. По умолчанию параметр принимает значение 1, 
	означающее наличие специальной строки.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nVersion</em></font></td>
    <td width="71%"><font face="Arial">численное выражение целого 
	типа, определяющее номер версии описания отчета</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nLeft</em></font></td>
    <td width="71%"><font face="Arial">целое числовое выражение, 
	определяющее отступ слева от края начала строки в миллиметрах. По умолчанию 
	параметр принимается равным 10 мм. Интервал допустимых значений от 7 до 
	ширины страницы. Размер страницы принимается A4.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nRight</em></font></td>
    <td width="71%"><font face="Arial">целое числовое выражение, 
	определяющее отступ справа от края конца строки в миллиметрах. По умолчанию 
	параметр принимается равным 10 мм. Интервал допустимых значений от 7 до 
	ширины страницы. Размер страницы принимается A4.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nTop</em></font></td>
    <td width="71%"><font face="Arial">целое числовое выражение, 
	определяющее отступ сверху от края начала печати в миллиметрах. По умолчанию 
	параметр принимается равным 10 мм. Интервал допустимых значений от 7 до 
	ширины страницы. Размер страницы принимается A4.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nBottom</em></font></td>
    <td width="71%"><font face="Arial">целое числовое выражение, 
	определяющее отступ книзу от края конца печати в миллиметрах. По умолчанию 
	параметр принимается равным 10 мм. Интервал допустимых значений от 7 до 
	ширины страницы. Размер страницы принимается A4.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nDefOrientation</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 (альбомная) или <br>
    1 (книжная), определяющее ориентацию страницы. По умолчанию параметр 
	принимает значение 1, означающее книжную ориентацию.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nDefFontSize</em></font></td>
    <td width="71%"><font face="Arial">целое числовое выражение, 
	определяющее размер фонта печати. По умолчанию параметр принимается равным 
	10. Интервал допустимых значений от 8 до 72.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nEpsOrientation</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 (альбомная) или <br>
    1 (книжная), определяющее ориентацию страницы. По умолчанию параметр 
	принимает значение 1, означающее книжную ориентацию.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nEpsCondensed</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее сжатый режим печати. По умолчанию параметр 
	принимает значение 0, означающее несжатую печать.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nEpsCPI</em></font></td>
    <td width="71%"><font face="Arial">выражение, принимающее значения 
	10 или 12. Оно определяет количество символов, печатаемых в 1 дюйме. По 
	умолчанию принимается 12.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nEpsPaper</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 (рулон) или <br>
    1 (одиночные листы), определяющее тип подаваемой бумаги. По умолчанию 
	параметр принимает значение 1.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nEpsLength</em></font></td>
    <td width="71%"><font face="Arial">число, определяющее длину 
	страницы в миллиметрах для рулона. Если значение параметра 0, то печать 
	производится &nbsp; непрерывным образом. В противном случае печатается 
	постранично. По умолчанию принимается 297 (что соответствует формату A4). 
	Данный параметр имеет смысл, если тип подаваемой бумаги выбран рулон.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nEpsWidth</em></font></td>
    <td width="71%"><font face="Arial">число, определяющее ширину 
	рулона в миллиметрах. По умолчанию принимается 210. Данный параметр имеет 
	смысл, если тип подаваемой бумаги выбран рулон.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nGenOrientation</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 (альбомная) или <br>
    1 (книжная), определяющее ориентацию страницы. По умолчанию параметр 
	принимает значение 1, означающее книжную ориентацию.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nGenDPI</em></font></td>
    <td width="71%"><font face="Arial">выражение, принимающее значения 
	120 или 240. Оно определяет количество точек, печатаемых в 1 дюйме. По 
	умолчанию принимается 120.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nGenPaper</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 (рулон) или <br>
    1 (одиночные листы), определяющее тип подаваемой бумаги. По умолчанию 
	параметр принимает значение 1.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nGenLength</em></font></td>
    <td width="71%"><font face="Arial">число, определяющее длину 
	страницы в миллиметрах для рулона. Если значение параметра 0, то печать 
	производится &nbsp; непрерывным образом. В противном случае печатается 
	постранично. По умолчанию принимается 297 (что соответствует формату A4). 
	Данный параметр имеет смысл, если тип подаваемой бумаги выбран рулон.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nGenWidth</em></font></td>
    <td width="71%"><font face="Arial">число, определяющее ширину 
	рулона в миллиметрах. По умолчанию принимается 210. Данный параметр имеет 
	смысл, если тип подаваемой бумаги выбран рулон.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nPclOrientation</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 (альбомная) или <br>
    1 (книжная), определяющее ориентацию страницы. По умолчанию параметр 
	принимает значение 1, означающее книжную ориентацию.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nPclCondensed</em></font></td>
    <td width="71%"><font face="Arial">двоичное число, принимающее 
	значения 0 или 1, определяющее сжатый режим печати. По умолчанию параметр 
	принимает значение 0, означающее несжатую печать.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nPclCPI</em></font></td>
    <td width="71%"><font face="Arial">выражение, принимающее значения 
	10 или 12. Оно определяет количество символов, печатаемых в 1 дюйме. По 
	умолчанию принимается 12.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a
href="../Functions/AsRepViewer/PrintStyle.html">См. также</a></font></p>
</body>
</html>
