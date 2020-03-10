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

Տրված է հնարավորություն սահմանել լրացուցիչ մշակիչներ փաստաթղթում և տվյալների աղբյուրում առաջացող որոշ իրադարձությունների համար։

Փաստաթղթի համար հնարավոր է մշակիչ սահմանել հետևյալ իրադարձությունների համար
* BeforeImport
* When
* Valid
* Validate
* Action
* Folders
* BeforeCommit
* AfterCreate
* AfterLoad
* AfterProcess
* BeforeCopy
* BeforeExport
* ClickDropDown
* ClickDropDownGrid
* Delete
* OnUIDelete
* Functions
* GridCellValid
* GridRowValid
* GridValid
* IsHidden
* LoadGrid
* Magic
* Print
* StoreGrid
* TemplateSubstitution

Տվյալների աղբյուրի համար հասանելի է
* Functions

Դիալոգի համար հասանելի է
* Avtivate
* ClickDropDown
* Validate
* ValueChanged

Մշակիչները հնարավոր է սահմանել հիմնական մշակիչին նախորդող(Pre) աշխատող կամ հաջորդող(Post) աշխատող տարբերակով։

Մշակիչները կարող են տեղադրված լինել կամայական մոդուլի մեջ և կամայական անունով։

> Ամեն մի իրադարձության համար հնարավոր է սահմանել միայն մեկ նախորդող և միայն մեկ հաջորդող լրացուցիչ մշակիչ։

## Մշակիչների գրանցում

Մշակիչները միացնելու համար հարկավոր է համակարգում ավելացնել `PUBLIC` մոդուլ `AppExt` անունով, 
որում առկա է `Init` մեթոդ։
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

`Init` մեթոդում սահմանվում են նոր մշակիչները։  
Ստորև բերված օրինակում սահմանված է նոր մշակիչ `IMemOrd` փաստաթղթի [Validate](Validate.html) իրադարձության համար։
Այժմ իրադարձության առաջացման ժամանակ կաշխատի նաև `NewMod` մոդուլի `MyValidateHandler` մեթոդը։

``` vb
Public Sub Init()
    ScriptExtension.AddHandler(ExtensionEvents.DocPostValidate, "IMemOrd", "NewMod.MyValidateHandler")
End Sub
```

`NewMod` մոդուլում `MyValidateHandler` մեթոդը պետք է սահմանված լինի հետևյալ սահմանմամբ
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

