---
layout: page
title: "AsKernel/ExecuteService"
---

# ExecuteService մեթոդ

```vb
Public Sub ExecuteService(ByVal sUrl As String, _
                 Optional ByVal vRequest As Variant = Nothing, _
                 Optional ByRef vResult As Variant = Nothing, _
                 Optional ByVal sHttpVerb As String = "POST", _
                 Optional ByVal lRestTimeout As Long = 90000)
```

Այս մեթոդը նախատեսված է դեպի 8X սերվիս հարցումներ ուղարկելու և պատասխանը ստանալու համար։

**Պարամետրեր**

* `sUrl` - API-ի հասցեն՝ առանց սերվիսի հասցեի։ Օրինակ՝ `"api/LoanApp/RejectAppForm"`:
* `vRequest` - Հարցման կատարման համար անհրաժեշտ տվյալները։
* `vResult` - Հարցման կատարման արդյունքը։
* `sHttpVerb` - Հարցման գործողության տեսակը ("POST", "GET", "DELETE"...)։ Արժեք չփոխանցելու դեպքում համարվելու է "POST"-ը։
* `lRestTimeout` - Հարցման կատարման առավելագույն ժամանակը միլիվայրկյաններով։ Արժեք չփոխանցելու դեպքում համարվելու է 90000 միլիվրկ-ը (1.5 ր)։