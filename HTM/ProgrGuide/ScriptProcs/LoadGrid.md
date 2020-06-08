---
layout: page
title: "LoadGrid իրադարձություն"
---

# LoadGrid փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

Առաջանում է փաստաթղթի աղյուսակի բեռնման ժամանակ՝ [DOCSG](../Database/DocsG.html)-ից բեռնման փորձից հետո։ 

Այս իրադարձության մշակումը պարտադիր է, եթե աղյուսակի գրանցումը կատարվել է ծրագրավորողի կողմից [StoreGrid](StoreGrid.md) իրադարձության մշակման մեջ։ 

## Շարահյուսություն 

``` vb
Public Sub LoadGrid(ByVal sGridName As String) 
    ' statements
End Sub
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| sGridName| [փաստաթղթի աղյուսակի](../Functions/AsGrid.md) ներքին անուն։ |
