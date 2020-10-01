---
layout: page
title: "SpreadsheetExportRowStyle/AddPart"
---

# AddPart մեթոդ

[Տես նաև](../SpreadsheetExportRowStyle.md) Օրինակ [Կիրառվում է](../SpreadsheetExportRowStyle.md)

Սահմանում է Excel-ի մեջ տեղեկանքի տողերի արտահանման ոճի նկարագրությունը։


## Շարահյուսություն

`` vb
object.AddPart(start, type, [exportColumnIndex], [exportAsBold], [isFormatted], [trimBeforeExport], [useForWidth])
``

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | Տողի ոճի օբյեկտ։ |
| start | Տողի այն նիշի դիրքը, որից սկսած նշված տողի տվյալները կարտահանվեն Excel-ի մեջ։ |
| type | Արտահանվող տվյալների [համակարգային տիպը](../../types.md)։ |
| exportColumnIndex | Սահմանում է Excel-ի սյունակի ինդեքսը, որի մեջ կարտահանվեն տողի տվյալները։ Չփոխանցելու դեպքում ավելացվելու է նախորդ ավելացվածի հաջորդ վանդակում։ |
| exportAsBold | Արտահանել տվյալի տեքստը թավ։ Լռությամբ ստանում է `False` արժեք։ |
| isFormatted | Արտահանել տվյալը ձևաչափված։ Լռությամբ արժեքը `True` է։ Կիրառվում է միայն թվային տվյալների համար։ |
| trimBeforeExport | Արտահանել տվյալները սկզբի և վերջի բացակները ջնջած։ Լռությամբ արժեքը `True` է։ Կիրառվում է միայն տվյալների տողային տիպերի համար։ |
| useForWidth | Արտահանման վանդակի լայնությունթյունը որոշել արժեքի չափից կախված։ Լռությամբ արժեքը `True` է։ |

## Օրինակ

```
           Non-Current Assets - account: 11-12

Openning Balance At August  01, 2010         168.11
Date              Acc.Debit     Credit Document 


19/01/11        1131              A 901        
```

Դիտարկենք յուրաքանչյուր տողը առանձին։

Վերցնենք `19/01/11        1131              A 901` տողը։ 
եթե ցանկանում ենք, որ տվյալ տողը արտահանվի հետևյալ կերպ՝  
* `19/01/11` ամսաթիվը արտահանցի միայն տարեթիվը թավ տեքստով,  
* `1131`-ը ոչ թավ,  
* `A 901`-ը առանց բաժանարար նիշի նրանց միջև, և ոչ թավ տեքստով։

Նախ հայտարարենք sArr փոփոխական այնուհետև նրան վերագրենք մեր տողը։

``` vb
Dim sArr as String  
sArr = "19/01/11        1131              A 901"
```

Այնուհետև տվյալ տողի յուրաքանչյուր մասի համար սահմանենք ոճ `AddPart` մեթոդի օգնությամբ։ 

``` vb
Dim oStyle As SpreadsheetExportRowStyle
Dim xRep As AsRepViewer

Set oStyle = New SpreadsheetExportRowStylee

oStyle.AddPart 7, "C(2)", , True, , , False  
'7 - սա տողի մեկնարկային դիրքն է - "19/01/11        1131              A 901", 
'որից սկսած մեր տողի տվյալները կարտահանվեն Excel. 7-րդ ինդեքսի տակ է գտնվում "1" նիշը։ 


oStyle.AddPart 7+2+8, "C(4)", , False 
'7+2+8(նախնական դիրք + 11 երկարություն + հեռավորությունը 7-ից +2 մինչև 1131, 
'այսինքն 1131-ը  sArr տողի մեջ սկսվում է 17-րդ դիրքից)  

oStyle.AddPart 7+2+8+4+14, "C(4)", , False, , True
```

Ավելացնում են հաշվետվության մեջ նոր սահմանած ոճը ըստ անվան [AddExportStyle](../AsRepViewer/AddExportStyle.md) մեթոդի օգնությամբ։

``` vb
xRep.AddExportStyle RowStyle, oStyle
```

Հաշվետվության մեջ տող ավելացնելուց նշում ենք նաև ոճը։

``` vb
xRep.AddRow sArr, , , "RowStyle" 
```

Ոճերի հնարավոր է նշել նաև [AddHeader](../AsRepViewer/AddHeader.md) և [AddFooter](../AsRepViewer/AddFooter.md) մեթոդների կանչերում:
