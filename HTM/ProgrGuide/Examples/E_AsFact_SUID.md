---
layout: page
title: "Օրինակ/Suid"
---

# Օրինակում ցույց է տրված Suidհատկության օգտագործումը

Ստորև օրինակում հաշվում է թղթակցությունների գումարները դրամով և արտարժույթով վերադարձվող թղթակցությունների բազմության համար։
Ниже приведен пример подсчета сумм проводок в НДЕ и валюте для возвращаемой коллекции проводок.

``` vb
Set xFact =LoadFactByObject(Accounting, ISN, xLastDate, xLastDate, Op)
For i=1 to xFact.Count 
  nSum=xFact(i).Summa
  nCurSum=xFact(i).CurSumma
   nSuid = xFact(i).Suid
Next
```