---
layout: page
title: "Օրինակ/AsCallBackOnTimer"
---

Օրինակում ցույց է տրված Show մեթոդի և Caption, Height, Label, Seconds, Text, Width հատկությունների օգտագործումը։


Օրինակի մեջ կանչվում է CreateCallBackOnTimer ֆունկցիան, ստանում հղում (`callBack`) Ժամաչափով պարբերաբար ֆունկցիա աշխատացնեղ օբյեկտի վրա։

``` vb
Public Sub CallbackSample()
    Dim callBack As AsCallBackOnTimer
   
    Set callBack = CreateCallBackOnTimer("MyModule", "OnCallBack")
    callBack.Caption = "Ժամաչափով պարբերաբար ֆունկցիա աշխատացնեղ օբյեկտի օրինակ"
    callBack.Label = "Ընթացիկ ժամ" & vbCrLf & "Սկիզբ - " & CStr(Time())
    callBack.Text = ""
    callBack.Seconds = 10
    callBack.Height = 5000
    callBack.Width = 3000
   
    callBack.Show
End Sub
```

Այն պարբերաբար `MyModule` մոդուլից կանչում է `OnCallBack` ֆունկցիան։

``` vb
Public Sub OnCallBack(ByVal callBack As AsCallBackOnTimer)
    callBack.Label = "Ընթացիկ ժամ " & vbCrLf & CStr(Time())
    callBack.Text = callBack.Text & vbCrLf & CStr(Time())
    If callBack.Seconds = 5 Then
        callBack.Seconds = 10
    Else
        callBack.Seconds = 5
    End If
    callBack.Caption = CStr(callBack.Seconds)
End Sub
```