---
layout: page
title: "CreateTreeElement"
---

# CreateTreeElement Ֆունկցիա

[**Հատկություններ Մեթոդներ**](../../AsTreeElement.md)

Ստեղծում է նոր ծառի տարր։

## Շարահյուսություն

``` vb
Set sNewTreeEl = CreateTreeElement (TreeId)
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| sNewTreeEl | Նոր ստեղծված ծառի տարրի հղում |
| TreeId | Ծառի ներքին անունը, որի տարր ցանկանում ենք ստեղծել |


## Նկատառումներ

[Դիտեք նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ կանչվում է CreateTreeElement ֆունկցիան, 
xTreeEl-ը հղում է նոր ստեղծված ծառի տարրի վրա, 
որը պահպանելու համար պետք է կանչել [StoreInTree](../../ASDOC/StoreInTree.md) մեթոդը 


``` vb
Set xTreeEl = CreateTreeElement("NbalAcc")
xTreeEl.Com = Doc("Name")
xTreeEl.Ecom = Doc("EName")
xTreeEl.Key = Doc("CODE")
xTreeEl.Parent = Doc("CODEBAL")
Doc.StoreInTree xTreeEl
```