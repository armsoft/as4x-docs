---
layout: page
title: "SplitString ֆունկցիա"
---

# SplitString ֆունկցիա

Տողը բաժանում է ֆիքսված երկարությամբ ենթատողերի մասիվի։ 
Բաժանվում կատարվում է ըստ տրված բաժանարարի։

## Շարահյուսություն

``` vb
Function SplitString(ByVal sExpression As String, _
                     ByVal nLen As Long, _
            Optional ByVal sDelimiter As String = " ") As String()
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sExpression | Մուտքային տողը: |
| nLen | Ենթատողերի առավելագույն երկարություն։ |
| sDelimiter | Բաժանարարի նշանը։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
