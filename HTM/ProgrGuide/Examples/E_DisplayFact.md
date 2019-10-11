---
layout: page
title: "Օրինակ/DisplayFact"
---

# Օրինակում ցույց է տրված DisplayFact իրադարձության օգտագործումը 

Ստորև բերված է [հաշվառման նկարագրությունների](../Defs/Accounting.html) օրինակը DisplayFact իրադարձության մշակիչի հետ։
Приведен пример [описания учета](../Defs/Accounting.html) с обработчиком события DisplayFact.

``` vb
Accounting {NAME = 02; CAPTION="Учет банковских забалансовых счетов";
   MainFolder = NBACC;
   Currency = 1;
   Remainder = 1;
   Limit=1;
   Description = "Внебалансовый учет";
   FactHeader = " Дата  В/Б счет             Операц.        Сумма   Тип опер.";
   Operation {Name = MSC ; Caption = Разное;};
   Operation {Name = RVL ;  Caption = Переоценка;};
Script {
   Function DisplayFact (ByVal Fact)
      tmpStr = VTOFS("DATE", Fact.OpDate) & " " & _
                   VTOFS("C(20)", Fact.Object) & IIF(Fact.DBCR="D", "Приход", "Расход") _
                   & VTOFS("N(15,2)", Fact.Summa) & " " & Fact.Op
      If Fact.Cur <> "000" and Fact.Op <> "RVL" then
           tmpStr = tmpStr & vbCrLf & Space(29) & "(" & Fact.Cur & ")" & VTOFS("N(15,2)", Fact.CurSumma)
      End IF 
      DisplayFact=tmpStr
   End Function
```


