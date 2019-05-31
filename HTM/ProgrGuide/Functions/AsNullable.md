---
layout: page
title: "AsNullable օբյեկտ"
---

# AsNullable օբյեկտ 

Թույլ է տալիս պարզել [ExecuteScalar](../AsSqlCommand/ExecuteScalar.md) ֆունկցիան արժեք վերադարձրել է, թե՞ ոչ` արժեքն օգտագործելուց առաջ։ 
Կարելի է օգտագործել նաև ExecuteScalar-ից անկախ:

Օբյեկտը կարելի է ստանալ հետևյալ ֆունկցիայի միջոցով՝ [ExecuteScalar](../AsSqlCommand/ExecuteScalar.md):

## Օրինակ

Օրինակում command-ը հղվում է [AsSqlCommand](../AsSqlCommand.md) օբյեկտի վրա։

``` vb
Dim oNullable As AsNullable 
Set oNullable = command.ExecuteScalar(Sql_Int)

If oNullable.HasValue Then
	Msgbox "The value returned is: " & CStr(oNullable.Value)
Else
	Msgbox "The function did not return a value"
End If
```

## Օրինակ

``` vb
Set oNullable = new AsNullable

'Այժմ oNullable.HasValue = false և 'oNullable.Value = null
```

| Հատկություններ | Նկարագրություն |
|--|--|
| [HasValue](AsNullable/HasValue.md) | Արդյո՞ք Value հատկությունն արժեք ունի։ |
| [Value](AsNullable/Value.md) | Արժեք. կարելի է օգտագործել, եթե HasValue հատկության արժեքը true է։ |

