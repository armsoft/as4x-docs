---
layout: page
title: "DisplayRem իրադարձություն"
---

# DisplayRem հաշվառման համակարգային իրադարձություն

[Տես նաև](DisplayFact.md) [Օրինակ](../Examples/E_DisplayRem.md) [Կիրառվում է](../Defs/Accounting.md)

DisplayRem իրադարձությունը առաջանում է փաստաթղթի հաշվառումների գրանցման ժամանակ գործառնության նախնական ցուցադրման պատուհանի հաշվարկի համար։ 15 վրկ. անց պատուհանը ավտոմատ փակվում է `չեղարկել` պայմանով, իսկ հաշվառումները չեն գրանցվում։ 

Իրադարձությունը առաջանում է միայն այն հաշվառումների համար, որոնց համար միացված է [ShowTrans](../Functions/Functions/AccManagement/ShowTrans.html)։

## Շարահյուսություն

``` vb
Public Function DisplayRem(ByVal xISN As Long, _
                           ByVal xAccRem As Currency, _
                           ByVal xLinkedRem As Currency, _
                           ByVal xAccRemNC As Currency, _
                           ByVal xLinkedRemNC As Currency) As String
    ' statements
End Function
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xISN | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
| xAccRem | Օբյեկտի գծով հաշվառման վերջնական մնացորդը։ |
| xLinkedRem | Օբյեկտի գծով կից հաշվառման վերջնական մնացորդը։ |
| xAccRemNC | Օբյեկտի գծով հաշվառման վերջնական մնացորդը ՀՀ դրամով։  |
| xLinkedRemNC | Օբյեկտի գծով կից հաշվառման վերջնական մնացորդը ՀՀ դրամով։ |
