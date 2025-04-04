---
layout: page
title: "OnConfirmDCR իրադարձություն"
---

# OnConfirmDCR փաստաթղթի համակարգային իրադարձություն

OnConfirmDCR իրադարձությունը առաջանում է փաստաթղթի փոփոխման հայտի մշակման ընթացքում՝ `ChangeRequest` իրադարձությունից հետո։

## Շարահյուսություն

``` vb
Public Sub OnConfirmDCR(ByVal oEventArgsDocOnConfirmDCR As EventArgsDocOnConfirmDCR)  
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`օEventArgsDocOnConfirmDCR`| [EventArgsDocOnConfirmDCR](UserDefinedHandlers.md#eventargsdoconconfirmdcr-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի և փոփոխման հայտի մասին։|


## Կարևոր

Փաստաթղթի փոփոխման հայտը հաստատելիս կանչվում են հետևյալ իրադարձությունները նշված հերթականությամբ՝  
* `ChangeRequest`,
* [PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md),
* [OnConfirmDCR](OnConfirmDCR.md),
* [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md):

Իրադարձությունները կանչվում են դրանց մշակման դեպքում և յուրաքանչյուր իրադարձության պարամետրերը կանչից հետո փոխանցվում են հաջորդին։

[PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md), [OnConfirmDCR](OnConfirmDCR.md), [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md) իրադարձությունները կանչվում են միայն այն դեպքում, երբ `ChangeRequest` իրադարձությունից ստացված [EventArgsDocOnConfirmDCR](UserDefinedHandlers.md#eventargsdoconconfirmdcr-class) պարամետրի [DCR.State](../Functions/DocChangeRequest.md/State.md) դաշտի արժեքը 3 է։

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDocOnConfirmDCR](UserDefinedHandlers.md#eventargsdoconconfirmdcr-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyOnConfirmDCRHandler(ByVal args As EventArgsDocOnConfirmDCR) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](UserDefinedHandlers.md#մշակիչների-գրանցում):