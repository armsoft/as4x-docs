---
layout: page
title: AsKernel/RecordHistogram
tags: [trace, metric, OTLP]
---

# RecordHistogram մեթոդ

Գրանցում է հիստոգրամի արժեքը և փակում այն։ Հիստոգրամը պետք է նախապես ստեղծված լինի [AddHistogram](#addhistogram) մեթոդով։

## Շարահյուսություն

```vb
Public Sub RecordHistogram(ByVal sId As String,
                           ByVal dValue As Double,
                  Optional ByVal dictAdditionalInfo As Dictionary)
```

**Պարամետրեր**
* `sId` - Հիստոգրամի id-ն:
* `dValue` - Գրանցվող թվային արժեքը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ 
Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։