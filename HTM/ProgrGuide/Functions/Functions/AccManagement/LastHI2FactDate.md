---
layout: page
title: "LastHI2FactDate ֆունկցիա"
---

# LastHI2FactDate ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված վերջին HI2 գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով մինչև նշված ամսաթիվը ներառյալ։

## Շարահյուսություն

``` vb
Function LastHI2FactDate(ByVal AccCode As String, _
                         ByVal Isn As Long, _
                         ByVal IsnGl As Long, _
                Optional ByVal UpToDate As Variant, _
                Optional ByVal Op As String) As Variant
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| AccCode | [Հաշվառման կոդ](../../../Defs/Accounting.md)։ |
| Isn | Հաշվառվող օբյեկտի ներքին նույնականացմամ համար։ |
| IsnGl | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| UpToDate | Ամսաթիվը, մինչև որը կատարվում է որոնումը։ Եթե պարամետրը տրված չէ, ապա վերադառնում է տվյալ հաշվառման մեջ վերջին գործառույթի ամսաթիվը։ |
| Op | [Հաշվառման գործողություն](../../../Defs/Accounting.md), որով անցկացվում է որոնումը։ |

## Նկատառումներ

[Տես նաև](LasHI2OpDate.md)
