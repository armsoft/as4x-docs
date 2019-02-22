---
layout: page
title: "AsDialog/AddMultiSelectFolderControl"
---


# AddMultiSelectFolderControl մեթոդ

[См. также](AddMultiSelectViewControl.md) Օրինակ [Применяется к](../Asustpar.md)

Երկխոսության պատուհանում ավելացնում է նոր դաշտ թղթապանակ տիպի, մի քանի տող ընտրելու հնարավորությամբ։ Ցանկը բաղկացած է երկու սյունից՝ կոդ և ավանում։ Ավանում տրվում է համակարգի լեզվի հիման վրա։ 

## Շարահյուսություն

``` vb
object.AddMultiSelectFolderControl (sControlNam,ControlCaption, sControlЕCaption, sFolderId, nKeyLen, [AttribRekv], [ValueRekv])
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| sControlName | Դաշտի ներքին անուն։ |
| sControlCaption | Դաշտի անվանում։ |
| sControlЕCaption | Դաշտի անվանումը օտար լեզվով։ |
| sFolderId | Թղթապանակի ներքին անունը, որի մաքսիմալ երկարությունը 20 նիշ է։ |
| nKeyLen | Թղթապանակի բանալու երկարությունը։ |
| AttribRekv | Դաշտի [հատկանիշներ](Attribute.html "Attribute") (մի քանիսն են լինում)։  |
| ValueRekv | Դաշտի նախնական արժեք։ |


