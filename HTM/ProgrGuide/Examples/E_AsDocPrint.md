---
layout: page
title: "Օրինակ/AsDocPrint"
---

Օրինակում ցույց է տրված Print իրադարձության և P, S, Break մեթոդների օգտագործումը:

[Print](../ScriptProcs/Print.html) իրադարձության մշակիչի մեջ նկարագրվում է փաստաթղթի տեղեկանքի տեսքով տպվող տպման ձևը։

``` vb
Sub Print()
   lngBayer = GetISN("ACC", Doc("ACCCR"))
   DocP.S 10, doc.ISN
   DocP.S 14, Param("BANKNAME")
   DocP.S 12, LoadDoc(lngBayer)("Name"), 32 
   DocP.S 15, Doc.Formatted("SUMMA") 
   DocP.S 16, Doc("KASSIMV") 
   DocP.P " "
   DocP.P "            ԴՐԱՄԱՐԿՂԻ ԵԼՔԻ ՕՐԴԵՐ N ^DOCNUM [^10 ]"
   DocP.P " ^14 "
   DocP.P " Ամսաթիվ՝ ^DATE "
   DocP.P " Ստացող՝           Դեբետ               Գումար            Նիշ  "
   DocP.P " ^RECEIVER  ^ACCDB  ^15  ^16  "
   DocP.P " ^12  ^ACCCR    "
   DocP.Break
End Sub
```