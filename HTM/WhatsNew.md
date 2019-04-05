<html>
<head>
<title>Как пользоваться помощью</title>
</head>

<body>

<p>Что нового?</p>
<p><i>8 Ноября 2005 г - 26 октября 2006 г</i></p>
<ol>
  <li>Добавлены для документа<ul>
	<li>в <a href="ProgrGuide/Defs/doc.html">
	описании документа</a>
	
	<ul>
		<li>можно задавать ширину колонки грид-таблицы (свойство Width)</li>
		<li>при помощи атрибута V<b> </b>можно отключить проверку реквизита или значения колонки грид-таблицы</li>
		<li>при помощи атрибута <b>Z </b>Tab/Enter могут пропутить реквизит</li>
		<li>при помощи атрибута<strong> N</strong> значение колонки грид-таблицы в новой строке заполняется значением колонки последней строки</li>
		<li>при помощи атрибута <b>I</b> реквизит можно редактировать в режиме Overwrite вместо Insert (только для типа C(x))</li>
		<li>свойство DisableCopy отключает возможность создания копии документа</li>
		<li><strong>при помощи конструкции </strong>
		<strong>FolderInfo</strong> можно описать в какой папке документ находится в каждом состоянии. Наличие
		<strong>FolderInfo позволяет системе показывать более читабельную историю документа.</strong></li>
	</ul></li>
	<li>ñîáûòèå 
		<strong>
	<a href="ProgrGuide/ScriptProcs/BeforeCommit.html">BeforeCommit</a></strong></li>
	<li>íîâûé ïàðàìåòð â событии <a href="ProgrGuide/ScriptProcs/NestedTransaction.html">
	NestedTransaction</a></li>
	<li>свойство
		<a href="ProgrGuide/Functions/ASDOC/FormActivated.html">FormActivated</a></li>
	<li>свойство
		<a href="ProgrGuide/Functions/ASDOC/CreateDialog.html">CreateDialog</a></li>
	<li>изменены параметры ñîáûòèя
	<a href="ProgrGuide/ScriptProcs/IsHidden.html">IsHidden</a></li>
	</ul>
	<p>&nbsp;</li>
	<li>Добавлены для источника данных<ul>
		<li>в <a href="ProgrGuide/Defs/Data.html">
		описании источника данных</a><ul>
			<li>для параметра можно задавать идентификатор (свойство Name) и значение в генераторе отчетов (свойство UserReportValue)</li>
			<li>для колонки можно задавать ширину (свойство Width) и количество строк в заголовке (свойство HeadLines)</li>
			<li>колонку соответствующую ISN документа теперь можно задавать при помощи свойства ISN</li>
			<li>можно блокировать вызов события
			<a href="ProgrGuide/ScriptProcs/Valid_Data.html">Valid</a> источника данных (свойство DisableValidFunction)</li>
		</ul></li>
		<li>ñîáûòèå 
		<strong>
		<a href="ProgrGuide/ScriptProcs/LoadUpdates.html">LoadUpdates</a></strong></li>
		<li>ñîáûòèå 
		<strong>
		<a href="ProgrGuide/ScriptProcs/ExternalConnection.html">
		ExternalConnection</a></strong></li>
		<li>ìåòîäы 
		<a href="ProgrGuide/Functions/ASDATA/OpenUpdateCursor.html">
		OpenUpdateCursor</a> и
		<a href="ProgrGuide/Functions/ASDATA/CloseUpdateCursor.html">
		CloseUpdateCursor</a></li>
		<li>свойство
		<a href="ProgrGuide/Functions/ASDATA/DisableValidFunction.html">
		DisableValidFunction</a></li>
		<li>свойство
		<a href="ProgrGuide/Functions/ASDATA/DefaultIndicate.html">
		DefaultIndicate</a></li>
		<li>свойство
		<a href="ProgrGuide/Functions/ASDATA/CurrentIndicate.html">
		CurrentIndicate</a><br>
		<br>
		&nbsp;</li>
	</ul></li>
	<li>Добавлены для диалога<ul>
		<li>свойствo
		<a href="ProgrGuide/Functions/AsDialog/Properties.html">Properties</a></li>
		<li>изменены параметры метода
		<a href="ProgrGuide/Functions/AsDialog/AddLine.html">AddLine</a></li>
		<li>метод
		<a href="ProgrGuide/Functions/AsDialog/AddControlAtRight.html">
		AddControlAtRight</a></li>
		<li>метод
		<a href="ProgrGuide/Functions/AsDialog/AddControlAtRight.html">
		AddViewControlAtRight</a></li>
		<li>при помощи атрибута <b>I</b> реквизит можно редактировать в режиме Overwrite вместо Insert (только для типа C(x))</li>
		<li>при помощи атрибута <b>S</b> текущее значение реквизита не запоминается в реестре.</li>
	</ul>
	<p>&nbsp;</li>
	<li>Изменены для описателя доступа изменены параметры метода
	<a href="ProgrGuide/Functions/AsAccessDesc/Store.html">Store</a>.</li>
	<li>Добавлены для структура документа свойства
	<a href="ProgrGuide/Functions/ASDocStructure/EnglishCaption.html">
	EnglishCaption</a> и
	<a href="ProgrGuide/Functions/ASDocStructure/NativeCaption.html">
	NativeCaption</a>.</li>
	<li>Добавлены для 
	проводкu
	свойства
	<a href="ProgrGuide/Functions/ASFACT/Info.html">Info</a>,
	<a href="ProgrGuide/Functions/ASFACT/Branch.html">Branch</a>,
	<a href="ProgrGuide/Functions/ASFACT/Depart.html">Depart</a>.</li>
	<li>Добавлены для элемента папки
	свойства
	<a href="ProgrGuide/Functions/AsFoldElement/Branch.html">Branch</a>,
	<a href="ProgrGuide/Functions/AsFoldElement/Depart.html">Depart</a>,
	<a href="ProgrGuide/Functions/AsFoldElement/ACSType.html">ACSType</a>.</li>
	<li>Добавлен для грид-таблицы метод
	<a href="ProgrGuide/Functions/AsGrid/Clear.html">Clear</a><strong>.</strong></li>
	<li>Добавлено для иерархического вспомогательнного списока свойство <a href="ProgrGuide/Functions/AsTreeModalBrowser/RootNode.html">
	RootNode</a>.</li>
	<li>Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/ReindexDocs.html">ReindexDocs</a>.</li>
	<li>Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DeleteDoc.html">
	DeleteDoc</a>.</li>
	<li>Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/StateMovedSUID.html">
	StateMovedSUID</a>.</li>
	<li>Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/Conversion/DateToSimv.html">
	DateToSimv</a>.</li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/isDBReadOnly.html">isDBReadOnly</a>.</li>
	<li>Добавлен метод
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/PrintWordPreviewDoc.html">
	PrintWordPreviewDoc</a>.</li>
	<li>Добавлен метод
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/PrintExcelPreviewDoc.html">
	PrintExcelPreviewDoc</a>.</li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/Inlist.html">Inlist</a>.</li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/Between.html">Between</a>.</li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/ImportFromString.html">
	ImportFromString</a><strong>.</strong></li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocType.html">
	GetDocType</a>.</li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/GetServerName.html">GetServerName</a><strong>.</strong></li>
	<li>Добавленa функция
	<a href="ProgrGuide/Functions/Functions/GetDatabaseName.html">GetDatabaseName</a>.</li>
	<li>Добавлен метод
	<a href="ProgrGuide/Functions/Functions/ExecuteUserReport.html">
	ExecuteUserReport</a><strong>.</strong></li>
