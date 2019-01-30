---
layout: page
title: "Диалог"
---




# Объект диалог 
Создание объекта диалог обеспечивается через 
функцию [CreateDialog](Functions/InterfaceManagment/CreateDialog.html)
|Свойства|Описание|
|--|--|
|[AutoStore](AsUstPar/AutoStore.html) | Возвращает признак запоминания значений реквизитов диалога.|
|[BoolValue](AsUstPar/BoolValue.html) | Возвращает признак изменения значения реквизита пользовательского диалога.|
|[Cancel](AsUstPar/Cancel.html) | Возвращает или устанавливает тип выхода из пользовательского диалога.|
|[Caption](AsUstPar/Caption.html) | Возвращает или устанавливает заголовок пользовательского диалога.|
|[Control](AsUstPar/Control.html) | Возвращает ссылку на реквизит пользовательского диалога.|
|[ControlValue](AsUstPar/ControlValue_D.html) | Устанавливает значение для реквизита пользовательского диалога.|
|[ECaption](AsUstPar/ECaption.html) | Возвращает или устанавливает заголовок пользовательского диалога на иностранном языке.|
|[EventModule](AsUstPar/EventModule.html) | Возвращает или устанавливает идентификатор модуля.|
|[ExistsControl](AsUstPar/ExistsControl.html) | Определяется существование в диалоге элемента управления с указанным идентификатором.|
|[Left](AsUstPar/Left.html) | Возвращает или устанавливает удаленность левого края диалога от левого края окна приложения.|
|[LeftDouble](AsUstPar/LeftDouble.html) | Возвращает или устанавливает удаленность левого края всех имеющихся вторичных реквизитов от левого края пользовательского диалога.|
|[MaxLenCaption](AsUstPar/MaxLenCaption.html) | Возвращает максимальную длину заголовков реквизитов в пользовательском диалоге.|
|[PageCaption](AsUstPar/PageCaption.html) | Возвращает заголовок данной страницы в пользовательском диалоге.|
|[PageCount](AsUstPar/PageCount.html) | Возвращает количество страниц в пользовательском диалоге.|
|[Properties](AsUstPar/Properties.html) | Возвращает ссылку на объект Dictionary.|
|[ReadOnly](AsUstPar/ReadOnly.html) | Возвращает или устанавливает статус режима редактирования реквизита пользовательского диалога.|
|[Top](AsUstPar/Top.html) | Возвращает или устанавливает удаленность верхнего края диалога от верхнего края окна&nbsp; приложения.|
|[Value](AsUstPar/Value.html) | Возвращает или устанавливает значение реквизита пользовательского диалога.|

|Методы|Описание|
|--|--|
|[AddButton](AsUstPar/AddButton.html) | Добавляет кнопку в пользовательский диалог.|
|[AddButtonAtRight](AsUstPar/AddButtonAtRight.html)|Добавляет кнопку в пользовательский диалог справа от указанного реквизита.|
|[AddControl](AsUstPar/AddControl.html)|Добавляет реквизит ввода в пользовательский диалог.|
|[AddControlAtRight](AsUstPar/AddControlAtRight.html)|В пользовательский диалог добавляет реквизит справа от указанного реквизита.|
|[AddDublCntrl](AsUstPar/AddDublCntrl.html)|Добавляет вторичный реквизит ввода в пользовательский диалог.|
|[AddDublRadioButtons](AsUstPar/AddDublRadioButtons.html)|Добавляет вторичную группу селективных кнопок в пользовательский диалог.|
|[AddLabel](AsUstPar/AddLabel.html)|обавляет метку в пользовательский диалог.|
|[AddLine](AsUstPar/AddLine.html)|Добавляет разделительную линию в диалог.|
|[AddMemoControl](AsUstPar/AddMemoControl.html)|Добавляет  мемо-поле в диалог.|
|[AddMultiFilterControl](AsUstPar/AddMultiFilterControl.html)|Добавляет в пользовательский диалог реквизит следующих трех типов:[]()|
<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
 </tr>
    </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial">[]()</font><br />
      </td>
    <td class="label" width="71%"><font face="Arial"></font></td>
    </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial">[AddMultiFilterControlAtRight](AsUstPar/AddMultiFilterControlAtRight.html)</font><br />
        <br />
      </td>
    <td class="label" width="71%"><font face="Arial">Добавляет в пользовательский диалог 
        реквизит следующих трех типов: <a href=../AsModalBrowser.html">
        </a>, 
с возможностью [отбора нескольких строк](../AsModalBrowser/MultiSelect.html), реквизит типа дерева-справочника</a>, 
с возможностью [отбора нескольких строк](../AsModalBrowser/MultiSelect.html) , или реквизит типа сопоставимости с введенным значением, без 
        возможности [отбора нескольких строк](../AsModalBrowser/MultiSelect.html). </font></td>
    </tr>
    <tr>
    <td class="style3" width="29%"><font face="Arial">
	[AddMultiSelectFolderControl](AsUstPar/AddMultiSelectFolderControl.html)</font><br />
        </td>
    <td class="style3" width="71%"><font face="Arial">Добавляет в 
	пользовательский диалог реквизит типа папки, с возможностью отбора нескольких строк.&nbsp;</font></td>
    </tr>
	<tr>
    <td class="label" width="29%"><font face="Arial">
	[AddMultiSelectTreeControl](AsUstPar/AddMultiSelectTreeControl.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет в 
	пользовательский диалог реквизит типа дерева, с возможностью отбора нескольких строк.&nbsp;</font></td>
    </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial">[AddMultiSelectViewControl](AsUstPar/AddMultiSelectViewControl.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет в 
	пользовательский диалог реквизит типа произвольный вспомогательный список 
	выбора, с возможностью отбора нескольких строк.&nbsp;</font></td>
    </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	[AddPage](AsUstPar/AddPage.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет 
	страницу в пользовательский диалог.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	[AddRadioButtons](AsUstPar/AddRadioButtons.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет группу 
	селективных кнопок в пользовательский диалог.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><a
    href="AsUstPar/AddViewControl.html">AddViewControl</a></font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет в 
	пользовательский диалог реквизит типа произвольный вспомогательный список 
	выбора.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">
	[AddViewControlAtRight](AsUstPar/AddViewControlAtRight.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Добавляет в 
	пользовательский диалог реквизит типа произвольный вспомогательный список 
	выбора справа от указанного реквизита. </font></td>
  </tr>
    <tr>
    <td class="label" width="29%"><font face="Arial">[CloseForm](AsUstPar/CloseForm.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Закрывает форму диалога.</font></td>
    </tr>
  <tr>
    <td class="style2" width="29%">
	[CreateBrowseParametersInfo](AsUstPar/CreateBrowseParametersInfo.html)</td>
    <td class="label" width="71%"><font face="Arial"><span lang="ru">Создает </span> </font>
<font size="3" face="Arial"><span class="style1">объект типа 
[AsBrowserParametersInfo](AsBrowserParametersInfo.html)</span><span lang="en-us">, </span>в<span lang="ru" class="style1"> 
котором содержатся значения реквизитов диалога</span></font><font face="Arial">.</font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial">[Show](AsUstPar/Show.html)</font></td>
    <td class="label" width="71%"><font face="Arial">Активизирует 
	пользовательский диалог.</font></td>
  </tr>
</table>


