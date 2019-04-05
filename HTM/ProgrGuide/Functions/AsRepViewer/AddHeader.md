---
layout: page
title: "AsRepViwer/AddHeader"
---


# AddHeader մեթոդ
 
[См. также](UseFormatting.md) [Օրինակ](../../Examples/E_AsRepViewer.html) [Применяется к](../AsRepViewer.md) 

Ընտրված հաշվետվության մեջ ավելացնում է չշարժվող գլխագրի նոր տող։

## Շարահյուսություն

``` vb
object.AddHeader sValue, [sExportStyleName]
```


Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object | Հաշվետվության հղում։  |
| sValue | Ավելացվող տողի տեքստը։  |
| sExportStyleName | Դեպի Excel արտահանման տողի ոճի անուն, նախօրոք ավելացված  [AddExportStyle](AddExportStyle.md) մեթոդով։  |

## Նկատառումներ

Եթե միացված [UseFormatting](UseFormatting.md)-ը, ապա `sValue`-ն   կարող է պարունակել ձևաչափման  թեգեր։ 
