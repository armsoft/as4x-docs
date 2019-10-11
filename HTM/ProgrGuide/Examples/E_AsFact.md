---
layout: page
title: "Օրինակ/AsFact"
---

# Օրինակում ցույց է տրված AccCrd, AccDeb, Cur, CurSumma, DbCr, Object, Op, OpDate, Spec, Summa հատկությունների օգտագործումը


Օրինակի մեջ կանչվում է CreateFact ֆունկցիան, xFact-ը իր բոլոր հատկություններով և մեթոդներով հղվում է նոր ստեղծված հաշվառում-օբյեկտի վրա։ Իրար համապատասխանող հատկությունների նշանակումից հետո հաշվառումը հիշվում է։
В примере вызывается функция CreateFact, xFact ссылается на вновь созданный объект-проводку со всеми его свойствами и методами. После присвоения значений соответствующих свойств, проводка запоминается.

``` vb
Set xFact = CreateFact("02")
xFact.OpDate = Doc("DATEPUT")
xFact.Object = xFOLDER.Key
xFact.Summa = CurValue(xDOC("CODVAL"),Doc("DATEPUT"))*Doc("DOCSUMMA")
xFact.Cur = xDOC("CODVAL")
xFact.CurSumma = Doc("DOCSUMMA")
xFact.Op = "MSC"
xFact.AccCrd = xDoc("Code")
xFact.AccDeb = mDoc("Code")
xFact.DbCr = "C"
xFact.Spec = Doc("NOMDOK") & doc.Formatted("MTCCOUNT") & Doc("COMENT") 
doc.StoreFact xFact
```