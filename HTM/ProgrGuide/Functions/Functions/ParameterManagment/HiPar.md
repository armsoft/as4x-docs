---
layout: page
title: "HiPar ֆունկցիա"
---

# HiPar ֆունկցիա

Նշված ամսաթվի համար  սահմանում է ժամանակագրական պարամետրի նոր արժեք։ 

## Շարահյուսություն

``` vb
Public Sub HiPar(ByVal sParId As String, _
                 ByVal dDate As Date, _
                 ByVal nISN As Long, _
                 ByVal sValue As String, _
        Optional ByVal sErrMsg As String, _
        Optional ByVal dCreationDate As Variant)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sParId | Պարամետրի ներքին անուն։ |
| dDate | Նոր արժեքի նշանակման ամսաթիվ։ |
| nISN | նոր արժեքի հիմքային փաստաթղթի ներքին նույնականացման համար։ |
| sValue | Պարամետրի նոր արժեք։ |
| sErrMsg | Կրկնվող տվյալների առկայության դեպքում ցույց տրվող սխալի հաղորդագրությունը: Եթե արժեք տրված չէ, ապա կառաջանա ստանդարտ սխալի հաղորդագրություն։ Կրկնությունը ստուգվում է ըստ նույն պարամետրի, նույն ամսաթվի և նույն փաստաթղթի (`sParId,dDate,nISN`)։ |
| dCreationDate | Արժեքի ստեղծման ամսաթիվ։ |

## Օրինակ

Օրինակում նշանակվում է փոխարժեքի նոր արժեք։

``` vb
HiPar(".cur." & Doc.Grid("CurGrid").Value(i,"CODE"), _
      Doc("DATE"), _
      Doc.ISN,  _
      VTOFS("N(11,2)", Doc.Grid("CurGrid").Value(i,"VALUE")) & VTOFS("N(5,0)", Doc.Grid("CurGrid").Value(i,"COUNT"))
```

## Նկատառումներ

[Տես նաև](GetHiPar.md)
