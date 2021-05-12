---
layout: page
title: "AsDialog/AddControlAtRight"
---


# AddControlAtRight մեթոդ

[См. также](../AsDialog.md) Օրինակ [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում նշված դաշտի աջից ավելացնում է նոր մուտքագրման դաշտ։

## Շարահյուսություն

``` vb
object.AddControlAtRight(RekvName, ExistingRekvName, TypeRek[AttribRekv], [ValueRekv],[iSaveValue], [CaptionRekv], [ECaptionRekv], [LabelWidth] [iCommentlen],[iLeftPosition], [sShowType], [iCaptionAlign], [bDubleControl] 
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| RekvName |Դաշտի ներքին անուն։ |
| ExistingRekvName | Այն դաշտի ներքին անունը, որի աջ կողմից ավելանալու է նորը։ |
| TypeRekv | [Դաշտի տիպը](../../types.html)։ |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արժեքը։ |
| iSaveValue |Դաշտի արժեքի հիշելու հատկանիշ։ 1 արժեքի դեպքում դաշտի արժեքը հիշվում է կատարելուց հետո, 0-ի դեպքում՝ ոչ։ Լռությամբ արժեքը 1։ |
| CaptionRekv | Դաշտի անվանումը։ |
| ECaptionRekv |Դաշտի օտար լեզվով անվանումը։ |
| LabelWidth | Դաշտի անվանման լայնությունը։ Լռությամբ արժեքը 0։ |
| iCommentlen | [Folder()](../../Types/Folder.html), [Tree()](../../Types/Tree.html) և [FullTree()](../../Types/FULLTREE.html) տիպերի  մեկնաբանությունների երկարությունը։ Լռությամբ արժեքը 32։ |
| iLeftPosition | Ձախ կողմից դաշտի հեռավորությունը։ Չդնելու դեպքում հաշվարկվում է ավտոմատ։|
| sShowType| Դաշտի տվյալների ներքին տիպը ցուցադրման ժամանակ։ Օգտագործվում է միայն [տողային տիպի](../../Types/C.html) համար։ |
| iCaptionAlign | Որոշում է դաշտի դիրքը ձախ դաշտի նկատմամբ։ 0 արժեքի դեպքում դաշտերը տեղադրվում են քիփ, 1-ի դեպքում տեղադրվում են սովորական դաշտերի հեռավորությամբ։ |
| bDubleControl | Նշում է, որ այս դաշտը նախորդող դաշտի զույգն է , ժառանգում է նախորդող դաշտի տիպը և անվանումը։ Լռությամբ արժեքը՝ False։ |




