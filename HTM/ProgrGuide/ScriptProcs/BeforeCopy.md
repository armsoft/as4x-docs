---
layout: page
title: "BeforeCopy իրադարձություն"
---

# BeforeCopy փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում ](../Defs/doc.md)

BeforeCopy իրադարձությունը առաջանում է փաստաթուղթը պատճենելուց հետո։

## Շարահյուսություն

``` vb
Public Sub BeforeCopy(ByVal BeforeCopyParam As Variant, _
                      ByVal originalDoc As AsDoc)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| BeforeCopyParam | Ազատ օգտագործման արգումենտ, որը փոխանցվում է [CopyDoc](../Functions/Functions/DocumentsCirculation/CopyDoc.html) ֆունկցիան կանչելուց։ Եթե փաստաթղթի պատճենումը կատարվում է ինտերֆեյսից, ապա BeforeCopyParam-ի արժեքը լինում է `0`։  |
| originalDoc | Այն փաստաթղթի հղումը որից կատարվում է պատճենումը։ |
