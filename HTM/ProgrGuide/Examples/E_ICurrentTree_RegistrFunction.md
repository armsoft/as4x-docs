---
layout: page
title: "Օրինակ/ICurrentTree,RegistrFunction"
---

Ստորև բերված է ծառ-տեղեկատույի [Functions](../ScriptProcs/FunctionsTree.html) իրադարձության մշակիչի օրինակ։ 
Օրինակում կանչում է `RegistrFunction` մեթոդը, որը համատեքստի մենյույում ավելացնում է գործողություն՝ «Նոր այց»։ 
Գործողության աշխատացնելուց կատարվում է `CreateSp` ֆունկցիան, որը ստեղծում է `"spasoper"` փաստաթղթի նոր օրինակ։ 
Այս գործողությունը հասանելի կլինի միայն `NbAcc`, `NewDoc` և `Adm` աշխատատեղերում։

``` vb
Public Sub Functions()
    CurrentTree.RegistrFunction "Նոր այց", "CreateSp", "NbAcc; NewDoc; Adm", , "New Visit"
End Sub

Public Sub CreateSp()
Dim tmpDoc As AsDoc
    Set tmpDoc = CreateDoc("spasoper")
    tmpDoc("PartCode") = CurrentTree.CurrentNode("CODE")
    tmpDoc.Show
End Sub
```