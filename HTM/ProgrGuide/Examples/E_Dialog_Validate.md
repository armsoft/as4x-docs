---
layout: page
title: "Օրինակ/Dialog_Validate"
---

Օրինակում ցույց է տրված  Dialog_Validate իրադարձության օգտագործումը։

Ստորև բերված է [դիալոգի նկարագրության մեջ](../Defs/Dialog.html) Dialog_Validate  իրադարձության մշակիչի օրինակը, որտեղ կատարվում է դիալոգի արժեքների ստուգումը։

``` vb
Sub Dialog_Validate()
    If Dialog("DataStart") > Dialog("DataEnd") then
        RaiseError "Սխալ", "Սկզբի ամսաթիվը չի կարող մեծ լինել վերջի ամսաթվից։", "Error", "Start date cannot be after end date."
    End if 
End Sub
```