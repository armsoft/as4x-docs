---
layout: page
title: "Օրինակ/Dialog_Deactivate"
---

Օրինակում ցույց է տրված Dialog_Deactivate իրադարձության օգտագործումը։

Ստորև բերված է [դիալոգի նկարագրության մեջ](../Defs/Dialog.html) Dialog_Deactivate իրադարձության մշակիչի օրինակը, որտեղ կատարվում է արժեքների հաշվարկ դիալոգի փակվելուց հետո։

``` vb
Sub Dialog_Deactivate()
Private sValue As String
    'DeleteObject(hBitmap)

	With Dialog
		If Not .ReadOnly("ACCCODE") Then
			sValue = .Value("ACCCODE")
		Else    'If Not .ReadOnly("NBACCCODE") Then
			sValue = .Value("NBACCCODE")
		End If
	End With	
    Dialog.Properties.Add "Value", sValue
End Sub