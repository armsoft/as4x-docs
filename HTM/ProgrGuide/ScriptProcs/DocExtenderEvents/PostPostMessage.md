---
layout: page
title: "PostPostMessage իրադարձություն"
---

# PostPostMessage փաստաթղթի օգտագործողի կողմից ընդլայնվող իրադարձություն

PostPostMessage իրադարձությունը առաջանում է մի փաստաթղթից մյուսին ծրագրային հաղորդագրություն ([SendMessage](../../Functions/ASDOC/SendMessage.md)) ուղարկելուց՝ ստացող փաստաթղթի մեջ՝ [PostMessage](../PostMessage.md) իրադարձությունից հետո։

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

**Կարևոր** 

Մի փաստաթղթից մյուսին ծրագրային հաղորդագրություն ուղարկելիս կանչվում են հետևյալ իրադարձությունները նշված հերթականությամբ՝ (**իրադարձությունները կանչվում են դրանց մշակման դեպքում**)
* [PrePostMessage](PrePostMessage.md),
* [PostMessage](../PostMessage.md),
* PostPostMessage:

Նշված իրադարձություններից յուրաքանչյուրի պարամետրերը կանչից հետո փոխանցվում են հաջորդ իրադարձությանը։

Հաղորդագրությունը ստացող փաստաթուղթը վերևում նշված իրադարձությունների մշակման ավարտից հետո գրանցվում է ([Store](../../Functions/ASDOC/Store.md)) համակարգում՝ ըստ նշված իրադարձություններից վերջին կանչվածի [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) պարամետրի `CheckLevel` հատկությունում նշված [ստուգման մակարդակի](../../Functions/ASDOC/DocCheckLevel.md) (`CheckLevel`-ի -1 արժեքի դեպքում գրանցումը տեղի չի ունենում)։ 

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPostPostMessageHandler(ByVal args As EventArgsDocPostMessage) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](../UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](../UserDefinedHandlers.md#մշակիչների-գրանցում):
