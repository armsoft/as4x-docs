---
layout: page
title: "AsRepViwer/UseFormatting"
---



#  UseFormatting հատկություն

[См. также](../AsRepViewer.md) Օրինակ [Применяется к](../AsRepViewer.md)

Վերադարձնում կամ նշանակում է հաշվետվության մեջ տեքստի ձևաչափեր օգտագործելու հայտանիշը։  
Տեքստի ձևավորումը կատարվում է հատուկ տրոհների(tag) միջոցով, տես արժեքները ստորև։ 

## Շարահյուսություն

``` vb
object.UseFormatting = [bValue]
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object | Հաշվետվության հղում։  |
| bValue | Նոր արժեք։ |


## Արժեքներ


| Արժեքներ | Նկարագրություն |
|--|--|
| &lt;b&gt;<b>text_bold</b>&lt;bf&gt; | Թավ տեքստ։ |
| &lt;i&gt;<i>text_italic</i>&lt;i&gt; | Շեղատառ տեքստ։ |
| &lt;f&gt;текст_на_русском&lt;/f&gt; | Ռուսերեն տառատեսակով տեքստ։ |
| &lt;s&gt;<strike>text_strikethrough</strike>&lt;/s&gt; | Վրագծված տեքստ։ |
| &lt;t&gt;<span style="font-family:Symbol">Symbols_Font</span>&lt;/t&gt; | Տեքստը ցույց է տալիս «Symbol» տառատեսակով։ |
| &lt;u&gt;<u>text_underline</u>&lt;/u&gt; | Ընդգծված տեքստ։ |  