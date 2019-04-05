---
layout: page
title: "AsRepViwer/AddRow"
todo: "RowDesc"
---


# AddRow մեթոդ

[См. также](UseFormatting.md) [Օրինակ](../../Examples/E_AsRepViewer.html)  [Применяется к](../AsRepViewer.md) 

Ընտրված հաշվետվության մեջ ավելացնում է նոր տող։  
Տողը ավելացնելուց հնարավոր է նշել այս տողի հետ կապված փաստաթուղթը, որի համար կարող են բացվել փաստաթղթի գործողությունները, եթե միացված է [DocBased](DocBased.md) հայտանիշը։ 

## Շարահյուսություն

``` vb
object.AddRow sValue, [StrOrLngISN], [RowDesc], [sExportStyleName]
```


Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object | Հաշվետվության հղում։  |
| sValue | Ավելացվող տողի տեքստը։  |
| StrOrLngISN | Փաստաթղթի ներքին նույնականացման համար։ |
| RowDesc | Ավելացվող տողի նկարագրությունը։  |
| sExportStyleName | Դեպի Excel արտահանման տողի ոճի անուն, նախօրոք ավելացված  [AddExportStyle](AddExportStyle.md) մեթոդով։  |


## Նկատառումներ

Եթե միացված [UseFormatting](UseFormatting.md)-ը, ապա `sValue`-ն   կարող է պարունակել ձևաչափման  թեգեր։ 

