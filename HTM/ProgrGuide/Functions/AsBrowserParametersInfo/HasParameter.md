---
layout: page
title: "AsBrowserParametersInfo/HasParameter"
---

# HasParameter հատկություն

[Տես նաև](../AsBrowserParametersInfo.md) Օրինակ [Կիրառվում է](../AsBrowserParametersInfo.md)

Վերադարձնում է երկխոսության մեջ նշված պարամետրի առկայության նշանը։ Եթե պարամետրը առկա է, ապա վերադարձվող արժեքը True է, հակառակ դեպքում՝ False։
Возвращает признак существования заданного параметра в диалоге. Если параметр существует, то возвращаемое значение будет True, в противним случае False.



## Շարահյուսություն

```as4x
object.HasParameter(sName)
```

Բաղադրիչներն են՝

    
| Պարամետր | Նկարագրություն |
|--|--|
| object | [AsBrowserParametersInfo](../AsBrowserParametersInfo.html) օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта [AsBrowserParametersInfo](../AsBrowserParametersInfo.html) |
| sName | Պարամետրի առկայությունը ստուգող նշանի ներքին անուն։ строковое выражение, определяющее идентификатор проверяемого на существование параметра |


