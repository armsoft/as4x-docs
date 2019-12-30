---
layout: page
title: "Օրինակ/AsFact"
---

Օրինակում ցույց է տրված AccCrd, AccDeb, Cur, CurSumma, DbCr, Object, Op, OpDate, Spec, Summa հատկությունների օգտագործումը:

Օրինակի մեջ [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) ֆունկցիայով ստեղծում է `xFact` փաստի օբյեկտը։ 
Ապա արժևորում է նրա հատկությունները և գրանցում տվյալների պահոցում [StoreFact](../Functions/ASDOC/StoreFact.md) մեթոդով։

Օրինակի տրամաբանությունը կարող է աշխատել միայն փաստաթղթի [Action](../ScriptProcs/Action.html) կամ [NestedTransaction](../ScriptProcs/NestedTransaction.html) իրադարձությունների մշակիչների մեջ։

``` vb
Set xFact = CreateFact("02")
xFact.OpDate = Doc("DATEPUT")
xFact.Object = Doc("NBACC")
xFact.Summa = CurValue(Doc("CODVAL"), Doc("DATEPUT")) * Doc("DOCSUMMA")
xFact.Cur = Doc("CODVAL")
xFact.CurSumma = Doc("DOCSUMMA")
xFact.Op = "MSC"
xFact.AccCrd = Doc("DBACC")
xFact.AccDeb = Doc("CRACC")
xFact.DbCr = "C"
xFact.Spec = Doc("NOMDOK") & Doc.Formatted("MTCCOUNT") & Doc("COMMENT") 
Doc.StoreFact(xFact)
```