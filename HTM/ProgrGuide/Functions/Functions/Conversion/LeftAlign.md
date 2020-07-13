---
layout: page
title: "LeftAlign ֆունկցիա"
---

# LeftAlign ֆունկցիա

Ձևափոխում է տողը դարձնելով նշված երկարությամբ, աջ կողմից ավելացնելով պակասող բացակներ (կամ փոխանցված այլ նիշեր)։ Նիշեր ավելացնելուց առաջ ջնջվում են ձախ կողմի բոլոր բացակները (LTrim)։

Եթե մուտքային տողը ավելի երկար է քան նախատեսվող երկարությունը, ապա կտրվում են աջի սիմվոլները։

Ֆունկցիան հարմար է հաշվետվությունների մեջ ֆիքսված երկարության տողեր նկարելու համար։

## Շարահյուսություն

``` vb
Public Function LeftAlign(ByVal sSource As String, _
                          ByVal intLength As long, _
                 Optional ByVal sDelimiter As String = " ") As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sSource | Մուտքային տողը։  |
| intLength | Վերջնական տողի երկարությունը։ |
| sDelimiter | Տողի աջ եզրից ավելացվող սիմվոլը։ Լռության դեպքում դա բացակ է։ |

## Օրինակ

``` vb
LeftAlign("Example", 10)            '-> "Example   "
LeftAlign("Example", 5)             '-> "Examp"
LeftAlign("Example", 10, "-")       '-> "Example---"
LeftAlign("    Example", 10, "+")   '-> "Example+++"
```

## Նկատառումներ

[Տես նաև](RightAlign.md)
