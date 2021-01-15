---
layout: page
title: "ClickDropDown իրադարձություն"
---

# ClickDropDown երկխոսության պատուհանի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Functions/AsDialog.md)

ClickDropDown իրադարձությունը առաջանում է հետևյալ տիպի դաշտերի ցուցակի բացման ժամանակ՝ [Tree()](../Types/Tree.md), [FullTree()](../Types/FULLTREE.md), [Folder()](../Types/Folder.md), [CH()](../Types/Ch.md), [File](../Types/File.md) կամ [CH()](../Types/Ch.md)։

Այն նախատեսված է հիմնական ցուցակի բացման փոխարեն այլ ցուցակի կամ ֆիլտրված ցուցակի ցուցադրման համար։

Իրադարձության առաջացման համար հարկավոր է [միացնել](../Functions/AsDialog/ClickDropDownEvent.md) այն երկխոսության պատուհանի ցույց տրվելուց առաջ [Activate](UstPar_Activate.md) իրադարձության մշակման ժամանակ։ Դաշտի համար միացնելուց հետո այլևս ցույց չի տրվում ստանդարտ ցուցակը անկախ նրանից ClickDropDown իրադարձությունը մշակված է, թե ոչ։

Իրադարձության մշակման ընթացքում սովորաբար ցույց է տրվում կա՛մ [ցուցակի մոդալ ցուցադրիչ տիպի օբյեկտ](../Functions/AsModalBrowser.md), կա՛մ [ծառի մոդալ ցուցադրիչ տիպի օբյեկտ](../Functions/AsTreeModalBrowser.md): Ցուցակից արժեք ընտրելուց հետո այն լրացվում է դաշտի մեջ։

## Շարահյուսություն

``` vb
Public Sub ClickDropDown(ByVal objDialog As AsDialog, _
                         ByVal RekvName As String, _
                         ByVal Top As String, _
                         ByVal Left As String, _
                         ByVal lookupValue As Variant)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| objDialog | Երկխոսության պատուհանի հղում։ |
| RekvName | Երկխոսության պատուհանի դաշտի ներքին անուն, որի համար առաջացել է իրադարձությունը։ |
| Top | Էկրանի Y կորդինատը, որում ցանկալի է ցույց տալ մոդալ ցուցադրիչը։ |
| Left | Էկրանի X կորդինատը, որում ցանկալի է ցույց տալ մոդալ ցուցադրիչը։ |
| lookupValue | Դաշտում լրացված արժեքն է, որ ցանկալի է օգտագործել որպես փնտրվող արժեք մոդալ ցուցադրիչում։ |
