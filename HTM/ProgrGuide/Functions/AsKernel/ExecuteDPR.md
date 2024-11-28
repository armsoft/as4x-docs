---
layout: page
title: "AsKernel/ExecuteDPR"
---

# ExecuteDPR մեթոդ

```vb
Public Function ExecuteDPR(ByVal iType As Integer, _
                           ByVal sName As String, _
                           ByVal vRequest As Variant, _
                           ByRef vResult As Variant, _
                  Optional ByVal lRetryAttempts As Long = 1, _
                  Optional ByVal lRetryInterval As Long = 0, _
                  Optional ByVal oCustomUIRequest As CustomUIRequestConfig) As Boolean
```

Կատարում է DPR-ը, վերադարձնում բուլյան տիպի արժեք, որը ցույց է տալիս կատարումը հաջողվել է թե ոչ և կատարման արդյունքը `vResult` պարամետրում։

Այս մեթոդի կանչի դեպքում 4X UI-ում ցուցադրվում է DPR-ի կատարման պրոգրեսը և սերվիսից կլիենտ եկող հաղորդագրության պատուհանները (MessageBox, Custom UI Request):

**Պարամետրեր**

* `iType` - DPR-ի տեսակը, որը նշվում է DPR ատրիբուտում։
  * **21** - Report
  * **22** - OLAP
  * **23** - JobElement
  * **29** - Other
* `sName` - DPR-ի ներքին անունը։
* `vRequest` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը։
* `vResult` - DPR-ի կատարման արդյունքում ստացվող տվյալները։
* `lRetryAttempts` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում վերաստացման փորձերի քանակը։
* `lRetryInterval` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում մինչև վերաստացման հաջորդ փորձը ընկած ժամանակահատվածը միլիվայրկյաններով։
* `oCustomUIRequest` - Սերվիսից կլիենտ եկող Custom UI Request-ների մշակման համար անհրաժեշտ ինֆորմացիան` նշելով՝
  * **Module** - Այն մոդուլի անունը, որտեղ մշակվելու են CustomUIRequest-ները:
  * **AddSub(ByVal lId As Long, ByVal sSub As String)** - որտեղ **lId**- CustomUIRequest-ի id-ն է, իսկ **sSub** - այն ֆունկցիան, որը մշակելու է CustomUIRequest-ը։