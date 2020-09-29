---
layout: page
title: "GetTurnFullHI2 ֆունկցիա"
---

# GetTurnFullHI2 ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտի դեբետային և կրեդիտային շրջանառության արժեքները ըստ տրված կուտակող օբյեկտի տրված ժամանակաշրջանի համար, ինչպես նաև սկզբնական և վերջնական մնացորդները։

## Շարահյուսություն

``` vb
Sub GetTurnFullHI2(ByVal Accounting As String, _
                   ByVal Isn As Long, _
                   ByVal IsnGl As Long, _
                   ByVal StartDate As Date, _
                   ByVal EndDate As Date, _
                   ByRef DbTurn As Currency, _
                   ByRef DbTurnAMD As Currency, _
                   ByRef CrTurn As Currency, _
                   ByRef CrTurnAMD As Currency, _
                   ByRef Remd As Currency, _
                   ByRef RemdAMD As Currency, _
          Optional ByRef StartRemd, _
          Optional ByRef StartRemdAMD)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Accounting | [Հաշվառման կոդ](../../../Defs/Accounting.md): |
| Isn | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| IsnGl | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| StartDate | Ժամանակաշրջանի սկզբի ամսաթիվ։ |
| EndDate | Ժամանակաշրջանի վերջին ամսաթիվ։ |
| DbTurn | Վերադարձնում է դեբիտային շրջանառությունը։ |
| DbTurnAMD | Վերադարձնում է դեբիտային շրջանառության դրամային համարժեքը։ |
| CrTurn | Վերադարձնում է կրեդիտային շրջանառությունը։ |
| CrTurnAMD | Վերադարձնում է կրեդիտային շրջանառության դրամային համարժեքը։ |
| Remd | Վերադարձնում է վերջնական մնացորդը։ |
| RemdAMD | Վերադարձնում է վերջնական մնացորդը դրամային արտարժույթով։ |
| StartRemd | Վերադարձնում է նախնական մնացորդը արտարժույթով։ Մնացորդը առաջին օրվա սկզբի վիճակով։ |
| StartRemdAMD | Վերադարձնում է նախնական մնացորդը դրամայնին արտարժույթով։ Մնացորդը վերջին օրվա սկզբի վիճակով։ |

## Նկատառումներ

[Տես նաև](GetTurnFull.md)
