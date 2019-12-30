---
layout: page
title: "Օրինակ/PrintWord"
---

Օրինակում ցույց է տրված PrintWord իրադարձության օգտագործումը:


``` vb
Sub PrintWord()

DocP.S 50, Param("CompName")
DocP.S 51, Param("CompAdr")
DocP.S 52, Param("DepAccount")
DocP.S 53, Param("CompCod")
DocP.S 54, Param("BankName") 

End Sub
```