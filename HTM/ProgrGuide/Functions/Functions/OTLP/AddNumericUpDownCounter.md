---
layout: page
title: AsKernel/AddNumericUpDownCounter
tags: [trace, metric, OTLP]
---

# AddNumericUpDownCounter մեթոդ

Ստեղծվում է թվային counter, որի արժեքը կարող է աճել կամ նվազել։

Counter-ի արժեքը ավելացնելու համար անհրաժեշտ է կանչել [IncrementNumericUpDownCounter](#askernelincrementnumericupdowncounter), իսկ նվազեցնելու համար՝ [DecrementNumericUpDownCounter](#askerneldecrementnumericupdowncounter) մեթոդը։

## Շարահյուսություն

```vb
Public Sub AddNumericUpDownCounter(ByVal sId As String, Optional ByVal sDescription As String = "")
```

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `sDescription` - Counter-ի նկարագրությունը։