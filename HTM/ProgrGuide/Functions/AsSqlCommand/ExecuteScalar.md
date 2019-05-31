---
layout: page
title: "AsSqlCommand/ExecuteNonQuery"
---


# ExecuteScalar մեթոդ 

Տես նաև [Օրինակ](../../Examples/AsSqlCommand.md) [Կիրառվում է](../AsSqlCommand.md)

Կատարում է հարցում և վերադարձնում հարցման առաջին տողի առաջին սյան արժեքը։
Եթե հարցումն արժեք չի վերադարձրել, վերադարձրած օբյեկտի `HasValue` հատկությունը ունի `false` արժեք, իսկ `Value`-ն null:
`Value`-ն օգտագործելուց առաջ ճիշտ է ստուգել `HasValue`-ն:

## Շարահյուսություն

``` vb
Function ExecuteScalar(sqlType As SqlDataType, [lenOrDecimal As Long], [precision As Long]) As AsNullable
```

## Տվյալի տիպ

[AsNullable](../AsNullable.md)
