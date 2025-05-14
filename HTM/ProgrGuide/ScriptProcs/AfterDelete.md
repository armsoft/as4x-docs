---
layout: page
title: "AfterDelete իրադարձություն"
---

# AfterDelete փաստաթղթի համակարգային իրադարձություն

AfterDelete իրադարձությունը առաջանում է փաստաթուղթը ինտերֆեյսից հեռացնելիս՝ [հեռացման տրանզակցիայի](../Functions/Functions/DocumentsCirculation/DeleteDoc.md) ավարտից հետո։

Իրադարձությունը առաջանում է միայն այն դեպքում, երբ փաստաթղթի հեռացման [DeleteDoc](../Functions/Functions/DocumentsCirculation/DeleteDoc.md) մեթոդը կանչվում է `AllowUserInterface` պարամետրի `True` արժեքով։ 

## Շարահյուսություն

```vb
Public Sub AfterDelete(ByVal oEventArgsDocAfterDelete As EventArgsDocAfterDelete)
    ' statements
End Sub
```

Բաղադրիչներն են՝

|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocAfterDelete`| [EventArgsDocAfterDelete](UserDefinedHandlers.md#eventargsdocafterdelete-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի մասին։ |