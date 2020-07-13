---
layout: page
title: "RightAlign ֆունկցիա"
---

# RightAlign ֆունկցիա

Ձևափոխում է տողը դարձնելով նշված երկարությամբ, ձախ կողմից ավելացնելով պակասող բացակներ (կամ փոխանցված այլ նիշեր)։ Նիշեր ավելացնելուց առաջ ջնջվում են աջ կողմի բոլոր բացակները (RTrim)։

Եթե մուտքային տողը ավելի երկար է քան նախատեսվող երկարությունը, ապա կտրվում են ձախի սիմվոլները։

Ֆունկցիան հարմար է հաշվետվությունների մեջ ֆիքսված երկարության տողեր նկարելու համար։

## Շարահյուսություն

```vb
Public Function RightAlign(ByVal sSource As String, _
                           ByVal intLength As long, _
                  Optional ByVal sDelimiter As String = " ") As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sSource | Մուտքային տողը։  |
| intLength | Վերջնական տողի երկարությունը։ |
| sDelimiter | Տողի փախ եզրից ավելացվող սիմվոլը։ Լռության դեպքում դա բացակ է։ |

``` vb
RightAlign("Example", 10)           '-> "   Example"
RightAlign("Example", 5)            '-> "ample"
RightAlign("Example", 10, "-")      '-> "---Example"
RightAlign("Example    ", 10, "+")  '-> "+++Example"
```

## Նկատառումներ

[Տես նաև](LeftAlign.md)
