---
layout: page
title: "LoadFactByBase ֆունկցիա"
---

# LoadFactByBase ֆունկցիա

Վերադարձնում է հիմքային փաստաթղթով ստեղծված գործառույթների հավաքածուն։

Նշված պարամետրորով գործառույթների բացակայության դեպքում վերադառնում է `Nothing`։ 
Վերադարձվող համաքածուի յուրաքանչյուր տարր [գործառույթ տիպի օբյեկտ](../../Asfact.html) է։

Հավաքածուի տարրերի ինդեքսը սկսվում է 1-ից։

## Շարահյուսություն

``` vb
Function LoadFactByBase(ByVal BaseISN As Long, _
               Optional ByVal Accounting As String, _
               Optional ByVal Op As String, _
               Optional ByVal UseArchive As Boolean = True) As Collection
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| BaseISN | [Հիմքային փաստաթղթի](../../ASFACT/Base.html) ներքին նույնականացման համար։ |
| Accounting | [Հաշվառման կոդ](../../ASFACT/TypeAcc.html): |
| Op | [Գործողությունների կոդերի](../../ASFACT/Op.html) բացակով տարանջատված ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողության բոլոր այն կոդերը, որոնք թվարկված են եղել նրանից հետո։ "-" նշանի դեպքում անտեսվում են այն գործողությունները, որոնք թվարկված են ցանկի մեջ։ Ցանկը նաև կարող է պարունակել առանց նշանի միայն մեկ տարր։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Ստորև օրինակում հաշվում է թղթակցությունների գումարները դրամով և արտարժույթով վերադարձվող թղթակցությունների բազմության համար։

``` vb
Set xFacts =LoadFactByBase(ISN)
For i = 1 to xFacts.Count
    nSum += xFacts(i).Summa
    nCurSum += xFacts(i).CurSumma
    nSuid = xFacts(i).Suid
Next
```
