---
layout: page
title: "OnDelete համակարգային իրադարձություն"
---

# OnDelete համակարգային իրադարձություն


[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/Accounting.md)


Գեներքացվում է [HiDelete](../Functions/ASDOC/HiDelete.html) մեթոդով հաշվառումները ջնջելիս կամ [DeleteDoc](../Functions/Functions/DocumentsCirculation/DeleteDoc.html) ֆունկցիայի հաշվառումների փաստաթուղթը ջնջելիս։ 

Генерируется при удалении проводок методом [HiDelete](../Functions/ASDOC/HiDelete.html)
или при удалении документа основания проводок функцией [DeleteDoc](../Functions/Functions/DocumentsCirculation/DeleteDoc.html). 



## Շարահյուսություն

```as4x
Sub OnDelete(xFact)
   statements
End Sub
```
Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xFact | Հաշվառում տիպի օբյեկտի հղում։ строковое выражение, определяющее ссылку на объект типа проводки. |

