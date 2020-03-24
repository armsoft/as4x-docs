---
layout: page
title: "dbc.ExecuteNonQuery"
---


# dbc.ExecuteNonQuery 

Տես նաև [Օրինակ](../../../Examples/AsDbc.md)

Կատարում է արդյունք չվերադարձնող հարցում։
Սովորաբար օգտագործվում է UPDATE, INSERT, DELETE տիպի հարցումներ կատարելիս։
Վերադարձնում է բոլոր batch-երի տողերի քանակի գումարը:

## Շարահյուսություն

``` vb
Function ExecuteNonQuery(ByVal sQueryText As String, _
                         Optional ByVal lQueryTimeOut As Long = -1, _
                         Optional ByVal lConnectionType As ConnectionType = Connection_Main) As Long
```

Բաղադրիչներն են՝

|Պարամետր | Նկարագրություն |
|--|--|
| sQueryText | Հարցման տեքստը։ |
| lQueryTimeOut | Հարցման կատարման առավելագույն ժամանակը վայրկյաններով։ Լռությամբ -1՝ ըստ օգտագործողի դրույթների։ |
| lConnectionType | [Միացման տիպը](../../../Constants/ConnectionType.md)։ Լռությամբ Connection_Main է։|

## Մեթոդի տիպ

Long
