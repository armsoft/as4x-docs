---
layout: page
title: "Օրինակ/Dialog_ButtonClick"
---

Օրինակում ցույց է տրված  ButtonClick իրադարձության օգտագործումը:

Ստորև բերված է [դիալոգի նկարագրության մեջ](../Defs/Dialog.html) [ButtonClick](../ScriptProcs/Dialog_ButtonClick.html) իրադարձության մշակիչի օրինակը։ 

``` vb
Public Sub ButtonClick(ByVal objDialog As AsDialog, ByVal sBtnName As String, _
    ByVal sngBtnTop As Single, ByVal sngBtnLeft As Single, ByRef Reakcia )

    If objDialog.Name = "DlgName" Then 
        Select Case sBtnName
        Case "BName"
            objDialog("bColN") = 1
        End Select
    End If
End Sub
```