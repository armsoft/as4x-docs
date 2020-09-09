---
layout: page
title: "CreateCallBackOnTimer ֆունկցիա"
---

# CreateCallBackOnTimer ֆունկցիա

Ստեղծում է [ժամաչափով պարբերաբար ֆունկցիա աշխատացնեղ օբյեկտ](../AsCallBackOnTimer.md)։

## Շարահյուսություն

```vb
Function CreateCallBackOnTimer(ByVal ModName As String, _
                               ByVal SubName As String, _
                      Optional ByVal SubNameOnStop As String = "") As AsCallBackOnTimer
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| ModName | Ֆունկցիան պարունակող մոդուլի անունը։  |
| SubName | Ֆունկցիայի անունը, որը աշխատելու է ժամաչափով։ |
| SubNameOnStop | Այն ֆունկցիայի անունը, որ աշխատում է պրոցեսի դադարեցման ժամանակ։ |

## Նկատառումներ

[Տես նաև](../../constructors.html)
