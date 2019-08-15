---
layout: page
title: "AsDocStructure/PageCaption"
---


# PageCaption հատկություն

[См. также](../ASDocStructure.md) Օրինակ [Применяется к](../ASDocStructure.md) 

Փոխում է փաստաթղթի էջի անվանումը։

Արժեքը փոփոխելի է միայն միչև փաստաթղթի ցույց տալը՝ `When` իրադարձության մշակման ժամանակ։ 

## Շարահյուսություն


``` vb
object.PageCaption(pageName) = caption
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object| Փաստաթղթի կառուցվածք օբյեկտի հղում։ |
| pageName | Փաստաթղթի էջի ներքին անուն կամ համար։  |
| caption| Փաստաթղթի էջի նոր անվանում։ |


## Նկատառումներ

Նշենք նաև, որ `PageCaption` հատկությամբ և [PageCaption](../Functions/DocumentsCirculation/DocPageCaption.html) ֆունկցիայով վերադարձնում անվանումները չեն համընկնի, քանի որ [PageCaption](../Functions/DocumentsCirculation/DocPageCaption.html) ֆունկցիան վերադարձնում է փաստաթղթի նկարագրության մեջ գրված անվանումը։ Իսկ `PageCaption` հատկությունը փոխում է փաստաթղթի պատուհանում ցուցադրվող արժեքը։
