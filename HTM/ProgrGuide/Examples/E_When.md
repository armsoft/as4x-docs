---
layout: page
title: "Օրինակ/When"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `When` իրադարձության օգտագործումը:

Օրինակում նոր ստեղծվող փաստաթղթի համար լրացվում են դաշտերի լռությամբ արժեքները, փակ փաստաթղթերի բոլոր դաշտերը դարձվում են չխմբագրվող, իսկ բաց փաստաթղթերի համար չխմբագրվող դարձվում են միայն նշված դաշտերը։

``` vb
Sub When()
    Doc.Сontrol("CODE").Format = String(#LenNBAcc,"9")
    If Doc.State = 0 Then
        If IsNull(Doc("DATOTK")) Then
            Doc("DATOTK") = Param("WkDate")
        End If
        If Doc("ULIMIT") = 0 Then 
            Doc("ULIMIT") = #MaxLimit
        End If
    ElseIf Not IsNull(Doc("DATZAK")) Then
        Doc.LockControls
    Else
        Doc.ReadOnly("CODE") = True
        Doc.ReadOnly("CODBAL") = True
        Doc.ReadOnly("DATOTK") = True
        Doc.ReadOnly("CODVAL") = True
        Doc.ReadOnly("CLICOD") = True
    End If
    Doc.ReadOnly("NUMVIP") = True
    Doc.ReadOnly("DATVIP") = True
End Sub
```