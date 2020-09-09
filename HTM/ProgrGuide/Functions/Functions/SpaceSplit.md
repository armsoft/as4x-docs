---
layout: page
title: "SpaceSplit ֆունկցիա"
---
    
# SpaceSplit ֆունկցիա

Բաժանում է տողերի մասիվը ֆիքսված երկարությամբ տողերի մասիվի։ Բաժանումը կատարվում է ըստ բացակների։

## Շարահյուսություն

``` vb
Function SpaceSplit(strArr2Split() As Variant, _
              ByVal length1 As Integer, _
              ByVal lengthRem As Integer) As String()
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| strArr2Split | Հիմնական մասիվ, որը հարկավոր է բաժանել ենթատողերի։ |
| length1 | Մասիվի առաջին տարրի առավելագույն երկարությունը։ |
| lengthRem | Մասիվի երկրորդ և հաջորդող տարրերի առավելագույն երկարությունը։ |

## Օրինակ

``` vb
SpaceSplit(Array("1 2 3 4 5 6 7 8 9 0", "a b c d e f g h i j"), 10, 5) 
' -> (0 To 5) As String
'(0) -> "1 2 3 4 5 "
'(1) -> "6 7 8"
'(2) -> "9 0 a"
'(3) -> "b c d"
'(4) -> "e f g"
'(5) -> "h i j"
```

## Նկատառումներ

[Տես նաև](../../functions.html)
