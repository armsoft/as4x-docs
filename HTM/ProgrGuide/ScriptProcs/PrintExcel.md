---
layout: page
title: "PrintExcel իրադարձություն"
---

# PrintExcel փաստաթղթի համակարգային իրադարձություն

PrintExcel իրադարձությունը առաջանում է MS Excel ֆորմատով (*.xls - հին տիպ) փաստաթուղթը տեղեկանքի տեքսով տպելու կամ տպման ձևի նախնական դիտման ժամանակ։ 

## Շարահյուսություն

``` vb
Public Sub PrintExcel()
    ' statements
End Sub

կամ

Public Sub PrintExcel(ByVal TemplateType As String)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TemplateName | Ձևանմուշի կոդը։ |
