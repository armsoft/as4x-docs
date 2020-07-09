---
layout: page
title: "CreatePivotInfo ֆունկցիա"
---

# CreatePivotInfo ֆունկցիա

[Հատկություններ և մեթոդներ](../../PivotInfo.html)

Ստեղծում է տվյալները տեղափոխող/փոխադրող տիպի օբյեկտ։
Создает объект типа транспонирование данных.

## Շարահյուսություն

```vb
set oPivotInfo = CreatePivotInfo
```

Բաղադրիչներն են՝
        
| Պարամետր | Նկարագրություն |
|--|--|
| oPivotInfo | Տվյալները տեղափոխող/փոխադրող տիպի օբյեկտի օրինակի հղում։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта типа транспонирование данных. |


## Նկատառումներ

[Տես նաև](../../../constructors.html)


## Օրինակ

Օրինակի մեջ կանչվում է CreatePivotInfo ֆունկցիան, PivotInfo-ի միջոցով վերադառնում է տվյալները տեղափոխող/փոխադրող տիպի օբյեկտի հղումը իր բոլոր հատկություններով և մեթոդներով։ Որտեղ viewColumn1, viewColumn2 և viewColumn3 համարվում են `VIEW1` դիտելու ձևի աղյուսակներ, որոնք արտահանելիս տեղափոխվում են Excel։

В примере вызывается функция CreatePivotInfo, через PivotInfo возвращается ссылка на обьект типа транспонирование данных со всеми его свойствами и методами, где viewColumn1, viewColumn2 и viewColumn3&nbsp; являются колонками вида просмотра &quot;VIEW1&quot;, которые подвергаются транспонированию при экспорте в Excel. 

```vb
Dim oPivotInfo As PivotInf
Dim viewBusExp As AsView

Set viewBusExp = View("VIEW1")
Set oPivotInfo = CreatePivotInfo

oPivotInfo.AddPivotColumn "viewColumn1"
oPivotInfo.AddPivotRow "viewColumn2"
oPivotInfo.AddPivotData "viewColum3", "PivotColumnDataCaption", -4112

viewBusExp.Pivot oPivotInfo
viewBusExp.Browse
```