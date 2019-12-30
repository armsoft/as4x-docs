---
layout: page
title: "Օրինակ/RegistrDefaultFunction"
---

Օրինակում ցույց է տրված տվյալների աղբյուրի RegistrDefaultFunction մեթոդի օգտագործումը:
Համատեքստի մենյուի գործողությունների ցուցակում «Ավելացնել փաստաթուղթ» գործողությունը սահմանվում է լռությամբ աշխատող։

``` vb
Sub Functions() 
    CurrentView.RegistrFunction "Ավելացնել փաստաթուղթ", "AddDoc", , , "Add Document"
    CurrentView.RegistrDefaultFunction("AddDoc")
End Sub

Sub AddDoc()
   '
End Sub
```