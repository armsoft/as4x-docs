---
layout: page
title: "PreAfterProcess իրադարձություն"
---

# PreAfterProcess փաստաթղթի օգտագործողի կողմից ընդլայնվող իրադարձություն

PreAfterProcess իրադարձությունը առաջանում է փաստաթղթի ինտերֆեյսից մշակման ավարտից հետո` [AfterProcess](../AfterProcess.md) իրադարձությունից առաջ։

Իրադարձությունը առաջանում է փաստաթղթի տվյալների պահոցում գրանցման տրանզակցիայի ավարտից հետո։

## Շարահյուսություն

``` vb
Public Sub PreAfterProcess(ByVal օEventArgsDocAfterProcess As EventArgsDocAfterProcess)  
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`օEventArgsDocAfterProcess`| [EventArgsDocAfterProcess](../UserDefinedHandlers.md#eventargsdocafterprocess-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի մասին։|

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDocAfterProcess](../UserDefinedHandlers.md#eventargsdocafterprocess-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPreAfterProcessHandler(ByVal args As EventArgsDocAfterProcess) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](../UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](../UserDefinedHandlers.md#մշակիչների-գրանցում):