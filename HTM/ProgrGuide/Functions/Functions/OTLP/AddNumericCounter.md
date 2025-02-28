---
layout: page
title: AsKernel/AddNumericCounter
tags: [trace, metric, OTLP]
---

# AddNumericCounter մեթոդ

Ստեղծում է թվային counter, որի արժեքը կարող է միայն աճել:

Counter-ի արժեքը փոփոխելու համար անհրաժեշտ է կանչել [IncrementNumericCounter](#askernelincrementnumericcounter) մեթոդը։

## Շարահյուսություն

```vb
Public Sub AddNumericCounter(ByVal sId As String, Optional ByVal sDescription As String = "")
```

**Պարամետրեր**
* `sId` - Counter-ի id-ն։
* `sDescription` - Counter-ի նկարագրությունը։