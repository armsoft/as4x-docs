---
layout: page
title: "OnUIDelete իրադարձություն"
---

# OnUIDelete փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

OnUIDelete իրադարձությունը առաջանում է փաստաթուղթը ինտերֆեյսից հեռացնելիս՝ նախքան [հեռացման տրանզակցիայի](../Functions/Functions/DocumentsCirculation/DeleteDoc.md) բացվելը։

Իրադարձությունը առաջանում է միայն այն դեպքում, երբ փաստաթղթի հեռացման [DeleteDoc](../Functions/Functions/DocumentsCirculation/DeleteDoc.md) մեթոդը կանչվում է `AllowUserInterface` պարամետրի `True` արժեքով։ 

Իրադարձության մշակիչը պետք է վերադարձնի տրամաբանական արժեք, որը ցույց է տալիս հեռացման պրոցեսը պետք է շարունակվի, թե ընդհատվի։

## Շարահյուսություն

``` vb
Public Function OnUIDelete() as Boolean
    ' statements
End Function
```
