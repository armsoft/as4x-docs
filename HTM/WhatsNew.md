<html>
<head>
<title>Как пользоваться помощью</title>
</head>

<body>

<p><font size="+1" face="Arial">Что нового?</font></p>
<p><i><font face="Arial" size="2"><span lang="en-us">8 Ноября</span> 
2005 г - 26 октября 2006 г</font></i></p>
<ol>
  <li><font face="Arial">Добавлены для документа</font><ul>
	<li><font face="Arial">в <a href="ProgrGuide/Defs/doc.html">
	описании документа</a>
	</font>
	<ul>
		<li><font face="Arial">можно задавать ширину колонки 
		грид-таблицы (свойство Width)</font></li>
		<li><font face="Arial">при помощи атрибута V<b> </b>можно 
		отключить проверку реквизита или значения колонки грид-таблицы</font></li>
		<li><font face="Arial">при помощи атрибута <b>Z </b>Tab/Enter 
		могут пропутить реквизит</font></li>
		<li><font face="Arial">при помощи атрибута<strong> N</strong> 
		значение колонки грид-таблицы в новой строке заполняется значением 
		колонки последней строки</font></li>
		<li><font face="Arial">при помощи атрибута <b>I</b> реквизит 
		можно редактировать в режиме Overwrite вместо Insert (только для типа 
		C(x))</font></li>
		<li><font face="Arial">свойство DisableCopy отключает 
		возможность создания копии документа</font></li>
		<li><strong style="font-weight: 400"><font face="Arial">при 
		помощи конструкции </font></strong><font face="Arial">
		<strong style="font-weight: 400">FolderInfo</strong> можно описать в 
		какой папке документ находится в каждом состоянии. Наличие
		<strong style="font-weight: 400">FolderInfo позволяет системе показывать 
		более читабельную историю документа.</strong></font></li>
	</ul></li>
	<li><font face="Arial">ñîáûòèå 
		<strong style="font-weight: 400">
	<a href="ProgrGuide/ScriptProcs/BeforeCommit.html">BeforeCommit</a></strong></font></li>
	<li><font face="Arial">íîâûé ïàðàìåòð â событии <a href="ProgrGuide/ScriptProcs/NestedTransaction.html">
	NestedTransaction</a></font></li>
	<li><font face="Arial">свойство
		<a href="ProgrGuide/Functions/ASDOC/FormActivated.html">FormActivated</a></font></li>
	<li><font face="Arial">свойство
		<a href="ProgrGuide/Functions/ASDOC/CreateDialog.html">CreateDialog</a></font></li>
	<li><font face="Arial">изменены параметры ñîáûòèя
	<span lang="en-us"><a href="ProgrGuide/ScriptProcs/IsHidden.html">IsHidden</a></span></font></li>
	</ul>
	<p>&nbsp;</li>
	<li><font face="Arial">Добавлены для источника данных</font><ul>
		<li><font face="Arial">в <a href="ProgrGuide/Defs/Data.html">
		описании источника данных</a></font><ul>
			<li><font face="Arial">для параметра можно задавать 
			идентификатор (свойство Name) и значение в генераторе отчетов 
			(свойство UserReportValue)</font></li>
			<li><font face="Arial">для колонки можно задавать ширину 
			(свойство Width) и количество строк в заголовке (свойство HeadLines)</font></li>
			<li><font face="Arial">колонку соответствующую ISN 
			документа теперь можно задавать при помощи свойства ISN</font></li>
			<li><font face="Arial">можно блокировать вызов события
			<a href="ProgrGuide/ScriptProcs/Valid_Data.html">Valid</a> источника 
			данных (свойство DisableValidFunction)</font></li>
		</ul></li>
		<li><font face="Arial">ñîáûòèå 
		<strong style="font-weight: 400">
		<a href="ProgrGuide/ScriptProcs/LoadUpdates.html">LoadUpdates</a></strong></font></li>
		<li><font face="Arial">ñîáûòèå 
		<strong style="font-weight: 400">
		<a href="ProgrGuide/ScriptProcs/ExternalConnection.html">
		ExternalConnection</a></strong></font></li>
		<li><font face="Arial">ìåòîäы 
		<a href="ProgrGuide/Functions/ASDATA/OpenUpdateCursor.html">
		OpenUpdateCursor</a> и
		<a href="ProgrGuide/Functions/ASDATA/CloseUpdateCursor.html">
		CloseUpdateCursor</a></font></li>
		<li><font face="Arial">свойство
		<a href="ProgrGuide/Functions/ASDATA/DisableValidFunction.html">
		DisableValidFunction</a></font></li>
		<li><font face="Arial">свойство
		<a href="ProgrGuide/Functions/ASDATA/DefaultIndicate.html">
		DefaultIndicate</a></font></li>
		<li><font face="Arial">свойство
		<a href="ProgrGuide/Functions/ASDATA/CurrentIndicate.html">
		CurrentIndicate</a></font><br>
		<br>
		&nbsp;</li>
	</ul></li>
	<li><font face="Arial">Добавлены для диалога</font><ul>
		<li><font face="Arial">свойствo
		<a href="ProgrGuide/Functions/AsUstPar/Properties.html">Properties</a></font></li>
		<li><font face="Arial">изменены параметры метода
		<a href="ProgrGuide/Functions/AsUstPar/AddLine.html">AddLine</a></font></li>
		<li><font face="Arial">метод
		<a href="ProgrGuide/Functions/AsUstPar/AddControlAtRight.html">
		AddControlAtRight</a></font></li>
		<li><font face="Arial">метод
		<a href="ProgrGuide/Functions/AsUstPar/AddControlAtRight.html">
		AddViewControlAtRight</a></font></li>
		<li><font face="Arial">при помощи атрибута <b>I</b> реквизит 
		можно редактировать в режиме Overwrite вместо Insert (только для типа 
		C(x))</font></li>
		<li><font face="Arial">при помощи атрибута <b>S</b> текущее 
		значение реквизита не запоминается в реестре.</font></li>
	</ul>
	<p>&nbsp;</li>
	<li><font face="Arial">Изменены для описателя доступа изменены 
	параметры метода
	<a href="ProgrGuide/Functions/AsAccessDesc/Store.html">Store</a>.</font></li>
	<li><font face="Arial">Добавлены для структура документа свойства
	<a href="ProgrGuide/Functions/ASDocStructure/EnglishCaption.html">
	EnglishCaption</a> и
	<a href="ProgrGuide/Functions/ASDocStructure/NativeCaption.html">
	NativeCaption</a>.</font></li>
	<li><font face="Arial">Добавлены для </font>
	<font face="Arial">проводкu</font><font face="Arial" size="4">
	</font><font face="Arial">свойства
	<a href="ProgrGuide/Functions/ASFACT/Info.html">Info</a>,
	<a href="ProgrGuide/Functions/ASFACT/Branch.html">Branch</a>,
	<a href="ProgrGuide/Functions/ASFACT/Depart.html">Depart</a>.</font></li>
	<li><font face="Arial">Добавлены для элемента папки</font><font face="Arial" size="4">
	</font><font face="Arial">свойства
	<a href="ProgrGuide/Functions/AsFoldElement/Branch.html">Branch</a>,
	<a href="ProgrGuide/Functions/AsFoldElement/Depart.html">Depart</a>,
	<a href="ProgrGuide/Functions/AsFoldElement/ACSType.html">ACSType</a>.</font></li>
	<li><font face="Arial">Добавлен для грид-таблицы метод
	<a href="ProgrGuide/Functions/ASDOC/AsGrid/Clear.html">Clear</a></font><font size="4" face="Arial"><strong>.</strong></font></li>
	<li><font face="Arial">Добавлено для иерархического 
	вспомогательнного списока свойство <a href="ProgrGuide/Functions/AsTreeModalBrowser/RootNode.html">
	RootNode</a>.</font></li>
	<li><font face="Arial">Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/ReindexDocs.html">ReindexDocs</a>.</font></li>
	<li><font face="Arial">Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DeleteDoc.html">
	DeleteDoc</a>.</font></li>
	<li><font face="Arial">Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/StateMovedSUID.html">
	StateMovedSUID</a>.</font></li>
	<li><font face="Arial">Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/Conversion/DateToSimv.html">
	DateToSimv</a>.</font></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/isDBReadOnly.html">isDBReadOnly</a>.</font></li>
	<li><font face="Arial">Добавлен метод
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/PrintWordPreviewDoc.html">
	PrintWordPreviewDoc</a>.</font></li>
	<li><font face="Arial">Добавлен метод
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/PrintExcelPreviewDoc.html">
	PrintExcelPreviewDoc</a>.</font></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/Inlist.html">Inlist</a>.</font></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/Between.html">Between</a>.</font></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/ImportFromString.html">
	ImportFromString</a><strong>.</strong></font></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocType.html">
	GetDocType</a>.</font></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/GetServerName.html">GetServerName</a></font><strong><font size="4" face="Arial">.</font></strong></li>
	<li><font face="Arial">Добавленa функция
	<a href="ProgrGuide/Functions/Functions/GetDatabaseName.html">GetDatabaseName</a>.</font></li>
	<li><font face="Arial">Добавлен метод
	<a href="ProgrGuide/Functions/Functions/ExecuteUserReport.html">
	ExecuteUserReport</a></font><font size="4" face="Arial"><strong>.</strong></font></li>
