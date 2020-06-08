---
layout: page
title: "DisplayFact իրադարձություն"
---

# DisplayFact հաշվառման համակարգային իրադարձություն

[Տես նաև](DisplayRem.md) [Օրինակ](../Examples/E_DisplayFact.md) [Կիրառվում է](../Defs/Accounting.md)

Իրադարձությունը առաջանում է փաստաթղթի հաշվառումների գրանցման ժամանակ գործառնության նախնական ցուցադրման պատուհանի հաշվարկի համար։ 15 վրկ. անց պատուհանը ավտոմատ փակվում է `չեղարկել` պայմանով, իսկ հաշվառումները չեն գրանցվում։ 

Իրադարձությունը առաջանում է միայն այն հաշվառումների համար, որոնց համար միացված է [ShowTrans](../Functions/Functions/AccManagement/ShowTrans.html)։

## Շարահյուսություն
``` vb
Public Function DisplayFact(ByVal xFact As AsFact) As String
    ' statements
End Function
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xFact | Հաշվառման օբյեկտի հղում։ |
