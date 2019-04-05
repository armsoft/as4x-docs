---
layout: page
title: "AsRepViwer/SaveToFile"
---


# SaveToFile մեթոդ

[См. также](SaveAs.md) Օրինակ [Применяется к](../AsRepViewer.md) 

Պահպանում է հաշվետվության տեքսը ֆայլի մեջ։

## Շարահյուսություն

``` vb
object.SaveToFile sFileName, [nMode], [bReplaceTag]
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object | Հաշվետվության հղում։  |
| sFileName | Ֆայլի ճանապարհը։  |
| nMode |  Տեքստային ֆայլերի կոդավորման տիպը։ 1-ի դեպքում՝ ANSI կոդավորում Windows օպերացիոն համակարգի համար։ 2-ի դեպքում՝ OEM կոդավորում DOS օպերացիոն համակարգի համար։ 3-ի դեպքում Unicode։ Լռությամբ արժեքը 1։ |
| bReplaceTag | Տեքստից թեգերի հեռացում (տե՛ս [UseFormatting](UseFormatting.html))։ |


