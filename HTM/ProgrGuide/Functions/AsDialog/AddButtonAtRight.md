---
layout: page
title: "AsDialog/AddButtonAtRight"
---

# AddButtonAtRight մեթոդ

[См. также](../AsDialog.md) Օրինակ [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում, նշված դաշտի աջ կողմից, ավելացնում է կոճակ։ 

## Շարահյուսություն

``` vb
object.AddButtonAtRight(NameButtonAtRight,NameControl,[Caption],[ECaption], [ButtonCaption], [ButtonEcaption], [Picture],[AtrButton],[sngWidth] ,[iLeftPosition], [iCaptionAlign]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| NameButtonAtRight | Կոճակի ներքին անունը։ |
| NameControl | դաշտի ներքին անունը, որի աջ կողմից կավելանա կոճակը։|
| Caption |Կոճակի անվանումը, որը ցույց է տրվում ձախից։|
| ECaption | Կոճակի օտար լեզվով անվանումը, որը ցույց է տրվում ձախից։ |
| ButtonCaption | Կոճակի վրա գրվող տեքստը։ |
| ButtonEcaption | Կոճակի վրա օտար լեզվով գրվող տեքստը։ |
| Picture | Կոճակի նկարի ներքին անունը ծրագրի ռեսուրսային ֆայլից (\*.res)։ Օգտագործվում են միայն  Bitmap (\*.bmp) ֆայլերը։ |
| AtrButton | Կոճակի  [հատկանիշները](Attribute.html "Attribute")։ |
| sngWidth | Կոճակի լայնությունը։ Չդնելու դեպքում կոճակի լայնությունը լինում է ավտոմատ հաշվարկվող։ |
| iLeftPosition | Ձախ կողմից կոճակի հեռավորությունը։ Չդնելու դեպքում հաշվարկվում է ավտոմատ։|
| iCaptionAlign |  Որոշում է կոճակի դիրքը ձախ դաշտի նկատմամբ։ 0 արժեքի դեպքում դաշտերը տեղադրվում են քիփ, 1-ի դեպքում տեղադրվում են սովորական դաշտերի հեռավորությամբ։ Լռությամբ 0 է։ |


