---
layout: page
title: "AsDialog/AddDublCntrl"
---


# AddDublCntrl մեթոդ

[См. также](../AsDialog.md) [Օրինակ](../../Examples/E_AsDialog.html) [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում ավելացնում է մուտքագրման զույգ դաշտ։ Որը տեղակայված է ոչ թե ընթացիկ դաշտի ներքևում , այլ կողքին։ Նրանից ժառանգելով տիպը և անվանումը։ 
## Շարահյուսություն

``` vb
object.AddDublCntrl(DublRekvName, RekvName, [AttribRekv],[ValueRekv], [iSaveValue], [sCaption], [iCommentLen], [sECaption] )
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| DublRekvName | Զույգ դաշտի ներքին անուն։ |
| RekvName | Դաշտի ներքին անուն, որի կողքին կտեղակայվի տվյալ դաշտը։ |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արժեքը։ |
| iSaveValue | Դաշտի արժեքի հիշելու հատկանիշ։ 1 արժեքի դեպքում դաշտի արժեքը հիշվում է կատարելուց հետո, 0-ի դեպքում՝ ոչ։ Լռությամբ արժեքը 1։|
| sCaption | Դաշտի անվանումը, եթե հարկավոր է ռանձին աուն երևա։  |
| iCommentLen | [Folder()](../../Types/Folder().html), [Tree()](../../Types/Tree().html) և [FullTree()](../../Types/FULLTREE().html) տիպերի  մեկնաբանությունների երկարությունը։  |
| sECaption | Դաշտի անվանումը օտար լոզվով, եթե հարկավոր է առանձին աուն երևա։  |


## Նկատառումներ

Ավելացված դաշտը իր տիպը ստանում է RekvName դաշտից։
