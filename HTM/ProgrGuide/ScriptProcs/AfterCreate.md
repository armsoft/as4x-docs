---
layout: page
title: "AfterCreate համակարգային իրադարձություն/Event AfterCreate"
---

# AfterCreate համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

AfterCreate Իրադարձությունը աշխատում է [CreateDoc](../Functions/Functions/DocumentsCirculation/CreateDoc.html) կամ CreateDocFromString ֆունկցիաների միջոցով փաստաթուղթը ստեղծելուց հետո։ Փաստաթղթի ներմուծման ժամանակ իրադարձությունը չի աշխատում։
Событие происходит сразу после создания документа функциями 
[CreateDoc](../Functions/Functions/DocumentsCirculation/CreateDoc.html) или CreateDocFromString. При импорте документа событие не происходит.


## շարահյուսություն

``` as4x
Sub AfterCreate()  
   statements
End Sub
```