</ol>
<p>&nbsp;</p>
<p><i> 1
Ìàя 2005 г - 7 Ноября 2005 г&nbsp; </i></p>
<ol>
  <li>Добавлены для документа<ul>
		<li>íîâûé ïàðàìåòð â методе <a href="ProgrGuide/Functions/ASDOC/Show.html">
		Show</a> </li>
      <li>ìåòîä 
		<a href="ProgrGuide/Functions/ASDOC/ExistsSub.html">ExistsSub</a></li>
		<li>ñîáûòèå 
		<a href="ProgrGuide/ScriptProcs/IsHidden.html">IsHidden</a> и свойство 
		<a href="ProgrGuide/Functions/ASDOC/IsHidden.html">IsHidden</a></li>
    </ul>
  </li>
</ol>
<ol start="2">
  <li>Добавлены для вида просмотра<ul>
		<li>UpdateStyle 
		<a href="ProgrGuide/Defs/View.html">в описании</a> и свойство 
		<a href="ProgrGuide/Functions/ASVIEW/UpdateStyle.html">UpdateStyle</a></li>
      <li>свойства 
		<a href="ProgrGuide/Functions/ASVIEW/AllowHistory.html">AllowHistory</a>, 
		<a href="ProgrGuide/Functions/ASVIEW/AllowPrintPreview.html">
		AllowPrintPreview</a>, 
		<a href="ProgrGuide/Functions/ASVIEW/AllowViewDocChildren.html">
		AllowViewDocChildren</a>, 
		<a href="ProgrGuide/Functions/ASVIEW/AllowViewDocParents.html">
		AllowViewDocParents</a></li>
		<li>AllowAddNew 
		<a href="ProgrGuide/Defs/View.html">в описании</a> и свойство 
		<a href="ProgrGuide/Functions/ASVIEW/AllowAddNew.html">AllowAddNew</a> </li>
    </ul>
  </li>
