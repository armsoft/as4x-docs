---
layout: page
title: "TreeElProp ֆունկցիա"
---

## TreeElProp ֆունկցիա



վերադարձնում է [ծառի տարր տիպի օբյեկտ](../../AsTreeElement.md) ըստ ծառի անվան և հանգույցի կոդի։ 

Եթե օբյեկտը առկա չի, ապա ֆունկցիան վերադարձնում է Nothing։

## Շարահյուսություն

``` vb
Function TreeElProp(ByVal TreeId As String, ByVal Code As String) As AsTreeElement
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TreeId | Ծառի անուն: |
| Code | Ծառի տարրի բանալին։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ 

Գտնում է բանկի ծառի տարրը, ապա ըստ դրա բեռնում է փաստաթուղթը և կարդում դաշտի արժեք։

``` vb
Set xTree = TreeElProp("Banks", Param("CODBANK"))
xCorrAcc = LoadDoc(xTree.ISN)("SCHET")
```
