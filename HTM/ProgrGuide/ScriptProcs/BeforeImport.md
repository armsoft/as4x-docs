---
layout: page
title: "BeforeImport իրադարձություն"
---

# BeforeImport փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) օրինակ [Կիրառվում](../Defs/doc.md)

BeforeImport իրադարձությունը առաջանում է փաստաթղթի ներմուծման ժամանակ։ 

Եթե մշակիչ ֆունկցիան վերադարձնում է `True`, ապա փաստաթուղթը շարունակում է գրանցումը համակարգում։ `False` արժեքի դեպքում փաստաթուղթը համակարգում չի գրանցվում, բայց տրանզակցիան ավարտվում է բարեհաջող։

## Շարահյուսություն

``` vb
Public Function BeforeImport() as Boolean
    ' statements
End Sub
```
