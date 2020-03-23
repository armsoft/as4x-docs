---
layout: page
title: "dbc.ExecuteReader"
---

# dbc.ExecuteReader

Տես նաև [Օրինակ](../../../Examples/AsDbc.md)

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
| lQueryTimeOut | Հարցման կատարման առավելագույն ժամանակը վայրկյաններով։ Լռությամբ -1՝ ըստ օգտագործողի դրույթների։ |
| lConnectionType | [Միացման տիպը](../../../Constants/ConnectionType.md): Լռությամբ արժեքը Connection_Main է։|
| lCursorType |  Հարցման նշորդի բացման եղանակը։ Նախատեսված է միայն հին RDO-ով աշխատանքի համար։ Թույլատրելի է փոխանցել միայն `rdOpenKeyset` ըստ անհրաժեշտության։ |

## Մեթոդի տիպ

AsSqlResultset

## Նկատառումներ
 Եթե հարցումը վերադարձնում է "max" տիպի սյուներ, ապա այդ սյուների անունները պետք է գրվեն վերադարձվող սյուների վերջում և `lCursorType`-ի արժեքը դնել rdOpenKeyset (սա անհրաժեշտ է հին RDO ռեժիմով աշխատելու համար)։
