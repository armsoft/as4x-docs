---
layout: page
title: "LoadDialog ֆունկցիա"
---

# LoadDialog ֆունկցիա

[Հատկություններ մեթոդներ](../../AsDialogEx.html)

[Նախօրոք նկարագրված երկխոսության պատուհանը](../../../Defs/Dialog.md) ներբեռնում է իր իսկ նույնականացուցիչով։

Загружает заранее [описанный диалог](../../../Defs/Dialog.html) по его идентификатору.


## Շարահյուսություն

```vb
set sDialogEx = LoadDialog (sDialogName)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sDialogEx | Նկարագրված երկխոսության պատուհան օբյեկտի օրինակի հղում, որի միջոցով կարելի է ստանալ օբյեկտի հատկությունների և մեթոդների հասանելիությունը։  строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта типа описательный диалог. Через нее можно получить доступ к свойствам и методам объекта. |
| sDialogName | Երկխոսության պատուհանի ներքին անուն։ строковое выражение, определяющее идентификатор диалога. |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Օրինակի մեջ կանչում ենք LoadDialog ֆունկցիան։ mDialog-ը հղվում է նկարագրված երկխոսության պատուհան օբյեկտի վրա իր բոլոր հատկություններով և մեթոդներով։

Dim mDialog As AsDialogEx<br>
Set mDialog = <strong>LoadDialog</strong>(&quot;DialogExDataName&quot;)<br>
mDialog.[Show](../../AsDialogEx/Show.html)

В примере вызывается функция LoadDialog. Переменная mDialog ссылается на обьект типа описательный диалог со всеми его свойствами и методами.

Dim mDialog As AsDialogEx<br>
Set mDialog = <strong>LoadDialog</strong>(&quot;DialogExDataName&quot;)<br>
mDialog.[Show](../../AsDialogEx/Show.html)