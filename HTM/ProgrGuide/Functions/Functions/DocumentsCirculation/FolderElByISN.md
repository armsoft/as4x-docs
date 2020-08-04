---
layout: page
title: "FolderElByISN ֆունկցիա"
---

## FolderElByISN ֆունկցիա

Վերադարձնում է գոյություն ունեցող [թղթապանակի տարր օբյեկտը](../../AsFoldElement.md) ըստ թղթապանակի անվան և փաստաթղթի ISN-ի։ 

Օբյեկտի առկա չլինելու դեպքում ֆունկցիան վերադարձնում է `Nothing`։

## Շարահյուսություն

``` vb
Function Util.FolderElByISN(ByVal FolderID As String, ByVal ISN As Long) As AsFoldElement
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| FolderID | Թղթապանակի ներքին անունը:  |
| ISN | Տարրի փաստաթղթի ISN-ը թղթապանակում։ |

## Նկատառումներ

[Տես նաև](../../../Database/Folders.html)

## Օրինակ

Բեռնում է հաշիվը թղթապանակից, ապա կարդում նրա անունը և արժույթը։

```vb
Set xFold = Util.FolderElByISN("NBACC", Doc.ParentISN)
accountName = xFold.Com
accountCur = Mid(xFold.Spec, 1, 3)
```
