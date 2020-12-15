---
layout: page
title: "SetHI2Limit ֆունկցիա"
---

# Util.SetHI2Limit ֆունկցիա

Հաշվառվող օբյեկտի համար սահմանում է մնացորդի թույլատերի սահմանաչափերը նշված HI2 հաշվառման համար։ 
Սահմանաչափերը ստուգվում են [CheckHI2Limit](CheckHI2Limit.md) ֆունկցիայի օգնությամբ գործառույթները անցկացնելու ժամանակ։ 

Սահմանաչափերը հարմար են հաշիվների մնացորդների վրա սահմանափակումեր դնելու համար։ 

## Շարահյուսություն

```vb
Sub Util.SetHI2Limit(ByVal TypeAcc As String, _
                     ByVal ObjectISN As Long, _
                     ByVal GLObjectISN As Long, _
                     ByVal ULimit As Currency, _
                     ByVal LLimit As Currency)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| TypeAcc | [Հաշվառման կոդը](../../ASFACT/TypeAcc.html)։ |
| ObjectISN | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| GLObjectISN | Կուտակող օբյեկտի ներքին նույնականացման համար։ |
| ULimit | Առավելագույն արժեքը։ численное выражение типа Currency, определяющее верхний лимит для объекта учета. |
| LLimit | Նվազագույն արժեքը։ |

## Նկատառումներ
 
[Տես նաև](SetLimit.md)
