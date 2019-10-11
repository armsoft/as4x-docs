---
layout: page
title: "Օրինակ/ICurrentTree/RegistrNode Example"
---

# Օրինակում ցույց է տրված RegistrNode մեթոդի օգտագործումը

[Ծառ-տեղեկատուի նկարագրության մեջից](../Defs/Tree.html) բերվում է Functions-ի սկրիպտային գործընթացը։
Ниже приводится скриптовая процедура Functions из [описания дерева-справочника.](../Defs/Tree.html)

``` vb
Sub Functions() 
    set xTree=CurrentTree
   .....    
    xTree.RegistrNode "node3","Операции"
    xTree.RegistrNode "node31", "Приход", "node3"
    xTree.RegistrNode "node32", "Расход", "node3"

    xTree.RegistrNode "node4", "Просмотр и редактирование"
    xTree.RegistrNode "node41", "Изменение состояний", "node4"
    xTree.RegistrNode "node42", "Просмотр операций", "node4"

    xTree.RegistrFunction "Редактирование счетов", "pAccEdit"
    
    xTree.RegistrFunction "Приход МБП", "pCrLnGuar", "In", "node31"
    xTree.RegistrFunction "Приход МТЦ", "pCrLnGDbt", "In", "node31"
    xTree.RegistrFunction "Расход с НДС", "pCrLnCred", "Out", "node32"
    .....

End Sub
```