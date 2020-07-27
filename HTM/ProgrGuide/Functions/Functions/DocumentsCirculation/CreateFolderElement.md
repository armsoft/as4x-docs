---
layout: page
title: "CreateFolderElement ֆունկցիա"
---

# CreateFolderElement ֆունկցիա

Ստեղծում է նոր [թղթապանակի տարր](../../AsFoldElement.md) օբյեկտ:

## Շարահյուսություն

``` vb
Set sNewFolderEl = CreateFolderElement(FolderId)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն | Տիպ |
|--|--|--|
|sNewFolderEl|Փոփոխական,որը հղվում է նոր թղթապանակի տարրի վրա:| AsFolderElement |
|FolderId |Տողային արտահայտություն, որը կլինի ստեղծված թղթապանակի ներքին անունը: | String |

## Նկատառումեր

[См. также](../../../constructors.html)

## Օրինակ
Օրինակում ստեղծում է նոր տարր `"NBACC"` թղթապանակում:

``` vb
Set xFoldEl = CreateFolderElement("NBACC")
xFoldEl.Key = Doc("NOMDOK")
xFoldEl.Com = Doc("Name")
xFoldEl.Ecom = Doc("EName")
xFoldEl.Spec = Doc.Formatted("MTCCOUNT") & Doc("COMENT") 
xFoldEl.Status = "E"
Doc.StoreInFolder xFoldEl
```



