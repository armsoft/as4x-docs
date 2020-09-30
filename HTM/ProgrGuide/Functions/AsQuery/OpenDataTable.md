---
layout: page
title: "AsQuery/OpenDataTable"
---

# OpenDataTable մեթոդ

[Օրինակ](../../Examples/E_AsQuery.md) [Կիրառվում է](../AsQuery.md)

Կատարում է SQL հարցումը և վերադարձնում է տողերի բազմություն (AsDataTable), որոնք պահվում են հիշողության մեջ:

## Շարահյուսություն

```vb
Set dt = object.OpenDataTable([QueryTimeout], [ConnectionType], [CursorType])
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| dt | AsDataTable-ի տիպի օբյեկտ։ |
| object | AsQuery օբյեկտի հղում։ |
| QueryTimeout | Հարցման կատարման առավելագույն ժամանակ, որի լրանալուն պես առաջանում է սխալ։ Լռությամբ ստանում է 30 վրկ. արժեք։ |
| ConnectionType | [Միացման տիպը](../../Constants/ConnectionType.md)։ Լռությամբ արժեքը Connection_Main է։|
| CursorType | Հարցման նշորդի բացման եղանակը։ Նախատեսված է միայն հին RDO-ով աշխատանքի համար։ Թույլատրելի է փոխանցել միայն `rdOpenKeyset` ըստ անհրաժեշտության։ |