</ol>
<ol start="3">
  <li>Добавлены для источника данных событии 
	<a href="ProgrGuide/ScriptProcs/OnFunctionAdd.html">OnFunctionAdd</a>, 
	<a href="ProgrGuide/ScriptProcs/OnFunctionEdit.html">OnFunctionEdit</a>, 
	<a href="ProgrGuide/ScriptProcs/OnFunctionView.html">OnFunctionView</a>, 
	<a href="ProgrGuide/ScriptProcs/OnFunctionDelete.html">OnFunctionDelete</a>.<br>
	&nbsp;</li>
	<li>Добавлены для диалога<ul>
		<li>метод 
		<a href="ProgrGuide/Functions/AsDialog/AddPage.html">AddPage</a></li>
		<li>свойства 
		<a href="ProgrGuide/Functions/AsDialog/PageCaption.html">PageCaption</a>, 
		<a href="ProgrGuide/Functions/AsDialog/PageCount.html">PageCount</a></li>
		<li>новый параметр в методе 
		<a href="ProgrGuide/Functions/AsDialog/MaxLenCaption.html">MaxLenCaption</a></li>
		<li>метод
		<a href="ProgrGuide/Functions/AsDialog/ExistsControl.html">ExistsControl</a></li>
		<li>новый параметр в методе 
		<a href="ProgrGuide/Functions/AsDialog/AddDublCntrl.html">AddDublCntrl</a> <br>
		&nbsp;</li>
	</ul></li>
  <li>Добавлены для описательного диалога<ul>
	<li>свойство 
	<a href="ProgrGuide/Functions/AsDialogEx/ChangeTypeControl.html">
	ChangeTypeControl</a></li>
	<li>свойство 
	<a href="ProgrGuide/Functions/AsDialogEx/AddAdditionalRegKey.html">
	AddAdditionalRegKey</a><br>
	&nbsp;</li>
	</ul>
	</li>
	<li>Свойство DisableDocFunctions для
	<a href="ProgrGuide/Functions/ASVIEW/DisableDocFunctions.html">вида просмотра</a>,
	<a href="ProgrGuide/Functions/ASTREE/DisableDocFunctions.html">дерева</a> и
	<a href="ProgrGuide/Functions/AsRepViewer/DisableDocFunctions.html">отчета</a>.<br>
	&nbsp;</li>
	<li>Добавлен новый параметр в методе
	<a href="ProgrGuide/Functions/AsRepViewer/SaveToFile.html">SaveToFile</a> отчета.<br>
	&nbsp;</li>
	<li>Добавлены функции
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DocGrandChildren.html">
	DocGrandChildren</a> и
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/CutChildLink.html">
	CutChildLink</a>.<br>
	&nbsp;</li>
	<li>Добавлен новый параметр в функциях
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DocChildren.html">
	DocChildren</a>,
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/DocParents.html">
	DocParents</a>.</li>
