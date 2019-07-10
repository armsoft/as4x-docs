---
layout: page
title: "ICurrentView/RegistrDefaultFunction"
---


# RegistrDefaultFunction մեթոդ

[См. также](../ICurrentView.md) [Օրինակ](../../Examples/E_ICurrentView_RegistrDefaultFunction.html) [Применяется к](../ICurrentView.md)

Նշանակում է կոնտեկստ մենյուի մեջ լռությամբ աշխատող գործողությունը։ 

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
