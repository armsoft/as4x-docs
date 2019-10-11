---
layout: page
title: "Օրինակ/AsCallBackOnTimer"
---

# Օրինակում ցույց է տրված Show մեթոդի և Caption, Height, Label, Seconds, Text, Width հատկությունների օգտագործումը


Օրինակի մեջ կանչվում է CreateCallBackOnTimer ֆունկցիան, և ստացվում է հղում (xCallBackOnTM) Ժամաչափով պարբերաբար ֆունկցիա աշխատացնեղ օբյեկտի վրա։

``` vb
  Dim xCallBackOnTM As AsCallBackOnTimer
   
    Set xCallBackOnTM = CreateCallBackOnTimer("sModName", "sSubName")
    xCallBackOnTM.Caption = "Демонстрация работы агента"
    xCallBackOnTM.Label = "Изображение времени" & vbCrLf & "Начало - " & CStr(time())
    xCallBackOnTM.Text = ""
    xCallBackOnTM.Seconds = 10
    xCallBackOnTM.Height = 5000
    xCallBackOnTM.Width = 3000
   
    xCallBackOnTM.Show
```
Այն պարբերաբար sModName մոդուլից կանչում է sSubName գործընթացը։
Агент циклически вызывает процедуру sSubName из модуля sModName:
``` vb
Private Sub sSubName()
    myAsCallBackOnTimer.Label = "Label " & vbCrLf & CStr(time())
    myAsCallBackOnTimer.Text = myAsCallBackOnTimer.Text & vbCrLf & CStr(time())
    If myAsCallBackOnTimer.Seconds = 5 Then
        myAsCallBackOnTimer.Seconds = 10
    Else
        myAsCallBackOnTimer.Seconds = 5
    End If
    myAsCallBackOnTimer.Caption = CStr(myAsCallBackOnTimer.Seconds)
End Sub
```