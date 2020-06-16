---
layout: page
title: "OnLimitFault իրադարձություն"
---

# OnLimitFault հաշվառման համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/Accounting.md)

OnLimitFault իրադարձությունը առաջանում է հաշվառման սահմանաչափերի խաղտման ժամանակ, որոնք դրված են հաշվառում օբյեկտի վրա։ 

Մշակիչը պետք է ցույց տա սխալի հաղորդագրություն. կամ կատարի լրացուցիչ գործողություններ, որ խաղտումը համարվի ընդունելի։ 

Իրադարձության մշակիչը պետք է վերադրաձնի տրամաբական արժեք
* True - խաղտումը մշակված է,
* False - միջուկը առաջացնի սխալ։ 

Մշակիչի շարահյուսությունը տարբերվում հաշվառման տեսակից կախված։

## Շարահյուսություն

Կապակցված հաշվառում չունեցող հաշվառումների համար՝

``` vb
Public Function OnLimitFault(ByVal nISN As Long, _
                             ByVal overrunning As Currency, _
                             ByVal isDeleting As Boolean, _
                             ByVal baseDoc As AsDoc) As Boolean
    ' statements
End Function
```

Կապակցված հաշվառում ունեցող հաշվառումների համար՝

``` vb
Public Function OnLimitFault(ByVal nISN As Long, _
                             ByVal overrunning As Currency, _
                             ByVal overrunningLinked As Currency, _
                             ByVal isDeleting As Boolean, _
                             ByVal baseDoc As AsDoc) As Boolean
    ' statements
End Function
```

HI2 աղյուսակի հաշվառումների համար՝

``` vb
Public Function OnLimitFault(ByVal nISN As Long, _
                             ByVal nGLISN As Long, _
                             ByVal isDeleting As Boolean, _
                             ByVal baseDoc As AsDoc) As Boolean
    ' statements
End Function
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| nISN | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
| nGLISN | Հաշվառման երկրորդ օբյեկտի ներքին նույնականացման համար։ Այս պարամետրը անհրաժեշտ է HIREST2 աղյուսակում սահմանաչափերի ստուգման համար։ |
| overrunning | Սահմանաչապերից դուրս գալու գումարի չափ։ Եթե արժեքը բացասական է, ապա խաղտվել է ստորին սահմանաչափը, դրականի դեպքում՝ վերին սահմանաչափը։ |
| overrunningLinked | Կից հաշվառման սահմանաչափերից դուրս գալու գումարի չափ։ |
| isDeleting | Ցույց է տալիս, որ սահմանաչափի խաղտումը առաջացել է փաստաթղթի ջնջման ժամանակ։ |
| baseDoc | Հաշվառումը ստեղծող [փաստաթղթի](../Functions/Asdoc.md) հղում։ |
