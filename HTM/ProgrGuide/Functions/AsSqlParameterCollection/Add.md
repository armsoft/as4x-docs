---
layout: page
title: "AsSqlParametersCollection/Add"
---


# Add մեթոդ

[Տես նաև](../AsSqlParametersCollection.md) [Օրինակ](../../Examples/AsSqlParametersCollection.md) [Կիրառվում է](../AsSqlParametersCollection.md) 

Ստեղծում է և կցում հավաքածուին նոր տարր։

## Շարահյուսություն

``` vb
object.Add (sParamName as String, oType As SQLType, [vValue as Variant], [newVal as AsSqlParameterDirection], [lenOrDecimal as Long]) as AsSqlParameter
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրոթյոն |
|--|--|
| object | [AsSqlParameterCollection](../AsSqlParametersCollection.md) տիպի օբյեկտ |
| sParamName | Պարամետրի անունը տողաին տիպի։ |
| oType | Ստեղծվող պարամետրի տիպը։  |
| vValue | Variant տիպի ոչ պարտադիր պարամետր: |
| newVal | Ստեղծվող պարամետրի ուղղությունը։ Ոչ պարտադիր պարամետր: |
| lenOrDecimal | Երկարություն կամ ստրակետից հետո նիշերի քանակ։ Ոչ պարտադիր պարամետր: |
