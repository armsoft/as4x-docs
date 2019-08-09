---
layout: page
title: "AsDoc/SetRekvsClickDropDownEvent"
---

# SetRekvsClickDropDownEvent մեթոդ

[См. также](SetGridColsClickDropDownEvent.html) [օրինակ](../../Examples/E_SetRekvsClickDropDownEvent.html) [Применяется к](../Asdoc.md)

Նշանակում է  [ClickDropDown](../../ScriptProcs/ClickDropDown.html) իրադարձությունը առաջացնելու հայտանիշը տրված դաշտերի բազմության համար

## Շարահյուսություն


``` vb
object.SetRekvsClickDropDownEvent(sRekvNames, [bValue], [sDelimeter])
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
| sRekvNames | Դաշտերի ներքին անունները։ |
| bValue |True  արժեքի դեպքում նշված դաշտերի համար կմիացվի [ClickDropDown](../../ScriptProcs/ClickDropDown.html) իրադարձության գեներացումը։ False-ի դեպքում կանջատվի։ Լռությամբ արժեքը  True:|
| sDelimeter |sRekvNames-ի դաշտերի ներքին անունների բաժանման նշան։ Լռությամբ սահմանվում է `" "`։|


## Նկատառումներ

Մեթոդը կիրառելի է միայն դաշտերի համար, որոնց ներքին տիպն է [Tree()](../../Types/Tree().html), [FullTree()](../../Types/FULLTREE().html), [Folder()](../../Types/Folder().html) կամ [CH()](../../Types/Ch().html)։ 

