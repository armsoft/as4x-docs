---
title: "Օգտագործողի կողմից ընդլայնվող մշակիչներ"
author: "sts"
sublinks:
  - { title: "ScriptExtension.AddHandler մեթոդ", ref: scriptextensionaddhandler-մեթոդ }
  - { title: "ExtensionEvents Enum", ref: extensionevents-enum }
  - { title: "EventArgs տիպեր", ref: eventargs-տիպեր }
  - { title: "EventArgsDocBeforeImport Class", ref: eventargsdocbeforeimport-class }
  - { title: "EventArgsDocWhen Class", ref: eventargsdocwhen-class }
  - { title: "EventArgsDocValid Class", ref: eventargsdocvalid-class }
  - { title: "EventArgsDocValidate Class", ref: eventargsdocvalidate-class }
  - { title: "EventArgsDocAction Class", ref: eventargsdocaction-class }
  - { title: "EventArgsDocFolders Class", ref: eventargsdocfolders-class }
  - { title: "EventArgsDocBeforeCommit Class", ref: eventargsdocbeforecommit-class }
  - { title: "EventArgsDataFunctions Class", ref: eventargsdatafunctions-class }
  - { title: "EventArgsDocAfterCreate Class", ref: eventargsdocaftercreate-class }
  - { title: "EventArgsDocAfterLoad Class", ref: eventargsdocafterload-class }
  - { title: "EventArgsDocAfterProcess Class", ref: eventargsdocafterprocess-class }
  - { title: "EventsArgsDocBeforeCopy Class", ref: eventargsdocbeforecopy-class }
  - { title: "EventArgsDocBeforeExport Class", ref: eventargsdocbeforeexport-class}
  - { title: "EventArgsDocClickDropDown Class", ref: eventargsdocclickdropdown-class }
  - { title: "EventArgsDocClickDropDownGrid Class", ref: eventargsdocclickdropdowngrid-class }
  - { title: "EventArgsDocDelete Class", ref: eventargsdocdelete-class }
  - { title: "EventArgsDocOnUIDelete Class", ref: eventargsdoconuidelete-class }
  - { title: "EventArgsDocFunctions Class", ref: eventargsdocfunctions-class }
  - { title: "EventArgsDocGridCellValid Class", ref: eventsargsdocgridcellvalid-class }
  - { title: "EventArgsDocGridRowValid Class", ref: eventargsdocgridrowvalid-class }
  - { title: "EventArgsDocGridValid Class", ref: eventargsdocgridvalid-class }
  - { title: "EventArgsDocIsHidden Class", ref: eventargsdocishidden-class }
  - { title: "EventArgsDocLoadGrid Class", ref: eventargsdocloadgrid-class }
  - { title: "EventArgsDocMagic Class", ref: eventargsdocmagic-class }
  - { title: "EventArgsDocPrint Class", ref: eventargsdocprint-class }
  - { title: "EventArgsDocStoreGrid Class", ref: eventargsdocstoregrid-class }
  - { title: "EventArgsDocTemplateSubs Class", ref: eventargsdoctemplatesubst-class }
  - { title: "EventArgsDialogActivate Class", ref: eventargsdialogactivate-class }
  - { title: "EventArgsDialogClickDropDown Class", ref: eventargsdialogclickdropdown-class }
  - { title: "EventArgsDialogValidate Class", ref: eventargsdialogvalidate-class }
  - { title: "EventArgsDialogValueChanged Class", ref: eventargsdialogvaluechanged-class }
---

Տրված է հնարավորություն սահմանել լրացուցիչ մշակիչներ փաստաթղթում, տվյալների աղբյուրում և դիալոգում առաջացող որոշ իրադարձությունների համար, որոնք աշխատում են հիմնական իրադարձություններից առաջ կամ հետո։

Մշակիչները հնարավոր է սահմանել հիմնական մշակիչին նախորդող(Pre) աշխատող կամ հաջորդող(Post) աշխատող տարբերակով։

Մշակիչները կարող են տեղադրված լինել կամայական մոդուլի մեջ և կամայական անունով։

