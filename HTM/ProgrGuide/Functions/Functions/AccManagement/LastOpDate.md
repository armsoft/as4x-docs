---
layout: page
title: "LastOpDate ֆունկցիա"
---

# LastOpDate ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված վերջին գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

Եթե հաշվառումը չի գտնվել, ապա վերադառնում է Null։

## Շարահյուսություն

``` vb
Function LastOpDate(ByVal AccCode As Variant, _
                    ByVal Isn As Long, _
           Optional ByVal UpToDate As Variant, _
           Optional ByVal Op As String, _
           Optional ByVal DiscardISN As Long = -1)

LastOpDate (AccCode, nISN, [UpToDate], [Op], [nDiscardISN])
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| AccCode | [Հաշվառման կոդ](../../../Defs/Accounting.md) կամ մի քանի հաշվառումների կոդերի մասիվ։ |
| Isn | Հաշվառում օբյեկտի ներքին նույնականացմամ համար։ |
| UpToDate | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործառույթի ամսաթիվը։ |
| Op | [Հաշվառման գործողություն](../../../Defs/Accounting.md), որով անցկացվում է որոնումը։ |
| DiscardISN | Փաստաթղթի ներքին նույնականացման համար, որի գործարքները չեն դիտարկվում։ |

## Նկատառումներ

[Տես նաև](LastOpDate2.md)

## Օրինակ

"01" և "02" հաշվառումների մեջ վերջին գործողության ամսաթվի որոնման օրինակ։

``` vb
Function LASTDAY()
ReDim arr(1)
    arr(0) = "01"
    arr(1) = "02"
    LASTDAY = LastOpDate(arr, DS("fISN"))
End Function
```
