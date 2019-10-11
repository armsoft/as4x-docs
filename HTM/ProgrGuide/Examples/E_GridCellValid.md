---
layout: page
title: "Օրինակ/GridCellValid"
---

# Օրինակում ցույց է տրված GridCellValid իրադարձության օգտագործումը

Ստորև բերված է GridCellValid իրադարձության մշակիչի օրինակը [փաստաթղթի նկարագրության մեջից](../Defs/doc.html)։

Ниже приведен пример обработчика события GridCellValid из [описания документа](../Defs/doc.html).

``` vb
Sub GridCellValid(ByVal GridObj)
    for i=0 to GridObj.RowCount-1
       if i <> GridObj.Row and GridObj(i,GridObj.Col)=_
            GridObj.ColumnValue(GridObj.Col) then _
            Err.Raise gintUserErrors, #Err, ErrSoob
    next
End Sub
```


