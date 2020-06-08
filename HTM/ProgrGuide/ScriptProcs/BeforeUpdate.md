---
layout: page
title: "BeforeUpdate իրադարձություն"
---

# BeforeUpdate տվյալների աղբյուրի համակարգային իրադարձություն

[Տես նաև](../ScriptProcs/DataEvents.html) Օրինակ [Կիրառվում է](../ScriptProcs/DataEvents.html)

BeforeUpdate իրադարձությունը առաջանում է թղթապանակում տողի թարմացման կամ նոր տող ավելացման ժամանակ [SQL](../ScriptProcs/SQL.html) իրադարձությունից առաջ։ 

Տվյալների աղբյուրը բացելիս կամ ամբողջական թարմացնելիս իրադարձությունը չի առաջանում։

## Շարահյուսություն

``` vb
Public Sub BeforeUpdate(ByVal vISN as Variant)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| vISN | Փոփովող տողի նույնականացնող համարը, սովարաբար դա փաստաթղթի ISN է։ |
