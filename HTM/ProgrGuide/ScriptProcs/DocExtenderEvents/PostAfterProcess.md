---
layout: page
title: "PostAfterProcess իրադարձություն"
---

# PostAfterProcess փաստաթղթի օգտագործողի կողմից ընդլայնվող իրադարձություն

PostAfterProcess իրադարձությունը առաջանում է փաստաթղթի ինտերֆեյսից մշակման ավարտից հետո` [AfterProcess](../AfterProcess.md) իրադարձությունից հետո։

Իրադարձությունը առաջանում է փաստաթղթի տվյալների պահոցում գրանցման տրանզակցիայի ավարտից հետո։

## Շարահյուսություն

``` vb
Public Sub PostAfterProcess(ByVal օEventArgsDocAfterProcess As EventArgsDocAfterProcess)  
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
Public Sub MyPostAfterProcessHandler(ByVal args As EventArgsDocAfterProcess) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](UserDefinedHandlers.md#մշակիչների-գրանցում):