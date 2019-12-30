---
layout: page
title: "Օրինակ/Data/Functions"
---

Օրինակում ցույց է տրված [տվյալների աղբյուրի](../Defs/Data.html) `Functions` իրադարձության օգտագործումը:

Ցույց է տրված, թե ինչպես ավելացնել գործողություններ թղթապանակի մենյույում `RegistrFunction`, `RegistrNode` մեթոդների միջոցով։


``` vb
Public Sub Functions() 
    CurrentView.RegistrFunction "Ցույց տալ ֆայլը", "ShowFile", , , "Show the file", RFA_CurrentRow
    If Param("VERIFYACCESS") Then
        CurrentView.RegistrFunction "Հաստատել", "VerifieOneOrMany", , , "Verify", RFA_CurrentAndSelectedRows
    End If
    If Param("EXPORTACCESS") Then
        CurrentView.RegistrFunction "Արտահանել Excel", "ExportToExcel", "", "",  "ExportToExcel", RFA_SelectedRows
    End If
    With CurrentView
        If .SelectedCount > 0 Then
            .RegistrNode "RekvGroupChange", "Ռեկվիզիտների խմբ.լրացում", , "Rekvizit Group Change"

            .RegistrFunction "Փոխել Գրասենյակը\Բաժինը\Տիպը", "GroupChngAccess", , "RekvGroupChange", "Change Divis.\Depart.\Type"
            .RegistrFunction "Տոկոսներ, տույժեր", "GroupChngPenPer", , "RekvGroupChange", "Fines, Interests"
        End If
    End With
End Sub

Public Sub ShowFile()
    '''
End Sub
Public Sub VerifieOneOrMany()
    '''
End Sub
Public Sub ExportToExcel()
    '''
End Sub

Public Sub GroupChngAccess()
    '''
End Sub
Public Sub GroupChngPenPer()
    '''
End Sub

```