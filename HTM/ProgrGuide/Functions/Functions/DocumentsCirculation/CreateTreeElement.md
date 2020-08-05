---
layout: page
title: "CreateTreeElement Ֆունկցիա"
---

# CreateTreeElement Ֆունկցիա

Ստեղծում է նոր [ծառի տարր](../../AsTreeElement.md) օբյեկտ։

## Շարահյուսություն

``` vb
Function CreateTreeElement(ByVal TreeId As String) As AsTreeElement
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| TreeId | Ծառի ներքին անունը, որի տարր ցանկանում ենք ստեղծել։ |


## Նկատառումներ

[Դիտեք նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ կանչվում է CreateTreeElement ֆունկցիան, xTreeEl-ը հղում է նոր ստեղծված ծառի տարրի վրա, որը պահպանելու համար պետք է կանչել [StoreInTree](../../ASDOC/StoreInTree.md) մեթոդը։

``` vb
Set xTreeEl = CreateTreeElement("NbalAcc")
xTreeEl.Com = Doc("Name")
xTreeEl.Ecom = Doc("EName")
xTreeEl.Key = Doc("CODE")
xTreeEl.Parent = Doc("CODEBAL")
Doc.StoreInTree xTreeEl
```