</ol>
<p>&nbsp;</p>
<p><i><font face="Arial" size="2"> 1
<span lang="en-us">Ìà</span>я 2005 г - <span lang="en-us">7 Ноября</span> 2005 г&nbsp; </font></i></p>
<ol>
  <li><font face="Arial">Добавлены для документа</font><ul>
		<li><font face="Arial">íîâûé ïàðàìåòð â методе <a href="ProgrGuide/Functions/ASDOC/Show.html">
		Show</a> </font></li>
      <li><font face="Arial">ìåòîä 
		<a href="ProgrGuide/Functions/ASDOC/ExistsSub.html">ExistsSub</a></font></li>
		<li><font face="Arial">ñîáûòèå <span lang="en-us">
		<a href="ProgrGuide/ScriptProcs/IsHidden.html">IsHidden</a> и свойство 
		<a href="ProgrGuide/Functions/ASDOC/IsHidden.html">IsHidden</a></span></font></li>
    </ul>
  </li>
</ol>
<ol start="2">
  <li><font face="Arial">Добавлены для вида просмотра</font><ul>
		<li><font face="Arial">UpdateStyle 
		<a href="ProgrGuide/Defs/View.html">в описании</a> и свойство 
		<a href="ProgrGuide/Functions/ASVIEW/UpdateStyle.html">UpdateStyle</a></font></li>
      <li><font face="Arial">свойства 
		<a href="ProgrGuide/Functions/ASVIEW/AllowHistory.html">AllowHistory</a>, 
		<a href="ProgrGuide/Functions/ASVIEW/AllowPrintPreview.html">
		AllowPrintPreview</a>, 
		<a href="ProgrGuide/Functions/ASVIEW/AllowViewDocChildren.html">
		AllowViewDocChildren</a>, 
		<a href="ProgrGuide/Functions/ASVIEW/AllowViewDocParents.html">
		AllowViewDocParents</a></font></li>
		<li><font face="Arial">AllowAddNew 
		<a href="ProgrGuide/Defs/View.html">в описании</a> и свойство 
		<a href="ProgrGuide/Functions/ASVIEW/AllowAddNew.html">AllowAddNew</a> </font></li>
    </ul>
  </li>
