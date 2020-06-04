---
layout: page
title: "BeforeCopy համակարգային իրադարձություն/Системное событие BeforeCopy"
---

# BeforeCopy համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում ](../Defs/doc.md)

BeforeCopy իրադարձությունը աշխատում է փաստաթուղթը պատճենելուց հետո։
Происходит после копирования документа.


## Շարահյուսություն

``` as4x
Sub BeforeCopy([ByVal BeforeCopyParam As Variant])
     statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| BeforeCopyParam | Variant տիպի արտահայտություն,որը կարող է փոխանցվել [CopyDoc](../Functions/Functions/DocumentsCirculation/CopyDoc.html) ֆունկցիան կանչելու համար։ Եթե փաստաթղթի պատճենումը կատարվում է ակնառու, ապա BeforeCopyParam =0։ необязательное выражение типа Variant, может быть передано посреством вызова функции [CopyDoc](../Functions/Functions/DocumentsCirculation/CopyDoc.html). Если копирование документа произведено визуально, то BeforeCopyParam =0. |






