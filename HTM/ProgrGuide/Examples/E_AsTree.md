---
layout: page
title: "Օրինակ/AsTree"
---


Օրինակում ցույց է տրված ինչպես կարող են օգտագործվել DeleteNode և AddNode մեթոդները։


Օրինակի մեջ մշակած է փաստաթղթի `Folders` իրադարձություն, որի մեջ ջնջվում են ֆիլտրված ծառի տարրերը, ապա ավելացվում են այդ ծառում այն տարրերը որ նշված են կարգավորման աղյուսակում։

``` vb
Sub Folders()
Dim oldNodes As Dictionary, xKey As Variant
Dim xTreeEl As AsTreeElement, xTree As AsTree

    Set xTree = Tree("FilterTr")

    Set oldNodes = Kernel.TreeElements("FilterTr")
    For Each xKey In AtmIndArr
        xTree.DeleteNode(oldNodes(xKey).Key)
    Next

    With Doc.Grid("FILTEREDNODES")
        For i = 0 To .RowCount - 1
            Set xTreeEl = TreeElProp("AllTree", .Value(i, "TREECODE"))
            xTree.AddNode(xTreeEl.Key, xTreeEl.Com, "", xTreeEl.ECom)
        Next i
    End With
End Sub
```
