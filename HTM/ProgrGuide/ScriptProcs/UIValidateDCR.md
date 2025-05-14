---
layout: page
title: "UIValidateDCR իրադարձություն"
---

# UIValidateDCR փաստաթղթի համակարգային իրադարձություն

UIValidateDCR իրադարձությունը առաջանում է փաստաթղթի փոփոխման հայտը ինտերֆեյսից հաստատելիս` նախքան հայտի հիմքային փաստաթղթի [գրանցման](../Functions/ASDOC/Store.md) սկսելը:

## Շարահյուսություն

``` vb
Public Sub UIValidateDCR(ByVal oEventArgsDocUIValidateDCR As EventArgsDocUIValidateDCR)  
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocUIValidateDCR`| [EventArgsDocUIValidateDCR](UserDefinedHandlers.md#eventargsdocuivalidatedcr-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի և [փոփոխման հայտի](../Functions/DocChangeRequest.md/DCR.md) մասին։ |
