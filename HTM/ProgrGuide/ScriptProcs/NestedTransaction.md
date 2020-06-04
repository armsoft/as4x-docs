---
layout: page
title: "NestedTransaction համակարգային իրադարձություն"
---

# NestedTransaction համակարգային իրադարձություն


[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

Գեներացվում է [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդը կիրառելիս։ Փաստաթղթի համար համակարգային իրադարձությունների հաջորդականությունը բերված է այստեղ՝ [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence.html)։

Генерируется при использовании свойства [NestedTransactions](../Functions/ASDOC/NestedTransactions.md). Последовательность генерации системных событий для документа приведена здесь [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence.html). 



## Շարահյուսություն

```as4x
Sub NestedTransaction (ByVal ArrElement,[byval objRepView])
     statements
End Sub
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| ArrElement | [NestedTransactions](../Functions/ASDOC/NestedTransactions.md) մեթոդի տարր: элемент массива-аргумента свойства [NestedTransactions](../Functions/ASDOC/NestedTransactions.md). |
| objRepView | [AsRepViewer օբյեկտի](../Functions/AsRepViewer.md) նախապես ստեղծված հղում։ необязательная переменная, ссылающаяся на предварительно созданный экземпляр объекта 	[отчет.](../Functions/AsRepViewer.md) |




## Նկատառումներ

Տվյալ իրադարձության մշակման համար ցանկալի է բելել հաշվառումներ, կանչելով [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) ֆունկցիան և [StoreFact](../Functions/ASDOC/StoreFact.html) մեթոդը։ Ցանկալի չի տվյալ իրադարձության մշակիչի մեջ [Store](../Functions/ASDOC/Store.html) մեթոդով պահպանել փաստաթուղթ։

При обработке данного события желательно производить проводки, вызывая функцию [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) и метод [StoreFact](../Functions/ASDOC/StoreFact.html). Нежелательно в обработчике данного события сохранять документ методом [Store](../Functions/ASDOC/Store.html).