</ol>
<ol start="3">
  <li><font face="Arial">Добавлены для источника данных событии 
	<a href="ProgrGuide/ScriptProcs/OnFunctionAdd.html">OnFunctionAdd</a>, 
	<a href="ProgrGuide/ScriptProcs/OnFunctionEdit.html">OnFunctionEdit</a>, 
	<a href="ProgrGuide/ScriptProcs/OnFunctionView.html">OnFunctionView</a>, 
	<a href="ProgrGuide/ScriptProcs/OnFunctionDelete.html">OnFunctionDelete</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавлены для диалога</font><ul>
		<li><font face="Arial">метод 
		<a href="ProgrGuide/Functions/AsUstPar/AddPage.html">AddPage</a></font></li>
		<li><font face="Arial">свойства 
		<a href="ProgrGuide/Functions/AsUstPar/PageCaption.html">PageCaption</a>, 
		<a href="ProgrGuide/Functions/AsUstPar/PageCount.html">PageCount</a></font></li>
		<li><font face="Arial">новый параметр в методе 
		<a href="ProgrGuide/Functions/AsUstPar/MaxLenCaption.html">MaxLenCaption</a></font></li>
		<li><font face="Arial">метод
		<a href="ProgrGuide/Functions/AsUstPar/ExistsControl.html">ExistsControl</a></font></li>
		<li><font face="Arial">новый параметр в методе 
		<a href="ProgrGuide/Functions/AsUstPar/AddDublCntrl.html">AddDublCntrl</a> <br>
		&nbsp;</font></li>
	</ul></li>
  <li><font face="Arial">Добавлены для описательного диалога</font><ul>
	<li><font face="Arial">свойство 
	<a href="ProgrGuide/Functions/AsDialogEx/ChangeTypeControl.html">
	ChangeTypeControl</a></font></li>
	<li><font face="Arial">свойство 
	<a href="ProgrGuide/Functions/AsDialogEx/AddAdditionalRegKey.html">
	AddAdditionalRegKey</a></font><br>
	&nbsp;</li>
	</ul>
	</li>
	<li><font face="Arial">Свойство DisableDocFunctions для
	<a href="ProgrGuide/Functions/ASVIEW/DisableDocFunctions.html">вида просмотра</a>,
	<a href="ProgrGuide/Functions/ASTREE/DisableDocFunctions.html">дерева</a> и
	<a href="ProgrGuide/Functions/AsRepViewer/DisableDocFunctions.html">отчета</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавлен новый параметр в методе
	<a href="ProgrGuide/Functions/AsRepViewer/SaveToFile.html">SaveToFile</a> 
	отчета.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавлены функции
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DocGrandChildren.html">
	DocGrandChildren</a> и
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/CutChildLink.html">
	CutChildLink</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавлен новый параметр в функциях
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DocChildren.html">
	DocChildren</a>,
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DocParents.html">
	DocParents</a>.</font></li>
