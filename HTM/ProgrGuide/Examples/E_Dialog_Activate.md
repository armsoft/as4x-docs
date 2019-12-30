---
layout: page
title: "Օրինակ/Dialog_Activate"
---

Օրինակում ցույց է տրված Dialog_Activate իրադարձության օգտագործումը։

Ստորև բերված է [դիալոգի նկարագրության մեջ](../Defs/Dialog.html) Dialog_Activate իրադարձություն մշակիչի օրինակը, որտեղ կատարվում է որոշ դաշտերի հատկությունների արժեվորում։

``` vb
Public Sub Dialog_Activate()
    Dialog("Number2")=102
    Dialog.ReadOnly("DataVerj") = True 
    Dialog.Control("Number1").ReadOnly = True
End Sub
```