---
layout: page
title: "AsModalBrowser/LookUpSoftMode"
---


# LookUpSoftMode<br>

[См. также](LookUpValue.md) Օրինակ [Применяется к](../AsModalBrowser.md)

Վերադարձնում կամ նշանակում է եղանակը, որով կատարվելու է արժեքի փնտրում պատուհանի ակտիվացման ժամանակ նախնական տող ընտրելու համար։ 

* `True` արժեքի դեպքում փնտրումը կատարվում է [LookUpColumn](LookUpColumn.md) սյունակում [LookUpValue](LookUpValue.md) արժեքի առաջին նիշերի համընկնությամբ։ 
* `False` արժեքի դեպքում փնտրումը կատարվում է [LookUpColumn](LookUpColumn.md) սյունակում [LookUpValue](LookUpValue.md) արժեքի հետ հավասարությամբ։ 

## Շարահյուսություն

``` vb
object.LookUpSoftMode = [bLookUpSoftMode]
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | Ցուցակի մոդալ ցուցադրիչի հղում։ |
| bLookUpSoftMode | նոր արժեք։ |


## Տվյալի տիպ

Տրամաբանական 