</ol>
<p>&nbsp;</p>
<p><i><font face="Arial" size="2"> 11 Февраля 2004 г - 1
<span lang="en-us">Ìà</span>я 2005 г&nbsp; </font></i></p>
<ol>
  <li><font face="Arial">Добавлены для документа</font><ul>
      <li><font face="Arial">системнûå событиÿ <span lang="en-us">
		<a href="ProgrGuide/ScriptProcs/StoreGrid.html">StoreGrid</a>,
		<a href="ProgrGuide/ScriptProcs/LoadGrid.html">LoadGrid</a>,
		<a href="ProgrGuide/ScriptProcs/SetPrintWidth.html">SetPrintWidth</a></span></font></li>
		<li><font face="Arial">íîâûé ïàðàìåòð â ñîáûòèè
		<span lang="en-us"><a href="ProgrGuide/ScriptProcs/PostMessage.html">
		PostMessage</a></span></font></li>
      <li><font face="Arial">ìåòîä <span lang="en-us">
		<a href="ProgrGuide/Functions/ASDOC/PrintToFile.html">PrintToFile</a></span></font></li>
		<li><font face="Arial">ñîáûòèå <span lang="en-us">
		<a href="ProgrGuide/ScriptProcs/ClickDropDown.html">ClickDropDown</a>
		</span>äëÿ òипà данных комментарий</font></li>
		<li><span lang="en-us"><font face="Arial">ð</font></span><font face="Arial">àçäåëèòåëüíàÿ 
		ëèíèÿ<span lang="en-us"> â <a href="ProgrGuide/Defs/doc.html">îïèñàíèè 
		äîêóìåíòà</a></span></font></li>
    </ul>
  <p>&nbsp;</li>
  <li><font face="Arial">Добавлены
    </font>
      <ul>
        <li><font face="Arial"> <span lang="en-us">ñâîéñòâî </span>
		<a href="ProgrGuide/Functions/ASVIEW/AllowExport.html">AllowExport</a>
		<span lang="en-us">â îá</span>ъ<span lang="en-us">åêòе âèä ïðîñìîòðà&nbsp;&nbsp;&nbsp;
		</span></font></li>
		<li><font face="Arial">свойство
        <span lang="en-us">
		<a href="ProgrGuide/Functions/ASTREE/AllowExport.html">AllowExport</a></span> 
		в объекте äåðåâî</font></li>
        <li><font face="Arial">ïàðàìåòð â ìåòîäå <span lang="en-us">
		<a href="ProgrGuide/Functions/Functions/InterfaceManagment/BrowseTree.html">
		BrowseTree</a></span><br>
		&nbsp;</font></li>
  </ul>
  </li>
  <li><font face="Arial">Добавлены для <span lang="en-us">øàáëîíà 
	ïå÷àòè</span></font><ul>
      <li><font face="Arial"><span lang="en-us">ñâîéòâà </span>
		<a href="ProgrGuide/Functions/AsDocPrint/AllowView.html">AllowView</a>,
		<a href="ProgrGuide/Functions/AsDocPrint/AllowHistory.html">AllowHistory</a>,
		<a href="ProgrGuide/Functions/AsDocPrint/AllowPrintPreview.html">
		AllowPrintPreview</a></font></li>
		<li><font face="Arial">íîâûé ïàðàìåòð â <span lang="en-us">
		ìåòîäå </span><a href="ProgrGuide/Functions/AsDocPrint/P.html">P</a></font></li>
    </ul>
  &nbsp;</li>
  <li><font face="Arial">Добавленî ñâîéñòâî <span lang="en-us">
	<a href="ProgrGuide/Functions/ASVIEW/ExistsColumn.html">ExistsColumn</a>
	</span>для âèäà ïðîñìîòðà<span lang="en-us">. <br>
	&nbsp;</span></font></li>
	<li><font face="Arial">Добавленî ñâîéñòâî
	<a href="ProgrGuide/Functions/AsCallBackOnTimer/Properties.html">
	<span lang="en-us">P</span>roperties</a><span lang="en-us"> </span>для 
	îáúåêòà òèïà àãåíò öèêëèчеñêîãî âûçîâà ïðîöåäóð<span lang="en-us">. <br>
	&nbsp;</span></font></li>
	<li><font face="Arial">Добавлен ìåòîä <span lang="en-us">
	<a href="ProgrGuide/Functions/AsRepViewer/SaveToFile.html">SaveToFile</a>
	</span>для <span lang="en-us">îá</span>ъ<span lang="en-us">åêò</span>à îò÷åò<span lang="en-us">.<br>
	&nbsp;</span></font></li>
	<li><font face="Arial">Добавленû ìåòîäû <span lang="en-us">
	<a href="ProgrGuide/Functions/AsUstPar/AddRadioButtons.html">AddRadioButtons</a>,
	<a href="ProgrGuide/Functions/AsUstPar/AddDublRadioButtons.html">
	AddDublRadioButtons</a> â îá</span>ъ<span lang="en-us">åêò</span> äèàëîã<span lang="en-us">.<br>
	&nbsp;</span></font></li>
	<li><font face="Arial"><span lang="en-us">Äîáàâëåíî </span>
	Atributes<span lang="en-us"> â <a href="ProgrGuide/Defs/Dialog.html">îïèñàíèè 
	îïèñàòåëüíîãî äèàëîãà</a></span>.<br>
	&nbsp;</font></li>
	<li><font face="Arial"> Добавлены <span lang="en-us">ñâîéñòâà
	</span><a href="ProgrGuide/Functions/AsRepViewer/RowDescriptor.html">
	RowDescriptor</a> <span lang="en-us">è </span>
	<a href="ProgrGuide/Functions/AsRepViewer/RowISN.html">RowISN</a>
	<span lang="en-us">â îá</span>ъ<span lang="en-us">åêòå îò÷åò.<br>
	&nbsp;</span></font></li>
  <li><font face="Arial"> Добавлены функции<span lang="en-us"> </span>
	<a href="ProgrGuide/Functions/Functions/AppLock.html">AppLock</a>,
	<a href="ProgrGuide/Functions/Functions/ParameterManagment/ParamDesc.html">
	ParamDesc</a>,
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/ExportDoc.html">
	ExportDoc</a>, <a href="ProgrGuide/Functions/Functions/ImportFromDir.html">
	ImportFromDir</a>,
	<a href="ProgrGuide/Functions/Functions/AccManagement/ExistsFact.html">
	ExistsFact</a><span lang="en-us">,
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocPassedState.html">
	GetDocPassedState</a></span>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавленû ôóíêöèè àðõèâàöèè
	<span lang="en-us">
	<a href="ProgrGuide/Functions/Functions/Archive/ArchiveDoc.html">ArchiveDoc</a>,
	<a href="ProgrGuide/Functions/Functions/Archive/ArchiveObjectAccWithRem.html">
	ArchiveObjectAccWithRem</a>,
	<a href="ProgrGuide/Functions/Functions/Archive/GetArchiveDb.html">
	GetArchiveDB</a>.<br>
	&nbsp;</span></font></li>
  <li><font face="Arial"> Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/AccManagement/LastOpDate2.html">
	LastOpDate2</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial"> Добавлен новый параметр <span lang="en-us">
	Cancel </span>в функции âûçîâà <a href="ProgrGuide/Defs/Job.html">çàäàíèÿ</a> 
	ïðè òèïå 1.<br>
	&nbsp;</font></li>
	<li><font face="Arial"> Добавлен<span lang="en-us"> </span>режим 
	авторизации â <a href="Config_as_struct.html">êîíôèãóðàöèîííîì ôàéëå</a>.<br>
	&nbsp;</font></li>
  <li><font face="Arial"> Добавлен<span lang="en-us">à íîâàÿ êîëîíêà</span>(fDCD)<span lang="en-us"> 
	â òàáëèöå </span><a href="ProgrGuide/Database/DocP.html">DocP</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавленû<span lang="en-us"> òàáëèöû 
	àðõèâàöèè </span><a href="ProgrGuide/Database/DocLogARC.html">DOCLOGARC</a>,
	<a href="ProgrGuide/Database/DocsARC.html">DOCSARC</a>,
	<a href="ProgrGuide/Database/DocsARCISN.html">DOCARCISN</a>,
	<a href="ProgrGuide/Database/DocsAttachARC.html">DOCSATTACHARC</a>,
	<a href="ProgrGuide/Database/DocsGARC.html">DOCSGARC</a>,
	<a href="ProgrGuide/Database/DocsimARC.html">DOCSIMARC</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial"><span lang="en-us">Èçìåíåíà ñòðóêòóðà 
	òàáëèöû </span><a href="ProgrGuide/Database/Params.html">Params</a>
	<span lang="en-us">è äîáàâëåíà òàáëèöà </span>
	<a href="ProgrGuide/Database/User%20Params.html">UserParams</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial"><span lang="en-us">Èçìåíåíà ñòðóêòóðà 
	òàáëèöû 
	<a href="ProgrGuide/Database/Users.html">Users</a>.</span><br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавленû<span lang="en-us"> òàáëèöû</span>
	<a href="ProgrGuide/Database/ResNumbers.html">ResNumbers</a>,
	<a href="ProgrGuide/Database/ChacheRemDate.html">CacheRemDate</a> и функция
	<a href="ProgrGuide/Functions/Functions/ReserveNumber.html">ReserveNumber</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавленû<span lang="en-us"> òàáëèöû</span>
	<span lang="en-us">äîñòóïîâ </span>
	<a href="ProgrGuide/Database/AccessLink.html">AccessLink</a>,
	<a href="ProgrGuide/Database/AccessISNList.html">AccessISNList</a>,
	<a href="ProgrGuide/Database/AccessLog.html">AccessLog</a>.<br>
	&nbsp;</font></li>
	<li><font face="Arial">Добавлен тип реквизита PATH для диалога в 
	методе <a href="ProgrGuide/Functions/AsUstPar/AddControl.html">AddControl</a>.<br>
	&nbsp;</font></li>
