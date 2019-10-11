---
layout: page
title: "Օրինակ/Dialog_Activate"
---

# Օրինակում ցույց է տրված  Dialog_Activate իրադարձության օգտագործումը

Ստորև բերված է [փաստաթղթի նկարագրության մեջ](../Defs/Dialog.html) Dialog_Activate իրադարձություն մշակիչի օրինակը, որտեղ կատարվում է կարգավորման տարրերի որոշ հատկությունների նույնականացում։
Ниже приведен пример обработчика события <strong>
Dialog_Activate</strong> в [описании диалога](../Defs/Dialog.html), где происходит инициализация некоторых свойств элементов управления.

``` vb
Public Sub Dialog_Activate()
    Dialog("Number2")=102
    Dialog.ReadOnly("DataVerj") = True 
    Dialog.Control("Number1").ReadOnly = True
    hBitmap=CreateBitmap(100, 100, 2, 2)
End Sub
```