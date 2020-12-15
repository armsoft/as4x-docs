---
layout: page
title: "LoadHI2FactByObject ֆունկցիա"
---

# LoadHI2FactByObject ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտով ստեղծված HI2 գործառույթների հավաքածուն տրված ժամանակահատվածում։

Նշված պարամետրորով գործառույթների բացակայության դեպքում վերադառնում է `Nothing`։ 
Վերադարձվող համաքածուի յուրաքանչյուր տարր [գործառույթ տիպի օբյեկտ](../../Asfact.html) է։

Հավաքածուի տարրերի ինդեքսը սկսվում է 1-ից։

## Շարահյուսություն

```vb
Function LoadHI2FactByObject(ByVal Accounting As String, _
                             ByVal ObjectISN As Long, _
                    Optional ByVal IsnGl As Long = -1, _
                    Optional ByVal DateB As Variant = #1/1/1990#, _
                    Optional ByVal DateE As Variant, _
                    Optional ByVal Op As String) As Collection
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Accounting | [Հաշվառման կոդ](../../ASFACT/TypeAcc.html): |
| ObjectISN | [Հաշվառվող օբյեկտի](../../ASFACT/ObjectISN.html) ներքին նույնականացման համար։ |
| IsnGl | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| DateB | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| DateE | ժամանակաշրջանի վերջին ամսաթիվ։ |
| Op | [Գործողությունների կոդերի](../../ASFACT/Op.html) բացակով տարանջատված ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողության բոլոր այն կոդերը, որոնք թվարկված են եղել նրանից հետո։ "-" նշանի դեպքում անտեսվում են այն գործողությունները, որոնք թվարկված են ցանկի մեջ։ Ցանկը նաև կարող է պարունակել առանց նշանի միայն մեկ տարր։ |

## Նկատառումներ

[Տես նաև](LoadFactByObject.md)

##  Օրինակ

Ստորև օրինակում հաշվում է թղթակցությունների գումարները դրամով և արտարժույթով վերադարձվող թղթակցությունների բազմության համար։

```vb
Set xFacts = LoadHI2FactByObject(Accounting, ISN, gISN, xLastDate, xLastDate, Op)
For i = 1 to xFacts.Count
    nSum += xFacts(i).Summa
    nCurSum += xFacts(i).CurSumma
    nSuid = xFact(i).Suid
Next
```
