---
layout: page
title: "OverrideProcessingMode իրադարձություն"
---

# OverrideProcessingMode փաստաթղթի համակարգային իրադարձություն

OverrideProcessingMode իրադարձությունը նախատեսված է փաստաթղթի [գրանցման](../Functions/ASDOC/CheckAndStore.md), [հեռացման](../Functions/Functions/DocumentsCirculation/DeleteDoc.md), փոփոխման հայտի հաստատման և մերժման ժամանակ կատարման ռեժիմը փոփոխելու համար։ 

Կատարման ռեժիմը փոխելու համար անհրաժեշտ է իրադարձության [EventArgsDocOverrideProcMode](UserDefinedHandlers.md#eventargsdocoverrideprocmode-class) պարամետրի `ProcessingMode` հատկությանը վերագրել անհրաժեշտ արժեքը։

## Շարահյուսություն

```vb
Public Sub OverrideProcessingMode(ByVal oEventArgsDocOverrideProcMode As EventArgsDocOverrideProcMode)
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocOverrideProcMode`| [EventArgsDocOverrideProcMode](UserDefinedHandlers.md#eventargsdocoverrideprocmode-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի և ընթացիկ կատարման ռեժիմի մասին։ |