---
layout: page
title: "LoadFactByObject ֆունկցիա"
---

# LoadFactByObject ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտով ստեղծված գործառույթների հավաքածուն տրված ժամանակահատվածում։

Նշված պարամետրորով գործառույթների բացակայության դեպքում վերադառնում է `Nothing`։ 
Վերադարձվող համաքածուի յուրաքանչյուր տարր [գործառույթ տիպի օբյեկտ](../../Asfact.html) է։

Հավաքածուի տարրերի ինդեքսը սկսվում է 1-ից։

## Շարահյուսություն

``` vb
Function LoadFactByObject(ByVal Accounting As String, _
                          ByVal ObjectISN As Long, _
                          ByVal DateB As Date, _
                          ByVal DateE As Date, _
                 Optional ByVal Op As String) As Collection
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Accounting | [Հաշվառման կոդ](../../ASFACT/TypeAcc.html): |
| ObjectISN | [Հաշվառվող օբյեկտի](../../ASFACT/ObjectISN.html) ներքին նույնականացման համար։ |
| DateB | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| DateE | ժամանակաշրջանի վերջին ամսաթիվ։ |
| Op | [Գործողությունների կոդերի](../../ASFACT/Op.html) բացակով տարանջատված ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողության բոլոր այն կոդերը, որոնք թվարկված են եղել նրանից հետո։ "-" նշանի դեպքում անտեսվում են այն գործողությունները, որոնք թվարկված են ցանկի մեջ։ Ցանկը նաև կարող է պարունակել առանց նշանի միայն մեկ տարր։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Ստորև օրինակում հաշվում է թղթակցությունների գումարները դրամով և արտարժույթով վերադարձվող թղթակցությունների բազմության համար։

``` vb
Set xFacts = LoadFactByObject(Accounting, ISN, xLastDate, xLastDate, Op)
For i= 1 To xFacts.Count
    nSum += xFacts(i).Summa
    nCurSum += xFacts(i).CurSumma
    nSuid = xFacts(i).Suid
Next
```