</ol>
<p>&nbsp;</p>
<p><i><font face="Arial" size="2"> 17 Июня 2002 г - 11 Февраля 2004 г</font></i></p>
<ol>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial">объект
      <a href="ProgrGuide/Functions/ASDocStructure.html">структура документа</a></font></li>
      <li><font face="Arial">объект
      <a href="ProgrGuide/Functions/ASDocStructureElement.html">элемент структуры 
		документа</a></font></li>
      <li><font face="Arial">свойство
      <a href="ProgrGuide/Functions/ASDOC/Structure.html">Structure</a> в объекте 
		документ<br>
		&nbsp;</font></li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлен объект
  <a href="ProgrGuide/Functions/AsTreeModalBrowser.html">иерархический 
	вспомогательный список</a>.</font><br>
	&nbsp;</li>
  <li><font face="Arial">Добавлены для объекта диалог</font><ul>
      <li><font face="Arial">системные события
      <a href="ProgrGuide/ScriptProcs/UstPar_Activate.html">Activate</a>,
      <a href="ProgrGuide/ScriptProcs/UstPar_ClickDropDown.html">ClickDropDown</a>,
      <a href="ProgrGuide/ScriptProcs/UstPar_Validate.html">Validate</a>,
      <a href="ProgrGuide/ScriptProcs/UstPar_ValueChanged.html">ValueChanged</a> </font></li>
      <li><font face="Arial">свойствa
      <a href="ProgrGuide/Functions/AsUstPar/EventModule.html">EventModule</a> и
      <a href="ProgrGuide/Functions/AsUstPar/ReadOnly.html">ReadOnly</a></font><br>
		&nbsp;</li>
    </ul>
  </li>
  <li><font face="Arial">Добавлены для документа</font><ul>
      <li><font face="Arial">системное событие
      <a href="ProgrGuide/ScriptProcs/BeforeExport.html">BeforeExport</a> </font></li>
      <li><font face="Arial">свойство
      <a href="ProgrGuide/Functions/ASDOC/StoredFacts.html">StoredFacts</a> <br>
		&nbsp;</font></li>
    </ul>
  </li>
  <li><font face="Arial">Добавлены</font><ul>
    <li><font face="Arial">AltFont в
    <a href="ProgrGuide/Defs/View.html">описании вида просмотра</a></font></li>
    <li><font face="Arial">свойство
    <a href="ProgrGuide/Functions/ASVIEW/AltFont.html">AltFont</a> в объекте вид 
	просмотра</font></li>
    <li><font face="Arial">новый атрибут &quot;F&quot; для реквизитов в <a href="ProgrGuide/Defs/doc.html">
	описании документа</a>&nbsp;</font> <br>
	&nbsp;</li>
  </ul>
  </li>
  <li><font face="Arial">Добавлены</font><ul>
    <li><font face="Arial">PrintFormated в <a href="ProgrGuide/Defs/doc.html">
	описании документа</a>&nbsp;</font> </li>
    <li><font face="Arial">свойство
    <a href="ProgrGuide/Functions/AsRepViewer/UseFormatting.html">UseFormatting</a> 
    в объекте отчет<br>
	&nbsp;</font></li>
  </ul>
  </li>
  <li><font face="Arial">Добавлены
    </font>
      <ul>
        <li><font face="Arial">ArrayBased в
        <a href="ProgrGuide/Defs/Data.html">описании источника данных</a></font></li>
        <li><font face="Arial">свойство
        <a href="ProgrGuide/Functions/ASDATA/ArrayBased.html">ArrayBased</a> в 
		объекте источник данных</font></li>
        <li><font face="Arial">системное событие
        <a href="ProgrGuide/ScriptProcs/Load.html">Load</a> для объекта<br>
		&nbsp;</font></li>
  </ul>
  </li>
  <li><font face="Arial"> Добавлены функции
  <a href="ProgrGuide/Functions/Functions/GetFullNameOfTmpFile.html">
  GetFullNameOfTmpFile</a>,
  <a href="ProgrGuide/Functions/Functions/AccessControl/ExistsAccessDesc.html">
  ExistsAccessDesc</a>.<br>
	&nbsp;</font></li>
  <li><font face="Arial"> Добавлен параметр в функции
  <a href="ProgrGuide/Functions/Functions/AccessControl/AccessDesc.html">
  AccessDesc</a> и в методе <a href="ProgrGuide/Functions/AsAccessDesc/Load.html">
  Load</a> объектa описатель доступа. <br>
	&nbsp;</font></li>
  <li><font face="Arial"> Добавлены значения для уровня проверки 
	документа в методах <a href="ProgrGuide/Functions/ASDOC/Store.html">Store</a> 
  и <a href="ProgrGuide/Functions/ASDOC/CheckAndStore.html">CheckAndStore.</a><br>
	&nbsp;</font></li>
  <li><font face="Arial">Добавлен новый параметр в фунции
  <a href="ProgrGuide/Functions/Functions/AccManagement/LastOpDate.html">
  LastOpDate</a>.<br>
	&nbsp;</font></li>
  <li><font face="Arial">Изменены параметры функции
  <a href="ProgrGuide/Functions/Functions/AccManagement/LoadHI2FactByObject.html">
  LoadHI2FactByObject</a>.<br>
	&nbsp;</font></li>
  <li><font face="Arial">Измененa структура таблицы
  <a href="ProgrGuide/Database/Users.html">USERS</a>.</font></li>
