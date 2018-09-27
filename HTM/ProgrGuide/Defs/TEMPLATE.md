﻿<html>
<head>
<title>TEMPLATE Definition</title>
    <style type="text/css">
        .style1 {
            font-style: normal;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Описание шаблона TEMPLATE</font></strong></p>

<p><font face="Arial">Предназначено для описания файла шаблона печатного вида документа 
    в формате, задающийся с помощью значения <em> sTemplType.</em></font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>TEMPLATE</strong> { <strong>NAME</strong> 
=<em>
sTemplName</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Caption</strong> = <em>sTemplCaption</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ЕCaption</strong> = <em>sTemplECaption</em>;<br />
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TYPE</strong> 
=<em> sTemplType</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOCCONNECTED </strong>= <em>nDocConnected</em>;<em><br />
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span class="style1">&nbsp;UNICODE</span> </strong>= nUnicode;<br>
</em><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </strong>};<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><br>
</font></p>

<p><font face="Arial">Синтаксис описания шаблона <strong>TEMPLATE </strong> состоит 
из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>
sTemplName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее идентификатор файла 
        шаблона.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"> <em>sTemplCaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок шаблона.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"> <em>sTemplECaption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее заголовок шаблона на иностранном языке.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>
        sTemplType</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, орделяющее тип шаблона, 
        которое необходимо для печати документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"> <em>nDocConnected</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, определяющее его связанность 
        с документом. Принимает значения 0 или 
        1. При значении 0 связи с&nbsp; документом нет, в противном случае 
        есть. По умолчанию принимает значение 1.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nUnicode</em></font></td>
    <td width="71%"><font face="Arial">численное выражение, определяющее формат 
        текста шаблона. Принимает значения 0 или 
        1. При значении 1 формат текста шаблона является <em> <strong>UNICODE</strong></em>, 
        в противном случае не является. 
        По умолчанию принимает значение 0.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
    <br />
</b>Установки для
        <em>sTemplType</em> смотреть <a href="../TemplateTypes.html">здесь</a>:<br />
    </font></p>

<p class="label"><font face="Arial"><a href="../Defs.html">См. также</a></p>
</body>
</html>