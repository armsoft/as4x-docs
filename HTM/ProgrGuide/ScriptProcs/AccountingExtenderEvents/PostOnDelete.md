---
layout: page
title: "PostOnDelete իրադարձություն"
---

# PostOnDelete հաշվառման օգտագործողի կողմից ընդլայնվող իրադարձություն

PostOnDelete իրադարձությունը առաջանում է [HiDelete](../../Functions/ASDOC/HiDelete.md) մեթոդով հաշվառումները ջնջելիս կամ փաստաթուղթը [DeleteDoc](../../Functions/Functions/DocumentsCirculation/DeleteDoc.md) ֆունկցիայով իր հաշվառումների հետ ջնջելիս` [OnDelete](../OnDelete.md) իրադարձությունից հետո։

## Շարահյուսություն

``` vb
Public Sub PostOnDelete(ByVal օEventArgsAccountingOnDelete As EventArgsAccountingOnDelete) 
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`օEventArgsAccountingOnDelete`| [EventArgsAccountingOnDelete](../UserDefinedHandlers.md#eventargsaccountingondelete-class) դասի օբյեկտ, որը պարունակում է տվյալներ հեռացվող հաշվառման մասին։|

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsAccountingOnDelete](../UserDefinedHandlers.md#eventargsaccountingondelete-class) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPostOnDeleteHandler(ByVal args As EventArgsAccountingOnDelete) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](UserDefinedHandlers.md#մշակիչների-գրանցում):



