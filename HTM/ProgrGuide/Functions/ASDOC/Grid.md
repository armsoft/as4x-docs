---
layout: page
title: "AsDoc/Grid"
---


# Grid հատկություն

[См. также](../AsGrid.md) Օրինակ [Применяется к](../Asdoc.md)

Վերադարձնում է [աղյուսակի](AsGrid.md) հղումը։

## Շարահյուսություն

``` vb
set sGrid = object.Grid(GridName)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sGrid | Աղյուսակի հղում։  |
| object | Փաստաթուղթ օբյեկտի հղում։|
| GridName | Աղյուսակի ներքին անուն։ |


## Օրինակ

Օրինակում xGrid-ը հղվում է փաստաթղթի RESP աղյուսակի վրա։

``` vb
Set xGrid = doc.Grid("RESP")
'''
If xGrid.Readonly <> xFix and xGrid.Name ="RESP" then
  Do while xGrid.RowCount > 0
    xGrid.RemoveRow(0)
  Loop
  xGrid.Readonly = xFix
  xGrid.Refresh
End if
```


## Տվյալի տիպ

[AsGrid](AsGrid.md)