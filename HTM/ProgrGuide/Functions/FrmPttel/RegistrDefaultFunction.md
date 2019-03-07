---
layout: page
title: "CurrentView/RegistrDefaultFunction"
---


# RegistrDefaultFunction մեթոդ

[См. также](../Frmpttel.md) [Օրինակ](../../Examples/E_FrmPttel_RegistrDefaultFunction.html) [Применяется к](../Frmpttel.md)

Կոնտեկստ մենյուի մեջ ավելացնում է նոր գործողություն։ 

## Շարահյուսություն

``` vb
object.RegistrDefaultFunction (RunSub)
```
Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Ընթացիկ դիտելու ձևի հղում։  |
| RunSub  | Կոնտեկստ մենյուից գործողության ներքին անուն։ |


## Նկատառումներ

Մեթոդը կարելի է կանչել միայն տվյալների աղբյուրի  [Functions](../../ScriptProcs/FunctionsData.html)  իրադարձության ժամանակ։ Լռությամբ աշխատող գործողությունը արդեն պետք է սահմանված լինի [RegistrFunction](RegistrFunction.md)-ի միջոցով կամ սահմանված լինի միջուկի կողմից։
