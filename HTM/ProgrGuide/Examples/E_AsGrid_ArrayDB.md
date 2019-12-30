---
layout: page
title: "Օրինակ/ArrayDB"
---

Օրինակում բերված է ArrayDB հատկության օգտագործումը։

Oրինակում փաստաթղթի աղյուսակի մասիվում է փնտրում է կոդ, ապա թարմացնում այլ սյունակ։

``` vb
Public Sub UpdatePrice(ByVal sCode As String, ByVal cPrice As Currency)
    With docInst.Grid("ITEMPRICES")
        If .RowCount > 0 Then
            'փնտրում է առաջին սյունակում sCode արժեքը
            i = .ArrayDB.Find(0, 0, sCode)
            If i <> -1 Then
                If .ArrayDB(i, 1) <> cPrice Then
                    'փոխում է այլ սյունակի արժեք
                    .Value(i, "PRICE") = cPrice
                    .Refresh()
                End If
            End If
        End If
    End With
End Sub
```
