---
layout: page
title: "Print իրադարձություն"
---

# Print փաստաթղթի համակարգային իրադարձություն


[См. также](../scriptstproced.md) [Пример](../Examples/E_AsDocPrint.md) [Применяется к](../Defs/doc.md)

Աշխատում է փաստաթուղթը տեղեկանքի տեքսով տպելու կամ տպման ձևի նախնական դիտման ժամանակ։ 
Այն նախատեսված է փաստաթղթի համար [տպման ձև](../Functions/AsDocPrint.md) ձևավորելու համար։ 

## Շարահյուսություն

``` vb
Public Sub Print()
    ' statements
End Sub

կամ

Public Sub Print(ByVal PrintMode As Variant)
    ' statements
End Sub
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| PrintMode |  Ազատ օգտագործման արգումենտ, որը փոխանցվում է [PrintPreviewDoc](../Functions/Functions/InterfaceManagment/PrintPreviewDoc.html) ֆունկցիան կանչելուց։ |
