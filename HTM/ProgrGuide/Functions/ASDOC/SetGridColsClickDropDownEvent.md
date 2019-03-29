---
layout: page
title: "AsDoc/SetGridColsClickDropDownEvent"
---


# SetGridColsClickDropDownEvent մեթոդ


[См. также](../Asdoc.md) Օրինակ [Применяется к](../Asdoc.md)


Նշանակում է [ClickDropDownGrid](../ScriptProcs/ClickDropDownGrid.html) իրադարձությունը առաջացնելու հայտանիշը տրված աղյուսակի սյունակների բազմության համար։


## Շարահյուսություն

``` vb
object.SetGridColsClickDropDownEvent(sGridName, sColumnNames,[bValue],[sDelimeter])
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
|sGridName | Աղյուսակի ներքին անուն: |
| sColumnNames | Աղյուսակի սյունակների ներքին անունները: |
| bValue| True  արժեքի դեպքում նշված սյունակների համար կմիացվի [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձության գեներացումը։ False-ի դեպքում կանջատվի։ Լռությամբ արժեքը  True:  |
| sDelimeter| sColumnNames-ի սյունակների ներքին անունների բաժանման նշան։ Լռությամբ սահմանվում է `" "`։ |


## Նկատառումներ


Մեթոդը կիրառելի է միայն աղյուսակի սյունակների համար, որոնց ներքին տիպն է [Tree()](../../Types/Tree().html), [FullTree()](../../Types/FULLTREE().html), [Folder()](../../Types/Folder().html) կամ [CH()](../../Types/Ch().html)։ 
