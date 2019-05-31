---
layout: page
title: "AsSqlCommand օբյեկտ"
---

# AsSqlCommand օբյեկտ 

Հանդիսանում է SQL հարցումներ ուղարկելու միջոց:

Օբյեկտը կարելի է ստանալ հետևյալ ֆունկցիայի միջոցով՝ [AsRdoConnection](Functions/AsRdoConnection.html)-ի [CreateSqlCommand](Functions/AsRdoConnection/CreateSqlCommand.html)

| Հատկություններ | Նկարագրություն |
|--|--|
| [CommandText](AsSqlCommand/CommandText.md) | Վերադարձնում կամ նշանակում է հարցման տեքստը։ |
| [CommandType](AsSqlCommand/CommandType.md) | Վերադարձնում կամ նշանակում է հարցման տեսակը։ |
| [Connection](AsSqlCommand/Connection.md) | Վերադարձնում կամ նշանակում է միացման օբյեկտը, որն օգտագործվելու է հարցումն ուղարկելու համար։ |
| [Parameters](AsSqlCommand/Parameters.md) | Վերադարձնում է հարցման պարամետրերի հավաքածուն։ |
| [QueryTimeout](AsSqlCommand/QueryTimeout.md) | Վերադարձնում կամ նշանակում է հարցման TimeOute-ը։ |

| Մեթոդներ | Նկարագրություն |
|--|--|
| [ExecuteNonQuery](AsSqlCommand/ExecuteNonQuery.md) | Կատարում է արդյունք չվերադարձնող հարցում։ Հարցումը կարող է ունենալ Output պարամետրեր: |
| [ExecuteScalar](AsSqlCommand/ExecuteScalar.md) | Կատարում է հարցում և վերադարձնում հարցման առաջին տողի առաջին սյան արժեքը։  |


