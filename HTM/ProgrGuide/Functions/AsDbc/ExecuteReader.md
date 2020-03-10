---
layout: page
title: "AsDbc/ExecuteReader"
---

# AsDbc/ExecuteReader

## ExecuteReader մեթոդ

Տես նաև [Օրինակ](../../Examples/AsDbc.md) [Կիրառվում է](../AsDbc.md)

Կատարում է հարցում և վերադարձնում է տողերի բազմություն (AsSqlResultset)։
Օգտագործվում  է մեծ արդյունք վերադարձնող հարցումների ժամանակ, որոնց ընթացքում այլ հարցումներ չեն կատարվում, և այդ հարցումները օգտագործող ալգորիթմները կախված չեն տողերի քանակից։

## Շարահյուսություն

``` vb
Function ExecuteReader(ByVal sQueryText As String, _
                       Optional ByVal lQueryTimeOut As Long = -1, _
                       Optional ByVal lConnectionType As ConnectionType = Connection_Main, _
                       Optional ByVal lCursorType As ResultsetTypeConstants = rdOpenForwardOnly) As AsSqlResultset
```
|Պարամետր | Նկարագրություն |
|--|--|
| sQueryText | Հարցման տեքստը։ |
| lQueryTimeOut | Հարցման TimeOute-ը վայրկյաններով։ Լռությամբ արժեքը -1 է։ |
| lConnectionType | [Միացման տիպը](../../Constants/ConnectionType.md): Լռությամբ արժեքը Connection_Main է։|
| lCursorType |  Հարցման նշորդի բացման եղանակը։ Լռությամբ արժեքը rdOpenForwardOnly է։ |

## Մեթոդի տիպ

AsSqlResultset

## Նկատառումներ
 Եթե հարցման տեքստում "max" տիպի սյուներ են select արված, ապա այդ սյուների անունները պետք է select-ի վերջում գրել և lCursorType-ի արժեքը դնել rdOpenKeyset (սա անհրաժեշտ է rdo ռեժիմով աշխատելու համար)։
