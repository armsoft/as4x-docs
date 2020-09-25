---
layout: page
title: "CreateFact ֆունկցիա"
---

# CreateFact ֆունկցիա

Ստեղծում է հաշվառման [գործառույթի](../../Asfact.html) օբյեկտի օրինակ, հետագա լրացումների և գրանցելու համար։

## Շարահյուսություն

``` vb
Function CreateFact(ByVal sTypeAccounting As String) As AsFact
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sTypeAccounting | Հաշվառման նույնականացուցիչ։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ կանչվում է CreateFact ֆունկցիան, xFact-ը հղվում է նոր ստեղծված գործառույթ օբյեկտի վրա, իր բոլոր հատկություններով և մեթոդներով։

``` vb
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
 
