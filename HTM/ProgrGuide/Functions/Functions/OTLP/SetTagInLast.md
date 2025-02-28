---
layout: page
title: AsKernel/SetTagInLast
tags: [trace, metric, OTLP]
---

# SetTagInLast մեթոդ

Վերջին [բացված թրեյսի](#startactivity) վրա ավելացնում է նշված tag-ը և նրա արժեքը։

## Շարահյուսություն

```vb
Public Sub SetTagInLast(ByVal sTagId As String, ByVal sTagValue As String)
```

**Պարամետրեր**
* `sTagId` - Ավելացվող tag-ի անունը:
* `sTagValue` - Նշանակվող արժեքը։