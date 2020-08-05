---
layout: page
title: "GetISN ֆունկցիա"
---

## GetISN ֆունկցիա

Վերադարձնում է փաստաթղթի ներքին նույնականացման համարը ըստ թղթապանակի անվանման և բանալու։

Եթե չի գտնում, ապա վերադառնում է -1։

## Շարահյուսություն

``` vb
Function GetISN(ByVal FolderId As String, ByVal Key As String) As Long
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| FolderId | Թղթապանակի ներքին անուն։ |
| Key | Թղթապանակի մեջ տարրի բանալին։ |

## Նկատառումներ

[Տես նաև](FolderElProp.md)

## Օրինակ

``` vb
sISN = GetISN("ACC", Doc("SCHDEB"))
```
