---
layout: page
title: "dbc.OpenDataTable"
---


# dbc.OpenDataTable

Տես նաև [Օրինակ](../../../Examples/AsDbc.md)

Կատարում է հարցումը և վերադարձնում է տողերի բազմություն (AsDataTable), որոնք պահվում են հիշողության մեջ: Օգտագործվում է ոչ մեծ արդյունք վերադարձնող հարցումների ժամանակ, որոնց ընթացքում կատարվում են այլ հարցումներ, կամ այդ հարցումները օգտագործող ալգորիթմները կախված են տողերի քանակից։


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
| QueryTimeOut | Հարցման կատարման առավելագույն ժամանակը վայրկյաններով։ Լռությամբ -1՝ ըստ օգտագործողի դրույթների։ |
| ConnectionType | [Միացման տիպը](../../../Constants/ConnectionType.md)։ Լռությամբ Connection_Main է։|
| CursorType |  Հարցման նշորդի բացման եղանակը։ Նախատեսված է միայն հին RDO-ով աշխատանքի համար։ Թույլատրելի է փոխանցել միայն `rdOpenKeyset` ըստ անհրաժեշտության։ |

## Մեթոդի տիպ

AsDataTable

## Նկատառումներ
 Եթե հարցումը վերադարձնում է "max" տիպի սյուներ, ապա այդ սյուների անունները պետք է գրվեն վերադարձվող սյուների վերջում և `lCursorType`-ի արժեքը դնել rdOpenKeyset (սա անհրաժեշտ է հին RDO ռեժիմով աշխատելու համար)։