---
layout: page
title: "AsDialog/Value"
---


# Value հատկություն

[См. также](../AsDialog.md) [Օրինակ](../../Examples/E_AsDialog.html) [Применяется к](../AsDialog.md)

Վերադարձնում կամ նշանակում է դաշտի արժեքը։

## Շարահյուսություն

``` vb
object.Value(vRekvName) = [vValue]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| vRekvName | Դաշտի ներքին անուն։ |
| vValue| դաշտի արժեք։ |


## Նկատառումներ 

Սա օբյեկտի հիմնական հատկությունն է և կարող է օգտագործվել կարճ գրելաձևը
``` vb
  xDialog("BegDate")

  xDialog.Value("BegDate")
```
