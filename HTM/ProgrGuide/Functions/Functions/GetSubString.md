---
layout: page
title: "GetSubString ֆունկցիա"
---
    
# GetSubString ֆունկցիա

Վերադարձնում է նշված տողի ենթատողը։

## Շարահյուսություն

``` vb
Function GetSubString(ByVal pSourceString As String, _
                      ByVal pStartPosOrChar As Variant, _
             Optional ByVal pEndPosOrChar As Variant = 0, _
             Optional ByVal pBegMatched As Long = 1) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| pSourceString | Մուտքային տող, որում հարկավոր է գտնել ենթատողը։ |
| pStartPosOrChar | Ենթատողի նախորդող դիրքը կամ նիշը։ |
| pEndPosOrChar | Ենթատողին հաջորդող դիրքը կամ նիշը։ Եթե փոխանցված չէ, ապա ենթատողը սկսվում է pSourceString-ով և ավարտվում տրված տողի վերջին նշանով։ |
| pBegMatched | Վերադարձվող ենթատողի համարը։ Նախատեսված է pStartPosOrChar-ի նիշ լինելու դեպքի համար։ |


## Նկատառումներ

``` vb
GetSubString("Find this character", "i", "h")    ' -> "nd t"
```

[Տես նաև](../../functions.html)
