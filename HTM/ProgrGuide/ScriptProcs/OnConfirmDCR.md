---
layout: page
title: "OnConfirmDCR իրադարձություն"
---

# OnConfirmDCR փաստաթղթի համակարգային իրադարձություն

OnConfirmDCR իրադարձությունը առաջանում է փաստաթղթի փոփոխման հայտի մշակման ընթացքում՝ `ChangeRequest` իրադարձությունից հետո։

## Շարահյուսություն

``` vb
Public Sub OnConfirmDCR(ByVal dcr As DocChangeRequest)  
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`dcr`| [Փաստաթղթի փոփոխման հայտը](../Functions/DocChangeRequest.md/DCR.md):|

## Կարևոր

Փաստաթղթի փոփոխման հայտը հաստատելիս կանչվում են հետևյալ իրադարձությունները նշված հերթականությամբ՝  
* `ChangeRequest`,
* [PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md),
* [OnConfirmDCR](OnConfirmDCR.md),
* [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md):

Իրադարձությունները կանչվում են դրանց մշակման դեպքում և յուրաքանչյուր իրադարձության պարամետրերը կանչից հետո փոխանցվում են հաջորդին։

[PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md), [OnConfirmDCR](OnConfirmDCR.md), [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md) իրադարձությունները կանչվում են միայն այն դեպքում, երբ `ChangeRequest` իրադարձությունից ստացված [DocChangeRequest](../Functions/DocChangeRequest.md/DCR.md) պարամետրի [State](../Functions/DocChangeRequest.md/State.md) հատկության արժեքը 3 է։