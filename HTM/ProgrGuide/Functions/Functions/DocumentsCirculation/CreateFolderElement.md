---
layout: page
title: "CreateFolderElement ֆունկցիա"
---

# CreateFolderElement ֆունկցիա

Ստեղծում է նոր [թղթապանակի տարր](../../AsFoldElement.md) օբյեկտ:

## Շարահյուսություն

``` vb
Function CreateFolderElement(ByVal FolderID As String) As AsFoldElement
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն | 
|--|--|
| FolderId | Թղթապանակի ներքին անունը: | 

## Նկատառումեր

[См. также](../../../constructors.html)

## Օրինակ
Օրինակում ստեղծում է նոր տարր `NBACC` թղթապանակում:

``` vb
Set xFoldEl = CreateFolderElement("NBACC")
xFoldEl.Key = Doc("NOMDOK")
xFoldEl.Com = Doc("Name")
xFoldEl.Ecom = Doc("EName")
xFoldEl.Spec = Doc.Formatted("MTCCOUNT") & Doc("COMENT") 
xFoldEl.Status = "E"
Doc.StoreInFolder xFoldEl
```
