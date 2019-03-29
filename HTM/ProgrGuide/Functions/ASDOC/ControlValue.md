---
layout: page
title: "AsDoc/ControlValue"
---


# ControlValue հատկություն

[См. также](../Asdoc.md) Օրինակ [Применяется к](../Asdoc.md)

Նշանակում է արժեքը դաշտի քոնթրոլի մեջ, այն է [Control](Control.html) հատկությանը տալիս է արժեք։ 

ControlValue-ն նախատեսված է [ClickDropDown](../../ScriptProcs/ClickDropDown.html) իրադարձության մշակման ժամանակ առաջացնող դաշտին արժեք վերագրելու համար։ Նրա օգտագործման դեպքում այդ դաշտից դուրս գալուց [Valid](../../ScriptProcs/Valid.html) իրադարձության մշակիչը ստանում է ճիշտ `OldValue` պարամետրի արժեք։ [ClickDropDown](../../ScriptProcs/ClickDropDown.html)-ում `Doc.Rekv`-ի միջոցով արժեք վերագրելուց հին արժեքը չի պահպանվում և OldValue-ն փչանում է։



## Շարահյուսություն

``` vb
object.ControlValue(RekvName) = vValue
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
| RekvName | Դաշտի ներքին անուն։ |
| vValue | Նոր արժեք։ |

 