|Արժեք|Նկարագրույթուն|
|:--|:--|
|`DataPostFunctions`  | Data-ի Functions-ից հետո աշխատելու համար:|
|`DocPreBeforeImport` | Doc-ի BeforeImport-ից առաջ աշխատելու համար:|
|`DocPostBeforeImport`| Doc-ի BeforeImport-ից հետո աշխատելու համար:|
|`DocPreWhen`         | Doc-ի When-ից առաջ աշխատելու համար:|
|`DocPostWhen`        | Doc-ի When-ից հետո աշխատելու համար:|
|`DocPreValid`        | Doc-ի Valid-ից առաջ աշխատելու համար:|
|`DocPostValid`       | Doc-ի Valid-ից հետո աշխատելու համար:|
|`DocPreValidate`     | Doc-ի Validate-ից առաջ աշխատելու համար:|
|`DocPostValidate`    | Doc-ի Validate-ից հետո աշխատելու համար:|
|`DocPreAction`       | Doc-ի Action-ից առաջ աշխատելու համար:|
|`DocPostAction`      | Doc-ի Action-ից հետո աշխատելու համար:|
|`DocPreFolders`      | Doc-ի Folders-ից առաջ աշխատելու համար:|
|`DocPostFolders`     | Doc-ի Folders-ից հետո աշխատելու համար:|
|`DocPreBeforeCommit` | Doc-ի BeforeCommit-ից առաջ աշխատելու համար:|
|`DocPostBeforeCommit`| Doc-ի BeforeCommit-ից հետո աշխատելու համար:|
|`DocPreAfterCreate`  | Doc-ի AfterCreate-ից առաջ աշխատելու համար։|
|`DocPostAfterCreate` | Doc-ի AfterCreate-ից հետո աշխատելու համար։|
|`DocPreAfterLoad`    | Doc-ի AfterLoad-ից առաջ աշխատելու համար։|
|`DocPostAfterԼoad`   | Doc-ի AfterLoad-ից հետո աշխատելու համար։|
|`DocPostAfterProcess`| Doc-ի AfterProcess-ից հետո աշխատելու համար։|
|`DocPreBeforeCopy`   | Doc-ի BeforeCopy-ից առաջ աշխատելու համար։|
|`DocPostBeforeCopy`  | Doc-ի BeforeCopy-ից հետո աշխատելու համար։|
|`DocPostBeforeExport`| Doc-ի BeforeExport-ից հետո աշխատելու համար։|
|`DocPreClickDropDown`| Doc-ի ClickDropDown-ից առաջ աշխատելու համար։|
|`DocPreClickDropDownGrid`| Doc-ի ClickDropDownGrid-ից առաջ աշխատելու համար։|
|`DocPreDelete`         | Doc-ի Delete-ից առաջ աշխատելու համար։|
|`DocPostDelete`        | Doc-ի Delete-ից հետո աշխատեու համար։|
|`DocPreOnUIDelete`    | Doc-ի OnUIDelete-ից առաջ աշխատելու համար։|
|`DocPostFunctions`    | Doc-ի Functions-ից հետո աշխատելու համար։|
|`DocPreGridCellValid` | Doc-ի GridCellValid-ից առաջ աշխատելու համար։|
|`DocPostGridCellValid`| Doc-ի GridCellValid-ից հետո աշխատելու համար։|
|`DocPreGridRowValid`  | Doc-ի GridRowValid-ից առաջ աշխատելուհամար։|
|`DocPostGridRowValid` | Doc-ի GridRowValid-ից հետո աշխատելու համար։|
|`DocPreGridValid`     | Doc-ի GridValid-ից առաջ աշխատելու համար։|
|`DocPostGridValid`    | Doc-ի GridValid-ից հետո աշխատելու համար։|
|`DocPostIsHidden`     | Doc-ի IsHidden-ից հետո աշխատելու համար։|
|`DocPostLoadGrid`     | Doc-ի LoadGrid-ից հետո աշխատելու համար։|
|`DocPreMagic`         | Doc-ի Magic-ից առաջ աշխատելու համար։|
|`DocPrePrint`         | Doc-ի Print-ից առաջ աշխատելու համար։|
|`DocPostStoreGrid`   | Doc-ի StoreGrid-ից հետո աշխատելու համար։|
|`DocPostTemplateSubstitution`| Doc-ի TemplateSubstitution-ից հետո աշխատելու համար։|
|`DialogPostActivate`| Dialog-ի Activate-ից հետո աշխատելու համար։|
|`DialogPreClickDropDown`| Dialog-ի ClickDropDown-ից առաջ աշխատելու համար։|
|`DilaogPreValidate` | Dialog-ի Validate-ից առաջ աշխատելու համար։|
|`DilaogPostValidate` | Dialog-ի Validate-ից հետո աշխատելու համար։| 
|`DialogPreValueChanged`| Dialog-ի ValueChanged-ից առաջ աշխատելու համար։|

Օրինակ՝
``` vb
ScriptExtension.AddHandler(ExtensionEvents.DocPreValidate, "IMemOrd", "NewMod.MemOrdPreValidateHandler")
ScriptExtension.AddHandler(ExtensionEvents.DocPreValidate, "C1Univer", "NewMod.AgrCustomValidate")
ScriptExtension.AddHandler(ExtensionEvents.DocPostWhen, "C1Univer", "NewMod.AgrCustomWhen")
```


## EventArgs տիպեր

Ամեն մի մշակիչ ստանում է մեկ պարամետր EventArgs*XXXXYYYY* տիպի, որի մեջ հասանելի են այդ իրադարձությանը վերաբերող տվյալները։