</ol>
<p>&nbsp;</p>
<p><i> 11 Февраля 2004 г - 1
Ìàя 2005 г&nbsp; </i></p>
<ol>
  <li>Добавлены для документа<ul>
      <li>системнûå событиÿ 
		<a href="ProgrGuide/ScriptProcs/StoreGrid.html">StoreGrid</a>,
		<a href="ProgrGuide/ScriptProcs/LoadGrid.html">LoadGrid</a>,
		<a href="ProgrGuide/ScriptProcs/SetPrintWidth.html">SetPrintWidth</a></li>
		<li>íîâûé ïàðàìåòð â ñîáûòèè
		<a href="ProgrGuide/ScriptProcs/PostMessage.html">
		PostMessage</a></li>
      <li>ìåòîä 
		<a href="ProgrGuide/Functions/ASDOC/PrintToFile.html">PrintToFile</a></li>
		<li>ñîáûòèå 
		<a href="ProgrGuide/ScriptProcs/ClickDropDown.html">ClickDropDown</a>
		äëÿ òипà данных комментарий</li>
		<li>ðàçäåëèòåëüíàÿ ëèíèÿ â <a href="ProgrGuide/Defs/doc.html">îïèñàíèè äîêóìåíòà</a></li>
    </ul>
  <p>&nbsp;</li>
  <li>Добавлены
    
      <ul>
        <li> ñâîéñòâî 
		<a href="ProgrGuide/Functions/ASVIEW/AllowExport.html">AllowExport</a>
		â îáъåêòе âèä ïðîñìîòðà&nbsp;&nbsp;&nbsp;
		</li>
		<li>свойство
        
		<a href="ProgrGuide/Functions/ASTREE/AllowExport.html">AllowExport</a> в объекте äåðåâî</li>
        <li>ïàðàìåòð â ìåòîäå 
		<a href="ProgrGuide/Functions/Functions/InterfaceManagment/BrowseTree.html">
		BrowseTree</a><br>
		&nbsp;</li>
  </ul>
  </li>
  <li>Добавлены для øàáëîíà ïå÷àòè<ul>
      <li>ñâîéòâà 
		<a href="ProgrGuide/Functions/AsDocPrint/AllowView.html">AllowView</a>,
		<a href="ProgrGuide/Functions/AsDocPrint/AllowHistory.html">AllowHistory</a>,
		<a href="ProgrGuide/Functions/AsDocPrint/AllowPrintPreview.html">
		AllowPrintPreview</a></li>
		<li>íîâûé ïàðàìåòð â 
		ìåòîäå <a href="ProgrGuide/Functions/AsDocPrint/P.html">P</a></li>
    </ul>
  &nbsp;</li>
  <li>Добавленî ñâîéñòâî 
	<a href="ProgrGuide/Functions/ASVIEW/ExistsColumn.html">ExistsColumn</a>
	для âèäà ïðîñìîòðà. <br>
	&nbsp;</li>
	<li>Добавленî ñâîéñòâî
	<a href="ProgrGuide/Functions/AsCallBackOnTimer/Properties.html">
	Properties</a> для îáúåêòà òèïà àãåíò öèêëèчеñêîãî âûçîâà ïðîöåäóð. <br>
	&nbsp;</li>
	<li>Добавлен ìåòîä 
	<a href="ProgrGuide/Functions/AsRepViewer/SaveToFile.html">SaveToFile</a>
	для îáъåêòà îò÷åò.<br>
	&nbsp;</li>
	<li>Добавленû ìåòîäû 
	<a href="ProgrGuide/Functions/AsDialog/AddRadioButtons.html">AddRadioButtons</a>,
	<a href="ProgrGuide/Functions/AsDialog/AddDublRadioButtons.html">
	AddDublRadioButtons</a> â îáъåêò äèàëîã.<br>
	&nbsp;</li>
	<li>Äîáàâëåíî 
	Atributes â <a href="ProgrGuide/Defs/Dialog.html">îïèñàíèè îïèñàòåëüíîãî äèàëîãà</a>.<br>
	&nbsp;</li>
	<li> Добавлены ñâîéñòâà
	<a href="ProgrGuide/Functions/AsRepViewer/RowDescriptor.html">
	RowDescriptor</a> è 
	<a href="ProgrGuide/Functions/AsRepViewer/RowISN.html">RowISN</a>
	â îáъåêòå îò÷åò.<br>
	&nbsp;</li>
  <li> Добавлены функции 
	<a href="ProgrGuide/Functions/Functions/AppLock.html">AppLock</a>,
	<a href="ProgrGuide/Functions/Functions/ParameterManagment/ParamDesc.html">
	ParamDesc</a>,
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/ExportDoc.html">
	ExportDoc</a>, <a href="ProgrGuide/Functions/Functions/ImportFromDir.html">
	ImportFromDir</a>,
	<a href="ProgrGuide/Functions/Functions/AccManagement/ExistsFact.html">
	ExistsFact</a>,
	<a href="ProgrGuide/Functions/Functions/DocumentsCirculation/GetDocPassedState.html">
	GetDocPassedState</a>.<br>
	&nbsp;</li>
	<li>Добавленû ôóíêöèè àðõèâàöèè
	
	<a href="ProgrGuide/Functions/Functions/Archive/ArchiveDoc.html">ArchiveDoc</a>,
	<a href="ProgrGuide/Functions/Functions/Archive/ArchiveObjectAccWithRem.html">
	ArchiveObjectAccWithRem</a>,
	<a href="ProgrGuide/Functions/Functions/Archive/GetArchiveDb.html">
	GetArchiveDB</a>.<br>
	&nbsp;</li>
  <li> Добавлен новый параметр в функцию
	<a href="ProgrGuide/Functions/Functions/AccManagement/LastOpDate2.html">
	LastOpDate2</a>.<br>
	&nbsp;</li>
	<li> Добавлен новый параметр 
	Cancel в функции âûçîâà <a href="ProgrGuide/Defs/Job.html">çàäàíèÿ</a> ïðè òèïå 1.<br>
	&nbsp;</li>
	<li> Добавлен режим авторизации â <a href="Config_as_struct.html">êîíôèãóðàöèîííîì ôàéëå</a>.<br>
	&nbsp;</li>
  <li> Добавленà íîâàÿ êîëîíêà(fDCD) â òàáëèöå <a href="ProgrGuide/Database/DocP.html">DocP</a>.<br>
	&nbsp;</li>
	<li>Добавленû òàáëèöû àðõèâàöèè <a href="ProgrGuide/Database/DocLogARC.html">DOCLOGARC</a>,
	<a href="ProgrGuide/Database/DocsARC.html">DOCSARC</a>,
	<a href="ProgrGuide/Database/DocsARCISN.html">DOCARCISN</a>,
	<a href="ProgrGuide/Database/DocsAttachARC.html">DOCSATTACHARC</a>,
	<a href="ProgrGuide/Database/DocsGARC.html">DOCSGARC</a>,
	<a href="ProgrGuide/Database/DocsimARC.html">DOCSIMARC</a>.<br>
	&nbsp;</li>
	<li>Èçìåíåíà ñòðóêòóðà òàáëèöû <a href="ProgrGuide/Database/Params.html">Params</a>
	è äîáàâëåíà òàáëèöà 
	<a href="ProgrGuide/Database/User%20Params.html">UserParams</a>.<br>
	&nbsp;</li>
	<li>Èçìåíåíà ñòðóêòóðà òàáëèöû 
	<a href="ProgrGuide/Database/Users.html">Users</a>.<br>
	&nbsp;</li>
	<li>Добавленû òàáëèöû
	<a href="ProgrGuide/Database/ResNumbers.html">ResNumbers</a>,
	<a href="ProgrGuide/Database/ChacheRemDate.html">CacheRemDate</a> и функция
	<a href="ProgrGuide/Functions/Functions/ReserveNumber.html">ReserveNumber</a>.<br>
	&nbsp;</li>
	<li>Добавленû òàáëèöû
	äîñòóïîâ 
	<a href="ProgrGuide/Database/AccessLink.html">AccessLink</a>,
	<a href="ProgrGuide/Database/AccessISNList.html">AccessISNList</a>,
	<a href="ProgrGuide/Database/AccessLog.html">AccessLog</a>.<br>
	&nbsp;</li>
	<li>Добавлен тип реквизита PATH для диалога в методе <a href="ProgrGuide/Functions/AsDialog/AddControl.html">AddControl</a>.<br>
	&nbsp;</li>
