---
layout: page
title: "CreateDataDesc ֆունկցիա"
---

# CreateDataDesc ֆունկցիա

[Հատկություններ և մեթոդ](../../AsDataDesc.md)


Ստեղծում է դինամիկ տվյալների աղբյուր օբյեկտ։ Տվյալ ֆունկցիան ծառայում է դինամիկ տվյալներ ստեղծելու համար, որոնց արժեքները չեն պահպանվում տվյալների պահոցում։

Создает объект типа динамический источник данных. Данная функция служит для создания динамических данных, значения которых не сохраняются в базе данных.



## Շարահյուսություն

```vb
set sDynDataDesc = CreateDataDesc
```
Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sDynDataName | Դինամիկ տվյալների աղբյուրի հղում։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта динамического источника данных. |


## Նկատառումներ

[Տես նաև](../../../constructors.html)


## Օրինակ

Օրինակի մեջ կանչվում է CreateDataDesc ֆունկցիան, sDynDataDesc-ի միջոցով վերադառնում է դինամիկ տվյալների աղբյուրի հղումը իր բոլոր հատկություններով և մեթոդներով։ 

В примере вызывается функция CreateDataDesc, через sDynDataDesc возвращается ссылка на обьект типа динамический источник данных со всеми его свойствами и методами. 

```vb
Dim sDynDataDesc as AsDataDesc
Dim xView As AsView
Set sDynDataDesc = CreateDataDesc
sDynDataDesc.Caption = "DynDescCaption"
sDynDataDesc.HeadLinesCount = 1
sDynDataDesc.DataIndicate = 1
sDynDataDesc.AddColumn("fCODE", "Код", "Code", "C(8)", "fCode", False, True, True)
sDynDataDesc.SQL = "Select fCODE from Table"
Set xView = CreateDynamicView(sDynDataDesc)
Browse(xView)
```