Օրինակ՝ [Valid](Valid.html) իրադարձության մշակիչը ստանում է [EventArgsDocValid](#eventargsdocvalid-class) տիպի օբյեկտ, որտեղ հասանելի են որպես հատկություն *փաստաթուղթը*, *առաջացնող դաշտը* և *հին արժեքը*։

### EventArgsDocBeforeImport Class

Պարունակում է տվյալներ [BeforeImport](BeforeImport.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [When](When.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [Valid](Valid.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [Validate](Validate.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [Action](Action.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [Folders](Folders.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [BeforeCommit](BeforeCommit.html) իրադարձության մշակիչներին փոխանցելու համար։

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

Պարունակում է տվյալներ փաստաթղթի [AfterCreate](AfterCreate.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreAfterCreate](#extensionevents-enum)
* [DocPostAfterCreate](#extensionevents-enum)

### EventArgsDocAfterLoad Class

Պարունակում է տվյալներ փաստաթղթի [AfterLoad](AfterLoad.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreAfterLoad](#extensionevents-enum)
* [DocPostAfterLoad](#extensionevents-enum)

### EventArgsDocAfterProcess Class

Պարունակում է տվյալներ փաստաթղթի [AfterProcess](AfterProcess.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostAfterProcess](#extensionevents-enum)

### EventArgsDocBeforeCopy Class

Պարունակում է տվյալներ փաստաթղթի [BeforeCopy](BeforeCopy.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Args`|[CopyDoc](../Functions/Functions/DocumentsCirculation/CopyDoc.html) ֆունկցիային փոխանցվող ազատ օգտագործման պարամետր։|
|`OriginalDoc`| Այն փաստաթուղթ, որից պատճենվում է փաստաթուղթը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreBeforeCopy](#extensionevents-enum)
* [DocPostBeforeCopy](#extensionevents-enum)

### EventArgsDocBeforeExport Class

Պարունակում է տվյալներ փաստաթղթի [BeforeExport](BeforeExport.html) իրադարձության մշակիչին փոխանցելու համար։

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
|`Top`|Ցուցակի և փաստաթղթի վերին եզրերի միջև հեռավորությունը։|
|`Left`|Ցուցակի և փաստաթղթի ձախ եզրերի միջև հեռավորությունը։|
|`ControlValue`|Դաշտի ընթացիկ արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreClickDropDown](#extensionevents-enum)

### EventArgsDocClickDropDownGrid Class

Պարունակում է տվյալներ փաստաթղթի [ClickdropDownGrid](ClickDropDownGrid.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Grid`|Իրադարձությունը առաջացնող փաստաթղթի grid-աղյուսակը:|
|`Top`|Ցուցակի և փաստաթղթի վերին եզրերի միջև հեռավորությունը։|
|`Left`|Ցուցակի և փաստաթղթի ձախ եզրերի միջև հեռավորությունը։|
|`ControlValue`|Grid-ի ընթացիկ cell-ի արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreClickDropDownGrid](#extensionevents-enum)

### EventArgsDocDelete Class

Պարունակում է տվյալներ փաստաթղթի [Delete](Delete.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|


Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreDelete](#extensionevents-enum)
* [DocPostDelete](#extensionevents-enum)

### EventArgsDocOnUIDelete Class

Պարունակում է տվյալներ փաստաթղթի [OnUIDelete](OnUIDelete.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`AllowDelete`|Այս հատկությանը `True` արժեքի վերագրման դեպքում փաստաթղթի համակարգային Delete իրադարձությունը թույլատրվում է։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreOnUIDelete](#extensionevents-enum)

### EventArgsDocFunctions Class

Պարունակում է տվյալներ փաստաթղթի [Functions](FunctionsDoc.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Context`|[Փաստաթղթի Functions իրադարձության համատեքստի հաստատուններից](../Constants/const_doc_context.md) մեկն է։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostFunctions](#extensionevents-enum)

### EventArgsDocGridCellValid Class

Պարունակում է տվյալներ փաստաթղթի [GridCellValid](GridCellValid.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Grid`|Իրադարձությունը առաջացնող փաստաթղթի grid-աղյուսակը:|
|`OldValue`|Դաշտի հին արժեքը, մինչ իրադարձության առաջանալը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreGridCellValid](#extensionevents-enum)
* [DocPostGridCellValid](#extensionevents-enum)

### EventArgsDocGridRowValid Class

Պարունակում է տվյալներ փաստաթղթի [GridRowValid](GridRowValid.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Grid`|Իրադարձությունը առաջացնող փաստաթղթի grid-աղյուսակը:|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreGridRowValid](#extensionevents-enum)
* [DocPostGridRowValid](#extensionevents-enum)

### EventArgsDocIsHidden Class

Պարունակում է տվյալներ փաստաթղթի [IsHidden](IsHidden.md) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`HiddenControls`|Scripting.Dictionary-ի տիպի օբյեկտ, որում ավելացվում են թաքցվող օբյեկտները։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostIsHidden](#extensionevents-enum)

### EventArgsDocLoadGrid Class

Պարունակում է տվյալներ փաստաթղթի [LoadGrid](LoadGrid.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Փաստաթղթի grid-ի այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostLoadGrid](#extensionevents-enum)

### EventArgsDocMagic Class

Պարունակում է տվյալներ փաստաթղթի [Magic](Magic.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`Top`|Ցուցակի և փաստաթղթի վերին եզրերի միջև հեռավորությունը։|
|`Left`|Ցուցակի և փաստաթղթի ձախ եզրերի միջև հեռավորությունը։|
|`ControlValue`|Դաշտի ընթացիկ արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreMagic](#extensionevents-enum)

### EventArgsDocPrint Class

Պարունակում է տվյալներ փաստաթղթի [Print](Print.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Args`| [PrintPreviewDoc](../Functions/Functions/InterfaceManagment/PrintPreviewDoc.html) ֆունկցիային փոխանցվող ազատ օգտագործման պարամետր։ |
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPrePrint](#extensionevents-enum)

### EventArgsDocStoreGrid Class

Պարունակում է տվյալներ փաստաթղթի [StoreGrid](StoreGrid.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`Name`|Փաստաթղթի [աղյուսակի](../Functions/AsGrid.md) ներքին անունը։|
|`Stored`|Այս հատկությանը `False` արժեքի վերագրման դեպքում համակարգը ինքն է պահում աղյուսակը, հակառակ դեպքում մշակիչը իր վրա է վերցնում աղյուսակը պահելը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostStoreGrid](#extensionevents-enum)

### EventArgsDocTemplateSubst Class

Պարունակում է տվյալներ փաստաթղթի [TemplateSubstitution](TemplateSubstitution.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`DataGroups`| Հաշվարկվող ձևանմուշի սահմանված փաստաթղթի համար միացված տպվող տվյալների խմբերի ([PrintDataGroup](../PrintDataGroup.md)) բազմությունը։ Dictionary-ի մեջ բանալին տվյալների խմբերի կոդն է, իսկ արժեքը Boolean։|
|`Params`| Ձևանմուշի լրացման պարամետրերը, որոնք հաշվարկվել են [TemplateSubstitutionParameters](TemplateSubstitutionParameters.html) իրադարձության մշակման ժամանակ։|
|`Result`|Վերադարձնում է [TemplateSubstitution](../Functions/TemplateSubstitution.html) տիպի օբյեկտ։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPostTemplateSubstitution](#extensionevents-enum)

### EventArgsDataFunctions Class

Պարունակում է տվյալներ տվյալների աղբյուրի [Functions](FunctionsData.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`CurrentView`|Հղում [ընթացիկ դիտելու ձևի](../Functions/ICurrentView.md) վրա։|

Օգտագործվում է հետևյալ իրադարձության համար
* [DataPostFunctions](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDataPostFunctionsHandler(ByVal args As EventArgsDataFunctions)
    args.CurrentView.RegistrFunction "Ուղարկել նամակ", "NewMod.SendMail"
End Sub
```
### EventArgsDialogActivate Class

Պարունակում է տվյալներ դիալոգի [Activate](UstPar_Activate.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPostActivate](#extensionevents-enum)

### EventArgsDialogClickDropDown Class

Պարունակում է տվյալներ դիալոգի [ClockDropDown](UstPar_ClickDropDown.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`Top`|Ցուցակի և փաստաթղթի վերին եզրերի միջև հեռավորությունը։|
|`Left`|Ցուցակի և փաստաթղթի ձախ եզրերի միջև հեռավորությունը։|
|`ControlValue`|Դաշտի ընթացիկ արժեքը։|
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPreClickDropDown](#extensionevents-enum)

### EventArgsDialogValidate Class

Պարունակում է տվյալներ դիալոգի [Validate](UstPar_Validate.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|
|`InvalidControl`|Այն դաշտի անունը, որի համար տվյալների ստուգումը ձախողվել է։|
|`Cancel`|Այս հատկությանը `True` արժեքի դեպքում ֆոկուսը դրվում է *InvalidControl* դաշտի վրա։ |
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPreValidate](#extensionevents-enum)
* [DialogPostValidate](#extensionevents-enum)

### EventArgsDialogValueChanged Class

Պարունակում է տվյալներ դիալոգի [ValueChanged](UstPar_ValueChanged.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Dialog`|Իրադարձությունը առաջացնող դիալոգը։|
|`Name`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`OldValue`|Դաշտի հին արժեքը, մինչ իրադարձության առաջանալը։|
|`Cancel`|Այս հատկությանը `True` արժեքի դեպքում ֆոկուսը մնում է *Name* դաշտի վրա, `False` արժեքի դեպքում՝ *Name*-ին հաջորդող դաշտի վրա։ |
|`CancelInternalHandler`|Այս հատկությանը `True` արժեքի վերագրման դեպքում համակարգային իրադարձության մշակիչը չի իրականացվի։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DialogPreValueChanged](#extensionevents-enum)
