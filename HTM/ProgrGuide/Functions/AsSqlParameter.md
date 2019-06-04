---
layout: page
title: "AsSqlParameter օբյեկտ"
---

# AsSqlParameter օբյեկտ 

Անհրաժեշտ է [AsSqlCommand](AsSqlCommand.md) օբյեկտի պարամետրերի հետ աշխատելու համար։

Օբյեկտը կարելի է ստանալ հետևյալ ֆունկցիաների միջոցով ՝  [AsSqlParameterCollection](../Functions/AsSqlParameterCollection.md) դասի 
[Add](AsSqlParameterCollection/Add.md) և [Item](AsSqlParameterCollection/Item.md): Լռելյայն հատկությունը [Value](AsSqlParameter/Value.md)-ն է։

## Օրինակ

Օրինակում command-ը հղվում է [AsSqlCommand](AsSqlCommand.md) օբյեկտի վրա։

``` vb
Dim oParam as AsSqlParameter
Set oParam = command.Parameters.Add("@Param1",Sql_Int,1,vbParamDirInput)
```

## Օրինակ


``` vb
Dim oParam as AsSqlParameter
Set oParam = command.Parameters.Item("@Param1")
```


| Հատկություններ | Նկարագրություն |
|--|--|
| [DecimalDigits](AsSqlParameter/DecimalDigits.md) | Վերադարձնում կամ նշանակում է պարամետրի արժեքի տասնորդական թվանշանների քանակը։ Առայժմ չի օգտագործվում։ |
| [Direction](AsSqlParameter/Direction.md) | Վերադարձնում կամ նշանակում է պարամետրի ուղղությունը։ |
| [MaxLength](AsSqlParameter/MaxLength.md) | Վերադարձնում կամ նշանակում է պարամետրի արժեքի մաքսիմալ երկարությունը։ |
| [Name](AsSqlParameter/Name.md) | Վերադարձնում կամ նշանակում է պարամետրի անունը։ |
| [SqlType](AsSqlParameter/SqlType.md) | Վերադարձնում կամ նշանակում է պարամետրի տիպը։ |
| [Value](AsSqlParameter/Value.md) | Վերադարձնում կամ նշանակում է պարամետրի արժեքը։ |

