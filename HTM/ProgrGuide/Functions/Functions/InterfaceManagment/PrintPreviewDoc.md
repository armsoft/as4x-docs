---
layout: page
title: "PrintPreviewDoc ֆունկցիա"
---

# PrintPreviewDoc ֆունկցիա

Ցույց է տալիս փաստաթղթի տեղեկանքի տեքսը էկրանին։

Ֆունկցիան աշխատում է մեկ կամ մի քանի փաստաթղթերի համար

## Շարահյուսություն

``` vb
Sub PrintPreviewDoc(ByVal DocOrIsnOrArray As Variant, Optional ByVal PrintMode As Variant)
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| DocOrIsnOrArray | Փաստաթղթի օբյեկտը, կամ փաստաթղթի ISN, կամ դրանք մասիվ: |
| PrintMode | Ազատ օգտագործման արգումենտ, որը փոխանցվում է [տպելու ձևը](../../../ScriptProcs/Print.md) իրադարձության մշակիչին։ |

## Նկատառումներ

[Տես նաև](../../../ScriptProcs/Print.md)
