---
layout: page
title: "FillUIRequestConfig իրադարձություն"
---

# FillUIRequestConfig փաստաթղթի համակարգային իրադարձություն

FillUIRequestConfig իրադարձությունը նախատեսված է սերվիսից եկող Custom UI Request-ների մշակման կոնֆիգուրացիան սահմանելու համար։

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

## Օրինակ 

``` vb
Public Sub FillUIRequestConfig(ByVal oEventArgsUIRequestConfig As EventArgsUIRequestConfig)

	Dim oCustomUIRequestInfo As CustomUIRequestConfig
	Set oCustomUIRequestInfo = New CustomUIRequestConfig
	oCustomUIRequestInfo.Module = "TestModule" 'Custom UI Request-ը մշակող մոդուլի անունը
	oCustomUIRequestInfo.AddSub 1, "UIRequestHandler" 'Custom UI Request-ը մշակող պրոցեդուրայի անունը

	oEventArgsUIRequestConfig.Configuration = oCustomUIRequestInfo
End Sub
```

Custom UI Request-ը մշակող պրոցեդուրան պետք է ընդունի `EventArgsUIRequest` տիպի պարամետր, որը պարունակում է սերվիսից ստացված մուտքային պարամետրերը և որի միջոցով անհրաժեշտ է ձևակերպել պատասխանը՝ Dictionary ձևաչափով։

``` vb
Public Sub UIRequestHandler(ByVal eventArgs As EventArgsUIRequest)
	' statements
End Sub
```
