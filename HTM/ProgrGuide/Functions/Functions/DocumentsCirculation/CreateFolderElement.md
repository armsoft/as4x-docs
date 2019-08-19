---
layout: page
title: "CreateFolderElement"
---

## CreateFolderElement  մեթոդ
Ստեղծում է նոր [թղթապանակի տարր](../../AsFoldElement.md) օբյեկտ:

## Շարահյուսություն`

```vb
Set sNewFolderEl = CreateFolderElement(FolderId)
```
Բաղադրիչներն են`

    
    
| Պարամետր | Նկարագրություն | Տիպ |
|--|--|--|
|sNewFolderEl|Փոփոխական,որը հղվում է նոր թղթապանակ տարրի վրա:| AsFolderElement |
|FolderId    |Տողային արտահայտություն,որը կլինի ստեղծված թղթապանակի ներքին անունը: Պարտադիր պարամետր:| String |



## Նկատառումեր`

[См. также](../../../constructors.html)

## Օրինակ
Օրինակում ստեղծում է նոր տարր `"NBACC"` թղթապանակում:

```vb
Set xFoldEl = CreateFolderElement("NBACC")
xFoldEl.Com = Doc("Name")
xFoldEl.Ecom = Doc("EName")
xFoldEl.Spec = Doc("NOMDOK") & Doc.Formatted("MTCCOUNT") & Doc("COMENT") 
xFoldEl.Status = "E"
Doc.StoreInFolder xFoldEl
```


