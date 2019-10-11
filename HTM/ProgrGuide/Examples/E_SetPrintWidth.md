---
layout: page
title: "Օրինակ/DefaultComment"
---

# Օրինակում ցույց է տրված SetPrintWidth իրադարձության  օգտագործումը



Ստորև բերված է [փաստաթղթի նկարագրության](../Defs/Data.html)`OnEachRow` իրադարձության մշակիչի օրինակ։

Из [описания документа](../Defs/doc.html) приведен пример обработчика события `SetPrintWidth`

``` vb
Function SetPrintWidth()
    If Doc("CODE") = "0" Then 
        SetPrintWidth = 89
    ElseIf Doc("CODE") = "1" and Doc("RepNum")=2 Then
        SetPrintWidth = 230
    Else
        SetPrintWidth = 230
    End If
End Function
```