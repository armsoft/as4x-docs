---
layout: page
title: "ExternalConnection իրադարձություն"
---

# ExternalConnection տվյալների աղբյուրի համակարգային իրադարձություն

Տես նաև [Օրինակ](#Օրինակ) [Կիրառվում է](../Functions/Asdata.md)

Իրադարձության մշակիչում հարկավոր է վերադարձնել այլ տվյալների պահոցի միացումը։ 
Նախատեսված է OLAP տվյալների պահոցի հետ աշխատանքի համար։

## Շարահյուսություն

``` vb
Function ExternalConnection() As Object
    ' statements
End Function
```


## Օրինակ

``` vb
Public Function ExternalConnection() As Object
    Set ExternalConnection = OLAPProvider.GetOLAPConnection()
End Function
```


