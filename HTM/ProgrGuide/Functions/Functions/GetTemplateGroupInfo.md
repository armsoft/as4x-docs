---
layout: page
title: "GetTemplateGroupInfo ֆունկցիա"
---

# GetTemplateGroupInfo ֆունկցիա

Վերադարձնում է տպվող ձևանմուշի տվյալների խմբերը, որոնք օգտագործվում են լրացման ժամանակ։

## Շարահյուսություն

``` vb
Function GetTemplateGroupInfo(ByVal TemplateName As String, _
                              ByVal TemplateType As String, _
                     Optional ByRef TemplateGroup As String) As Dictionary
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| TemplateName | Տպվող ձևանմուշի կոդ։ |
| TemplateType | Տպվող ձևանմուշի [տիպը](../../TemplateTypes.html)։ |
| TemplateGroup | Վերադարձնում է ձևանմուշի խումբը։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
