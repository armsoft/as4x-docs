---
layout: page
title: "ReindexDocs մեթոդ"
---

# ReindexDocs մեթոդ

Փաստաթղթի նշված տիպերի համար կատարում է վերաինդեքսավորում։

## Շարահյուսություն

``` vb
Sub Util.ReIndexDocs(ByRef xErrRepViewer As AsRepViewer, _
                     ByVal sParam1 As String, _
            Optional ByVal sParam2 As String = "", _
            Optional ByVal dStartDate As Variant, _
            Optional ByVal dEndDate As Variant, _
            Optional ByVal bCheckDocType As Boolean = True)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xErrRepViewer | [Հաշվետվություն](../AsRepViewer.md) օբյեկտ, որի մեջ  լրացվում են սխալների մասին հաղորդագրությունները։ |
| sParam1 | Սահմանում է ինդեքսավորվող փաստաթղթերի տիպերի ցուցակը ստորակետով տարանջատված։ |
| sParam2 | Փաստաթղթեր տիպերի վերջավորություններ։ Եթե տրված է, ապա ինդեքսավորվում են ամեն փաստաթուղթը, որը տիպի սկիզբը առաջին ցուցակի է, իսկ տիպի վերջը երկրորդ։ <br> Օրինակ՝  sParam1="SS,MemOrd" և sParam2="1,2,3", ապա ինդեքսավորվում են "SS1,SS2,SS3,MemOrd1,MemOrd2,MemOrd3" տիպի փաստաթղթերը։ |
| dStartDate | Ինդեքսավորվում են միայն տվյալ ամսաթվից հետո ստեղծված փաստաթղթերը։ |
| dEndDate | Ինդեքսավորվում են միայն տվյալ ամսաթվից առաջ ստեղծված փաստաթղթերը։ |
| bCheckDocType | Ստուգում է փոխանցված տիպերի փաստաթղթերի նկարագրությունները և առկայությունը մինչ ինդեքսավորումը։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
