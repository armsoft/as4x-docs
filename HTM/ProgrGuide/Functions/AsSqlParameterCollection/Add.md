---
layout: page
title: "AsSqlParameterCollection/Add"
---


# Add մեթոդ

[Տես նաև](../AsSqlParameterCollection.md) [Օրինակ](../../Examples/AsSqlParameterCollection.md) [Կիրառվում է](../AsSqlParameterCollection.md) 

Ստեղծում է և կցում հավաքածուին նոր տարր։

## Շարահյուսություն

``` vb
Function Add (sParamName as String, oType As SQLType, [vValue as Variant], [newVal as AsSqlParameterDirection], [lenOrDecimal as Long]) as AsSqlParameter
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրոթյոն |
|--|--|
| sParamName | Պարամետրի անունը տողաին տիպի։ |
| oType | Ստեղծվող պարամետրի տիպը։  |
| vValue | Variant տիպի ոչ պարտադիր պարամետր: |
| newVal | Ստեղծվող պարամետրի ուղղությունը։ Ոչ պարտադիր պարամետր: |
| lenOrDecimal | Երկարություն կամ ստրակետից հետո նիշերի քանակ։ Ոչ պարտադիր պարամետր: |
