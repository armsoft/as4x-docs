---
layout: page
title: "Օրինակ/Folders"
---

# Օրինակում ցույց է տրված Folders իրադարձության օգտագործումը

Ստորև բերված է փաստաթղթի Folders իրադարձության մշակիչի օրինակ, որտեղից փաստաթղթի օրինակները/նմուշները տեղադրվում են թղթապանակի և ծառ-տեղեկատուի մեջ։
В [описании документа](../Defs/doc.html) находится обработчик события Folders, откуда экземпляры документа помещаются в папку и в дерево-справочник.

``` vb
Sub Folders()
' Добавим экземпляр документа в папку NBACC
   Set xFoldEl = CreateFolderElement("NBACC")
   xFoldEl.Com = Doc("Name")
   xFoldEl.Ecom = Doc("EName")
   xFoldEl.Spec = Doc("NOMDOK") & doc.Formatted("MTCCOUNT") & Doc("COMENT") 
   xFoldEl.Status = "O"
   doc.StoreInFolder xFoldEl
' Добавим экземпляр документа в дерево NbalAcc
   Set xTreeEl = CreateTreeElement ("NbalAcc")
   xTreeEl.Com = Doc("Name")
   xTreeEl.Ecom = Doc("EName")
   xTreeEl.Key = Doc("CODE")
   xTreeEl.Parent = Doc("CODEBAL")
   doc.StoreInTree xTreeEl
End Sub
```