</ol>
<p><font face="Arial"><br>
    </font></p>
<p><i><font face="Arial" size="2"> 1 Апреля 2002 г - 17 Июня 2002 г</font></i></p>
<ol>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial">объект <a href="ProgrGuide/Functions/ASMBItem.html">
		строка списка</a></font></li>
      <li><font face="Arial">объект <a href="ProgrGuide/Functions/ASMBItemsCollection.html">
		коллекция строк списка</a></font></li>
      <li><font face="Arial">свойства <a href="ProgrGuide/Functions/AsModalBrowser/MultiSelect.html">
		MultiSelect</a>
        и <a href="ProgrGuide/Functions/AsModalBrowser/SelectedItems.html">
		SelectedItems</a>
        в объекте произвольный вспомогательный список</font></li>
      <li><font face="Arial">метод <a href="ProgrGuide/Functions/AsUstPar/AddMultiSelectViewControl.html">
		AddMultiSelectViewControl</a>
        в объекте диалог
        <a href="ProgrGuide/Functions/Functions/GetWorkingDays.html"><br>
        </a> <a href="ProgrGuide/Defs/doc.html">
        <br>
        </a></font></li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial"> идентификатор контекстной помощи в <a href="ProgrGuide/Defs/View.html">
		описании вида просмотра</a> &nbsp;
    </font>
      </li>
      <li><font face="Arial">свойство <a href="ProgrGuide/Functions/ASVIEW/HelpContext.html">
		HelpContext</a>
        в объекте вид просмотра<br>
    <br>
    </font>
      </li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлены функции <a href="ProgrGuide/Functions/Functions/ShowImportWindow.html">
	ShowImportWindow</a>,
    <a href="ProgrGuide/Functions/Functions/AccManagement/GetTurnHI2.html">
	GetTurnHI2</a>.<br>
    <br>
    </font>
  </li>
  <li><font face="Arial"> В <a href="ProgrGuide/Functions/AsRepViewer.html"> 
	объекте отчет</a> добавлены методы <a href="ProgrGuide/Functions/AsRepViewer/RegistrFunction.html">
	RegistrFunction</a>,
    <a href="ProgrGuide/Functions/AsRepViewer/RegistrNode.html">RegistrNode</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлено системное событие <a href="ProgrGuide/ScriptProcs/BeforeImport.html">
	BeforeImport</a>
    для документа.<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлен новый атрибут &quot;U&quot; для реквизитов&nbsp;</font>
    <ul>
      <li><font face="Arial">в <a href="ProgrGuide/Defs/doc.html">
		описании документа</a></font></li>
      <li><font face="Arial">в методе <a href="ProgrGuide/Functions/AsUstPar/AddControl.html">
		AddControl</a>
        объекта диалог.</font></li>
    </ul>
  </li>
