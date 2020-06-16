---
layout: page
title: "OnAdd իրադարձություն"
---

# OnAdd հաշվառման համակարգային իրադարձություն

[Տես նաև](../scriptstproced.htmdml) Օրինակ [Կիրառվում է](../Defs/Accounting.md)

OnAdd իրադարձությունը առաջանում է [StoreFact](../Functions/ASDOC/StoreFact.md) մեթոդով հաշվառումները գրանցելիս։

##  Շարահյուսություն

``` vb
Public Sub OnAdd(ByVal xFact As AsFact)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xFact | Ավելացվող հաշվառում օբյեկտի հղում։ |
