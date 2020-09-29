---
layout: page
title: "LoadHI2FactByBase ֆունկցիա"
---
    
# LoadHI2FactByBase ֆունկցիա

Վերադարձնում է հիմքային փաստաթղթով ստեղծված HI2 գործառույթների հավաքածուն։

Նշված պարամետրորով գործառույթների բացակայության դեպքում վերադառնում է `Nothing`։ 
Վերադարձվող համաքածուի յուրաքանչյուր տարր [գործառույթ տիպի օբյեկտ](../../Asfact.html) է։

Հավաքածուի տարրերի ինդեքսը սկսվում է 1-ից։

## Շարահյուսություն

``` vb
Function LoadHI2FactByBase(ByVal BaseISN As Long, _
                  Optional ByVal Accounting As String, _
                  Optional ByVal Op As String, _
                  Optional ByVal IsnGl As Long = -1) As Collection
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| BaseISN | [Հիմքային փաստաթղթի](../../ASFACT/Base.html) ներքին նույնականացման համար։ |
| Accounting | [Հաշվառման կոդ](../../ASFACT/TypeAcc.html): |
| Op | [Գործողությունների կոդերի](../../ASFACT/Op.html) բացակով տարանջատված ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողության բոլոր այն կոդերը, որոնք թվարկված են եղել նրանից հետո։ "-" նշանի դեպքում անտեսվում են այն գործողությունները, որոնք թվարկված են ցանկի մեջ։ Ցանկը նաև կարող է պարունակել առանց նշանի միայն մեկ տարր։ |
| IsnGl | Կուտակող օբյեկտի ներքին նույնականացման համար։ |

## Նկատառումներ

[Տես նաև](LoadFactByObject.md)

## Օրինակ

Ստորև բերված է HI2-ից գործառույթները ջնջելու օրինակ։

```vb
Dim xCol As Collection
Dim xFact As AsFact
Dim lngTrans As Long

Set xCol = LoadHI2FactByBase(Doc.ISN)
If Not xCol Is Nothing Then
  For Each xFact In xCol
    lngTrans = xFact.Trans
    DeleteHI2Trans Doc.ISN, lngTrans
  Next xFact
End If
```
