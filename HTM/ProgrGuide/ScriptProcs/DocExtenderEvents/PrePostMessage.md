---
layout: page
title: "PrePostMessage իրադարձություն"
---

# PrePostMessage փաստաթղթի օգտագործողի կողմից ընդլայնվող իրադարձություն

PrePostMessage իրադարձությունը առաջանում է մի փաստաթղթից մյուսին ծրագրային հաղորդագրություն ([SendMessage](../../Functions/ASDOC/SendMessage.md)) ուղարկելուց` ստացող փաստաթղթի մեջ՝ [PostMessage](../PostMessage.md) իրադարձությունից առաջ։

## Շարահյուսություն

``` vb
Public Sub PrePostMessage(ByVal oEventArgsDocPostMessage As EventArgsDocPostMessage)
    ' statements
End Sub
```

Բաղադրիչներն են՝

|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocPostMessage`| [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) դասի օբյեկտ, որը պարունակում է տվյալներ ուղարկվող հաղորդագրության, ուղարկող և ստացող փաստաթղթերի մասին։|

## Կարևոր 

Մի փաստաթղթից մյուսին ծրագրային հաղորդագրություն ուղարկելիս կանչվում են հետևյալ իրադարձությունները նշված հերթականությամբ՝
* PrePostMessage,
* [PostMessage](../PostMessage.md),
* [PostPostMessage](PostPostMessage.md):

Իրադարձությունները կանչվում են դրանց մշակման դեպքում և յուրաքանչյուր իրադարձության պարամետրերը կանչից հետո փոխանցվում են հաջորդին։

Հաղորդագրությունը ստացող փաստաթուղթը վերևում նշված իրադարձությունների մշակման ավարտից հետո գրանցվում է ([Store](../../Functions/ASDOC/Store.md)) համակարգում՝ ըստ նշված իրադարձություններից վերջին կանչվածի [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) պարամետրի `CheckLevel` հատկությունում նշված [ստուգման մակարդակի](../../Functions/ASDOC/DocCheckLevel.md) (`CheckLevel`-ի -1 արժեքի դեպքում գրանցումը տեղի չի ունենում)։ 

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDocPostMessage](../UserDefinedHandlers.md#eventargsdocpostmessage-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPrePostMessageHandler(ByVal args As EventArgsDocPostMessage) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](../UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](../UserDefinedHandlers.md#մշակիչների-գրանցում):
