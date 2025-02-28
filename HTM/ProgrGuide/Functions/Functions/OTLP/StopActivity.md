---
layout: page
title: AsKernel/StopActivity
tags: [trace, metric, OTLP]
---

# StopActivity մեթոդ

Փակում է [նախապես բացված](#startactivity) թրեյսը՝ ըստ թրեյսի id-ի։ Թրեյսի id-ն չտրամադրելու դեպքում փակում է ընթացիկ թրեյսը։

## Շարահյուսություն

```vb
Public Sub StopActivity(Optional ByVal sId As String = "")
```

**Պարամետրեր**
* `sId` - Թրեյսի id-ն։