---
layout: page
title: Թրեյսերի ու մետրիկաների հետ աշխատանքի համար անհրաժեշտ ֆունկցիաներ
tags: [trace, metric, OTLP]
sublinks: 
- { title: "AsKernel/StartActivity", ref: askernelstartactivity }
- { title: "AsKernel/StopActivity", ref: askernelstopactivity }
- { title: "AsKernel/SetTagInLast", ref: askernelsettaginlast }
- { title: "AsKernel/AddHistogram", ref: askerneladdhistogram }
- { title: "AsKernel/AddNumericCounter", ref: askerneladdnumericcounter }
- { title: "AsKernel/AddNumericUpDownCounter", ref: askerneladdnumericupdowncounter }
- { title: "AsKernel/DecrementNumericUpDownCounter", ref: askerneldecrementnumericupdowncounter }
- { title: "AsKernel/IncrementNumericCounter", ref: askernelincrementnumericcounter }
- { title: "AsKernel/IncrementNumericUpDownCounter", ref: askernelincrementnumericupdowncounter }
- { title: "AsKernel/RecordHistogram", ref: askernelrecordhistogram }
---

## Բովանդակություն

- [AsKernel/StartActivity](#askernelstartactivity)
- [AsKernel/StopActivity](#askernelstopactivity)
- [AsKernel/SetTagInLast](#askernelsettaginlast)
- [AsKernel/AddHistogram](#askerneladdhistogram)
- [AsKernel/AddNumericCounter](#askerneladdnumericcounter)
- [AsKernel/AddNumericUpDownCounter](#askerneladdnumericupdowncounter)
- [AsKernel/DecrementNumericUpDownCounter](#askerneldecrementnumericupdowncounter)
- [AsKernel/IncrementNumericCounter](#askernelincrementnumericcounter)
- [AsKernel/IncrementNumericUpDownCounter](#askernelincrementnumericupdowncounter)
- [AsKernel/RecordHistogram](#askernelrecordhistogram)

## Ներածություն

Այս բաժնում նկարագրված մեթոդները նախատեսված են մետրիկաների ու թրեյսերի հետ աշխատանքի համար։

## AsKernel/StartActivity

```vb
Public Function StartActivity(ByVal sCaption As String) As String
```

Բացում է թրեյս և վերադարձնում բացված թրեյսի id-ն։

**Պարամետրեր**
* `sCaption` - Թրեյսի անվանումը։

## AsKernel/StopActivity

```vb
Public Sub StopActivity(Optional ByVal sId As String = "")
```

Փակում է [նախապես բացված](#startactivity) թրեյսը՝ ըստ թրեյսի id-ի։ Թրեյսի id-ն չտրամադրելու դեպքում փակում է ընթացիկ թրեյսը։

**Պարամետրեր**
* `sId` - Թրեյսի id-ն։

## AsKernel/SetTagInLast

```vb
Public Sub SetTagInLast(ByVal sTagId As String, ByVal sTagValue As String)
```

Վերջին [բացված թրեյսի](#startactivity) վրա ավելացնում է նշված tag-ը և նրա արժեքը։

**Պարամետրեր**
* `sTagId` - Ավելացվող tag-ի անունը:
* `sTagValue` - Նշանակվող արժեքը։

## AsKernel/AddHistogram

```vb
Public Sub AddHistogram(ByVal sId As String,
               Optional ByVal sUnit As String = "",
               Optional ByVal sDescription As String = "")
```

Ստեղծում է նոր հիստոգրամ։ Հիստոգրամում արժեք գրանցելու և այն փակելու համար անհրաժեշտ է օգտագործել [RecordHistogram](#recordhistogram) մեթոդը։

**Պարամետրեր**
* `sId` - Հիստոգրամի id-ն:
* `sUnit` - Հիստոգրամում օգտագործվող չափման միավորը (Օրինակ "ms" - միլիվայրկյան, "h" - ժամ, "min" - րոպե...):
* `sDescription` - Հիստոգրամի նկարագրությունը:

## AsKernel/AddNumericCounter

```vb
Public Sub AddNumericCounter(ByVal sId As String, Optional ByVal sDescription As String = "")
```

Ստեղծում է թվային counter, որի արժեքը կարող է միայն աճել:

Counter-ի արժեքը փոփոխելու համար անհրաժեշտ է կանչել [IncrementNumericCounter](#askernelincrementnumericcounter) մեթոդը։

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `sDescription` - Counter-ի նկարագրությունը։

## AsKernel/AddNumericUpDownCounter

```vb
Public Sub AddNumericUpDownCounter(ByVal sId As String, Optional ByVal sDescription As String = "")
```

Ստեղծվում է թվային counter, որի արժեքը կարող է աճել կամ նվազել։

Counter-ի արժեքը ավելացնելու համար անհրաժեշտ է կանչել [IncrementNumericUpDownCounter](#askernelincrementnumericupdowncounter), իսկ նվազեցնելու համար՝ [DecrementNumericUpDownCounter](#askerneldecrementnumericupdowncounter) մեթոդը։

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `sDescription` - Counter-ի նկարագրությունը։

## AsKernel/DecrementNumericUpDownCounter

```vb
Public Sub DecrementNumericUpDownCounter(ByVal sId As String,
                                         ByVal lValue As Long,
                                Optional ByVal dictAdditionalInfo As Dictionary)
```

Նվազեցնում է [AddNumericUpDownCounter](#askerneladdnumericupdowncounter) մեթոդով ստեղծված թվային counter-ի արժեքը նշված չափով։

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `lValue` - Արժեքի նվազեցման չափը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։

## AsKernel/IncrementNumericCounter

```vb
Public Sub IncrementNumericounter(ByVal sId As String,
                                  ByVal lValue As Long,
                         Optional ByVal dictAdditionalInfo As Dictionary)
```

Ավելացնում է [AddNumericCounter](#askerneladdnumericcounter) մեթոդով ստեղծված թվային counter-ի արժեքը նշված չափով։

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `lValue` - Արժեքի ավելացման չափը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։

## AsKernel/IncrementNumericUpDownCounter

```vb
Public Sub IncrementNumericUpDownCounter(ByVal sId As String,
                                         ByVal lValue As Long,
                                Optional ByVal dictAdditionalInfo As Dictionary)
```

Ավելացնում է [AddNumericUpDownCounter](#askerneladdnumericupdowncounter) մեթոդով ստեղծված թվային counter-ի արժեքը նշված չափով։

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `lValue` - Արժեքի ավելացման չափը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։

## AsKernel/RecordHistogram

```vb
Public Sub RecordHistogram(ByVal sId As String,
                           ByVal dValue As Double,
                  Optional ByVal dictAdditionalInfo As Dictionary)
```

Գրանցում է հիստոգրամի արժեքը և փակում այն։ Հիստոգրամը պետք է նախապես ստեղծված լինի [AddHistogram](#addhistogram) մեթոդով։

**Պարամետրեր**
* `sId` - Հիստոգրամի id-ն:
* `dValue` - Գրանցվող թվային արժեքը։
* `dictAdditionalInfo` - Dictionary տիպի օբյեկտ, որը նախատեսված է լրացուցիչ tag-երի անունների և արժեքների ավելացման համար։ Համակարգում առկա են հիմնական tag-եր, որոնք լրացվում են ավտոմատ (ծրագրի, սերվերի, տվյալների բազայի ու մեքենայի անունները, օգտագործողի համարը...)։
