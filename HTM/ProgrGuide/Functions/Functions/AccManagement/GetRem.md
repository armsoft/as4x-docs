---
layout: page
title: "GetRem ֆունկցիա"
---

# GetRem ֆունկցիա

Ֆունկցիան վերադարձնում է հաշվառվող օբյեկտի մնացորդը նշված ամսաթվի դրությամբ։ 

Դրամային մնացորդը վերադարձնում `AMDRem` պարամետրի մեջ։

## Շարահյուսություն

```vb
Function GetRem(ByVal Accounting As String, _
                ByVal Isn As Long, _
       Optional ByVal RemDate = "", _
       Optional AMDRem As Variant) As Currency
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Accounting | [Հաշվառման կոդը](../../../Defs/Accounting.md): |
| Isn | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
| RemDate | Մնացորդը բերելու ամսաթիվը։ Եթե պարամետրը փոխանցված չէ, ապա բերվում է վերջնական մնացորդը։ |
| AMDRem | Վերադարձնում է դրամային մնացորդը։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)


## Օրինակ

Ստորև բերված է `GetRem` ֆունկցիայի օգտագործումը, որտեղ curRem և DramRem ստանում են դրամին և արտարժույթին համապատասխանող օբյեկտի մնացորդները։

```vb
curRem = GetRem("01", Doc.ISN, Param("EndDate"), DramRem)
```
