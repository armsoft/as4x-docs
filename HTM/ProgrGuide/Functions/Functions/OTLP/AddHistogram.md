---
layout: page
title: AsKernel/AddHistogram
tags: [trace, metric, OTLP]
---

# AddHistogram մեթոդ

Ստեղծում է նոր հիստոգրամ։ Հիստոգրամում արժեք գրանցելու և այն փակելու համար անհրաժեշտ է օգտագործել [RecordHistogram](#recordhistogram) մեթոդը։

## Շարահյուսություն

```vb
Public Sub AddHistogram(ByVal sId As String,
               Optional ByVal sUnit As String = "",
               Optional ByVal sDescription As String = "")
```

**Պարամետրեր**
* `sId` - Հիստոգրամի id-ն:
* `sUnit` - Հիստոգրամում օգտագործվող չափման միավորը (Օրինակ "ms" - միլիվայրկյան, "s" - վայրկյան, "min" - րոպե...):
* `sDescription` - Հիստոգրամի նկարագրությունը:


