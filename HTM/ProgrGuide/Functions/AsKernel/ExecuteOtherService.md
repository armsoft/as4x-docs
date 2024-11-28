---
layout: page
title: "AsKernel/ExecuteOtherService"
---

# ExecuteOtherService մեթոդ

```vb
Public Sub ExecuteOtherService(ByVal sBaseUrl As String, _
                               ByVal sUrl As String, _
                      Optional ByVal vRequest As Variant = Nothing, _
                      Optional ByRef vResult As Variant = Nothing, _
                      Optional ByVal sHttpVerb As String = PostHttpVerb, _
                      Optional ByVal lRestTimeout As Long = RestDefaultTimeout, _
                      Optional ByVal bAddAuthorization As Boolean = True)
```

Այս մեթոդը նախատեսված է դեպի այլ սերվիս հարցումներ ուղարկելու և պատասխանը ստանալու համար։

**Պարամետրեր**

* `sBaseUrl` - Սերվիսի հասցեն։ Օրինակ՝ `"https://localhost:1025/"`:
* `sUrl` - API-ի հասցեն՝ առանց սերվիսի հասցեի։ Օրինակ՝ `"api/LoanApp/RejectAppForm"`:
* `vRequest` - Հարցման կատարման համար անհրաժեշտ տվյալները։
* `vResult` - Հարցման կատարման արդյունքը։
* `sHttpVerb` - Հարցման գործողության տեսակը ("POST", "GET", "DELETE"...)։ Արժեք չփոխանցելու դեպքում համարվելու է "POST"-ը։
* `lRestTimeout` - Հարցման կատարման առավելագույն ժամանակը միլիվայրկյաններով։ Արժեք չփոխանցելու դեպքում համարվելու է 90000 միլիվրկ-ը (1.5 ր)։
* `bAddAuthorization` - Ավտորիզիայի միացման հայտանիշ։