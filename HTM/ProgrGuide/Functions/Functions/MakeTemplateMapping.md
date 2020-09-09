---
layout: page
title: "MakeTemplateMapping մեթոդ"
---
    
# MakeTemplateMapping մեթոդ

Ստեղծում կամ թարմացնում է տպելու ձևանմուշի ակտիվացման բանաձևը և տպվող խմբերը տրված փաստաթղթի տիպի համար։

## Շարահյուսություն

```vb
MakeTemplateMapping templateName, templateType, docType, accessExp, dataGroups
Sub MakeTemplateMapping(ByVal sTemplateName As String, _
                        ByVal sTemplateType As String, _
                        ByVal docType As String, _
                        ByVal accessExp As String, _
               Optional ByVal DataGroups As String = "")
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sTemplateName | Տպվող ձևանմուշի կոդ։ |
| sTemplateType | Տպվող ձևանմուշի տիպ։ |
| docType | Փաստաթղթի տիպը։ |
| accessExp | Փաստաթղթի տպելու ձևանմուշի ակտիվացման բանաձև։ |
| dataGroups | Տպման ժամանակ հաշվարկվող խմբերը։ |

## Նկատառումներ 

[Տես նաև](../../functions.html)
