---
layout: page
title: "Օրինակ/AsDocPrint"
---

# Օրինակում ցույց է տրված Print իրադարձության և  P, S, Break մեթոդների օգտագործումը 


[Print](../ScriptProcs/Print.html) համակարգային իրադարձության մեջ նկարագրված է տպված ձև, որտեղ տպված նտող սահմանելու համար օգտագործված են P, S և Break մեթոդները։
В обработчике системного события [Print](../ScriptProcs/Print.html), описана печатная форма, где использованы методы <strong>P</strong>,
<strong>S</strong> и <strong>Break</strong> для определения печатной строки.
``` vb
Sub Print()
   lngBayer = GetISN("ACC",Doc("ACCCR"))
   DocP.S 10, doc.ISN
   DocP.S 14, Param("BANKNAME")
   DocP.S 12, LoadDoc(lngBayer)("Name"), 32 
   DocP.S 15, doc.Formatted("SUMMA") 
   DocP.S 16, doc("KASSIMV") 
   DocP.P " "
   DocP.P "            ёр²Ш²рОФЖ ºИшЖ ърёºр N ^DOCNUM [^10 ]"
   DocP.P " ^14 "
   DocP.P " ²Щл³ГЗнª ^DATE "
   DocP.P " кп³убХª           ё»µ»п               ¶бхЩ³с            ЬЗЯ  "
   DocP.P " ^RECEIVER  ^ACCDB  ^15  ^16  "
   DocP.P " ^12  ^ACCCR    "
   DocP.Break
End Sub
```