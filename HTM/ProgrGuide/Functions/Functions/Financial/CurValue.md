---
layout: page
title: "CurValue ֆունկցիա"
---

# CurValue ֆունկցիա

Վերդարձնում է արտարժույթի փոխարժեքը։ 
Եթե նշված ամսաթվի արտարժույթը բացակայում է, ապա բերվում է արտարժույթի վերջին առկա տվյալը։ 

Փոխարժեքը հետևյալ ձևաչափի տողը է "Արժեք/Ըստ", որպեսզի տեղադրվի անմիջապես [NumPair](../../../Types/NumPair.md) տիպի դաշտի մեջ։

## Շարահյուսություն

```as4x
Function CurValue(ByVal codCurrency As String, _
                  ByVal curDate As Date, _
         Optional ByVal maxCreationDate As Variant) As String
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| codCurrency | Արտարժույթի կոդը։ |
| curDate | Փոխարժեքի ամսաթիվ։ |
| maxCreationDate | Փոխարժեքի նշանակման առավելագույն ամսաթիվ։ |


## Նկատառումներ

[Տես նաև](../../../functions.html)

## Օրինակ

`sCurValue` փոփոխականին վերագրվում է `001` կոդով արտարժույթի ՀՀ դրանի նկատմամբ 27/08/2020 օրվա փոխարժեքը։

``` vb
sCurValue = CurValue("001", #27/08/2020#)

Debug.Print sCurValue            ' "487.03/1"
```
