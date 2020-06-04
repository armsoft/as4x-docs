---
layout: page
title: "Print համակարգային իրադարձություն"
---

# Print համակարգային իրադարձություն


[См. также](../scriptstproced.html)&nbsp; [Пример](../Examples/E_AsDocPrint.html)&nbsp; [Применяется к](../Defs/doc.html)

Աշխատում է փաստաթուղթը տպելու կամ տպման ձևի նախնական դիտման ժամանակ։ Այն նախատեսված է փաստաթղթի համար տպման ձև ստանալու համար։ [Հաշվետվություններ ստեղծելու համար](../Functions/Functions/CreateRepViewer.html) օգտագործվում է [հաշվետվությունների նկարագրությունը](../Defs/report.html)։ Հաշվետվությունը պետք է չշփոթել փաստաթղթի տպման ձևի հետ։

Происходит при печати документа или при предварительном просмотре печатной формы. Она служит для создания печатной формы для документа. Для [создания отчетов](../Functions/Functions/CreateRepViewer.html) используется [описание отчетов](../Defs/report.html). Не надо смешивать отчет с печатным видом документа.



## Շարահյուսություն

```as4x
Sub Print()
   statements
End Sub

или

Sub Print(Optional ByVal PrintMode)
   statements
End Sub
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| PrintMode | Սահմանում է տպման ձևի ռեժիմը։ Այս պարամետրի բացակայության դեպքում տպման ձևը կատարվում է լռությամբ։ Մյուս տպման ռեժիմները կարող են կանչվել սկրիպտից [PrintPreviewDoc](../Functions/Functions/InterfaceManagment/PrintPreviewDoc.html) մեթոդը կանճելու ժամանակ։ необязательное выражение типа Variant, определяющее режим печати. При отсутствии данного параметра принимается режим печати по умолчанию. Другие режимы печати могут быть заданны из скрипта при вызове метода [PrintPreviewDoc](../Functions/Functions/InterfaceManagment/PrintPreviewDoc.html). |


## Նկատառումներ

[S](../Functions/AsDocPrint/S.md) մեթոդը կարող է կանչվել կամ տվյալ իրադարձության մշակիչից կամ էլ [PrintWord](PrintWord.html) իրադարձությունից։ Իսկ [P](../Functions/AsDocPrint/P.html) մեթոդը կանչվում է միայն `Print` պրոցեդուրայի մշակիչից։  

Метод [S](../Functions/AsDocPrint/S.html) может быть вызван из обработчика данного события или же события [PrintWord](PrintWord.html), а метод [P](../Functions/AsDocPrint/P.html)
вызывается только из обработчика процедуры <strong>Print</strong>.


