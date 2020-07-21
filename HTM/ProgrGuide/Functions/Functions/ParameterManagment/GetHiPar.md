---
layout: page
title: "GetHiPar ֆունկցիա"
---

# GetHiPar ֆունկցիա

Վերադարձնում է ժամանակագրական պարամետրի արժեքը նշված ամսաթվով ([HIPAR](../../../Database/HiPar.html) աղյուսակի մեջից)։ 

## Շարահյուսություն

``` vb
Public Function GetHiPar(ByVal sParId As String, _
                         ByVal SDate As Date, _
                         ByVal SoftGet As Boolean, _
                Optional ByVal sErrMsg As String = "", _
                Optional ByRef ReturnSoftDate As Variant, _
                Optional ByVal bNoError As Boolean = False, _
                Optional ByVal vMaxCreationDate As Variant) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sParId | Պարամետրի ներքին անուն։ |
| sDate | Պարամետրի որոնման ամսաթիվ։ |
| SoftGet | `True` արժեքի դեպքում ֆունկցիան վերադարձնում է `sDate`-ի դրությամբ նշանակված վերջին արժեքը։ `False` արժեքի դեպքում ֆունկցիան կվերադարձնի միմիայն `sDate` ամսաթվին նշանակված արժեքը։ |
| sErrMsg | Արժեք չգտնելու դեպքում ցույց տրվող սխալի հաղորդագրությունը: Եթե արժեք տրված չէ, ապա կառաջանա ստանդարտ սխալի հաղորդագրություն։ |
| ReturnSoftDate | `SoftGet=True`-ի դեպքում վերադարձնում է գտնվող արժեքի ամսաթիվը։ |
| bNoError | `True` արժեքի դեպքում սխալ չի առաջանում արժեք չգտնելուց, ֆունկցիան վերադարձնում է դատարկ տող։ Լռությամբ արժեքը `False`: |
| vMaxCreationDate | Փոխանցված լինելու դեպքում, ֆունկցիան փնտրում է արժեք, որի ստեղծման ամսաթիվը չի գերազանցում փոխանցված ամսաթիվը: |


## Օրինակ

Վերադարձնում է ".cur.001" պարամետրի արժեքը ճիշտ 1991.09.21-ի դրությամբ։

``` vb
sDirtyValue = GetHiPar(".cur.001", #9/21/1991#, False)
```
