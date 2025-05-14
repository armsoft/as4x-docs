---
layout: page
title: "OnAttachmentDelete իրադարձություն"
---

# OnAttachmentDelete փաստաթղթի համակարգային իրադարձություն

OnAttachmentDelete իրադարձությունը առաջանում է փաստաթղթի կցված ֆայլը ինտերֆեյսից հեռացնելիս։

## Շարահյուսություն

```vb
Public Sub OnAttachmentDelete(ByVal oEventArgsDocOnAttachmentDelete As EventArgsDocOnAttachmentDelete)
    ' statements
End Sub
```

Բաղադրիչներն են՝

|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocOnAttachmentDelete`| [EventArgsDocOnAttachmentDelete](UserDefinedHandlers.md#eventargsdoconattachmentdelete-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի և հեռացվող կցված ֆայլի մասին։ |