</ol>
<p>&nbsp;</p>
<p><i><font face="Arial" size="2"> 4 Февраля 2002 г - 1 Апреля 2002 г</font></i></p>
<ol>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial"> <a href="ProgrGuide/Functions/AsDayStatus.html">
		объект статус дня</a></font></li>
      <li><font face="Arial">функции <a href="ProgrGuide/Functions/Functions/DaysInMonth.html">
		DaysInMonth</a>,
        <a href="ProgrGuide/Functions/Functions/GetWorkingDays.html">
		GetWorkingDays<br>
        </a> <a href="ProgrGuide/Defs/doc.html">
        <br>
        </a></font></li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлены функции управления учетами <a href="ProgrGuide/Functions/Functions/AccManagement/LoadHI2FactByObject.html">
	LoadHI2FactByObject</a>,
    <a href="ProgrGuide/Functions/Functions/AccManagement/LasHI2OpDate.html">
	LastHI2OpDate</a>.<br>
    <br>
    </font>
  </li>
  <li><font face="Arial"> Добавлена функция управления интерфейсом <a href="ProgrGuide/Functions/Functions/InterfaceManagment/ScreenSize.html">
	ScreenSize</a>.<br>
    <br>
    </font>
  </li>
  <li><font face="Arial"> В объекте шаблон печати добавлено свойствo <a href="ProgrGuide/Functions/AsDocPrint/ErrorOnEmptyPrintPreview.html">
	ErrorOnEmptyPrintPreview</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial"> Добавлена <a href="ProgrGuide/Constants/const_doc_States.html">
	константа состояния документа</a> <b>ASAccordingToNavTreeNew</b>.<br>
    <br>
    </font></li>
