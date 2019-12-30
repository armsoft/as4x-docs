---
layout: page
title: "Օրինակ/Validate"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `Validate` իրադարձության օգտագործումը:

`Validate` իրադարձության մշակիչում ստուգված է `CODE` դաշտի երկարությունը, ինչպես նաև ստորին և վերին սահմանաչափերի ճշտությունը։

``` vb
Public Sub Validate()
    If Len(Trim(Doc("CODE"))) < 6 Then
         RaiseError "Սխալ", "Կոդի երկարությունը չի կարող փոքր լինել 6-ից:", "Error", "Code length can nt be less then 6."
    End If
    If Doc("LLIMIT") > Doc("ULIMIT") Then
        RaiseError "Սխալ", "Նվազագույն սահմանաչափը պետք է փոքր լինի առավելագույն սահմանաչափից:", "Error", "Lower limit should not exceed upper limit."
    End If
End Sub
```