---
layout: page
title: "FillUIRequestConfig իրադարձություն"
---

# FillUIRequestConfig փաստաթղթի համակարգային իրադարձություն

FillUIRequestConfig իրադարձությունը նախատեսված է սերվիսից եկող Custom UI Request-ների մշակման կոնֆիգուրացիան սահմանելու համար։

Տե՛ս օգտագործման ամբողջական [օրինակը](https://armsoft.github.io/as8x-docs/src/server_api/examples/AddCustomUIRequest.html)։

## Շարահյուսություն

``` vb
Public Sub FillUIRequestConfig(ByVal oEventArgsUIRequestConfig As EventArgsUIRequestConfig)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
|`oEventArgsUIRequestConfig`| [EventArgsUIRequestConfig](UserDefinedHandlers.md#eventargsuirequestconfig-class) դասի օբյեկտ, որտեղ անհրաժեշտ է սահմանել Custom UI Request-ը մշակող մոդուլի և պրոցեդուրայի անունները։ |
