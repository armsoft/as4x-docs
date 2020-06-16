---
layout: page
title: "PostMessage իրադարձություն"
---

# PostMessage փաստաթղթի համակարգային իրադարձություն

[См. также](../scriptstproced.md) Օրինակ [Применяется к](../Defs/doc.md)

PostMessage իրադարձությունը առաջանում է մի փաստաթղթից մյուն ծրագրային հաղորդագրություն ([SendMessage](../Functions/ASDOC/SendMessage.md)) ուղարկելուց ստացող փաստաթղթի մեջ։

Ստացող փաստաթուղթը կրկին գրանցվում ([Store](../Functions/ASDOC/Store.md)) է համակարգում իրադարձության մշակումից հետո ըստ վերադարձվող `iCheckLevel`՝ [փաստաթղթի ստուգման մակարդակի](../Functions/ASDOC/DocCheckLevel.md)։

## Շարահյուսություն

``` vb
Public Sub PostMessage(ByVal senderDoc As AsDoc, _
                       ByVal sMessage As String, _
                       ByRef iCheckLevel As Long)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| senderDoc | Ուղարկող փաստաթղթի օբյեկտի հղում։ |
| sMessage | Ստացված հաղորդագրության տեքստ։ |
| iCheckLevel | Փաստաթղթի գրանցման [ստուգման մակարդակ](../Functions/ASDOC/DocCheckLevel.md): |
