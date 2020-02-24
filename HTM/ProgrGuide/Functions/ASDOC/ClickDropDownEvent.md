---
layout: page
title: "AsDoc/ClickDropDownEvent"
---


# ClickDropDownEvent հատկություն

[См. также](../../ScriptProcs/ClickDropDown.md) Օրինակ [Применяется к](../Asdoc.md)

Վերադարձնում կամ նշանակում է  [ClickDropDown](../../ScriptProcs/ClickDropDown.md) կամ [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձությունները առաջացնելու հայտանիշը տրված դաշտի կամ աղյուսակի սյունակի համար։

## Շարահյուսություն

``` vb
object.ClickDropDownEvent (sControlName, [sColumnName])[=bValue]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object| Փաստաթուղթ օբյեկտի հղում։|
| sControlName | Փաստաթղթի դաշտի կամ աղյուսակի ներքին անուն, [ClickDropDown](../../ScriptProcs/ClickDropDown.html) կամ [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձությունների առաջացման համար։ Աղյուսակ տալու դեպքում հարկավոր է նաև տալ `sColumnName`-ի միջոցով սյունակի անունը։  |
| sColumnName| Աղյուսակի սյան ներքին անուն։ |
| bValue | True արժեքի դեպքում միջուկը կառաջացնի համապատասխան իրադարձությունը։ |


## Նկատառումներ
Հատկությունը կիրառելի է փաստաթղթի դաշտերի և աղյուսակի սյունակների համար։ Ներքին տիպը պետք է լինի [Tree()](../../Types/Tree.html), [FullTree()](../../Types/FULLTREE.html) կամ [Folder()](../../Types/Folder.html) կամ [CH()](../../Types/Ch.html)։
