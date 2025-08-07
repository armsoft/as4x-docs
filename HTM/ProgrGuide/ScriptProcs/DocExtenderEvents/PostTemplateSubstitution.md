---
layout: page
title: "PostTemplateSubstitution իրադարձություն"
---

# PostTemplateSubstitution փաստաթղթի օգտագործողի կողմից ընդլայնվող իրադարձություն

PostTemplateSubstitution իրադարձությունը առաջանում է փաստաթղթի տպելու ձևանմուշը ձևավորելիս՝ [TemplateSubstitution](../TemplateSubstitution.md) իրադարձությունից հետո։ 

## Շարահյուսություն

``` vb
Public Sub PostTemplateSubstitution(ByVal oEventArgsDocTemplateSubst As EventArgsDocTemplateSubst)  
    ' statements
End Sub
```

Բաղադրիչներն են՝

|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDocTemplateSubst`| [EventArgsDocTemplateSubst](../UserDefinedHandlers.md#eventargsdoctemplatesubst-class) դասի օբյեկտ։|

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDocTemplateSubst](../UserDefinedHandlers.md#eventargsdoctemplatesubst-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPostTemplateSubstitutionHandler(ByVal args As EventArgsDocTemplateSubst) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](../UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](../UserDefinedHandlers.md#մշակիչների-գրանցում):