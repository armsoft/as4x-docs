---
layout: page
title: "Օրինակ/Valid"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `Valid` իրադարձության օգտագործումը:

Oրինակում ստուգվում է `CODE` դաշտի երկարությունը լրացվելուց։ Եվ `CLICOD` դաշտի փոփոխման դեպքում լրացնում է `NAME` դաշտը։

``` vb
Public Sub Valid(ByVal Rekv As String, ByVal Oldvalue As Variant)
    Select Case Rekv
    Case "CODE"
        If Len(Trim(Doc("CODE"))) < 6 Then
            RaiseError "Սխալ", "Կոդի երկարությունը չի կարող փոքր լինել 6-ից:", "Error", "Code length can nt be less then 6."
        End If
    Case "CLICOD"
        If Doc("CLICOD") <> Oldvalue Then
            If Trim(Doc("NAME")) = "" Then
                Doc("NAME") = Doc.Control("CLICOD").Comment
                Doc.Refresh("NAME")
            End If
        End If
    End Select
End Sub
```