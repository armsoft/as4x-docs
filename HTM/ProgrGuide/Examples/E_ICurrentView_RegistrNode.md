---
layout: page
title: "Օրինակ/RegistrNode"
---

# Օրինակում ցույց է տրված RegistrNode մեթոդի օգտագործումը

[Տվյալների պահոցի նկարագրության մեջից](../Defs/Data.html) բերվում է [Functions](../ScriptProcs/FunctionsData.html) իրադարձության մշակիչը։ 
Ниже приводится обработчик системного события [Functions](../ScriptProcs/FunctionsData.html)
из [описания источника данных](../Defs/Data.html).

``` vb
Sub Functions() 
    set xView = CurrentView
   .....    
    xView.RegistrNode "node3","Операции"
    xView.RegistrNode "node31", "Приход", "node3"
    xView.RegistrNode "node32", "Расход", "node3"

    xView.RegistrNode "node4", "Просмотр и редактирование"
    xView.RegistrNode "node41", "Изменение состояний", "node4"
    xView.RegistrNode "node42", "Просмотр операций", "node4"

    xView.RegistrFunction "Редактирование счетов", "pAccEdit"
    
    xView.RegistrFunction "Приход МБП", "pCrLnGuar", "ARM1;ARM2", "node31"
    xView.RegistrFunction "Приход МТЦ", "pCrLnGDbt", "ARM3", "node31"
    xView.RegistrFunction "Расход с НДС", "pCrLnCred", "ARM4;ARM1", "node32"
    .....

End Sub
```