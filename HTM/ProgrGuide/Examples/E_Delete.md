---
layout: page
title: "Օրինակ/Delete"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `Delete` իրադարձության օգտագործումը:

[Փաստաթղթի նկարագրության մեջ](../Defs/doc.html) գրված Delete իրադարձության մշակիչում ստուգած է փաստաթուղթը ջնջելու իրավասությունը։

``` vb
Public Sub Delete()
    If Not Paran("DELETEACCESS") Then 
        RaiseError("Սխալ", Param("UserName") & " օգտագործողին փաստաթղթի ջնջելու իրավասություն տրված չէ։", _
            "Error", "Access to delete the document is not grant to user " & Param("UserName") & ".")
    End If
End Sub 
```