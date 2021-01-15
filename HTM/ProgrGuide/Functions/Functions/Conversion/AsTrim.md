---
layout: page
title: "AsTrim ֆունկցիա"
---

# AsTrim ֆունկցիա

Ջնջում է տողի սկզբի, վերջի բացակները, իսկ տեղի միջի իրար հաջորդող բացակները դարձնում է նշված չափի:

Վերադարձնում է սիմվոլային  տող:

## Շարահյուսություն

``` vb
Public Function AsTrim(ByVal sSource As String, Optional ByVal SpaceCount As Integer = 1) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sSource | Մուտքային տողը։ |
| SpaceCount | Մուտքային տողի լեզվի կոդը։ |

## Օրինակներ

``` vb
AsTrim("   Hello  fellow dev!!! ")      ' -> "Hello fellow dev!!!"
AsTrim("   Hello  fellow dev!!! ", 1)   ' -> "Hello fellow dev!!!"
AsTrim("   Hello  fellow dev!!! ", 2)   ' -> "Hello  fellow  dev!!!"
AsTrim("   Hello  fellow dev!!! ", 3)   ' -> "Hello   fellow   dev!!!"
```

## Նկատառումեր

[Տես նաև](../../../functions.html)
