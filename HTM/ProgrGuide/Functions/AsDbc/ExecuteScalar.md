---
layout: page
title: "AsDbc/ExecuteScalar"
---

# AsDbc/ExecuteScalar

## ExecuteScalar մեթոդ

Տես նաև [Օրինակ](../../Examples/AsDbc.md) [Կիրառվում է](../AsDbc.md)

Կատարում է հարցում և վերադարձնում հարցման առաջին տողի առաջին սյան արժեքը։ Եթե հարցումն արժեք չի վերադարձրել, ապա վերադարձնում է EMPTY:

## Շարահյուսություն

``` vb
Function ExecuteScalar(ByVal sQueryText As String, _
                       Optional ByVal lQueryTimeOut As Long = -1, _
                       Optional ByVal lConnectionType As ConnectionType = Connection_Main) As Variant
```
|Պարամետր | Նկարագրություն |
|--|--|
| sQueryText | Հարցման տեքստը։ |
| lQueryTimeOut | Հարցման TimeOute-ը վայրկյաններով։ Լռությամբ արժեքը -1 է։ |
| lConnectionType | [Միացման տիպը](../../Constants/ConnectionType.md)։ Լռությամբ արժեքը Connection_Main է։|

## Մեթոդի տիպ

Variant
