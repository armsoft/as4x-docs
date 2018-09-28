<html>
<head>
<title>Документ\GetDialogFromPage</title>
    <style type="text/css">

        .style2
        {
            font-style: italic;
        }
        .style3
        {
            font-style: italic;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод GetDialogFromPage<br>
<br>
</font></strong><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Добавляет диалог с реквизитами заданных страниц документа.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b class="style2">Синтаксис</b></font></p>

<p><font face="Arial" class="style3"><em>object</em>.GetDialogFromPage(dlg, pages, startFromNewPage, 
    hiddenRekvs, skipRekvs, withCheckControl)</font></p>

<p><font face="Arial">Синтаксис метода  <strong>GetDialogFromPage</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, определяющее 
        ссылку на экземпляр документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial" class="style3">dlg</font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, 
	    определяющее ссылку на экземпляр пользовательского диалога</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>pages</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, определяющее 
        идентификаторы 
        страниц документа, реквизиты которых будут добавлены в качестве реквизитов 
        диалога. Перечисляемые страницы в строке разделяются друг от друга пробелами.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>startFromNewPage</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, определяющее 
        признак того, что при значении True реквизиты будут добавляться с новой страницы 
        диалога, в противном случае - нет. По умолчанию принимает значение True.
        </font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>hiddenRekvs</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее список тех реквизитов страницы, которые будут 
        добавлены в качестве скрытых невидимых реквизитов. Перечисляемые реквизиты 
        разделяются друг от друга пробелами.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>skipRekvs</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
        список тех реквизитов, которые не будут добавлены в дилаог. Перечисляемые 
        реквизиты разделяются пробелами.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>withCheckControl</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, 
        определяющее (при значении True) добавление селективных кнопок слева от&nbsp; 
        реквизитов, обработка которых осуществляется в скрипте. При добавлении кнопок 
        реквизиты переходят в режим чтения, т.е. их невозможно редактировать без особой 
        обработки в системных событиях диалога. По умолчанию принимает значение False. 
        Идентификатором кнопки каждого реквизита является выражение - &quot;FILLUP&quot; &amp; 
        &quot;идентификатор соответствующего реквизита&quot;.</font></td>
    </tr>
</table>
    <p>
        <br />
    </p>
    </body>
</html>
