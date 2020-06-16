---
layout: page
title: "OnEachRow իրադարձություն"
---

# OnEachRow տվյալների աղբյուրի համակարգային իրադարձություն

[См. также](../scriptstproced.md) [Օրինակ](../Examples/E_OnEachRow.md) [Կիրառվում է](../Defs/Data.md)

OnEachRow իրադարձությունը առաջանում է տվյալների աղբյուրի յուրաքանչյուր տողի ձևավորման սկզբում։ 

Առաջանում է տվյալների աղբյուրը [OpenCursor](../Functions/ASDATA/OpenCursor.md) մեթոդի միջոցով բացելուց հետո տողերի վրայով [MoveFirst](../Functions/ASDATA/MoveFirst.md), [MoveNext](../Functions/ASDATA/MoveNext.md), [MoveLast](../Functions/ASDATA/MoveLast.md) մեթոդներով տեղաշարժելիս, ինչպես նաև թղթապանակի դիտելու ձևը [Update](../Functions/ICurrentView/Update.md) մեթոդով թարմացնելիս։

Օգտագործվում է ժամանակավոր արժեքներ հաշվելու համար, որ կօգտագործվեն հաշվարկային սյունակներում։ 

Այս իրադարձությունը առաջանում է [Valid](Valid_Data.md) իրադարձությունից հետո։ 

## Շարահյուսություն

``` vb
Public Sub OnEachRow()
    ' statements
End Sub
```
