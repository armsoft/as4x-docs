---
layout: page
title: "Օրինակ/DisplayRem"
---


# Օրինակում ցույց է տրված DisplayRem իրադարձության օգտագործումը


Ստորև բերված է [հաշվառման նկարագրությունների](../Defs/Accounting.html) օրինակը DisplayRem  իրադարձության մշակիչի հետ։
Приведен пример [описания учета](../Defs/Accounting.html) с обработчиком события DisplayRem.

``` vb
ACCOUNTING { NAME = 01; CAPTION="Учет банковских балансовых счетов";
    MainFolder = ACC;
    AccFolder = ACC;
    Currency = 1;
    Remainder = 1;
    Limit = 1;
    LinkedAccounting = 11;
    Description = "Учет банковских балансовых счетов"
    RemHeader = "Заглавие для остатков";
    operation {Name = TRF ;Caption = Перевод;}; 
    operation {Name = MSC ;Caption = Разное;};
    operation {Name = RVL ;Caption = #Revaluation;};

SCRIPT {
Function DisplayRem(ByVal xISN , ByVal xAccRem, ByVal xLinkedRem, _
                             ByVal xAccRemNC, ByVal xLinkedRemNC)
     DisplayRem =VTOFS("N(16,2)", xAccRem) & _
                        VTOFS("N(16,2)", xLinkedRem) & _
                        VTOFS("N(16,2)", xAccRemNC) & _
                        VTOFS("N(16,2)", xLinkedRemNC)
End Function
```