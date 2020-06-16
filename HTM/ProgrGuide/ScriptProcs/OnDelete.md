---
layout: page
title: "OnDelete իրադարձություն"
---

# OnDelete հաշվառման համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/Accounting.md)

OnDelete իրադարձությունը առաջանում է [HiDelete](../Functions/ASDOC/HiDelete.md) մեթոդով հաշվառումները ջնջելիս կամ փաստաթուղթը [DeleteDoc](../Functions/Functions/DocumentsCirculation/DeleteDoc.html) ֆունկցիայով իր հաշվառումների հետ ջնջելիս։ 

## Շարահյուսություն

``` vb
Public Sub OnDelete(ByVal xFact As AsFact)
   statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xFact | Ջնջվող հաշվառման օբյեկտի հղում։ |
