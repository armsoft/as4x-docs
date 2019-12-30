---
layout: page
title: "Օրինակ/DefaultComment"
---


Օրինակում ցույց է տրված DefaultComment իրադարձության օգտագործումը:



Օրինակում ցույց է տրված [Փաստաթղթի նկարագրության մեջից](../Defs/doc.html) մեջ գրվող `DefaultComment` իրադարձության մշակիչ:

``` vb
Function DefaultComment()
    DefaultComment = Doc("Cod") & " " & Doc("Name")
End Function
```