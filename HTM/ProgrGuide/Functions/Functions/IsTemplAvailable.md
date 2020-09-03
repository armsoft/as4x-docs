---
layout: page
title: "IsTemplAvailable ֆունկցիա"
---
    
# IsTemplAvailable ֆունկցիա

Ստուգում է արդյոք նշված ձևանմուշը հասանելի է նշված փաստաթղթի համար, այսինքն փաստաթղթի տիպը նշված է տպվող ձևանմուշի փաստաթղթերի ցանկում և բավարարվում է ակտիվացման բանաձևը։

## Շարահյուսություն

``` vb
Function IsTemplAvailable(ByVal sTemplateName As String, _
                          ByVal sTemplateType As String, _
                          ByVal xDoc As AsDoc) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sTemplateName | Տպվող ձևանմուշի կոդ։ |
| sTemplateType | Տպվող ձևանմուշի տիպ։ |
| xDoc | Ստուգվող փաստաթուղթը։ |

## Շարահյուսություն

[Տես նաև](../../functions.html)
