---
layout: page
title: "CurValueE ֆունկցիա"
---

# CurValueE ֆունկցիա

Վերդարձնում է արտարժույթի փոխարժեքը։ 
Եթե նշված ամսաթվի արտարժույթը բացակայում է, ապա բերվում է արտարժույթի վերջին առկա տվյալը։

## Շարահյուսություն

``` vb
Sub CurValueE(ByVal sCodCurrency As Variant, _
              ByVal sDate As Variant, _
              ByRef Value As Variant, _
              ByRef Count As Variant, _
     Optional ByVal maxCreationDate As Variant)
```
Բաղադրիչներն են՝

| Параметр | Описание |
|--|--|
| sCodCurrency | Արտարժույթի կոդ։ |
| sDate | Փոխարժեքի ամսաթիվ։ Կամ ամսաթիվ տիպի կամ ձևաչափված տողային ամսաթիվ։ |
| Value | Վերադարձնում է փոխարժեք։ |
| Count | Վերադարձնում է փոխարժեքի քանակը։ |
| maxCreationDate | Փոխարժեքի նշանակման առավելագույն ամսաթիվ։ |

## Օրինակ

``` vb
Dim Value As Variant, Count As Variant

CurValueE("001", #14/08/20#, Value, Count)
Debug.Print Value       ' 484.65
Debug.Print Count       ' 1

CurValueE("001", #27/08/20#, Value, Count)
Debug.Print Value       ' 487.03
Debug.Print Count       ' 1
```

## Նկատառումներ

[Տես նաև](CurValue.md)
