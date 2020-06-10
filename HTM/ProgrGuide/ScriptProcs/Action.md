---
layout: page
title: "Action իրադարձություն"
---

# Action փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_Action.md) [Կիրառվում է](../Defs/doc.md)

Action իրադարձությունը առաջանում է փաստաթղթի պահպանման ժամանակ ([Store](../Functions/ASDOC/Store.md))։ 
Այն աշխատում է փաստաթղթի գրանցման մեծ տրանզակցիայի մեջ։ 

Հաշվառտումների ստեղծումը հարկավոր է կատարել հենց այս իրադարձության մշակման ժամանակ կանչելով [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) և [StoreFact](../Functions/ASDOC/StoreFact.md) ֆունկցիաները։ 

## Շարահյուսություն

``` vb
Public Sub Action()
    ' statements
End Sub
```
