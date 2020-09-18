---
layout: page
title: "CheckHI2Limit ֆունկցիա"
---

# CheckHI2Limit ֆունկցիա

Ստուգում է հաշվառման մնացորդների նշված գումարով փոփոխությունից հետո սահմանների խաղտված լինելը։

Սահմանափակումները նախօրոք պետք է սահմանված լինեն [SetHI2Limit](SetHI2Limit.md) ֆունկցիայի օգնությամբ։ 
Սահմանափակումների ավտոմատ ստուգման համար հարկավոր է Limit=1 հատկության առկայությունը [հաշվառման նկարագրության մեջ](../../../Defs/Accounting.md)։

Սահմանափակումները լռությամբ ստուգվում են [CheckAndStore](../../ASDOC/Store.md) և [HiDelete](../../ASDOC/HiDelete.md) մեթոդների ժամանակ։

## Շարահյուություն

``` vb
Function Util.CheckHI2Limit(ByVal TypeAcc As String, _
                       ByVal ObjectISN As Long, _
                       ByVal GLObjectISN As Long, _
              Optional ByVal Increment As Currency = 0) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TypeAcc | [հաշվառման կոդը](../../../Defs/Accounting.md)։ |
| ObjectISN | Հաշվառվող օբյեկտի ներքին նույնականացման համար, որի համար ստուգվում են սահմանները։ |
| GLObjectISN| Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| Increment | Մնացորդին ավելացվող գումարի չափը։ |

## Նկատառումներ

[Տես նաև](CheckLimit.md)
