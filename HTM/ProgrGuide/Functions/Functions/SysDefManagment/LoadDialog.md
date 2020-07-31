---
layout: page
title: "LoadDialog ֆունկցիա"
---

# LoadDialog ֆունկցիա

> ՈՒՇԱԴՐՈՒԹՅՈՒՆ. ֆունկցիան հեռացված է համակարգից։

[Հատկություններ մեթոդներ](../../AsDialogEx.html)

Ստեղծում է [նախօրոք նկարագրված երկխոսության պատուհանի](../../../Defs/Dialog.html) օբյեկտը ըստ ներքին անվան։

## Շարահյուսություն

```vb
Function LoadDialog(ByVal sDialogName As String) As AsDialogEx
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sDialogName | Երկխոսության պատուհանի ներքին անուն։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ կանչում ենք LoadDialog ֆունկցիան։ mDialog-ը հղվում է նկարագրված երկխոսության պատուհան օբյեկտի վրա իր բոլոր հատկություններով և մեթոդներով։

``` vb
Dim mDialog As AsDialogEx
Set mDialog = LoadDialog("DialogExDataName")
mDialog.Show
```
