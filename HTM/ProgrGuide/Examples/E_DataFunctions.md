---
layout: page
title: "Օրինակ/DataFunctions"
---

# Օրինակում ցույց է տրված տվյալների աղբյուրի համար Functions իրադարձության օգտագործումը 
Пример события Functions для источника данных


``` vb
Sub Functions() 
    If CurrentView.SelectedCount > 0 Then
        CurrentView.RegistrFunction("GroupEditing","groupedit")
        CurrentView.RegistrFunction("GroupSelling","groupsell")
    End If
End Sub
```