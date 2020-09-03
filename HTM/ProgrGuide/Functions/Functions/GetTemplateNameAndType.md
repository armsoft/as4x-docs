---
layout: page
title: "GetTemplateNameAndType ֆունկցիա"
---
    
# GetTemplateNameAndType ֆունկցիա

Տպվող ձևանմուշի միավորված կոդ և տիպը բաժանում է և վերադարձնում։

Վերադարձնում է `True`, եթե բաժանումը հնարավոր է։

## Շարահյուսություն

``` vb
Function GetTemplateNameAndType(ByVal templateNameWithType As String, _
                       Optional ByRef templateName As String, _
                       Optional ByRef templateType As String, _
                       Optional ByVal backSlash As Boolean = True) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| templateNameWithType | Տպվող ձևանմուշի միավորված կոդ և տիպը։ |
| templateName | Վերադարձվող ձևանմուշի կոդը։ |
| templateType | Վերադարձվող ձևանմուշի կոդը։ |
| backSlash | `True` արժեքի դեպքում բաժանումը կատարվում է ըստ `"\"` նիշի, իսկ `False` արժեքի դեպքում ըստ `"/"` նիշի։ |

``` vb
Dim templateName As String, templateType As String

GetTemplateNameAndType("MemOrd\2", templateName, templateType)
' templateName -> "MemOrd"
' templateType -> "2"

GetTemplateNameAndType("MemOrd/2", templateName, templateType, False)
' templateName -> "MemOrd"
' templateType -> "2"
```

## Նկառատումներ

[Տես նաև](../../functions.html)
