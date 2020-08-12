---
layout: page
title: "CreateDynamicView ֆունկցիա"
---
    
## CreateDynamicView ֆունկցիա


Հղումը վերադարձնում է AsView օբյեկտի վրա։ Օբյեկտը ստեղծվում է ըստ xDataDesc-ի դինամիկ նկարագրության։ 

Возвращает ссылку на программно созданный объект AsView. Объект создается по-динамическому описанию xDataDesc.

## Շարահյուսություն

```vb
set sView= CreateDynamicView(DataDesc)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sView | Տվյալների աղբյուր օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта вида просмотра. |
| DataDesc | Դինամիկ տվյալների աղբյուր օբյեկտի օրինակի հղում։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта динамического источника данных |


## Նկատառումնր

[Տես նաև](../../constructors.html)

## Օրինակ

```vb
Dim sDynDataDesc as AsDataDesc
Dim xView As AsView

Set sDataDesc = CreateDataDesc
sDataDesc.[Caption](../AsDataDesc/Caption_DDesc.html) = "DynDescCaption"
sDataDesc.[HeadLinesCount](../AsDataDesc/HeadLinesCount_DDesc.html) = 1
sDataDesc.[DataIndicate](../AsDataDesc/DataIndicate_DDesc.html) = 1
sDataDesc.[AddColumn](../AsDataDesc/AddColumn_DDesc.html)("fCODE", "Код", "Code", "C(8)", "fCode", False, True, True)
sDataDesc.[SQL](../AsDataDesc/SQL_DDesc.html) = "Select fCODE from Table"
Set xView = CreateDynamicView(sDataDesc)
Browse(xView)
```
