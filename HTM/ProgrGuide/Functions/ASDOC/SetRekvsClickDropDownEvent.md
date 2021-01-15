---
layout: page
title: "AsDoc/SetRekvsClickDropDownEvent"
---

# SetRekvsClickDropDownEvent մեթոդ

[См. также](SetGridColsClickDropDownEvent.md) [օրինակ](../../Examples/E_SetRekvsClickDropDownEvent.md) [Применяется к](../Asdoc.md)

Նշանակում է  [ClickDropDown](../../ScriptProcs/ClickDropDown.md) իրադարձությունը առաջացնելու հայտանիշը տրված դաշտերի բազմության համար

Մեթոդը կիրառելի է հետևյալ ներքին տիպով դաշտերի համար՝ [Tree()](../../Types/Tree.md), [FullTree()](../../Types/FULLTREE.md), [Folder()](../../Types/Folder.md), [CH()](../../Types/Ch.md), [File](../../Types/File.md) կամ [CH()](../../Types/Ch.md)։ 

## Շարահյուսություն

``` vb
object.SetRekvsClickDropDownEvent(sRekvNames, [bValue], [sDelimeter])
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
| sRekvNames | Դաշտերի ներքին անունները։ |
| bValue |True  արժեքի դեպքում նշված դաշտերի համար կմիացվի [ClickDropDown](../../ScriptProcs/ClickDropDown.md) իրադարձության գեներացումը։ False-ի դեպքում կանջատվի։ Լռությամբ արժեքը  True:|
| sDelimeter |sRekvNames-ի դաշտերի ներքին անունների բաժանման նշան։ Լռությամբ սահմանվում է `" "`։|