</ol>
<p>&nbsp;</p>
<p><i> 17 Июня 2002 г - 11 Февраля 2004 г</i></p>
<ol>
  <li> Добавлены&nbsp;
    <ul>
      <li>объект
      <a href="ProgrGuide/Functions/ASDocStructure.html">структура документа</a></li>
      <li>объект
      <a href="ProgrGuide/Functions/ASDocStructureElement.html">элемент структуры документа</a></li>
      <li>свойство
      <a href="ProgrGuide/Functions/ASDOC/Structure.html">Structure</a> в объекте документ<br>
		&nbsp;</li>
    </ul>
  </li>
  <li> Добавлен объект
  <a href="ProgrGuide/Functions/AsTreeModalBrowser.html">иерархический вспомогательный список</a>.<br>
	&nbsp;</li>
  <li>Добавлены для объекта диалог<ul>
      <li>системные события
      <a href="ProgrGuide/ScriptProcs/UstPar_Activate.html">Activate</a>,
      <a href="ProgrGuide/ScriptProcs/UstPar_ClickDropDown.html">ClickDropDown</a>,
      <a href="ProgrGuide/ScriptProcs/UstPar_Validate.html">Validate</a>,
      <a href="ProgrGuide/ScriptProcs/UstPar_ValueChanged.html">ValueChanged</a> </li>
      <li>свойствa
      <a href="ProgrGuide/Functions/AsDialog/EventModule.html">EventModule</a> и
      <a href="ProgrGuide/Functions/AsDialog/ReadOnly.html">ReadOnly</a><br>
		&nbsp;</li>
    </ul>
  </li>
  <li>Добавлены для документа<ul>
      <li>системное событие
      <a href="ProgrGuide/ScriptProcs/BeforeExport.html">BeforeExport</a> </li>
      <li>свойство
      <a href="ProgrGuide/Functions/ASDOC/StoredFacts.html">StoredFacts</a> <br>
		&nbsp;</li>
    </ul>
  </li>
  <li>Добавлены<ul>
    <li>AltFont в
    <a href="ProgrGuide/Defs/View.html">описании вида просмотра</a></li>
    <li>свойство
    <a href="ProgrGuide/Functions/ASVIEW/AltFont.html">AltFont</a> в объекте вид просмотра</li>
    <li>новый атрибут &quot;F&quot; для реквизитов в <a href="ProgrGuide/Defs/doc.html">
	описании документа</a>&nbsp; <br>
	&nbsp;</li>
  </ul>
  </li>
  <li>Добавлены<ul>
    <li>PrintFormated в <a href="ProgrGuide/Defs/doc.html">
	описании документа</a>&nbsp; </li>
    <li>свойство
    <a href="ProgrGuide/Functions/AsRepViewer/UseFormatting.html">UseFormatting</a> в объекте отчет<br>
	&nbsp;</li>
  </ul>
  </li>
  <li>Добавлены
    
      <ul>
        <li>ArrayBased в
        <a href="ProgrGuide/Defs/Data.html">описании источника данных</a></li>
        <li>свойство
        <a href="ProgrGuide/Functions/ASDATA/ArrayBased.html">ArrayBased</a> в объекте источник данных</li>
        <li>системное событие
        <a href="ProgrGuide/ScriptProcs/Load.html">Load</a> для объекта<br>
		&nbsp;</li>
  </ul>
  </li>
  <li> Добавлены функции
  <a href="ProgrGuide/Functions/Functions/GetFullNameOfTmpFile.html">
  GetFullNameOfTmpFile</a>,
  <a href="ProgrGuide/Functions/Functions/AccessControl/ExistsAccessDesc.html">
  ExistsAccessDesc</a>.<br>
	&nbsp;</li>
  <li> Добавлен параметр в функции
  <a href="ProgrGuide/Functions/Functions/AccessControl/AccessDesc.html">
  AccessDesc</a> и в методе <a href="ProgrGuide/Functions/AsAccessDesc/Load.html">
  Load</a> объектa описатель доступа. <br>
	&nbsp;</li>
  <li> Добавлены значения для уровня проверки документа в методах <a href="ProgrGuide/Functions/ASDOC/Store.html">Store</a> и <a href="ProgrGuide/Functions/ASDOC/CheckAndStore.html">CheckAndStore.</a><br>
	&nbsp;</li>
  <li>Добавлен новый параметр в фунции
  <a href="ProgrGuide/Functions/Functions/AccManagement/LastOpDate.html">
  LastOpDate</a>.<br>
	&nbsp;</li>
  <li>Изменены параметры функции
  <a href="ProgrGuide/Functions/Functions/AccManagement/LoadHI2FactByObject.html">
  LoadHI2FactByObject</a>.<br>
	&nbsp;</li>
  <li>Измененa структура таблицы
  <a href="ProgrGuide/Database/Users.html">USERS</a>.</li>
