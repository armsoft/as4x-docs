---
layout: page
title: "AsDbc/OpenDataTable"
---


# AsDbc/OpenDataTable

## OpenDataTable մեթոդ

Տես նաև [Օրինակ](../../Examples/AsDbc.md) [Կիրառվում է](../AsDbc.md)

Կատարում է հարցում և վերադարձնում է տողերի բազմություն (AsDataTable), որոնք պահվում են հիշողության մեջ: Օգտագործվում է ոչ մեծ արդյունք վերադարձնող հարցումների ժամանակ, որոնց ընթացքում կատարվում են այլ հարցումներ, կամ այդ հարցումները օգտագործող ալգորիթմները կախված են տողերի քանակից։


## Շարահյուսություն

``` vb
Function OpenDataTable(ByVal sQueryText As String, _
                       Optional ByVal lQueryTimeOut As Long = -1, _
                       Optional ByVal lConnectionType As ConnectionType = Connection_Main, _
                       Optional ByVal lCursorType As ResultsetTypeConstants = rdOpenForwardOnly) As AsDataTable
```
|Պարամետր | Նկարագրություն |
|--|--|
| QueryText | Հարցման տեքստը։|
| QueryTimeOut | Հարցման TimeOute-ը վայրկյաններով։ Լռությամբ -1 է։ |
| ConnectionType | [Միացման տիպը](../../Constants/ConnectionType.md)։ Լռությամբ Connection_Main է։|
| CursorType |  Հարցման նշորդի բացման եղանակը։ Լռությամբ rdOpenForwardOnly է։ |

## Մեթոդի տիպ

AsDataTable

## Նկատառումներ
 Եթե հարցման տեքստում "max" տիպի սյուներ են select արված, ապա այդ սյուների անունները պետք է select-ի վերջում գրել և lCursorType-ի արժեքը դնել rdOpenKeyset։