---
layout: page
title: "Data"
---


# Data ֆունկցիա
[свойства методы](../../Asdata.md)

Ֆունկցիան ստեղծում է տվյալների աղբյուր տիպի օբյեկտ։



## Շարահյուսություն

``` vb
Set xDS = Data(DataName)
```

Բաղադրիչներն են ՝


| Պարամետր | Նկարագրություն |
|--|--|
| xDS | Փոփոխական, որը հղվում է տվյալների աղբյուր տիպի օբյեկտի վրա։|
| DataName | Տողային արտահայտություն, որը հանդիսանում է տվյալների աղբյուրի ներքին անունը։ |



## Օրինակ

Օրինակում կանչվում է Data ֆունկցիան, որը `xDS`-ի միջոցով վերադարձնում է հղում `NBTURN2` տվյալների աղբյուրի վրա։

``` vb
Set xDS = Data("NBTURN2")
xDS.ClearParameters(True)
xDS.Parameters(1) = xBal
xDS.Parameters(2) = "%/%"
xDS.Parameters(3) = "%"

xDS.OpenCursor
Do While Not xDS.EOF
    totalSum += xDS("fREM")
    xDS.MoveNext
Loop 
xDS.CloseCursor
```



## Նկատառումներ

[См. также](../../../constructors.html)