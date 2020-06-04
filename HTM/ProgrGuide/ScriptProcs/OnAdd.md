---
layout: page
title: "OnAdd համակարգային իրադարձություն"
---

# OnAdd համակարգային իրադարձություն


[Տես նաև](../scriptstproced.htmdml) Օրինակ [Կիրառվում է](../Defs/Accounting.md)

Գեներացվում է [StoreFact](../Functions/ASDOC/StoreFact.md) մեթոդով հաշվառումները պահպանելիս։

Генерируется при сохранении проводок методом [StoreFact](../Functions/ASDOC/StoreFact.html).


##  Շարահյուսություն

```as4x
Sub OnAdd(xFact)
   statements
End Sub
```
Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xFact | Հաշվառում տիպի օբյեկտի հղում։ строковое выражение, определяющее ссылку на объект типа проводки. |



