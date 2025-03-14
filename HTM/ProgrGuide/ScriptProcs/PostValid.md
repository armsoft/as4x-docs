---
layout: page
title: "PostValid իրադարձություն"
---

# PostValid տվյալների աղբյուրի օգտագործողի կողմից ընդլայնվող իրադարձություն

PostValid իրադարձությունը առաջանում է տվյալների աղբյուրի յուրաքանչյուր տողի ձևավորման ժամանակ՝ [Valid](Valid_Data.md) իրադարձությունից հետո։ 

Իրադարձության մշակիչի միջոցով հնարավոր է վերասահմանել, արդյոք ընթացիկ տողը պետք է ընդգրկվի տվյալների աղբյուրի տողերի վերջնական ցուցակում:

## Շարահյուսություն

``` vb
Public Sub PostValid(ByVal oEventArgsDataValid As EventArgsDataValid)
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`oEventArgsDataValid` | [EventArgsDataValid](UserDefinedHandlers.md#eventargsdatavalid) դասի օբյեկտ, որը պարունակում է [Valid](Valid_Data.md) իրադարձության ընթացքում ձևավորված տվյալները: Դասի `IsValid` տրամաբանական տիպի հատկության միջոցով հնարավոր է վերասահմանել, արդյոք ընթացիկ տողը պետք է ընդգրկվի տվյալների աղբյուրի տողերի վերջնական ցուցակում: `False` արժեքի դեպքում տողի համար չի առաջանա [OnEachRow](OnEachRow.md) իրադարձությունը և չեն հաշվարկվի հաշվարկային սյունակները։|

## Նկատառումներ

Իրադարձությունը մշակելիս մեթոդը հնարավոր է սահմանել կամայական անվանումով՝ պայմանով, որ կընդունի [EventArgsDataValid](UserDefinedHandlers.md#eventargsdatavalid) տիպի պարամետր։

**Օրինակ**

``` vb
Public Sub MyPostValidHandler(ByVal args As EventArgsDataValid) 
    ' statements
End Sub
```

Իրադարձության մշակիչի ավելացման եղանակին ծանոթանալու համար տե՛ս 
* [Լրացուցիչ մշակիչների նկարագրություն](UserDefinedHandlers.md),
* [Լրացուցիչ մշակիչների ավելացում](UserDefinedHandlers.md#մշակիչների-գրանցում):



