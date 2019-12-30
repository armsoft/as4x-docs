---
layout: page
title: "Օրինակ/ICurrentTree,RegistrNode"
---

Ստորև բերված է ծառ-տեղեկատույի [Functions](../ScriptProcs/FunctionsTree.html) իրադարձության մշակիչի օրինակ։ 
Օրինակում ստեղծում է երկու գործողություն համատեքստի մենյույում, որոնք խմբավորված են մեկ ծնող հանգույցի տակ։

``` vb
Sub Functions() 
    CurrentTree.RegistrNode "ParentNode", "Գործողություններ", , "Operations"
    CurrentTree.RegistrFunction "Նոր այց", "CreateVisit", , "ParentNode", "New Visit"
    CurrentTree.RegistrFunction "Նոր զանգ", "CreateCall", , "ParentNode", "New Call"
End Sub

Public Sub CreateVisit()
    '
End Sub

Public Sub CreateCall()
    '
End Sub
```