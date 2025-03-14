---
layout: page
title: "PostFunctions իրադարձություն"
---

# PostFunctions տվյալների աղբյուրի օգտագործողի կողմից ընդլայնվող իրադարձություն

PostFunctions իրադարձությունը առաջանում է տվյալների աղբյուրի համատեքստի մենյույի ձևավորման ժամանակ` [Functions](FunctionsData.md) իրադարձությունից հետո։

Այս իրադարձության մշակիչը հիմնականում օգտագործվում է համատեքստի մենյուում նոր ֆունկցիաներ ավելացնելու կամ  [Functions](FunctionsData.md)-ի միջոցով ավելացված ֆունկցիաները հեռացնելու համար՝ օգտագործելով [RegistrFunction](../Functions/ICurrentView/RegistrFunction.md), [RegistrDefaultFunction](../Functions/ICurrentView/RegistrDefaultFunction.md), [RegistrNode](../Functions/ICurrentView/RegistrNode.md) և `RemoveRegistrFunction` մեթոդները։

## Շարահյուսություն

``` vb
Public Sub PostFunctions(ByVal oEventArgsDataFunctions As EventArgsDataFunctions) 
    ' statements
End Sub
```

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDataFunctions](UserDefinedHandlers.md#eventargsdatafunctions) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPostFunctionsHandler(ByVal args As EventArgsDataFunctions) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](UserDefinedHandlers.md#մշակիչների-գրանցում):

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDataFunctions`| [EventArgsDataFunctions](UserDefinedHandlers.md#eventargsdatafunctions) դասի օբյեկտ, որը պարունակում է տվյալներ ընթացիկ դիտելու ձևի մասին։|

