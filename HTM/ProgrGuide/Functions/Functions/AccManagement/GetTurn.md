---
layout: page
title: "GetTurn ֆունկցիա"
---

# GetTurn ֆունկցիա

Վերադարձնում է հաշվառում օբյեկտի դեբետային և կրեդիտային շրջանառության արժեքները տրված ժամանակաշրջանի համար։ 

## Շարահյուսություն

``` vb
Sub GetTurn(ByVal Accounting As String, 
            ByVal Isn As Long, _
            ByVal StartDate As Date, _
            ByVal EndDate As Date, _
   Optional ByRef DbTurn As Currency, _
   Optional ByRef DbTurnAMD As Currency, _
   Optional ByRef CrTurn As Currency, _
   Optional ByRef CrTurnAMD As Currency, _
   Optional ByVal CodeOperList As String = "")
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| Accounting | [Հաշվառման կոդը](../../../Defs/Accounting.md): |
| Isn | Հաշվառման օբյեկտի ներքին նույնականացման համար։ |
| StartDate | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| EndDate | ժամանակաշրջանի վերջին ամսաթիվ։ |
| DbTurn | Վերադարձնում է դեբիտային շրջանառությունը։ |
| DbTurnAMD | Վերադարձնում է դեբիտային շրջանառության դրամային համարժեքը։ |
| CrTurn | Վերադարձնում է կրեդիտային շրջանառությունը։ |
| CrTurnAMD | Վերադարձնում է կրեդիտային շրջանառության դրամային համարժեքը։ |
| CodeOperList | [Գործողությունների կոդերի](../../ASFACT/Op.html) ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողությունների բոլոր կոդերը, որոնք թվարկվում են նրանից հետո։ "-"  նշանի դեպքում անտեսվում են այն գործողությունները, որոնց կոդերը թվարկված են ցանկի մեջ։ Գործողությունների կոդերը թվարկվում են մեկը մյուսի հետևից բացակների միջոցով։ Ցանկը նաև կարող է պարունակել առանց նշանի միակ տարրը։ |

## Նկատառումներ

[Տես նաև](GetTurnHI2.md)

## Օրինակ

Տվյալների աղբյուրի (DATA) յուրաքանչյուր տողի համար ստորև կանչվում է `GetTurn` ֆունկցիան, որը վերագրում է շրջանառությունների արժեքներ՝ DbTurn, DbTurnAMD, CrTurn, CrTurnAMD։

Ստորև 
``` vb
Dim StartD, EndD
Dim DbTurn, DbTurnAMD
Dim CrTurn, CrTurnAMD
'''

Sub OnEachRow() 
   Call GetTurn("02", DS("fISN"), DS.Parameters("StartDate"), DS.Parameters("EndDate"), _ 
                DbTurn, DbTurnAMD, CrTurn, CrTurnAMD)
End Sub   
```
