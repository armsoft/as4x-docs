---
layout: page
title: "AsAttachmentCollection/RegistrFunction"
---

# RegistrFunction մեթոդ

[См. также](../../ScriptProcs/AttachmentFunction.md) Օրինակ [Применяется к](../AsAttachmentCollection.md) 

Ավելացնում է նոր գործողություն փաստաթղթի կցված ֆայլերի էջում։  
Այն է՝ նոր կոճակ կցված ֆայլերի էջում և նոր տարր կցված ֆայլերի համատքեստի մենյույուն։

Մեթոդը պետք է կանչել [When](../../ScriptProcs/When.md) իրադարձության մշակիչից։

Կոճակի սեղմելուց առաջանում է փաստաթղթի [AttachmentFunction](../../ScriptProcs/AttachmentFunction.md) իրադարձությունը։

## Շարահյուսություն

``` vb
object.RegistrFunction (sName, sCaption, sECaption, oIcon)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրոթյոն |
|--|--|
| object | Փաստաթղթի կցված ֆայլերի հավաքածուի հղում։ |
| sName | Գործողության ներքին անունը։   |
| sCaption | Գործողության անվանումը։ |
| sECaption | Գործողության անվանումը օտար լեզվով։ Չլրացնելու դեպքում կերևա հայերենը։ |
| oIcon | Կոճակի վրա երևացող նկարի հղում։ Նկարը բեռնվում է [LoadResIcon](../Functions/LoadResIcon.md) ֆունկցիայի միջոցով: |
