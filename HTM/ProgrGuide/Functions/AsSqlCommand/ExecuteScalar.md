---
layout: page
title: "AsSqlCommand/ExecuteNonQuery"
---


# ExecuteScalar մեթոդ 

Տես նաև [Օրինակ](../../Examples/AsSqlCommand.md) [Կիրառվում է](../AsSqlCommand.md)

Կատարում է հարցում և վերադարձնում հարցման առաջին տողի առաջին սյան արժեքը։
Եթե հարցումն արժեք չի վերադարձրել, վերադարձրած օբյեկտի `HasValue` հատկությունը ունի `false` արժեք, իսկ `Value`-ն null:
`Value`-ն օգտագործելուց առաջ ճիշտ է ստուգել `HasValue`-ն:

Այլ մանրամասներ [AsSqlCommand](../AsSqlCommand.md)-ի Նկատառումներ մասում:

## Շարահյուսություն

``` vb
Function ExecuteScalar(sqlType As SqlDataType, [maxLength As Long], [precision As Long]) As AsNullable
```
Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sqlType   | Վերադարձվելիք արժեքի Sql տիպը ։ |
| maxLength | Վերադարձվելիք արժեքի մաքսիմալ երկարությունը։Լռելյայն արժեքը -1 է։ Պարտադիր է օգտագործել, երբ պարամետրի տիպը տողային կամ բինար է:|
| precision | Չի օգտագործվում։ |

## Տվյալի տիպ

[AsNullable](../AsNullable.md)
