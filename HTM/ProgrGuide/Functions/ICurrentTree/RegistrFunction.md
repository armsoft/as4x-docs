---
layout: page
title: "ICurrentTree/RegistrFunction"
---


# RegistrFunction մեթոդ
[См. также](RegistrNode.md) [Օրինակ](../../Examples/E_ICurrentTree_RegistrFunction.html) [Применяется к](../ICurrentTree.md)

Կոնտեկստ մենյուի մեջ ավելացնում է նոր գործողություն։

## Շարահյուսություն

``` vb
object.RegistrFunction(Caption, [SubName], [AccessCode], [ParentId], [ECaption], [FuncParam])
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object |  Ընթացիկ ծառի հղում։|
| Caption|Կոնտեկստ մենյուում գործողության անվանումը։ <br/> "-" արժեքը տալուց ավելացվում է բաժանարար գիծ կոնտեկստ մենյուում։ |
| SubName | Գործողության ընտրման ժամանակ աշխատացվող ֆունկցիայի անունը։ Բաժանարար գծի ավելացնելուց հարկավոր է թողնել դատարկ։ |
| AccessCode | Կարելի է նշել այն ԱՇՏ-ների ցուցակը, որոնցից գոնե մեկի օգտագործողին հասանելի լինելու դեպքում այս գործողությունը հասանելի կդառնա օգտագործողին։ ԱՇՏ-ների ցուցակները բաժանվում են ";" նիշով։ |
| ParentId | [Ենթամենյուի ծնող հանգույցի](RegistrNode.html) ներքին անուն։  |
| ЕCaption |Կոնտեկստ մենյուում գործողության օտար լեզվով անվանումը։ Չլրացնելու դեպքում կերևա հայերենը։|
| FuncParam |  RunSub ֆունկցիային փոխանցվող պարամետր։ |



## Նկատառումներ

Մեթոդը կարելի է կանչել միայն ծառի  [Functions](../../ScriptProcs/FunctionsTree.html) իրադարձության ժամանակ։ Կանչվող `SubName` ֆունկցիան  պետք է նկարագրված լինի  ծառի սկրիպտային մասում։ 

