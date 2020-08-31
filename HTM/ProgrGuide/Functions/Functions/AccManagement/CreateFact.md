---
layout: page
title: "CreateFact ֆունկցիա"
---

## CreateFact ֆունկցիա

[Հատկություններ և մեթոդներ](../../Asfact.html)

Ստեղծում է գործառույթ օբյեկտի  օրինակ, հետագա լրացումների և հիշելու համար։
Создает новый экземпляр объекта-проводки для дальнейшего заполнения и запоминания.


## Շարահյուսություն

```vb
set sNewFact = CreateFact (sTypeAccounting)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sNewFact | Ստուգման նոր օրինակի հղում։ переменная, ссылающаяся на новый экземпляр проводки |
| sTypeAccounting | Հաշվառման նույնականացուցիչ, որի համար ստեղծվում է գործառույթ։ строковое выражение, определяющее идентификатор учета для которой создается проводка |


## Նկատառումներ

[Տես նաև](../../../constructors.html)


## Օրինակ

Օրինակի մեջ կանչվում է CreateFact ֆունկցիան, xFact-ը հղվում է նորից ստեղծված գործառույթ օբյեկտի   վրա, իր բոլոր հատկություններով և մեթոդներով։

В примере вызывается функция CreateFact, xFact ссылается на вновь созданный объект-проводку со всеми его свойствами и методами. 

```vb
Set xFact = CreateFact("02")
xFact.OpDate = Doc("DATEPUT")
xFact.Object = xFOLDER.Key
xFact.Summa = CurValue(xDOC("CODVAL"),Doc("DATEPUT"))*Doc("DOCSUMMA")
xFact.Cur = xDOC("CODVAL")
xFact.CurSumma = Doc("DOCSUMMA")
xFact.Op = "MSC"
xFact.DBCR = "C"
xFact.Spec = Doc("NOMDOK") & doc.Formatted("MTCCOUNT") & Doc("COMENT") 
doc.StoreFact xFact
```
 