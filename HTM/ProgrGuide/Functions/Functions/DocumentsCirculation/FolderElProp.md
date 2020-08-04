---
layout: page
title: "FolderElProp ֆունկցիա"
---

## FolderElProp ֆունկցիա

Վերադարձնում է գոյություն ունեցող [թղթապանակի տարր օբյեկտը](../../AsFoldElement.md) ըստ թղթապանակի անվան և բանալու։ 

Օբյեկտի առկա չլինելու դեպքում ֆունկցիան վերադարձնում է `Nothing`։

## Շարահյուսություն

``` vb
Function FolderElProp(ByVal FolderID As String, _
                      ByVal Key As String) As AsFoldElement
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| FolderID | Թղթապանակի ներքին անունը:  |
| Key | Տարրի բանալին թղթապանակում։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Բեռնում է հաշիվը թղթապանակից, ապա կարդում նրա անունը և արժույթը։

``` vb
Set xFold = FolderElProp("NBACC", Doc("NBACC"))
accountName = xFold.Com
AccountCur = Mid(xFold.Spec, 1, 3)
```