Ամեն մի իրադարձության համար հնարավոր է սահմանել միայն մեկ նախորդող (Pre) և միայն մեկ հաջորդող (Post) լրացուցիչ մշակիչ։

Փաստաթղթի համար հնարավոր է մշակիչ սահմանել հետևյալ իրադարձությունների համար`
* [BeforeImport](BeforeImport.md)
* [When](When.md)
* [Valid](Valid.md)
* [Validate](Validate.md)
* [Action](Action.md)
* [Folders](Folders.md)
* [BeforeCommit](BeforeCommit.md)
* [AfterCreate](AfterCreate.md)
* [AfterLoad](AfterLoad.md)
* [AfterProcess](AfterProcess.md)
* [BeforeCopy](BeforeCopy.md)
* [BeforeExport](BeforeExport.md)
* [ClickDropDown](ClickDropDown.md)
* [ClickDropDownGrid](ClickDropDownGrid.md)
* [Delete](Delete.md)
* [OnUIDelete](OnUIDelete.md)
* [Functions](FunctionsDoc.md)
* [GridCellValid](GridCellValid.md)
* [GridRowValid](GridRowValid.md)
* [GridValid](GridValid.md)
* [IsHidden](IsHidden.md)
* [LoadGrid](LoadGrid.md)
* [Magic](Magic.md)
* [Print](Print.md)
* [StoreGrid](StoreGrid.md)
* [TemplateSubstitution](TemplateSubstitution.md)

Տվյալների աղբյուրի համար հասանելի է՝
* [Functions](FunctionsData.md)
* [Valid](Valid_Data.md)

Դիալոգի համար հասանելի է՝
* [Activate](UstPar_Activate.md)
* [ClickDropDown](UstPar_ClickDropDown.md)
* [Validate](UstPar_Validate.md)
* [ValueChanged](UstPar_ValueChanged.md)

## Մշակիչների գրանցում

Նախորդող և հաջորդող մշակիչները միացնելու համար հարկավոր է համակարգում ավելացնել `PUBLIC` հասանելիությամբ մոդուլ `AppExt` անունով, որում առկա է `Init` մեթոդ։
`Init` մեթոդում սահմանվում են նոր մշակիչները` [ScriptExtension.AddHandler](#scriptextensionaddhandler-մեթոդ) մեթոդի միջոցով։ 

``` as4x
MODULE {
NAME = AppExt;
CAPTION = "Extensions";
PUBLIC = 1;

SCRIPT {
Option Explicit

Public Sub Init()
    ...
End Sub
};
};
```
 
Ստորև բերված օրինակում սահմանված է նոր մշակիչ `IMemOrd` փաստաթղթի [Validate](Validate.md) իրադարձության համար՝ `PostValidate`:
Այժմ իրադարձության առաջացման ժամանակ կաշխատի նաև `NewMod` մոդուլի `MyValidateHandler` մեթոդը։

``` vb
Public Sub Init()
    ScriptExtension.AddHandler(ExtensionEvents.DocPostValidate, "IMemOrd", "NewMod.MyValidateHandler")
End Sub
```

`NewMod` մոդուլում `MyValidateHandler` մեթոդը պետք է սահմանված լինի հետևյալ սահմանմամբ՝

``` vb
Public Sub MyValidateHandler(ByVal args As EventArgsDocValidate)
    '
End Sub
```

## ScriptExtension.AddHandler մեթոդ

Այս մեթոդի միջոցով ավելացվում են նոր մշակիչներ իրադարձությունների համար։ 
Թույլատրելի իրադարձությունները սահմանված են [ExtensionEvents](#extensionevents-enum)-ի մեջ։

``` vb
Sub ScriptExtension.AddHandler(ByVal eventType As ExtensionEvents, ByVal instanceName As String, ByVal handlerName As String)
```

|Պարամետր|Նկարագրություն|
|:--|:--|
|`eventType`   | Այն իրադարձության տեսակը, որի համար ավելացվում է մշակիչը։|
|`instanceName`| Այն օբյեկտի (փաստաթուղթ, տվյալների աղբյուր) ներքին անունը, որի համար ավելացվում է մշակիչը։|
|`handlerName` | Ավելացվող լրացուցիչ մշակիչի մոդուլի և մեթոդի անունը `.` նիշով բաժանված։ Վերը նշված օրինակում "NewMod.MyValidateHandler", որտեղ `NewMod`-ը մոդուլի անուն է, իսկ `MyValidateHandler`-ը մշակող մեթոդի անունը:|

## ExtensionEvents Enum

Սահմանում է, այն թույլատրված իրադարձությունների բազմությունը, որոնց վրա հնարավոր է լրացուցիչ մշակիչ միացնել։

|Արժեք|Նկարագրություն|
|:--|:--|
|`DataPostFunctions`  | Data-ի Functions-ից հետո աշխատելու համար։|
|`DataPostValid `  | Data-ի Valid-ից հետո աշխատելու համար։|
|`DialogPostActivate`| Dialog-ի Activate-ից հետո աշխատելու համար։|
|`DialogPreClickDropDown`| Dialog-ի ClickDropDown-ից առաջ աշխատելու համար։|
|`DialogPreValueChanged`| Dialog-ի ValueChanged-ից առաջ աշխատելու համար։|
|`DilaogPostValidate` | Dialog-ի Validate-ից հետո աշխատելու համար։| 
|`DilaogPreValidate` | Dialog-ի Validate-ից առաջ աշխատելու համար։|
|`DocPostAction`      | Doc-ի Action-ից հետո աշխատելու համար։|
|`DocPreAction`       | Doc-ի Action-ից առաջ աշխատելու համար։|
|`DocPostAfterCreate` | Doc-ի AfterCreate-ից հետո աշխատելու համար։|
|`DocPreAfterCreate`  | Doc-ի AfterCreate-ից առաջ աշխատելու համար։|
|`DocPostAfterLoad`   | Doc-ի AfterLoad-ից հետո աշխատելու համար։|
|`DocPreAfterLoad`    | Doc-ի AfterLoad-ից առաջ աշխատելու համար։|
|`DocPostAfterProcess`| Doc-ի AfterProcess-ից հետո աշխատելու համար։|
|`DocPostBeforeCommit`| Doc-ի BeforeCommit-ից հետո աշխատելու համար։|
|`DocPreBeforeCommit` | Doc-ի BeforeCommit-ից առաջ աշխատելու համար։|
|`DocPostBeforeCopy`  | Doc-ի BeforeCopy-ից հետո աշխատելու համար։|
|`DocPreBeforeCopy`   | Doc-ի BeforeCopy-ից առաջ աշխատելու համար։|
|`DocPostBeforeExport`| Doc-ի BeforeExport-ից հետո աշխատելու համար։|
|`DocPostBeforeImport`| Doc-ի BeforeImport-ից հետո աշխատելու համար։|
|`DocPreBeforeImport` | Doc-ի BeforeImport-ից առաջ աշխատելու համար։|
|`DocPreClickDropDown`| Doc-ի ClickDropDown-ից առաջ աշխատելու համար։|
|`DocPreClickDropDownGrid`| Doc-ի ClickDropDownGrid-ից առաջ աշխատելու համար։|
|`DocPostDelete`      | Doc-ի Delete-ից հետո աշխատելու համար։|
|`DocPreDelete`       | Doc-ի Delete-ից առաջ աշխատելու համար։|
|`DocPostFolders`     | Doc-ի Folders-ից հետո աշխատելու համար։|
|`DocPreFolders`      | Doc-ի Folders-ից առաջ աշխատելու համար։|
|`DocPostFunctions`   | Doc-ի Functions-ից հետո աշխատելու համար։|
|`DocPostGridCellValid`| Doc-ի GridCellValid-ից հետո աշխատելու համար։|
|`DocPreGridCellValid` | Doc-ի GridCellValid-ից առաջ աշխատելու համար։|
|`DocPostGridRowValid` | Doc-ի GridRowValid-ից հետո աշխատելու համար։|
|`DocPreGridRowValid`  | Doc-ի GridRowValid-ից առաջ աշխատելու համար։|
|`DocPostGridValid`    | Doc-ի GridValid-ից հետո աշխատելու համար։|
|`DocPreGridValid`     | Doc-ի GridValid-ից առաջ աշխատելու համար։|
|`DocPostIsHidden`     | Doc-ի IsHidden-ից հետո աշխատելու համար։|
|`DocPostLoadGrid`     | Doc-ի LoadGrid-ից հետո աշխատելու համար։|
|`DocPreMagic`         | Doc-ի Magic-ից առաջ աշխատելու համար։|
|`DocPreOnUIDelete`    | Doc-ի OnUIDelete-ից առաջ աշխատելու համար։|
|`DocPrePrint`         | Doc-ի Print-ից առաջ աշխատելու համար։|
|`DocPostStoreGrid`    | Doc-ի StoreGrid-ից հետո աշխատելու համար։|
|`DocPostTemplateSubstitution`| Doc-ի TemplateSubstitution-ից հետո աշխատելու համար։|
|`DocPostValid`        | Doc-ի Valid-ից հետո աշխատելու համար։|
|`DocPreValid`        | Doc-ի Valid-ից առաջ աշխատելու համար։|
|`DocPostValidate`    | Doc-ի Validate-ից հետո աշխատելու համար։|
|`DocPreValidate`     | Doc-ի Validate-ից առաջ աշխատելու համար։|
|`DocPostWhen`        | Doc-ի When-ից հետո աշխատելու համար։|
|`DocPreWhen`         | Doc-ի When-ից առաջ աշխատելու համար։|

Օրինակ՝
``` vb
ScriptExtension.AddHandler(ExtensionEvents.DocPreValidate, "IMemOrd", "NewMod.MemOrdPreValidateHandler")
ScriptExtension.AddHandler(ExtensionEvents.DocPreValidate, "C1Univer", "NewMod.AgrCustomValidate")
ScriptExtension.AddHandler(ExtensionEvents.DocPostWhen, "C1Univer", "NewMod.AgrCustomWhen")
```

## EventArgs տիպեր

Ամեն մի մշակիչ ստանում է մեկ պարամետր EventArgs*XXXXYYYY* տիպի, որի մեջ հասանելի են այդ իրադարձությանը վերաբերող տվյալները։

Օրինակ՝ [Valid](Valid.md) իրադարձության մշակիչը ստանում է [EventArgsDocValid](#eventargsdocvalid-class) տիպի օբյեկտ, որտեղ հասանելի են որպես հատկություն *փաստաթուղթը*, *առաջացնող դաշտը* և *հին արժեքը*։

### EventArgsDocBeforeImport Class

Պարունակում է տվյալներ [BeforeImport](BeforeImport.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`RawData`|Ներմուծվող ֆայլում առկա բոլոր դաշտերի անուն-արժեք զույգերի բազմությունը։ Արժեքները պահվում են նախնական տողային ձևով, ինչպես որ գրված է ներմուծման ֆայլում։ Հասանելի են նաև `$` նիշով սկսվող հատուկ ներմուծվող դաշտերը։|
|`CancelDocStore`|Այս հատկությանը `True` արժեքի վերագրման դեպքում կդադարեցվի փաստաթղթի ներմուծումը մշակիչի ավարտից հետո։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreBeforeImport](#extensionevents-enum)
* [DocPostBeforeImport](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPostBeforeImportHandler(ByVal args As EventArgsDocBeforeImport)
    If Trim(args.Doc("AIM")) = "" Then
        args.CancelDocStore = True
    End If
End Sub
```

### EventArgsDocWhen Class

Պարունակում է տվյալներ փաստաթղթի [When](When.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreWhen](#extensionevents-enum)
* [DocPostWhen](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPostWhenHandler(ByVal args As EventArgsDocWhen)
    If Trim(args.Doc("CLICODE")) = "" Then
        RaiseError "Սխալ", "Հաճախորդի լրացումը պարտադիր է։", "Error", "Filling client field is required."
    End If
End Sub
```

### EventArgsDocValid Class

Պարունակում է տվյալներ փաստաթղթի [Valid](Valid.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`OldValue`|Դաշտի հին արժեքը, մինչ իրադարձության առաջանալը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreValid](#extensionevents-enum)
* [DocPostValid](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPreValidHandler(ByVal args As EventArgsDocValid)
    If args.Name = "CLICODE" AndAlso Trim(args.Doc("CLICODE")) = "" Then
        RaiseError "Սխալ", "Հաճախորդի լրացումը պարտադիր է։", "Error", "Filling client field is required."
    End If
End Sub
```

### EventArgsDocValidate Class

Պարունակում է տվյալներ փաստաթղթի [Validate](Validate.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreValidate](#extensionevents-enum)
* [DocPostValidate](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPreValidateHandler(ByVal args As EventArgsDocValidate)
    If Trim(args.Doc("CLICODE")) = "" Then
        RaiseError "Սխալ", "Հաճախորդի լրացումը պարտադիր է։", "Error", "Filling client field is required."
    End If
End Sub
```

### EventArgsDocAction Class

Պարունակում է տվյալներ փաստաթղթի [Action](Action.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreAction](#extensionevents-enum)
* [DocPostAction](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPostActionHandler(ByVal args As EventArgsDocAction)
    Dim bonus As AsFact
    With args.Doc
        If .Value("DBCR") = "C" Then
            Set bonus = CreateFact("BO")
            bonus.OpDate = .Value("DATE")
            bonus.Object = .Value("CLICODE")
            bonus.Summa = .Value("SUMMA")
            bonus.DBCR = "C"
            bonus.Op = "CRD"
            .StoreFact(bonus)
        End If
    End With
End Sub
```

### EventArgsDocFolders Class

Պարունակում է տվյալներ փաստաթղթի [Folders](Folders.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreFolders](#extensionevents-enum)
* [DocPostFolders](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPostFoldersHandler(ByVal args As EventArgsDocFolders)
Dim fld As AsFoldElement
    If args.Doc.State = 2 AndAlso Trim(args.Doc("EMAIL")) <> "" Then
        Set fld = CreateFolderElement("UniqueEmail")
        fld.Status = "E"
        fld.Key = Trim(args.Doc("EMAIL"))
        fld.Com = Trim(args.Doc("NAME"))
        fld.ErrorMessage = "Էլ.փոստի հասցեն լրացված է այլ հաճախորդի համար։"
        args.Doc.StoreInFolder(fld)
    End If
End Sub
```

### EventArgsDocBeforeCommit Class

Պարունակում է տվյալներ փաստաթղթի [BeforeCommit](BeforeCommit.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreBeforeCommit](#extensionevents-enum)
* [DocPostBeforeCommit](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPostBeforeCommitHandler(ByVal args As EventArgsDocBeforeCommit)
    If args.State = 3 AndAlso args.LastFixedState <> 3 Then
        SendMailUsingDefaultMailClient args.Doc("EMAIL"), , , "Հաճախորդի քարտի փակում", "Հարգելի Հաճախորդ, Ձեր քարտը փակվել է։"
    End If
End Sub
```

### EventArgsDocAfterCreate Class

Պարունակում է տվյալներ փաստաթղթի [AfterCreate](AfterCreate.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreAfterCreate](#extensionevents-enum)
* [DocPostAfterCreate](#extensionevents-enum)

### EventArgsDocAfterLoad Class

Պարունակում է տվյալներ փաստաթղթի [AfterLoad](AfterLoad.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreAfterLoad](#extensionevents-enum)
* [DocPostAfterLoad](#extensionevents-enum)

### EventArgsDocAfterProcess Class

Պարունակում է տվյալներ փաստաթղթի [AfterProcess](AfterProcess.md), [PreAfterProcess](DocExtenderEvents/PreAfterProcess.md), [PostAfterProcess](DocExtenderEvents/PostAfterProcess.md) իրադարձությունների մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

### EventArgsDocBeforeCopy Class

Պարունակում է տվյալներ փաստաթղթի [BeforeCopy](BeforeCopy.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Args`|[CopyDoc](../Functions/Functions/DocumentsCirculation/CopyDoc.html) ֆունկցիային փոխանցվող ազատ օգտագործման պարամետր։|
|`OriginalDoc`| Այն փաստաթուղթ, որից պատճենվում է փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreBeforeCopy](#extensionevents-enum)
* [DocPostBeforeCopy](#extensionevents-enum)

### EventArgsDocBeforeExport Class

Պարունակում է տվյալներ փաստաթղթի [BeforeExport](BeforeExport.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostBeforeExport](#extensionevents-enum)

### EventArgsDocClickDropDown Class

Պարունակում է տվյալներ փաստաթղթի [ClickDropDown](ClickDropDown.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`| Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`Top`|Մոդալ պատուհան ցուցադրման վերին դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`Left`|Մոդալ պատուհան ցուցադրման ձախ դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`ControlValue`|Դաշտի ընթացիկ արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreClickDropDown](#extensionevents-enum)

### EventArgsDocClickDropDownGrid Class

Պարունակում է տվյալներ փաստաթղթի [ClickdropDownGrid](ClickDropDownGrid.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Grid`|Իրադարձությունը առաջացնող փաստաթղթի աղյուսակը:|
|`Top`|Մոդալ պատուհան ցուցադրման վերին դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`Left`|Ցուցակի և փաստաթղթի ձախ եզրերի միջև հեռավորությունը։|
|`ControlValue`|Աղյուսակի ընթացիկ վանդակի արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreClickDropDownGrid](#extensionevents-enum)

### EventArgsDocDelete Class

Պարունակում է տվյալներ փաստաթղթի [Delete](Delete.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|


Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreDelete](#extensionevents-enum)
* [DocPostDelete](#extensionevents-enum)

### EventArgsDocOnUIDelete Class

Պարունակում է տվյալներ փաստաթղթի [OnUIDelete](OnUIDelete.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`AllowDelete`|Այս հատկությանը `True` արժեքի վերագրման դեպքում փաստաթղթի համակարգային Delete իրադարձությունը թույլատրվում է։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreOnUIDelete](#extensionevents-enum)

### EventArgsDocFunctions Class

Պարունակում է տվյալներ փաստաթղթի [Functions](FunctionsDoc.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Context`|[Փաստաթղթի Functions իրադարձության համատեքստը](../Constants/const_doc_context.md)։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostFunctions](#extensionevents-enum)

### EventArgsDocGridCellValid Class

Պարունակում է տվյալներ փաստաթղթի [GridCellValid](GridCellValid.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Grid`|Իրադարձությունը առաջացնող փաստաթղթի աղյուսակը:|
|`OldValue`|Դաշտի հին արժեքը, մինչ իրադարձության առաջանալը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreGridCellValid](#extensionevents-enum)
* [DocPostGridCellValid](#extensionevents-enum)

### EventArgsDocGridRowValid Class

Պարունակում է տվյալներ փաստաթղթի [GridRowValid](GridRowValid.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Grid`|Իրադարձությունը առաջացնող փաստաթղթի աղյուսակը:|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreGridRowValid](#extensionevents-enum)
* [DocPostGridRowValid](#extensionevents-enum)

### EventArgsDocIsHidden Class

Պարունակում է տվյալներ փաստաթղթի [IsHidden](IsHidden.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`HiddenControls`| Թաքցվող քոնթրոլների ցուցակը (Dictionary)։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostIsHidden](#extensionevents-enum)

### EventArgsDocLoadGrid Class

Պարունակում է տվյալներ փաստաթղթի [LoadGrid](LoadGrid.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Աղյուսակի անունը, որի համար աշխատել է իրադարձությունը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostLoadGrid](#extensionevents-enum)

### EventArgsDocMagic Class

Պարունակում է տվյալներ փաստաթղթի [Magic](Magic.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`Top`|Մոդալ պատուհան ցուցադրման վերին դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`Left`|Մոդալ պատուհան ցուցադրման ձախ դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`ControlValue`|Դաշտի ընթացիկ արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreMagic](#extensionevents-enum)

### EventArgsDocPrint Class

Պարունակում է տվյալներ փաստաթղթի [Print](Print.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Args`| [PrintPreviewDoc](../Functions/Functions/InterfaceManagment/PrintPreviewDoc.html) ֆունկցիային փոխանցվող ազատ օգտագործման պարամետր։ |
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPrePrint](#extensionevents-enum)

### EventArgsDocStoreGrid Class

Պարունակում է տվյալներ փաստաթղթի [StoreGrid](StoreGrid.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Աղյուսակի անունը, որի համար աշխատել է իրադարձությունը։|
|`Stored`|Այս հատկությանը `False` արժեքի վերագրման դեպքում համակարգը ինքն է պահում աղյուսակը, հակառակ դեպքում մշակիչը իր վրա է վերցնում աղյուսակը պահելը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostStoreGrid](#extensionevents-enum)

### EventArgsDocTemplateSubst Class

Պարունակում է տվյալներ փաստաթղթի [TemplateSubstitution](TemplateSubstitution.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`DataGroups`| Հաշվարկվող ձևանմուշի սահմանված փաստաթղթի համար միացված տպվող տվյալների խմբերի ([PrintDataGroup](../PrintDataGroup.md)) բազմությունը։ Dictionary-ի մեջ բանալին տվյալների խմբերի կոդն է, իսկ արժեքը Boolean։|
|`Params`| Ձևանմուշի լրացման պարամետրերը, որոնք հաշվարկվել են [TemplateSubstitutionParameters](TemplateSubstitutionParameters.md) իրադարձության մշակման ժամանակ։|
|`Result`|Վերադարձնում է [TemplateSubstitution](../Functions/TemplateSubstitution.html) տիպի օբյեկտ։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostTemplateSubstitution](#extensionevents-enum)

### EventArgsDataFunctions Class

Պարունակում է տվյալներ տվյալների աղբյուրի [Functions](FunctionsData.md) և [PostFunctions](PostFunctions.md) իրադարձությունների մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`CurrentView`|Հղում [ընթացիկ դիտելու ձևի](../Functions/ICurrentView.md) վրա։|

Մշակիչի օրինակ՝
``` vb
Public Sub MyDataPostFunctionsHandler(ByVal args As EventArgsDataFunctions)
    args.CurrentView.RegistrFunction "Ուղարկել նամակ", "NewMod.SendMail"
End Sub
```

### EventArgsDataValid

Պարունակում է տվյալներ տվյալների աղբյուրի ընդլայնման [PostValid](PostValid.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`IsValid`| Սահմանում է արդյոք ընթացիկ տողը կընդգրկվի տվյալների աղբյուրի տողերի վերջնական ցուցակում։ `False` արժեքի դեպքում տողի համար չի առաջանա [OnEachRow](OnEachRow.md) իրադարձությունը և չեն հաշվարկվի հաշվարկային սյունակները։|

### EventArgsDialogActivate Class

Պարունակում է տվյալներ դիալոգի [Activate](UstPar_Activate.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPostActivate](#extensionevents-enum)

### EventArgsDialogClickDropDown Class

Պարունակում է տվյալներ դիալոգի [ClockDropDown](UstPar_ClickDropDown.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`Top`|Մոդալ պատուհան ցուցադրման վերին դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`Left`|Մոդալ պատուհան ցուցադրման ձախ դիրքը (հաշված է ընթացիկ դաշտի դիրքից)։|
|`ControlValue`|Դաշտի ընթացիկ արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPreClickDropDown](#extensionevents-enum)

### EventArgsDialogValidate Class

Պարունակում է տվյալներ դիալոգի [Validate](UstPar_Validate.md) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|
|`InvalidControl`|Այն դաշտի անունը, որի համար տվյալների ստուգումը ձախողվել է։|
|`Cancel`|Այս հատկությանը `True` արժեքի դեպքում ֆոկուսը դրվում է `InvalidControl` դաշտի վրա։ |
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPreValidate](#extensionevents-enum)
* [DialogPostValidate](#extensionevents-enum)

### EventArgsDialogValueChanged Class

Պարունակում է տվյալներ դիալոգի [ValueChanged](UstPar_ValueChanged.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`OldValue`|Դաշտի հին արժեքը, մինչ իրադարձության առաջանալը։|
|`Cancel`|Այս հատկությանը `True` արժեքի դեպքում ֆոկուսը մնում է `Name` դաշտի վրա, `False` արժեքի դեպքում՝ `Name`-ին հաջորդող դաշտի վրա։ |
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPreValueChanged](#extensionevents-enum)

### EventArgsAccountingOnDelete Class

Պարունակում է տվյալներ հաշվառման [OnDelete](OnDelete.md), [PreOnDelete](AccountingExtenderEvents/PreOnDelete.md), [PostOnDelete](AccountingExtenderEvents/PostOnDelete.md) իրադարձությունների մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Fact`| [Հեռացվող հաշվառման օբյեկտի հղումը](../Functions/Asfact.md):|

### EventArgsDocPostMessage Class

Պարունակում է տվյալներ փաստաթղթի [PrePostMessage](DocExtenderEvents/PrePostMessage.md), [PostPostMessage](DocExtenderEvents/PostPostMessage.md) իրադարձությունների մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Sender` | Հաղորդագրությունը ուղարկող փաստաթղթի օբյեկտի հղում։ |
| `Doc` | Հաղորդագրությունը ստացող փաստաթղթի օբյեկտի հղում։ |
| `Message` | Ստացված հաղորդագրության տեքստ։ |
| `CheckLevel` | Ստացող փաստաթղթի գրանցման [ստուգման մակարդակ](../Functions/ASDOC/DocCheckLevel.md): |

### EventArgsDocOnConfirmDCR Class

Պարունակում է տվյալներ փաստաթղթի [PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md), [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md) իրադարձությունների մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |
| `DCR` | [Փաստաթղթի փոփոխման հայտը](../Functions/DocChangeRequest.md/DCR.md)։ |

### EventArgsDocOverrideProcMode Class

Պարունակում է տվյալներ փաստաթղթի [OverrideProcessingMode](OverrideProcessingMode.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |
| `ProcessingMode` | Փաստաթղթի ընթացիկ կատարման ռեժիմը։ |

### EventArgsDocOnAttachmentDelete Class

Պարունակում է տվյալներ փաստաթղթի [OnAttachmentDelete](OnAttachmentDelete.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |
| `FileName` | Հեռացվող կցված ֆայլի անունը։ |

### EventArgsDocAfterDelete Class

Պարունակում է տվյալներ փաստաթղթի [AfterDelete](AfterDelete.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |

### EventArgsDocUIValidateDCR Class

Պարունակում է տվյալներ փաստաթղթի [UIValidateDCR](UIValidateDCR.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |
| `DCR` | [Փաստաթղթի փոփոխման հայտը](../Functions/DocChangeRequest.md/DCR.md)։ |

### EventArgsDocUIValidate Class

Պարունակում է տվյալներ փաստաթղթի [UIValidate](UIValidate.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |

### EventArgsDocGridRowEmpty Class

Պարունակում է տվյալներ փաստաթղթի [GridRowEmpty](GridRowEmpty.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |
| `Grid` | Իրադարձությունը առաջացնող փաստաթղթի աղյուսակը։ |
| `RowIsEmpty` | Տողի դատարկ համարման հայտանիշ։ Ունի նախնական արժեք, որից ցույց է տալիս տողը լռությամբ դատարկ է, թե ոչ։ **True** արժեքի նշանակման դեպքում տողը համարվում է դատարկ և հեռացվում է, հակառակ դեպքում տողը չի հեռացվում։ |

### EventArgsDocAfterSigned Class

Պարունակում է տվյալներ փաստաթղթի [AfterSigned](AfterSigned.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
| `Doc` | Իրադարձությունը առաջացնող փաստաթուղթը։ |
| `FullPath` | Տպվող ձևանմուշի պահպանման ճանապարհը։ |
| `TemplateName` | Տպվող ձևանմուշի կոդը։ |
| `TemplateType` | Տպվող ձևանմուշի [տիպը](../TemplateTypes.md)։ |
| `TemplateSubstitution` | [TemplateSubstitution](../Functions/TemplateSubstitution.md) տիպի օբյեկտ, որը պարունակում է տպվող ձևանմուշի լրացման արժեքների բազմությունը։ |

