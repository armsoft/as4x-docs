---
layout: page
title: "dbc.ExecuteScalar"
---

# dbc.ExecuteScalar


Տես նաև [Օրինակ](../../../Examples/AsDbc.md)

Կատարում է հարցումը և վերադարձնում հարցման առաջին տողի առաջին սյան արժեքը։ Եթե հարցումն արդյունը ոչ մի տող չի պարունակում, ապա ֆունկացիան վերադարձնում է `Empty` արժեք:

## Շարահյուսություն

``` vb
Function ExecuteScalar(ByVal sQueryText As String, _
                       Optional ByVal lQueryTimeOut As Long = -1, _
                       Optional ByVal lConnectionType As ConnectionType = Connection_Main) As Variant
```
|Պարամետր | Նկարագրություն |
|--|--|
| sQueryText | Հարցման տեքստը։ |
| lQueryTimeOut |Հարցման կատարման առավելագույն ժամանակը վայրկյաններով։ Լռությամբ -1՝ ըստ օգտագործողի դրույթների։ |
| lConnectionType | [Միացման տիպը](../../../Constants/ConnectionType.md)։ Լռությամբ արժեքը Connection_Main է։|

## Մեթոդի տիպ

Variant
