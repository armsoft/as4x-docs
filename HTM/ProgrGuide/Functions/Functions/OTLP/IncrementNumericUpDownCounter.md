---
layout: page
title: AsKernel/IncrementNumericUpDownCounter
tags: [trace, metric, OTLP]
---

# IncrementNumericUpDownCounter մեթոդ

Ավելացնում է [AddNumericUpDownCounter](#askerneladdnumericupdowncounter) մեթոդով ստեղծված թվային counter-ի արժեքը նշված չափով։

## Շարահյուսություն

```vb
Public Sub IncrementNumericUpDownCounter(ByVal sId As String,
                                         ByVal lValue As Long,
                                Optional ByVal dictAdditionalInfo As Dictionary)
```

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `lValue` - Արժեքի ավելացման չափը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ 
Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։