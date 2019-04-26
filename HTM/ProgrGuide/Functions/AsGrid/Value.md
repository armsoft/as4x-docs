---
layout: page
title: "AsGrid/Value"
---


# Value հատկություն

[См. также](../AsGrid.md) [Пример](../../Examples/E_AsGrid_AddRow_Value.html) [Применяется к](../AsGrid.md) 


Վերադարձնում կամ նշանակում է աղյուսակի վանդակի արժեքը։  
Այն համարվում է լռության հատկություն, հետևաբար կարելի է օգտագործել կարճ գրելաձևը։ 

``` vb
'երկար գրելաձև
value = myGrid.Rekv("COLUMNNAME1")
'կարճ գրելաձև
value = myGrid("COLUMNNAME1")
``` 

## Շարահյուսություն

``` vb
object.Value(RowIndex, ColName) = [sValue]
```

Բաղադրիչներն են՝


| Պարամետր  | Նկարագրություն |
|--|--|
| object | Փաստաթղթի աղյուսակ օբյեկտի հղում։ |
| RowIndex | Աղյուսակի տողի համարը (0-ից մինչև [RowCount](RowCount.md)-1)։ |
| ColName| Սյունակի ներքին անունը կամ համարը (0-ից մինչև [ColCount](ColCount.md)-1)։ |
| sValue | նոր արժեք։ |

