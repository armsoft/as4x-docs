---
layout: page
title: "Օրինակ/Folders"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `Folders` իրադարձության օգտագործումը:

[Փաստաթղթի նկարագրության մեջ](../Defs/doc.html) գրված Folders իրադարձության մշակիչի մեջ փաստաթղթի նմուշները տեղադրվում են թղթապանակի և ծառ-տեղեկատուի մեջ։

``` vb
Sub Folders()
Dim xFoldEl As AsFoldElement, xTreeEl As AsTreeElement
    ' Փաստաթուղթը տեղադրվում է NBACC թղթապանակի մեջ
    Set xFoldEl = CreateFolderElement("NBACC")
    xFoldEl.Com = Doc("Name")
    xFoldEl.Ecom = Doc("EName")
    xFoldEl.Spec = Doc("NOMDOK") & Doc.Formatted("MTCCOUNT") & Doc("COMENT") 
    xFoldEl.Status = "O"
    Doc.StoreInFolder xFoldEl
 
    ' Փաստաթուղթը տեղադրվում է NbalAcc ծառ-տեղեկատուի մեջ
    Set xTreeEl = CreateTreeElement("NbalAcc")
    xTreeEl.Com = Doc("Name")
    xTreeEl.Ecom = Doc("EName")
    xTreeEl.Key = Doc("CODE")
    xTreeEl.Parent = Doc("CODEBAL")
    Doc.StoreInTree xTreeEl
End Sub
```