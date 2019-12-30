---
layout: page
title: "Օրինակ/SetPrintWidth"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `SetPrintWidth` իրադարձության մշակիչի օրինակ։

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