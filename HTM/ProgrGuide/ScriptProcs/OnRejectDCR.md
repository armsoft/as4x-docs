---
layout: page
title: "OnRejectDCR իրադարձություն"
---

# OnRejectDCR փաստաթղթի համակարգային իրադարձություն

OnRejectDCR իրադարձությունը առաջանում է փաստաթղթի փոփոխման հայտը մերժելիս։

## Շարահյուսություն

``` vb
Public Sub OnRejectDCR(ByVal dcr As DocChangeRequest, ByVal sRejectComment As String) 
    ' statements
End Sub
```

Բաղադրիչներն են՝


|Պարամետր|Նկարագրություն|
|--|--|
|`dcr`| [Փաստաթղթի փոփոխման հայտը](../Functions/DocChangeRequest.md/DCR.md):|
|`sRejectComment`| [Փաստաթղթի փոփոխման հայտի](../Functions/DocChangeRequest.md/DCR.md) մերժման մեկնաբանությունը:|