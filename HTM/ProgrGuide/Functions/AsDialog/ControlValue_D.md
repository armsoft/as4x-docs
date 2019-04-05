---
layout: page
title: "AsDialog/ControlValue"
---


# ControlValue հատկություն

[См. также](../AsDialog.md) Օրինակ [Применяется к](../AsDialog.md)

Նշանակում է արժեքը դաշտի քոնթրոլի մեջ։ Այս հատկությունը օգտագործվում է [ClickDropDown](../../ScriptProcs/UstPar_ClickDropDown.html) իրադարձության ժամանակ դաշտը արժեվորելու համար, քանզի դրա օգտագործումից հետո [ValueChanged](../../ScriptProcs/UstPar_ValueChanged.html) իրադարձության ժամանակ ստացվող ***OldValue*** պարամետրը ունենում է ճիշտ արժեք։ Value հատկության օգտագործման դեպքում ***OldValue***-ը փչանում է։

Կարդալու հատկություն։


## Շարահյուսություն

``` vb
object.ControlValue(RekvName) = vValue 
```
Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| RekvName | Դաշտի ներքին համար։ |
| vValue | Դաշտի նոր արժեքը։ |

