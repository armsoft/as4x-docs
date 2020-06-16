---
layout: page
title: "OnClose իրադարձություն"
---

# OnClose տվյալների աղբյուրի համակարգային իրադարձություն

[Տեղ նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/Data.md)

OnClose իրադարձությունը առաջանում է մինչև տվյալների աղբյուրի փակվելու ժամանակ, [CloseCursor](../Functions/ASDATA/CloseCursor.md) կամ [Update](../Functions/ICurrentView/Update.md) մեթոդների կանչերից հետո։

Նախատեսված է ռեսուրսները ազատելու համար։ 

## Շարահյուսություն

``` vb
Public Sub OnClose()
    ' statements
End Sub
```
