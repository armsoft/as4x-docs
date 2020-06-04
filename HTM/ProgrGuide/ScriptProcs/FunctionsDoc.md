---
layout: page
title: "FunctionsDoc համակարգային իրադարձություն"
---

# FunctionsDoc համակարգային իրադարձություն 

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_Functions.md) [Կիրառվում է](../Functions/Asdoc.md)

Աշխատում է փաստաթղթի կոնտեքստ մենյույի ձևավորման ժամանակ։ Տվյալ իրադարձության մշակիչի մեջ գրանցվում են կոնտեքստ մենյույից կանչված ֆունկցիաները։

Происходит при формировании контекстного меню документа. В обработчике данного события регистрируются функции, вызываемые из контекстного меню.

## Շարահյուսություն

```as4s
Sub Functions(Optional ByVal iEvPlaceFrom)
   statements
End Sub
```
Որտեղ `iEvPlaceFrom`-ը կարող է ընդունել [փաստաթղթի Functions իրադարձության համատեքստի հաստատուններ](../Constants/const_doc_context.md) արժեքներից մեկը։

где `iEvPlaceFrom` может принимать одно из значений [констант контекста события Functions документа](../Constants/const_doc_context.html)


## Նկատառումներ

[RegistrFunction](../Functions/ASDOC/RegistrFunction.md) և [RegistrNode](../Functions/ASDOC/RegistrNode.md) մեթոդները պետք է օգտագործվեն միայն `Functions` իրադարձության մշակիչի մեջ։

Методы [RegistrFunction](../Functions/ASDOC/RegistrFunction.html) и [RegistrNode](../Functions/ASDOC/RegistrNode.html) должны быть использованы только в обработчике события Functions.