</ol>
<p><i><font face="Arial" size="2"> 19 Ноября 2001 г - 4 Февраля 2002 г</font></i></p>
<ol>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial"><a href="ProgrGuide/Functions/AsAttachment.html">
		объект файловое дополнение</a></font></li>
      <li><font face="Arial"><a href="ProgrGuide/Functions/AsAttachmentCollection.html">
		объект коллекция файловых дополнений</a></font></li>
      <li><font face="Arial">таблица <a href="ProgrGuide/Database/DocsAttach.html">
		DOCSATTACH</a></font></li>
      <li><font face="Arial">свойства <a href="ProgrGuide/Functions/ASDOC/Attachments.html">
		Attachments</a>,
        <a href="ProgrGuide/Functions/ASDOC/ReadOnlyAttachments.html">
		ReadOnlyAttachments</a>
        в объекте документ</font></li>
      <li><font face="Arial">признак прикрепления файловых дополнений 
		в <a href="ProgrGuide/Defs/doc.html">описании документа<br>
        <br>
        </a></font></li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial"><a href="ProgrGuide/Functions/AsCallBackOnTimer.html">
		объект агент циклического вызова процедур</a></font></li>
      <li><font face="Arial">функция <a href="ProgrGuide/Functions/Functions/CreateCallBackOnTimer.html">
		CreateCallBackOnTimer</a>&nbsp;<br>
        <br>
        </font></li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial">системное <a href="ProgrGuide/Defs/notification.html">
		описание оповещения</a></font></li>
      <li><font face="Arial">таблицы <a href="ProgrGuide/Database/Notifications.html">
		NOTIFICATIONS</a>,
        <a href="ProgrGuide/Database/NtfReceivers.html">NTFRECEIVERS</a>&nbsp;</font></li>
      <li><font face="Arial">функция <a href="ProgrGuide/Functions/Functions/SendNotification.html">
		SendNotification</a>
        для отправки оповещения<br>
        <br>
        </font></li>
    </ul>
  </li>
  <li><font face="Arial"> Добавлены&nbsp;</font>
    <ul>
      <li><font face="Arial">таблицы <a href="ProgrGuide/Database/Hi2.html">
		HI2</a>,
        <a href="ProgrGuide/Database/Hirest2.html">HIREST2</a></font></li>
      <li><font face="Arial">функции управления учетами <a href="ProgrGuide/Functions/Functions/AccManagement/CheckHI2Limit.html">
		CheckHI2Limit</a>,
        <a href="ProgrGuide/Functions/Functions/AccManagement/DeleteHI2Trans.html">
		DeleteHI2Trans</a>,
        <a href="ProgrGuide/Functions/Functions/AccManagement/GetTurnFullHI2.html">
		GetTurnFullHI2</a>,
        <a href="ProgrGuide/Functions/Functions/AccManagement/GetRemHI2.html">
		GetRemHI2</a>,
        <a href="ProgrGuide/Functions/Functions/AccManagement/LastHI2FactDate.html">
		LastHI2FactDate</a>,
        <a href="ProgrGuide/Functions/Functions/AccManagement/SetHI2Limit.html">
		SetHI2Limit</a>,
        <a href="ProgrGuide/Functions/Functions/AccManagement/SetHI2Rem.html">
		SetHI2Rem</a></font></li>
      <li><font face="Arial">свойство <a href="ProgrGuide/Functions/ASFACT/GLAccISN.html">
		GLAccISN</a>&nbsp; в объекте проводка<br>
        <br>
        </font></li>
    </ul>
  </li>
  <li><font face="Arial"> В объекте документ добавлен метод <a href="ProgrGuide/Functions/ASDOC/Flush.html">
	Flush</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial"> Добавлен параметр в обработчики событий <a href="ProgrGuide/ScriptProcs/Magic.html">
	Magic</a>,
    <a href="ProgrGuide/ScriptProcs/Valid.html">Valid</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">В <a href="ProgrGuide/Defs/doc.html">описании 
	документа</a> добавлена ширина печатной формы документа в символах.<br>
    <br>
    </font></li>
  <li><font face="Arial"> В объекте источник данных добавлен метод <a href="ProgrGuide/Functions/ASDATA/ClearParameters.html">
	ClearParameters</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">В методах <a href="ProgrGuide/Functions/ASDOC/CheckAndStore.html">
	CheckAndStore</a>,
    <a href="ProgrGuide/Functions/ASDOC/Store.html">Store</a> объекта документ 
	добавлен параметр.<br>
    <br>
    </font></li>
  <li><font face="Arial">В <a href="ProgrGuide/Defs/Dialog.html">
	описании описательного диалога</a> добавлена длина комментария.<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлены <a href="ProgrGuide/Constants/const_error_codes.html">
	константы кодов ошибок</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлена функция документооборота <a href="ProgrGuide/Functions/Functions/DocumentsCirculation/NavTreeNewDocMode.html">
	NavTreeNewDocMode</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">В корне изменена группировка функций.</font>
    <p>&nbsp;</li>
</ol>
<p><font face="Arial">&nbsp; <font face="Arial" size="2"><i>
26 сентября - 19 Ноября 2001 г</i></font></font></p>
<ol>
  <li><font face="Arial">Увеличена длина внутренного представления 
	документа (с 1024 до 4000 байт), в следствии чего поля fBody1, fBody2, 
	fBody3 и fBody4 в таблице <a href="ProgrGuide/Database/Docs.html">DOCS</a>
	объеденены в поле fBody.<br>
    <br>
    </font></li>
  <li><font face="Arial">Изменены параметры <a href="ProgrGuide/ScriptProcs/OnLimitFault.html">
	обработчика события выхода за пределы лимитов</a>, что дает возможность в 
	обработчике изменять лимты(например на основе договора о предоставлении 
	овердрафта).<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлен параметр в обработчик события <a href="ProgrGuide/ScriptProcs/Print.html">
	Print</a>, что позволяет задавать разные режимы печати документа.<br>
    <br>
    </font></li>
  <li><font face="Arial">В объекте дерево добавлены методы <a href="ProgrGuide/Functions/ASTREE/AddNode.html">
	AddNode</a>,
<a href="ProgrGuide/Functions/ASTREE/DeleteNode.html">DeleteNode</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлен <a href="ProgrGuide/Functions/AsErrorsFreeExecutor.html">
	объект исполнитель процедур</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">Добавлена функция <a href="ProgrGuide/Functions/Functions/GetServerDate.html">
	GetServerDate</a>.<br>
    <br>
    </font></li>
  <li><font face="Arial">В <a href="ProgrGuide/Defs/doc.html#Grid">
	описании документа для грид-таблиц</a> добавлена возможность предотвращения 
	сохранения их содержания.</font></li>
</ol>
</body>
</html>
