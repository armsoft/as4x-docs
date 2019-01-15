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

Տվյալների աղբյուրի համար հասանելի է
* Functions

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
|`instanceName`| Այն փաստաթղթի կամ տվյալների աղբյուրի անունը, որի համար ավելացվում է մշակիչը։|
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

Օրինակ՝
``` vb
ScriptExtension.AddHandler(ExtensionEvents.DocPreValidate, "IMemOrd", "NewMod.MemOrdPreValidateHandler")

ScriptExtension.AddHandler(ExtensionEvents.DocPostValidate, "IMemOrd", "NewMod.MemOrdPostValidateHandler")
```


## EventArgs տիպեր

Ամեն մի մշակիչ ստանում է մեկ պարամետր EventArgs*XXXXYYYY* տիպի, որի մեջ հասանելի են այդ իրադարձությանը վերաբերող տվյալները։

Օրինակ՝ [Valid](Valid.html) իրադարձության մշակիչը ստանում է [EventArgsDocValid](#eventargsdocvalid-class) տիպի օբյեկտ, որտեղ հասանելի են որպես հատկություն *փաստաթուղթը*, *առաջացնող դաշտը* և *հին արժեքը*։

### EventArgsDocBeforeImport Class

Պարունակում է տվյալներ [BeforeImport](BeforeImport.html) իրադարձության մշակիչներին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`Doc`|Իրադարձությունը առաջացնող փաստաթուղթը։|
|`RawData`|Ներմուծվող ֆայլում առկա բոլոր դաշտերի անուն-արժեք զույգերի բազմությունը։ Արժեքները պահվում են նախնական տողային արժեք։ Հասանելի են նաև `$` նիշով սկսվող հատուկ ներմուծվող դաշտերը։|
|`Cancel`|Այս հատկությանը `True` արժեքի վերագրման դեպքում դադարեցվում է փաստաթղթի ներմուծումը իրադարձության ավարտից հետո։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreBeforeImport](#extensionevents-enum)
* [DocPostBeforeImport](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPostBeforeImportHandler(ByVal args As EventArgsDocBeforeImport)
    If Trim(args.Doc("AIM")) = "" Then
        args.Cancel = True
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
|`Rekv`|Այն դաշտի անունը, որի համար աշխատել է իրադարձությունը։|
|`OldValue`|Դաշտի հին արժեքը, մինչ իրադարձության առաջանալը։|

Օգտագործվում է հետևյալ իրադարձությունների համար
* [DocPreValid](#extensionevents-enum)
* [DocPostValid](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDocPreValidHandler(ByVal args As EventArgsDocValid)
    If args.Rekv = "CLICODE" AndAlso Trim(args.Doc("CLICODE")) = "" Then
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
* [DocPreValid](#extensionevents-enum)
* [DocPostValid](#extensionevents-enum)

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

### EventArgsDataFunctions Class

Պարունակում է տվյալներ տվյալների աղբյուրի [Functions](FunctionsData.html) իրադարձության մշակիչին փոխանցելու համար։

|Հատկություն|Նկարագրություն|
|:--|:--|
|`CurrentView`|Հղում [ընթացիկ դիտելու ձևի](../Functions/Frmpttel.html "CurrentView") վրա։|

Օգտագործվում է հետևյալ իրադարձության համար
* [DataPostFunctions](#extensionevents-enum)

Մշակիչի օրինակ՝
``` vb
Public Sub MyDataPostFunctionsHandler(ByVal args As EventArgsDataFunctions)
    args.CurrentView.RegistrFunction "Ուղարկել նամակ", "NewMod.SendMail"
End Sub
```
