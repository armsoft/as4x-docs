---
layout: page
title: "AsRepViwer/AddFooter"
---


# AddFooter մեթոդ
 
[См. также](UseFormatting.md) [Пример](../../Examples/E_AsRepViewer.html)  [Применяется к](../AsRepViewer.md) 

Ավելացնում է տեղեկատու-հաշվետվության մեջ նոր տողատակի տող։


## Շարահյուսություն

``` vb
object.AddFooter sValue, [sExportStyleName]
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object | Հաշվետվության հղում։  |
| sValue | Ավելացվող տողի տեքստը։  |
| sExportStyleName | Դեպի Excel արտահանման տողի ոճի անուն, նախօրոք ավելացված  [AddExportStyle](AddExportStyle.md) մեթոդով։  |


## Նկատառումներ

Եթե միացված [UseFormatting](UseFormatting.md)-ը, ապա `sValue`-ն   կարող է պարունակել ձևաչափման  թեգեր։ 
