---
layout: page
title: "ChangeRequest իրադարձություն"
---

# ChangeRequest փաստաթղթի համակարգային իրադարձություն

ChangeRequest իրադարձությունը առաջանում է փաստաթղթի փոփոխման հայտի մշակման ընթացքում։

Իրադարձության մշակիչում անհրաժեշտ է վերադարձնել Long տիպի արժեք, որը որոշում է փաստաթղթի փոփոխման հայտի վիճակը իրադարձության ավարտից հետո: Վերադարձվող վիճակների բազմության համար սահմանված են հաստատուններ, որոնք ներկայացված են ստորև՝

* `DCR_Result_NotCreate` (**0**) - փոփոխման հայտը ստեղծվել է,
* `DCR_Result_CreateConfirmed` (**1**) - փոփոխման հայտը ստեղծվել և հաստատվել է,
* `DCR_Result_CreateNotConfirmed` (**2**) - փոփոխման հայտը ստեղծվել է և չի հաստատվել,
* `DCR_Result_CreateConfirmedWithOnConfirm` (**3**) - փոփոխման հայտը ստեղծվել և ուղարկվել է կրկնակի հաստատման [PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md), [OnConfirmDCR](OnConfirmDCR.md), [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md) իրադարձությունների միջոցով։

## Շարահյուսություն

``` vb
Public Function ChangeRequest(ByVal dcrChangeRequest As DocChangeRequest) As Long 
    ' statements
End Function
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`dcr`| [Փաստաթղթի փոփոխման հայտը](../Functions/DocChangeRequest.md/DCR.md):|

## Կարևոր

Փաստաթղթի փոփոխման հայտը հաստատելիս կանչվում են հետևյալ իրադարձությունները նշված հերթականությամբ՝  
* [ChangeRequest](ChangeRequest.md),
* [PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md),
* [OnConfirmDCR](OnConfirmDCR.md),
* [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md):

Իրադարձությունները կանչվում են դրանց մշակման դեպքում և յուրաքանչյուր իրադարձության պարամետրերը կանչից հետո փոխանցվում են հաջորդին։

[PreOnConfirmDCR](DocExtenderEvents/PreOnConfirmDCR.md), [OnConfirmDCR](OnConfirmDCR.md), [PostOnConfirmDCR](DocExtenderEvents/PostOnConfirmDCR.md) իրադարձությունները կանչվում են միայն այն դեպքում, երբ `ChangeRequest` իրադարձության վերադարձրած արժեքը 3 է` **DCR_Result_CreateConfirmedWithOnConfirm**։