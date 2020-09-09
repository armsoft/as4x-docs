---
layout: page
title: "GetTemplateExtension ֆունկցիա"
---
    
# GetTemplateExtension ֆունկցիա

Վերադարձնում է ընդլայնումը ֆայլի ընդլայնումը ըստ [տպվող ձևանմուշի տիպի](../../TemplateTypes.html)։

## Շարահյուսություն

``` vb
Function GetTemplateExtension(ByVal sTemplateType As String) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sTemplateType | Ձևանմուշի տիպը։ |

## Արժեքներ

| Ձևանմուշի տիպ | Ընդլայնում ըստ տիպի |
|--|--|
| "0" | ".doc" |
| "1" | ".xls" |
| "2" | ".docx" |
| "3" | ".xlsm" |
| "4" | ".pdf" |
| "5" | ".odt" |
| "6" | ".ods" |
| "7" | ".htm" |
| "8" | ".xlsx" |
| "9" | ".txt" |
| "A" | ".htm" |
| "B" | ".htm" |

## Նկատառումներ

[Տես նաև](../../functions.html)

