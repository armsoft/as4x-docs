---
layout: page
title: "PostPostMessage իրադարձություն"
---

# PostPostMessage փաստաթղթի օգտագործողի կողմից ընդլայնվող իրադարձություն

PostPostMessage իրադարձությունը առաջանում է մի փաստաթղթից մյուսին ծրագրային հաղորդագրություն ([SendMessage](../../Functions/ASDOC/SendMessage.md)) ուղարկելուց՝ ստացող փաստաթղթի մեջ՝ [PostMessage](../PostMessage.md) իրադարձությունից հետո։

Ստացող փաստաթուղթը կրկին գրանցվում ([Store](../../Functions/ASDOC/Store.md)) է համակարգում իրադարձության մշակումից հետո ըստ վերադարձվող `iCheckLevel`՝ [փաստաթղթի ստուգման մակարդակի](../../Functions/ASDOC/DocCheckLevel.md)։

## Շարահյուսություն

``` vb
Public Sub PostPostMessage(ByVal oEventArgsDocPostMessage As EventArgsDocPostMessage)
    ' statements
End Sub
```

Բաղադրիչներն են՝

|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocPostMessage`| [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) դասի օբյեկտ, որը պարունակում է տվյալներ ուղարկվող հաղորդագրության, ուղարկող և ստացող փաստաթղթերի մասին։|

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPostPostMessageHandler(ByVal args As EventArgsDocPostMessage) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](UserDefinedHandlers.md#մշակիչների-գրանցում):
