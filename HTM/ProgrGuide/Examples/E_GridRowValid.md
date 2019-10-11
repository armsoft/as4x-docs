---
layout: page
title: "Օրինակ/GridRowValid"
---

# Օրինակում ցույց է տրված GridRowValid իրադարձության օգտագործումը

Ստորև բերված է GridRowValid իրադարձության մշակիչի օրինակը [փաստաթղթի նկարագրության մեջից](../Defs/doc.html)։

Ниже приведен пример обработчика события <strong>
GridRowValid</strong> из [описания документа](../Defs/doc.html).

``` vb
Sub GridRowValid(ByVal GridObj)
    for i=0 to GridObj.RowCount-1
       if i <> GridObj.Row and GridObj(i,GridObj.Col)=_
            GridObj.ColumnValue(GridObj.Col) then _
            Err.Raise gintUserErrors, #Err, ErrSoob
    next
End Sub 
```

