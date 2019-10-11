---
layout: page
title: "Օրինակ/Functions"
---

# Օրինակում ցույց է տրված Functions իրադարձության օգտագործումը

Ստորև բերված է փաստաթղթի Function իրադարձության մշակիչի օրինակ, որտեղ սահմանվում են փաստաթղթի համատեքստի մենյուից հասանելի գործողություները։
Из [описания документа](../Defs/doc.html) приведен пример обработчика события Functions, в котором формируется дерево операций для проведения с документом.

``` vb
Sub Functions() 
   .....    
    Doc.RegistrNode "node3","Операции"
    Doc.RegistrNode "node31", "Приход", "node3"
    Doc.RegistrNode "node32", "Расход", "node3"

    Doc.RegistrNode "node4", "Просмотр и редактирование"
    Doc.RegistrNode "node41", "Изменение состояний", "node4"
    Doc.RegistrNode "node42", "Просмотр операций", "node4"

    Doc.RegistrFunction "Редактирование счетов", "pAccEdit"
    
    Doc.RegistrFunction "Приход МБП", "pCrLnGuar", "In", "node31"
    Doc.RegistrFunction "Приход МТЦ", "pCrLnGDbt", "In", "node31"
    Doc.RegistrFunction "Расход с НДС", "pCrLnCred", "Out", "node32"
    .....

End Sub
```