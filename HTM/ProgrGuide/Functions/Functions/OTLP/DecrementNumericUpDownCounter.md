---
layout: page
title: AsKernel/DecrementNumericUpDownCounter
tags: [trace, metric, OTLP]
---

# DecrementNumericUpDownCounter մեթոդ

Նվազեցնում է [AddNumericUpDownCounter](#askerneladdnumericupdowncounter) մեթոդով ստեղծված թվային counter-ի արժեքը նշված չափով։

## Շարահյուսություն

```vb
Public Sub DecrementNumericUpDownCounter(ByVal sId As String,
                                         ByVal lValue As Long,
                                Optional ByVal dictAdditionalInfo As Dictionary)
```

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `lValue` - Արժեքի նվազեցման չափը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ 
Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։