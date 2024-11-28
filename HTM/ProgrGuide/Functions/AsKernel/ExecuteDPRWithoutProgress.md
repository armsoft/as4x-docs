---
layout: page
title: "AsKernel/ExecuteDPRWithoutProgress"
---

# ExecuteDPRWithoutProgress մեթոդ

```vb
Public Function ExecuteDPRWithoutProgress(ByVal iType As Integer, _
                                          ByVal sName As String, _
                                          ByVal oRequest As Object, _
                                          ByVal oResult As Object, _
                                 Optional ByVal bShowUIRequests As Boolean = True, _
                                 Optional ByVal oCustomUIRequest As CustomUIRequestConfig, _
                                 Optional ByVal lRetryAttempts As Long = 1, _
                                 Optional ByVal lRetryInterval As Long = 0) As Boolean
```

Կատարում է DPR-ը, վերադարձնում բուլյան տիպի արժեք, որը ցույց է տալիս կատարումը հաջողվել է թե ոչ և կատարման արդյունքը `vResult` պարամետրում։

Այս մեթոդի կանչի դեպքում 4X UI-ում չի ցուցադրվում DPR-ի կատարման պրոգրեսը։

**Պարամետրեր**

* `iType` - DPR-ի տեսակը, որը նշվում է DPR ատրիբուտում։
  * **21** - Report
  * **22** - OLAP
  * **23** - JobElement
  * **29** - Other
* `sName` - DPR-ի ներքին անունը։
* `oRequest` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը։
* `oResult` - DPR-ի կատարման արդյունքում ստացվող տվյալները։
* `bShowUIRequests` - Սերվիսի կլիենտ եկող հաղորդագրության պատուհանների (MessageBox, Custom UI Request) ցուցադրման հայտանիշ։
* `oCustomUIRequest` - Սերվիսից կլիենտ եկող Custom UI Request-ների մշակման համար անհրաժեշտ ինֆորմացիան` նշելով՝
  * **Module** - Այն մոդուլի անունը, որտեղ մշակվելու են CustomUIRequest-ները:
  * **AddSub(ByVal lId As Long, ByVal sSub As String)** - որտեղ **lId**- CustomUIRequest-ի id-ն է, իսկ sSub - այն ֆունկցիան, որը մշակելու է CustomUIRequest-ը։
* `lRetryAttempts` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում վերաստացման փորձերի քանակը։
* `lRetryInterval` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում մինչև վերաստացման հաջորդ փորձը ընկած ժամանակահատվածը միլիվայրկյաններով։