---
layout: page
title: "UIValidate իրադարձություն"
---

# UIValidate փաստաթղթի համակարգային իրադարձություն

UIValidate իրադարձությունը առաջանում է փաստաթուղթը ինտերֆեյսից գրանցելիս` նախքան [գրանցման տրանզակցիայի](../Functions/ASDOC/Store.md) բացվելը։

Հիմնականում օգտագործվում է փաստաթղթի դաշտերի արժեքների ճշգրտման և ստուգման նպատակով։

## Շարահյուսություն

``` vb
Public Sub UIValidate(ByVal oEventArgsDocUIValidate As EventArgsDocUIValidate) 
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocUIValidate`| [EventArgsDocUIValidate](UserDefinedHandlers.md#eventargsdocuivalidate-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի մասին։ |
