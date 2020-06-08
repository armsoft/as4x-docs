---
layout: page
title: "OnScannerRead իրադարձություն"
---

# OnScannerRead փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../ScriptProcs/DocEvents.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

Իրադարձությունը առաջանում է փաստաթղթի բաց հատուհանի առկայության դեպքում սկաների միջոցով գծային կոդը կարդալու ժամանակ։

## Շարահյուսություն 

``` vb
Public Sub OnScannerRead(scannedBarCode)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| scannedBarCode | Սկաների կարդացած գծային կոդ։ |
