---
layout: page
title: "LastHI2OpDate ֆունկցիա"
---

# LastHI2OpDate ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված վերջին HI2 գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

Եթե հաշվառումը չի գտնվել, ապա վերադառնում է Null։

## Շարահյուսություն

``` vb
Public Function LastHI2OpDate(ByVal AccCode, _
                     Optional ByVal Isn As Long = -1, _
                     Optional ByVal IsnGl As Long = -1, _
                     Optional ByVal UpToDate As Variant, _
                     Optional ByVal Op As String)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| AccCode | [Հաշվառման կոդ](../../../Defs/Accounting.md) կամ մի քանի հաշվառումների կոդերի մասիվ։ |
| Isn | Հաշվառվող օբյեկտի ներքին նույնականացմամ համար։ |
| IsnGl | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| UpToDate | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործառույթի ամսաթիվը։ |
| Op | [Հաշվառման գործողություն](../../../Defs/Accounting.md), որով անցկացվում է որոնումը։ |

## Նկատառումներ

[Տես նաև](LastOpDate.md)

## Օրինակ

վերջին գործողության ամսաթվի որոնման "01" և "02" ըստ հաշվառումների։

```vb
Function LASTDAY()
ReDim arr(1)
    arr(0) = "01"
    arr(1) = "02"
    LASTDAY = LastHI2OpDate(arr, ds("fISN"))
End Function
```
