---
layout: page
title: "CreateDynamicData ֆունկցիա"
---

## CreateDynamicData ֆունկցիա

Հղումը վերադարձնում է AsData օբյեկտի վրա։ Օբյեկտը ստեղծվում է ըստ xDataDesc-ի դինամիկ նկարագրության։ 

Возвращает ссылку на программно созданный объект AsData. Объект создается по-динамическому описанию xDataDesc.

## Շարահյուսություն

```vb
set sData = CreateDynamicData(DataDesc)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sData | Տվյալների աղբյուր օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта источникa данных. |
| DataDesc | Դինամիկ տվյալների աղբյուր օբյեկտի օրինակի հղում։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта динамического источника данных |


## Նկատառումներ

[Տես նաև](../../constructors.html)



## Օրինակ

```vb
Dim sData As AsData Dim sDataDesc as AsDataDesc

Set sDataDesc = CreateDataDesc
sDataDesc.Caption = "DynDescCaption"
sDataDesc.HeadLinesCount = 1
sDataDesc.DataIndicate = 1
sDataDesc.AddColumn("fCODE", "Код", "Code", "C(8)", "fCode", False, True, True)
sDataDesc.SQL = "Select fCODE from Table"
Set sData = CreateDynamicData (sDataDesc )
```

