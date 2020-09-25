---
layout: page
title: "GetTurnHI2 ֆունկցիա"
---

# GetTurnHI2 ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտի դեբետային և կրեդիտային շրջանառության արժեքները ըստ տրված կուտակող օբյեկտի տրված ժամանակաշրջանի համար։

## Շարահյուսություն

``` vb
Sub GetTurnHI2(ByVal Accounting As String, _
               ByVal Isn As Long, _
               ByVal IsnGl As Long, _
               ByVal StartDate As Date, ByVal EndDate As Date, _
      Optional ByRef DbTurn, _
      Optional ByRef DbTurnAMD, _
      Optional ByRef CrTurn, _
      Optional ByRef CrTurnAMD, _
      Optional ByVal CodeOper As String = "", _
      Optional ByVal BaseISN As Long = -1)
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
| CodeOper | Հաշվառման գործողության կոդը։ Եթե տրված է, ապա շրջանառությունը հաշվարկում է միայն նշված գործողության համար։ |
| BaseISN | Հիմքային փաստաթղթի ներքին նույնականացման համար։ Եթե տրված է, ապա շրջանառությունը հաշվարկում է միայն նշված հիմքային փաստաթղթի համար։  |

## Նկատառումներ

[Տես նաև](GetTurn.md)
