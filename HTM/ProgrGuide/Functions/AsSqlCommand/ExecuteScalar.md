---
layout: page
title: "AsSqlCommand/ExecuteScalar"
---


# ExecuteScalar մեթոդ 

Տես նաև [Օրինակ](../../Examples/AsSqlCommand.md) [Կիրառվում է](../AsSqlCommand.md)

Կատարում է հարցում և վերադարձնում հարցման առաջին տողի առաջին սյան արժեքը։
Եթե հարցումն արժեք չի վերադարձրել, վերադարձրած օբյեկտի `HasValue` հատկությունը ունի `false` արժեք, իսկ `Value`-ն null:
`Value`-ն օգտագործելուց առաջ ճիշտ է ստուգել `HasValue`-ն:

Այլ մանրամասներ [AsSqlCommand](../AsSqlCommand.md)-ի Նկատառումներ մասում:

## Շարահյուսություն

``` vb
Function ExecuteScalar() As AsNullable
```
## Տվյալի տիպ

[AsNullable](../AsNullable.md)