</ol>
<p><br>
    </p>
<p><i> 1 Апреля 2002 г - 17 Июня 2002 г</i></p>
<ol>
  <li> Добавлены&nbsp;
    <ul>
      <li>объект <a href="ProgrGuide/Functions/ASMBItem.html">
		строка списка</a></li>
      <li>объект <a href="ProgrGuide/Functions/ASMBItemsCollection.html">
		коллекция строк списка</a></li>
      <li>свойства <a href="ProgrGuide/Functions/AsModalBrowser/MultiSelect.html">
		MultiSelect</a>
        и <a href="ProgrGuide/Functions/AsModalBrowser/SelectedItems.html">
		SelectedItems</a>
        в объекте произвольный вспомогательный список</li>
      <li>метод <a href="ProgrGuide/Functions/AsDialog/AddMultiSelectViewControl.html">
		AddMultiSelectViewControl</a>
        в объекте диалог
        <a href="ProgrGuide/Functions/Functions/GetWorkingDays.html"><br>
        </a> <a href="ProgrGuide/Defs/doc.html">
        <br>
        </a></li>
    </ul>
  </li>
  <li> Добавлены&nbsp;
    <ul>
      <li> идентификатор контекстной помощи в <a href="ProgrGuide/Defs/View.html">
		описании вида просмотра</a> &nbsp;
    
      </li>
      <li>свойство <a href="ProgrGuide/Functions/ASVIEW/HelpContext.html">
		HelpContext</a>
        в объекте вид просмотра<br>
    <br>
    
      </li>
    </ul>
  </li>
  <li> Добавлены функции <a href="ProgrGuide/Functions/Functions/ShowImportWindow.html">
	ShowImportWindow</a>,
    <a href="ProgrGuide/Functions/Functions/AccManagement/GetTurnHI2.html">
	GetTurnHI2</a>.<br>
    <br>
    
  </li>
  <li> В <a href="ProgrGuide/Functions/AsRepViewer.html"> объекте отчет</a> добавлены методы <a href="ProgrGuide/Functions/AsRepViewer/RegistrFunction.html">
	RegistrFunction</a>,
    <a href="ProgrGuide/Functions/AsRepViewer/RegistrNode.html">RegistrNode</a>.<br>
    <br>
    </li>
  <li>Добавлено системное событие <a href="ProgrGuide/ScriptProcs/BeforeImport.html">
	BeforeImport</a>
    для документа.<br>
    <br>
    </li>
  <li>Добавлен новый атрибут &quot;U&quot; для реквизитов&nbsp;
    <ul>
      <li>в <a href="ProgrGuide/Defs/doc.html">
		описании документа</a></li>
      <li>в методе <a href="ProgrGuide/Functions/AsDialog/AddControl.html">
		AddControl</a>
        объекта диалог.</li>
    </ul>
  </li>
