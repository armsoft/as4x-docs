---
layout: page
title: "DefaultComment իրադարձություն"
---

# DefaultComment համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_DefaultComment.md) [Կիրառվում է](../Defs/doc.md)

DefaultComment իրադարձությունը առաջանում է փաստաթղթի [թղթապանակի տարր](../Functions/AsFoldElement.md) ստեղծելուց մեկնաբանություն լրացնելու համար ։

Երե [ստեղծվում է](../Functions/ASDOC/StoreInFolder.md) [թղթապանակի տարր](../Functions/AsFoldElement.md), որում լրացվում չէ [COM](../Functions/AsFoldElement/Com.md) հատկությունը, ապա, DefaultComment իրադարձության մշակված լինելու դեպքում, լրացվում է ըստ դրա։ Եթե մշակված չէ, ապա լրացվում է ըստ [փաստաթղթի նկարագրության](../Defs/doc.md) մեջ գրված անվանման։

Իրադարձությունը առաջանում է նաև օգտագործողի անձնական կամ սևագիր թղթապանակի մեջ փաստաթուղթը պատճենելիս (Ctrl+C և Ctrl+V ստեղների օգնությամբ)։ 
Իրադարձության մշակիչը պետք է վերդարձնի այն մեկնաբանությունը, որ պետք է երևա անձնական թղթապանակում։

## Շարահյուսություն

``` vb
Public Function DefaultComment() As String
    ' statements
End Function
```
