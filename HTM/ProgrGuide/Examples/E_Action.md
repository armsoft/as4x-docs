---
layout: page
title: "Օրինակ/Action"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `Action` իրադարձության օգտագործումը:

[Փաստաթղթի նկարագրության](../Defs/doc.html) սկրիպտային մասում գրված `Action` իրադարձության մշակիչում կախված փաստաթղթի վիճակից ստեղծում է հաշվառման տարր։

``` vb
Public Sub Action()
Dim xDoc As AsDoc, xFolder As AsFoldElement, xFact As AsFact

    If Doc.State = 2 Then
        Exit Sub
    End If
    Set xFolder = FolderElProp("OPNBACC", Doc("CODNBACC"))
'    xCODBAL = Mid(xFolder.Spec, 4, #LenBalAcc)
    Set xDoc = LoadDoc(xFolder.ISN)
 
    Set xFact = CreateFact("02")
    xFact.OpDate = Doc("DATEPUT")
    xFact.Object = xFolder.Key
    If xDoc("CODVAL") <> "000" and Trim(xDoc("CODVAL")) <> "" Then
        xFact.Summa = CurValue(xDoc("CODVAL"), Doc("DATEPUT")) * Doc("DOCSUMMA")
        xFact.Cur = xDoc("CODVAL")
    Else
        xFact.Summa = Doc("DOCSUMMA")
        xFact.Cur = "000"
    End If
    xFact.CurSumma = Doc("DOCSUMMA")
    xFact.Op = "MSC"
    xFact.DBCR = "C"
    xFact.Spec = Doc("NOMDOK") & Doc.Formatted("MTCCOUNT") 
    Doc.StoreFact xFact
    Doc.State = 2
End Sub 
```

