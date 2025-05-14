---
layout: page
title: "AfterImport իրադարձություն"
---

# AfterImport փաստաթղթի համակարգային իրադարձություն

AfterImport իրադարձությունը առաջանում է փաստաթղթի ներմուծման ժամանակ։ 

Իրադարձությունը առաջանում է միայն այն դեպքում, երբ փաստաթղթի [BeforeImport](BeforeImport.md) իրադարձության մշակիչը վերադարձրել է `True` արժեք և ներմուծված փաստաթուղթը հաջողությամբ [գրանցվել](../Functions/ASDOC/Store.md) է համակարգում։

## Շարահյուսություն

``` vb
Public Function AfterImport() as Boolean
    ' statements
End Sub
```