</ol>
<p>&nbsp;</p>
<p><i> 4 Февраля 2002 г - 1 Апреля 2002 г</i></p>
<ol>
  <li> Добавлены&nbsp;
    <ul>
      <li> <a href="ProgrGuide/Functions/AsDayStatus.html">
		объект статус дня</a></li>
      <li>функции <a href="ProgrGuide/Functions/Functions/DaysInMonth.html">
		DaysInMonth</a>,
        <a href="ProgrGuide/Functions/Functions/GetWorkingDays.html">
		GetWorkingDays<br>
        </a> <a href="ProgrGuide/Defs/doc.html">
        <br>
        </a></li>
    </ul>
  </li>
  <li> Добавлены функции управления учетами <a href="ProgrGuide/Functions/Functions/AccManagement/LoadHI2FactByObject.html">
	LoadHI2FactByObject</a>,
    <a href="ProgrGuide/Functions/Functions/AccManagement/LasHI2OpDate.html">
	LastHI2OpDate</a>.<br>
    <br>
    
  </li>
  <li> Добавлена функция управления интерфейсом <a href="ProgrGuide/Functions/Functions/InterfaceManagment/ScreenSize.html">
	ScreenSize</a>.<br>
    <br>
    
  </li>
  <li> В объекте шаблон печати добавлено свойствo <a href="ProgrGuide/Functions/AsDocPrint/ErrorOnEmptyPrintPreview.html">
	ErrorOnEmptyPrintPreview</a>.<br>
    <br>
    </li>
  <li> Добавлена <a href="ProgrGuide/Constants/const_doc_States.html">
	константа состояния документа</a> <b>ASAccordingToNavTreeNew</b>.<br>
    <br>
    </li>
