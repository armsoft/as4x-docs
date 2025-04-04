---
layout: page
title: "DocChangeRequest/State"
---

# State հատկություն

Վերադարձնում կամ նշանակում է փաստաթղթի փոփոխման հայտի վիճակը՝

* `0` - նոր ստեղծված,
* `1` - հաստատված,
* `2` - մերժված,
* `10` - փոփոխված։

## Շարահյուսություն 

``` vb
Public Property Get State() As Integer 
```

``` vb
Public Property Let State(ByVal value As Integer) 
```
