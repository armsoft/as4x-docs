---
layout: page
title: "AsDoc/ClickDropDownEvent"
---


# ClickDropDownEvent հատկություն

[См. также](../../ScriptProcs/ClickDropDown.md) Օրինակ [Применяется к](../Asdoc.md)

Վերադարձնում կամ նշանակում է  [ClickDropDown](../../ScriptProcs/ClickDropDown.md) կամ [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.md) իրադարձությունները առաջացնելու հայտանիշը տրված դաշտի կամ աղյուսակի սյունակի համար։

Հատկությունը կիրառելի է հետևյալ ներքին տիպով դաշտերի և աղյուսակի սյունակների համար՝ [Tree()](../../Types/Tree.md), [FullTree()](../../Types/FULLTREE.md) կամ [Folder()](../../Types/Folder.md), [CH()](../../Types/Ch.md), [File](../../Types/File.md) կամ [CH()](../../Types/Ch.md)։

## Շարահյուսություն

``` vb
object.ClickDropDownEvent (sControlName, [sColumnName])[=bValue]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object| Փաստաթուղթ օբյեկտի հղում։|
| sControlName | Փաստաթղթի դաշտի կամ աղյուսակի ներքին անուն, [ClickDropDown](../../ScriptProcs/ClickDropDown.md) կամ [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.md) իրադարձությունների առաջացման համար։ Աղյուսակ տալու դեպքում հարկավոր է նաև տալ `sColumnName`-ի միջոցով սյունակի անունը։  |
| sColumnName| Աղյուսակի սյան ներքին անուն։ |
| bValue | True արժեքի դեպքում միջուկը կառաջացնի համապատասխան իրադարձությունը։ |
