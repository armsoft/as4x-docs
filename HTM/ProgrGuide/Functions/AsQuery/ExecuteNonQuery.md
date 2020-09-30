---
layout: page
title: "AsQuery/ExecuteNonQuery"
---

# ExecuteNonQuery մեթոդ

[Օրինակ](../../Examples/E_AsQuery.md) [Կիրառվում է](../AsQuery.md)

Տվյալ մեթոդը է SQL հարցում և ոչինչ չի վերադարձնում։ 
Սովորաբար օգտագործվում է UPDATE, INSERT, DELETE հրամաններ իրականացնելու համար։

## Շարահյուսություն

```vb
object.ExecuteNonQuery([QueryTimeout])
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| object | AsQuery օբյեկտի հղում։ |
| QueryTimeout | Հարցման կատարման առավելագույն ժամանակ, որի լրանալուն պես առաջանում է սխալ։ Լռությամբ ստանում է 30 վրկ. արժեք։ |
