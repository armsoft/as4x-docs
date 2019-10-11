---
layout: page
title: "Օրինակ/AsTree"
---


# Օրինակում ցույց է տրված  AddDoc, ClearAllDocs, Show մեթոդների և свойств AllowAddNode, AllowDelete, AllowEdit, AllowView, AllowSelectNonDoc, Caption, TreeId, Codelen, TreeTypeInteger հատկությունների օգտագործումը։

Օրինակի մեջ կանչվում է Tree ֆունկցիան, mTree-ի միջոցով հղումը իր բոլոր հատկություններով և մեթոդներով վերադառնում է NBACCT3 ծառ օբյեկտի վրա։ Ծառի մեջ ավելանում է NBPUT տիպի փաստաթուղթ ստեղծելու հնարավորություն։ 
В примере вызывается функция Tree, через переменную mTree возвращается ссылка на обьект дерево - NBACCT3 со всеми его свойствами и методами. В дереве добавляется возможность создания документа типа NBPUT.

``` vb
set mTree = Tree("NBACCT3")
mTree.Caption = "Выписки счетов" & _
                        VTOFS("DATE", xDialog("NBSTARTDATE")) & " - " & _
                        VTOFS("DATE", xDialog("NBENDDATE"))
mTree.AddDoc "NBPUT"
nAllowAddNode=mTree.AllowAddNode
nAllowDelete=mTree.AllowDelete
nAllowEdit=mTree.AllowEdit
nAllowEdit=mTree.AllowView
nAllowSelect=mTree.AllowSelectNonDoc
mTree.ClearAllDocs
mTree.Show
mTree.Codelen
mTree.TreeTypeInteger
....
sTreeId=mTree.TreeId
```