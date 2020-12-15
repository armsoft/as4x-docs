---
layout: page
title: "StuffParamsIntoText ֆունկցիա"
---

# StuffParamsIntoText ֆունկցիա

Հիմնական տողի մեջ տեղադրվում է պարամետրերը %n1, %n2... արտահայտությունների փոխարեն։

## Շարահյուսություն

``` vb
Function StuffParamsIntoText(ByVal strText As String, _
                                   ParamArray strArrParams() As Variant) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sourceString | Հիմնական տող։ |
| strArrParams | Տեղադրվող պարամետրերի մասիվ։ |

## Օրինակ

``` vb
StuffParamsIntoText("Բարև %n1, իմ անունն է %n2:", "Լիլիթ", "Լիանա")  ' -> "Բարև Լիլիթ, իմ անունն է Լիանա:"
```
