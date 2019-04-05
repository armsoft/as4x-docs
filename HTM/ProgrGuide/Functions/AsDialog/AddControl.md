---
layout: page
title: "AsDialog/AddControl"
---


# AddControl մեթոդ

[См. также](../AsDialog.md) [Օրինակ](../../Examples/E_AsDialog.html) [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում ավելացնում է մուտքագրման դաշտ։

## Շարահյուսությոն

``` vb
call object.AddControl(RekvName, CaptionRekv, TypeRekv, [AttribRekv], [<ValueRekv],[ECaptionRekv], [iSaveValue], [iCommentlen])
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| RekvName | Դաշտի ներքին անուն։ |
| CaptionRekv | Դաշտի անվանումը։ |
| TypeRekv | [Դաշտի տիպը](../../types.html)։ |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արծեքը։ |
| ECaptionRekv |Դաշտի օտար լեզվով անվանումը։ |
| iSaveValue |Դաշտի արժեքի հիշելու հատկանիշ։ 1 արժեքի դեպքում դաշտի արժեքը հիշվում է կատարելուց հետո, 0-ի դեպքում՝ ոչ։ Լռությամբ արժեքը 1։ |
| iCommentlen | [Folder()](../../Types/Folder().html), [Tree()](../../Types/Tree().html) և [FullTree()](../../Types/FULLTREE().html) տիպերի  մեկնաբանությունների երկարությունը։ Լռությամբ արժեքը 32։ |


