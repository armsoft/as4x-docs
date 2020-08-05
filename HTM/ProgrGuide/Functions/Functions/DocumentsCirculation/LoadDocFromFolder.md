---
layout: page
title: "LoadDocFromFolder ֆունկցիա"
---

# LoadDocFromFolder ֆունկցիա
[Հատկություններ և մեթոդներ](../../Asdoc.md)

Բեռնում է փաստաթուղթը ըստ թղթապանակի և բանալու։

Տրված ներքին նույնականացման համարով կամ բանալիով թղթապանակի բացակայության դեպքում վերադառնում է Nothing։

## Շարահյուսություն

``` vb
Function LoadDocFromFolder(ByVal FolderId As String, _
                           ByVal Key As String) As AsDoc
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| FolderId | Թղթապանակի ներքին անուն։ |
| Key | Թղթապանակի մեջ տարրի բանալին։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ 

Օրինակի մեջ կանչվում է LoadDocFromFolder ֆունկցիան, որտեղ mDoc-ը հղվում է փաստաթուղթ տիպի օբյեկտի վրա նրա բոլոր հատկություններով և մեթոդներով։
ACCCRLN թղթապանակից բեռնվում է փաստաթուղթ doc("CODE") բանալիով։

``` vb
Set mDoc = LoadDocFromFolder("ACCCRLN", doc("CODE"))
```
