<html>
<head>
<title>ApplyDialogExtension</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial;
        }
        .style2
        {
            font-family: Arial;
            width: 11%;
        }
        .style3
        {
            font-family: Arial;
            width: 11%;
            height: 30px;
        }
        .style4
        {
            height: 30px;
        }
        .style5
        {
            font-weight: 700;
        }
        .style6
        {
            font-family: Arial;
            height: 66px;
        }
        .style7
        {
            height: 66px;
        }
    </style>
</head>

<body>

<h1><font size="4" face="Arial">Метод ApplyDialogExtension</font></h1>

<p><font face="Arial">Добавляет пользовательское поле в описательный диалог.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</p>

<p class="style1"><strong>ApplyDialogExtension(</strong></b><em>xDlg</em><strong>,
    </strong><em>groupsView</em><strong>, </strong><em>defaultViewName</em><strong>,
    </strong>[<em>viewNameFilter</em>], [<em>disableExcelExport</em>]<b><strong>)</strong></p>

<p><font face="Arial">Синтаксис функции <strong>ApplyDialogExtension </strong>состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%" class="style1"><em>xDlg</em></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее переменную, 
        ссылающуюся на экземпляр объекта типа описательный диалог. </font></td>
  </tr>
    <tr>
    <td width="29%" class="style1"><font face="Arial"><em>groupsView</em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее группу или список групп вида просмотра.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style1"><font face="Arial"><em>defaultViewName</em></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее вид просмотра по умолчанию для постановки в скрипт. Если 
        вид просмотра не задан в расширении диалога, то 
        в скрипт поставляется системный вид просмотра.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style6"><em>viewNameFilter</em></td>
    <td width="71%" class="style7">
        <div id="imcontent">
            <font face="Arial">необязательное логическое выражение, позволяющее видеть в 
            расширении диалога только<b> </b>те виды просмотра, определенные на одной и той 
            же группе <i>groupsView</i>, которые начинаются со значения <i>viewNameFilter</i>. </div>
        </td>
    </tr>
    <tr>
    <td width="29%" class="style1"><em>disableExcelExport</em></td>
    <td width="71%">
        <div id="imcontent0">
            необязательное логическое выражение. По умолчанию принимает значение 
            <i>False</i>, при 
            котором в описательном диалоге появляется дополнительный реквизит типа 
            <font face="Arial">
            <a href="mk:@MSITStore:D:/MainWorkSpace/AS-4X/Progr_guide.chm::/progr_guide/htm/ProgrGuide/Types/Tree().html">
            Tree</a> (FillTo)</font>, позволяющий выбрать способ заполнения данных.</div>
        </td>
    </tr>
</table>

<p>&nbsp;</p>
    </b>
    <p>Дерево&nbsp; <font face="Arial"><b>FillTo</b></font> имеет следующие значения:</p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
      <font face="Arial"><b>
    <td class="style2"><font face="Arial"><b>Значение</b></font></td>
      </b></font><font face="Arial"><b>
    <td width="71%"><font face="Arial"><b>Описание</b></font></td>
      </b></font>
  </tr>
    <tr>
        <font face="Arial"><b>
    <td class="style3"><em><strong>0</strong></em></td>
    <td width="71%" class="style4">Запрашиваемые данные заполняются <font face="Arial">
        внутри папки.</font></td>
        </b></font>
    </tr>
    <tr>
        <font face="Arial"><b>
    <td class="style2"><em><strong>1</strong></em></td>
    <td width="71%"><font face="Arial">Запрашиваемые данные заполняются в </font>MS 
        Excel<font face="Arial">.</font></td>
        </b></font>
    </tr>
    <tr>
        <font face="Arial"><b>
    <td class="style2"><em class="style5">2</em></td>
    <td width="71%"><font face="Arial">Запрашиваемые данные заполняются в<b> </b>MS 
        Excel pivot.</font></td>
        </b></font>
    </tr>
</table>

    <b>
    <p class="label">&nbsp;</p>
    <p class="label">Примечание</p>
    </b>

    <p>
        Пример использования <font face="Arial"><strong>ApplyDialogExtension</strong>. 
        Пусть на группе <strong>GroupView</strong> определены <strong>View1</strong>,
        <strong>View2</strong>, <strong>GroupV1 </strong>и<strong> GroupV2</strong> виды 
        просмотра.</font></p>
    <p class="label">
        Dim xDialog As AsDialog</p>
    <p class="label">
        Set xDialog = CreateDialog(&quot;ViewDialog&quot;)</p>
    <p class="label">With xDialog</p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .Caption = &quot;Group View&quot;</p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .ECaption = <font face="Arial">&quot;Group 
        View&quot;</font></p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .EventModule = &quot;ViewMod&quot; </p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .AddControl &quot;StartDate&quot;, #Period, 
        &quot;DATE&quot;, , , #e_Period, 0 </p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .AddDublCntrl &quot;EndDate&quot;, &quot;StartDate&quot;, , , 0</p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .LeftDouble = 1500 
        End With</p>
    <p class="label">
        ApplyDialogExtension <font face="Arial">xDialog</font>, &quot;<font face="Arial"><strong>GroupView</strong></font>&quot;, 
        &quot;<font face="Arial"><strong>View1</strong></font>&quot;,&nbsp; <font face="Arial">&quot;<strong>GroupV</strong>%&quot;</font></p>
    <p class="label">
        <font face="Arial">xDialog</font>.Show </p>
    <p class="label">
        If <font face="Arial">xDialog</font>.Cancel Then </p>
    <p class="label">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Exit Sub </p>
    <p class="label">
        End If</p>
    <p class="label">
        Тогда в <font face="Arial">расширении диалога</font> по умолчанию будет значение <font face="Arial">&quot;<strong>View1</strong>&quot;, 
        а в списке будут доступны &quot;<strong>View1</strong>&quot;,&nbsp; <strong>GroupV1</strong> 
        и <strong>GroupV2</strong>, т.е по умолчанию будет значение параметра <strong>defaultViewName,</strong> 
        а в списке будут видны <strong>defaultViewName</strong> и все те виды 
        просмотра,&nbsp; которые начинаются со значенния <strong>viewNameFilter</strong></font></p>
    <b>



<p class="label"><a href="../../../functions.html"><font face="Arial">
См. также</font></a></p>
</body>
</html>

