---
layout: page
title: "Data ֆունկցիա"
---

# Data ֆունկցիա

[свойства методы](../../Asdata.md)

Ֆունկցիան ստեղծում է տվյալների աղբյուր տիպի օբյեկտ։

## Շարահյուսություն

``` vb
Public Function Data(ByVal DataName As String) As AsData
```

Բաղադրիչներն են ՝


| Պարամետր | Նկարագրություն |
|--|--|
| DataName | Տվյալների աղբյուրի ներքին անունը։ |

## Օրինակ

Օրինակում կանչվում է Data ֆունկցիան, որը `xDS`-ի միջոցով վերադարձնում է հղում `NBTURN2` տվյալների աղբյուրի վրա։

``` vb
Set xDS = Data("NBTURN2")
xDS.ClearParameters(True)
xDS.Parameters(1) = xBal
xDS.Parameters(2) = "%/%"
xDS.Parameters(3) = "%"

xDS.OpenCursor
totalSum = 0
Do While Not xDS.EOF
    totalSum += xDS("fREM")
    xDS.MoveNext
Loop 
xDS.CloseCursor
```

## Նկատառումներ

[См. также](../../../constructors.html)
