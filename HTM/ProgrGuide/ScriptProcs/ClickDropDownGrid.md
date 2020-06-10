---
layout: page
title: "ClickDropDownGrid իրադարձություն"
---

# ClickDropDownGrid փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

ClickDropDownGrid իրադարձությունը առաջանում է փաստաթղթի աղյուսակի հետևյալ տիպի սյունակների ցուցակի բացման ժամանակ՝ [Tree()](../Types/Tree.md), [FullTree()](../Types/FULLTREE.md), [Folder()](../Types/Folder.md)։

Այն նախատեսված է հիմնական ցուցակի բացման փոխարեն այլ ցուցակի կամ ֆիլտրված ցուցակի ցուցադրման համար։

Իրադարձության առաջացման համար հարկավոր է [միացնել](../Functions/ASDOC/ClickDropDownEvent.md) այն փաստաթղթի ցույց տրվելուց առաջ [When](When.md) իրադարձության մշակման ժամանակ։ Դաշտի համար միացնելուց հետո այլևս ցույց չի տրվում ստանդարտ ցուցակը անկախ նրանից ClickDropDownGrid իրադարձությունը մշակված է, թե ոչ։

Իրադարձության մշակման ընթացքում սովորաբար ցույց է տրվում կա՛մ [ցուցակի մոդալ ցուցադրիչ տիպի օբյեկտ](../Functions/AsModalBrowser.md), կա՛մ [ծառի մոդալ ցուցադրիչ տիպի օբյեկտ](../Functions/AsTreeModalBrowser.md): Ցուցակից արժեք ընտրելուց հետո այն լրացվում է դաշտի մեջ։

## Շարահյուսություն

``` vb
Public Sub ClickDropDownGrid(ByVal GridObj As AsGrid, _
                             ByVal Top As Single, _
                             ByVal Left As Single, _
                             ByVal lookupValue As Variant, _
                             ByRef bDontCallCellValid As Boolean)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| GridObj | Այն աղյուսակի հղումը որում առաջացել է իրադարձությունը։ |
| Top | Էկրանի Y կորդինատը, որում ցանկալի է ցույց տալ մոդալ ցուցադրիչը։ |
| Left | Էկրանի X կորդինատը, որում ցանկալի է ցույց տալ մոդալ ցուցադրիչը։ |
| lookupValue | Դաշտում լրացված արժեքն է, որ ցանկալի է օգտագործել որպես փնտրվող արժեք մոդալ ցուցադրիչում։ |
| bDontCallCellValid | [GridCellValid](GridCellValid.md) իրադարձության առաջացման հայտանիշ։ Լռությամբ արժեքը False` կառաջանա նաև [GridCellValid](GridCellValid.md) իրադարձությունը։ |
