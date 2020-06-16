---
layout: page
title: "OnOpen իրադարձություն"
---

# OnOpen տվյալների աղբյուրի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_OnOpen.md) [Կիրառվում է](../Defs/Data.md)

OnOpen իրադարձությունը առաջանում է տվյալների աղբյուրը բացելու ամենասկզբում մինչև որևէ տողի ձևավորելը, [OpenCursor](../Functions/ASDATA/OpenCursor.md) և [Update](../Functions/ICurrentView/Update.md) մեթոդների կանչերից հետո։
Աշխատում է մինչև [OnEachRow](OnEachRow.md) իրադարձության աշխատանքը սկսելը։ 

Նախատեսված է տարբեր տեսակի տվյալներ բեռնելու համար, որոնք հետագայում կիրառվում են [OnEachRow](OnEachRow.md)-ի կամ հաշվարկային սյունակների հաշվարկի մեջ։ 

## Շարահյուսություն

``` vb
Public Sub OnOpen()
    ' statements
End Sub
```