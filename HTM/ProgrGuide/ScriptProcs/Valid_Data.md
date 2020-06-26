---
layout: page
title: "Valid իրադարձություն"
---

# Valid տվյալների աղբյուրի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_Valid_Data.md) [Կիրառվում է](../Defs/Data.md)

Valid իրադարձությունը առաջանում է տվյալների աղբյուրի յուրաքանչյուր տողի ձևավորման սկզբում [OnEachRow](OnEachRow.md) իրադարձությունից առաջ։ 

Նախատեսված է ստուգելու, թե արդյոք տողը հարկավոր է ցույց տալ թե ոչ։ Մշակիչը պետք է վերադարձնի տրամաբանական արժեք՝
* `True` - Տողը հարկավոր է ցույց տալ,
* `False` - Տողը ցույց չի տրվի, այդ տողի համար չի առաջանա [OnEachRow](OnEachRow.md) իրադարձությունը և չեն հաշվարկվի հաշվարկային սյունակները։

## Շարահյուսություն

``` vb
Public Function Valid()
    ' statements
End Function
```