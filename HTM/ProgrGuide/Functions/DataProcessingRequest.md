---
layout: page
title: "DataProcessingRequest օբյեկտ" 
---

## Բովանդակություն 

- [Ներածություն](#ներածություն)
- [Հատկություններ](#հատկություններ)
  - [Caption](#caption)
  - [CurrentPhase](#currentphase)
  - [DetailsSize](#detailssize)
  - [Duration](#duration)
  - [ECaption](#ecaption)
  - [EndDate](#enddate)
  - [ErrorText](#errortext)
  - [IsCanceled](#iscanceled)
  - [IsCancellationSupported](#iscancellationsupported)
  - [IsCompleted](#iscompleted)
  - [IsFailed](#isfailed)
  - [IsRestError](#isresterror)
  - [IsServiceCanceled](#isservicecanceled)
  - [IsShowError](#isshowerror)
  - [Name](#name)
  - [StartDate](#startdate)
  - [State](#state)
  - [StateName](#statename)
  - [SysType](#systype)
  - [TypeName](#typename)
- [Մեթոդներ](#մեթոդներ)
  - [Enqueue](#enqueue)
  - [GetResult](#getresult)
  - [RefreshProgress](#refreshprogress)
  - [StopExecution](#stopexecution)

## Ներածություն

## Հատկություններ

### Caption

```vb
Public Property Get Caption() As String
```

Վերադարձնում է DPR-ի հայերեն անվանումը։

### CurrentPhase

```vb
Public Property Get CurrentPhase() As DPRProgressPhase
```

Վերադարձնում է DPR-ի կատարման պրոգրեսի ընթացիկ փուլի տվյալները (անուն, տևողություն, փուլում մշակվող տվյալների քանակ...)։

### DetailsSize

```vb
Public Property Get DetailsSize() As Long
```

Վերադարձնում է DPR-ի կատարման փուլերի քանակը։

### Duration

```vb
Public Property Get Duration() As Double
```

Վերադարձնում է DPR-ի կատարման տևողությունը։

### ECaption

```vb
Public Property Get ECaption() As String
```

Վերադարձնում է DPR-ի անգլերեն անվանումը։

### EndDate

```vb
Public Property Get EndDate() As String
```

Վերադարձնում է DPR-ի կատարման ավարտի ամսաթիվը/ժամանակը։

### ErrorText

```vb
Public Property Get ErrorText() As String
```

Վերադարձնում է DPR-ի կատարման ընթացքում առաջացած սխալի հաղորդագրությունը։

DPR-ի կատարման ընթացքում սխալներ չառաջանալու դեպքում վերադարձնում է դատարկ տող։

### IsCanceled

```vb
Public Property Get IsCanceled() As Boolean
```

Ցույց է տալիս DPR-ի կատարումը ընդհատվել է UI-ից, թե ոչ։

### IsCancellationSupported

```vb
Public Property Get IsCancellationSupported() As Boolean
```

Ցույց է տալիս, արդյոք թույլատրված է DPR-ի կատարման ընդհատումը (cancellation) UI-ից։

### IsCompleted

```vb
Public Property Get IsCompleted() As Boolean
```

Ցույց է տալիս, արդյոք ավարտվել է DPR-ի կատարումը։

Կատարումը համարում է ավարտված, եթե՝
* ավարտվել է հաջողությամբ,
* ձախողվել է առաջացած սխալի պատճառով,
* ընդհատվել է UI-ից։

### IsFailed

```vb
Public Property Get IsFailed() As Boolean
```

Ցույց է տալիս DPR-ի կատարումը ձախողվել է, թե ոչ։

### IsRestError

```vb
Public Property Get IsRestError() As Boolean
```

Ցույց է տալիս, արդյոք կատարման ընթացքում առաջացած սխալը RESTException տիպի է թե ոչ։

Կատարման ընթացքում սխալներ չառաջանալու դեպքում վերադարձնում է **false**:

### IsServiceCanceled

```vb
Public Property Get IsServiceCanceled() As Boolean
```

Ցույց է տալիս DPR-ի կատարումը ընդհատվել է սերվիսից, թե ոչ։

### IsShowError

```vb
Public Property Get IsShowError() As Boolean
```

Ցույց է տալիս, արդյոք կատարման ընթացքում առաջացած սխալները ցուցադրվելու են UI-ում, թե ոչ։

### Name

```vb
Public Property Get Name() As String
```

Վերադարձնում է DPR-ի ներքին անունը:

### StartDate

```vb
Public Property Get StartDate() As String
```

Վերադարձնում է DPR-ի կատարման սկզբի ամսաթիվը/ժամանակը։ 

### State

```vb
Public Property Get State() As Long
```

Վերադարձնում է DPR-ի կատարման ընթացիկ վիճակի համարը։

* `0` - None
* `1` - New
* `2` - Enqueued
* `3` - Dequeued
* `4` - Started
* `5` - Finished
* `6` - Failed

### StateName

```vb
Public Property Get StateName() As String
```

Վերադարձնում է DPR-ի կատարման ընթացիկ վիճակի անունը։

* `None` - Նշված չէ
* `New` - Նոր
* `Enqueued` - Հերթի մեջ դրված
* `Dequeued` - Հերթից դուրս եկած
* `Started` - Կատարումը սկսված
* `Finished` - Կատարումը հաջողությամբ ավարտված
* `Failed` - Կատարումը ձախողված

### SysType

```vb
Public Property Get SysType() As Integer
```

Վերադարձնում է DPR-ի տեսակը։

* `21` - Report
* `22` - OLAP
* `23` - JobElement
* `29` - Other

### TypeName

```vb
Public Property Get TypeName() As String
```

Վերադարձնում է DPR-ի տեսակի անունը (այն լրացված է DPR-ը նկարագրող դասի վրա դրվող DPR ատրիբուտի մեջ)։

  * **Report** - Հաշվետվությունների տվյալների մշակման հարցում
  * **OLAP** - Օլապ տվյալների մշակման հարցում
  * **JobElement** - Առաջադրանքների տվյալների մշակման հարցում
  * **Other** - Այլ տվյալների մշակման հարցում

## Մեթոդներ

### Enqueue

```vb
Public Sub Enqueue(ByVal iType As Integer, _
                   ByVal sName As String, _
                   ByVal vRequest As Variant, _
          Optional ByVal lRetryAttempts As Long = 1, _
          Optional ByVal lRetryInterval As Long = 0, _
          Optional ByVal bShowUIRequests As Boolean = True, _
          Optional ByVal oCustomUIRequest As CustomUIRequestConfig)
```

Հերթի է դնում DPR-ի կատարումը։

Հերթի դրված DPR-ի կատարման արդյունքը անհրաժեշտ է ստանալ GetResult մեթոդի միջոցով։

**Պարամետրեր**

* `iType` - DPR-ի տեսակը, որը նշվում է DPR ատրիբուտում։
  * **21** - Report
  * **22** - OLAP
  * **23** - JobElement
  * **29** - Other
* `sName` - DPR-ի ներքին անունը։
* `vRequest` - DPR-ի կատարման համար անհրաժեշտ պարամետրերը։
* `lRetryAttempts` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում վերաստացման փորձերի քանակը։
* `lRetryInterval` - DPR-ի կատարման պրոգրեսի պատուհանի թարմացման ժամանակ սերվիսից պրոգրեսի ստացման ձախողման դեպքում մինչև վերաստացման հաջորդ փորձը ընկած ժամանակահատվածը միլիվայրկյաններով։
* `bShowUIRequests` - Սերվիսի կլիենտ եկող հաղորդագրության պատուհանների (MessageBox, Custom UI Request) ցուցադրման հայտանիշ։
* `oCustomUIRequest` - Սերվիսից կլիենտ եկող Custom UI Request-ների մշակման համար անհրաժեշտ ինֆորմացիան` նշելով՝
  * **Module** - Այն մոդուլի անունը, որտեղ մշակվելու են CustomUIRequest-ները:
  * **AddSub(ByVal lId As Long, ByVal sSub As String)** - որտեղ **lId**- CustomUIRequest-ի id-ն է, իսկ sSub - այն ֆունկցիան, որը մշակելու է CustomUIRequest-ը։

### GetResult

```vb
Public Sub GetResult(ByRef vResult As Variant, Optional ByVal bDelete As Boolean = True)
```

Վերադարձնում է DPR-ի կատարման արդյունքը։

**Պարամետրեր**

* `vResult` - DPR-ի կատարման արդյունքում ստացված տվյալները։
* `bDelete` - DPR-ի կատարման առաջադրանքի քեշից մաքրման հայտանիշ։

### RefreshProgress

```vb
Public Function RefreshProgress() As ChilkatJsonObject
```

Վերադարձնում է DPR-ի կատարման պրոգրեսի մասին թարմացված ինֆորմացիան (DPR-ի կատարման վիճակը, կատարման ընթացիկ փուլի մանրամասները, մշակված տողերի քանակը...)։

### StopExecution

```vb
Public Sub StopExecution()
```

Ընդհատում է DPR-ի կատարումը։
