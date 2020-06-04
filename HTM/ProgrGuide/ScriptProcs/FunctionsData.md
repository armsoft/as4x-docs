---
layout: page
title: "FunctionsData համակարգային իրադարձություն"
---

# Functions համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_DataFunctions.md) [Կիրառվում է](../Functions/Asdata.md)

Աշխատում է տվյալների աղբյուրի կոնտեքստ մենյույի ձևավորման ժամանակ։ Տվյալ իրադարձության մշակիչի մեջ գրանցվում են կոնտեքստ մենյույից կանչված ֆունկցիաները։
Происходит при формировании контекстного меню источника данных. В обработчике данного события регистрируются функции, вызываемые из контекстного меню.

## Շարահյուսություն

```as4x
Sub Functions()
   statements
End Sub
```
## Նկատառումներ

[RegistrFunction](../Functions/ASDOC/RegistrFunction.md), [RegistrDefaultFunction](../Functions/ICurrentView/RegistrDefaultFunction.md)
և [RegistrNode](../Functions/ASDOC/RegistrNode.md) մեթոդները պետք է օգտագործվեն միայն `Functions` իրադարձության մշակիչի մեջ։

Методы [RegistrFunction](../Functions/ASDOC/RegistrFunction.html), [RegistrDefaultFunction](../Functions/ICurrentView/RegistrDefaultFunction.html)
и [RegistrNode](../Functions/ASDOC/RegistrNode.html) должны быть использованы только в обработчике события Functions.