</ol>
<p><i> 19 Ноября 2001 г - 4 Февраля 2002 г</i></p>
<ol>
  <li> Добавлены&nbsp;
    <ul>
      <li><a href="ProgrGuide/Functions/AsAttachment.html">
		объект файловое дополнение</a></li>
      <li><a href="ProgrGuide/Functions/AsAttachmentCollection.html">
		объект коллекция файловых дополнений</a></li>
      <li>таблица <a href="ProgrGuide/Database/DocsAttach.html">
		DOCSATTACH</a></li>
      <li>свойства <a href="ProgrGuide/Functions/ASDOC/Attachments.html">
		Attachments</a>,
        <a href="ProgrGuide/Functions/ASDOC/ReadOnlyAttachments.html">
		ReadOnlyAttachments</a>
        в объекте документ</li>
      <li>признак прикрепления файловых дополнений в <a href="ProgrGuide/Defs/doc.html">описании документа<br>
        <br>
        </a></li>
    </ul>
  </li>
  <li> Добавлены&nbsp;
    <ul>
      <li><a href="ProgrGuide/Functions/AsCallBackOnTimer.html">
		объект агент циклического вызова процедур</a></li>
      <li>функция <a href="ProgrGuide/Functions/Functions/CreateCallBackOnTimer.html">
		CreateCallBackOnTimer</a>&nbsp;<br>
        <br>
        </li>
    </ul>
  </li>
  <li> Добавлены&nbsp;
    <ul>
      <li>системное <a href="ProgrGuide/Defs/notification.html">
		описание оповещения</a></li>
      <li>таблицы <a href="ProgrGuide/Database/Notifications.html">
		NOTIFICATIONS</a>,
        <a href="ProgrGuide/Database/NtfReceivers.html">NTFRECEIVERS</a>&nbsp;</li>
      <li>функция <a href="ProgrGuide/Functions/Functions/SendNotification.html">
		SendNotification</a>
        для отправки оповещения<br>
        <br>
        </li>
    </ul>
  </li>
  <li> Добавлены&nbsp;
    <ul>
      <li>таблицы <a href="ProgrGuide/Database/Hi2.html">
		HI2</a>,
        <a href="ProgrGuide/Database/Hirest2.html">HIREST2</a></li>
      <li>функции управления учетами <a href="ProgrGuide/Functions/Functions/AccManagement/CheckHI2Limit.html">
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
		SetHI2Rem</a></li>
      <li>свойство <a href="ProgrGuide/Functions/ASFACT/GLAccISN.html">
		GLAccISN</a>&nbsp; в объекте проводка<br>
        <br>
        </li>
    </ul>
  </li>
  <li> В объекте документ добавлен метод <a href="ProgrGuide/Functions/ASDOC/Flush.html">
	Flush</a>.<br>
    <br>
    </li>
  <li> Добавлен параметр в обработчики событий <a href="ProgrGuide/ScriptProcs/Magic.html">
	Magic</a>,
    <a href="ProgrGuide/ScriptProcs/Valid.html">Valid</a>.<br>
    <br>
    </li>
  <li>В <a href="ProgrGuide/Defs/doc.html">описании документа</a> добавлена ширина печатной формы документа в символах.<br>
    <br>
    </li>
  <li> В объекте источник данных добавлен метод <a href="ProgrGuide/Functions/ASDATA/ClearParameters.html">
	ClearParameters</a>.<br>
    <br>
    </li>
  <li>В методах <a href="ProgrGuide/Functions/ASDOC/CheckAndStore.html">
	CheckAndStore</a>,
    <a href="ProgrGuide/Functions/ASDOC/Store.html">Store</a> объекта документ добавлен параметр.<br>
    <br>
    </li>
  <li>В <a href="ProgrGuide/Defs/Dialog.html">
	описании описательного диалога</a> добавлена длина комментария.<br>
    <br>
    </li>
  <li>Добавлены <a href="ProgrGuide/Constants/const_error_codes.html">
	константы кодов ошибок</a>.<br>
    <br>
    </li>
  <li>Добавлена функция документооборота <a href="ProgrGuide/Functions/Functions/DocumentsCirculation/NavTreeNewDocMode.html">
	NavTreeNewDocMode</a>.<br>
    <br>
    </li>
  <li>В корне изменена группировка функций.
    <p>&nbsp;</li>
</ol>
<p>&nbsp; <i>
26 сентября - 19 Ноября 2001 г</i></p>
<ol>
  <li>Увеличена длина внутренного представления документа (с 1024 до 4000 байт), в следствии чего поля fBody1, fBody2, fBody3 и fBody4 в таблице <a href="ProgrGuide/Database/Docs.html">DOCS</a>
	объеденены в поле fBody.<br>
    <br>
    </li>
  <li>Изменены параметры <a href="ProgrGuide/ScriptProcs/OnLimitFault.html">
	обработчика события выхода за пределы лимитов</a>, что дает возможность в обработчике изменять лимты(например на основе договора о предоставлении овердрафта).<br>
    <br>
    </li>
  <li>Добавлен параметр в обработчик события <a href="ProgrGuide/ScriptProcs/Print.html">
	Print</a>, что позволяет задавать разные режимы печати документа.<br>
    <br>
    </li>
  <li>В объекте дерево добавлены методы <a href="ProgrGuide/Functions/ASTREE/AddNode.html">
	AddNode</a>,
<a href="ProgrGuide/Functions/ASTREE/DeleteNode.html">DeleteNode</a>.<br>
    <br>
    </li>
  <li>Добавлен <a href="ProgrGuide/Functions/AsErrorsFreeExecutor.html">
	объект исполнитель процедур</a>.<br>
    <br>
    </li>
  <li>Добавлена функция <a href="ProgrGuide/Functions/Functions/GetServerDate.html">
	GetServerDate</a>.<br>
    <br>
    </li>
  <li>В <a href="ProgrGuide/Defs/doc.html#Grid">
	описании документа для грид-таблиц</a> добавлена возможность предотвращения сохранения их содержания.</li>
</ol>
</body>
</html>
