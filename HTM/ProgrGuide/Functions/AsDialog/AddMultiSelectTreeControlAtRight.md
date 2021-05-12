---
layout: page
title: "AsDialog/AddMultiSelectTreeControlAtRight"
---

# AddMultiSelectTreeControlAtRight մեթոդ

[См. также](AddMultiSelectViewControl.md) Օրինակ [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում նշված դաշտի աջից ավելացնում է ծառ տեսակի դաշտ, մի քանի հանգույց ընտրելու հնարավորությամբ։ Անվանումը ստանում է համակարգի լեզվից։ 

## Շարահյուսություն

``` vb
object.AddMultiSelectTreeControlAtRight (sExistingRekvName, sControlName, sControlCaption, sControlЕCaption, sTreeId,[AttribRekv], [ValueRekv], [FullTree], [MultiSelectMode], [iCommentlen], [iLeftPosition], [sShowType], [iCaptionAlign]) 
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| sExistingRekvName | Այն դաշտի ներքին անունը, որի աջ կողմից ավելանալու է նորը։ |
| sControlName | Դաշտի ներքին անուն։ |
| sControlCaption | Դաշտի անվանում։ |
| sControlЕCaption | Դաշտի անվանումը օտար լեզվով:  |
| sTreeId | Ծառ-տեղեկատուի ներքին անունը։  |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արժեք։ |
| FullTree | Թույլատրում է ծառի բոլոր հանգույցների ընտրությունը True արժեքի դեպքում, false-ի դեպքում թույլատրում է միայն տերևների ընտրությունը։ Լռությամբ արժեքը True: |
| MultiSelectMode | Որոշում  է տալիս ծառ-տեղեկատուի տեսքը։ 0-ի դեպքում բացվում է երկու սյունից բաղկացած ցանկ՝ կոդ և անվանում ծառ-տեղեկատուից։ 1-ի դեպքում ծառ տեսակի դաշտ, մի քանի տող ընտրելու հնարավորությամբ։ Լռությամբ արժեքը 0։ |
| iCommentlen | Մեկնաբանության երկարությունը։ Լռությամբ արժեքը 32։ |
| iLeftPosition | Ձախ կողմից դաշտի հեռավորությունը։ Չդնելու դեպքում հաշվարկվում է ավտոմատ։|
| sShowType| Դաշտի տվյալների ներքին տիպը ցուցադրման ժամանակ։ Օգտագործվում է միայն [տողային տիպի](../../Types/C.html) համար։ |
| iCaptionAlign | Որոշում է դաշտի դիրքը ձախ դաշտի նկատմամբ։ 0 արժեքի դեպքում դաշտերը տեղադրվում են քիփ, 1-ի դեպքում տեղադրվում են սովորական դաշտերի հեռավորությամբ։ |

