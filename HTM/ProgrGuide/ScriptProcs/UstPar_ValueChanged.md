---
layout: page
title: "ValueChanged իրադարձություն"
---

# ValueChanged երկխոսության պատուհանի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Functions/AsDialog.md)

ValueChanged իրադարձությունը առաջանում է երկխոսության պատուհանի փոփոխված դաշտից դուրս գալու ժամանակ։ 

Նախատեսված է դաշտի արժեքի ստուգելու համար և արժեքից կախված հաշվարկներ կատարելու համար։

## Շարահյուսություն

``` vb
Public Sub ValueChanged(ByVal objDialog As AsDialog, _
                        ByRef Cancel As Boolean, _
                        ByVal RekvName As String, _
                        ByVal oldValue As Variant)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| objDialog | երկխոսության պատուհանի հղում։ |
| Cancel | Ցույց է տալիս, որ ստուգումները չեն անցել և սխալ է `RekvName` դաշտը։ |
| RekvName | Փոփոխված դաշտի անունը։ |
| oldValue | Դաշտի նախկին արժեք։ |
