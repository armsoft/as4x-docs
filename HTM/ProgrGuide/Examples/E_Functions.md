---
layout: page
title: "Օրինակ/Functions"
---

Օրինակում ցույց է տրված [փաստաթղթի նկարագրության](../Defs/doc.html) `Functions` իրադարձության օգտագործումը:

[Փաստաթղթի նկարագրության մեջ](../Defs/doc.html) գրված Function իրադարձության մշակիչի մեջ սահմանվում են փաստաթղթի համատեքստի մենյուից հասանելի գործողություները։

``` vb
Public Sub Functions() 
    Doc.RegistrFunction "Գործողությունների դիտում", "pShowOpers", , , "Show Operations"

    Doc.RegistrNode "node3","Գործողություններ", , "Operations"
    If Param("INOUTACCESS") Then
        Doc.RegistrNode "node31", "Մուտք/ելք", "node3", "In/Out"
        Doc.RegistrFunction "Տրամադրում", "pCreateDisbursement", , "node31", "Disbursement"
        Doc.RegistrFunction "Պարտքերի մարում", "pCreatePayment", , "Debt Payment"
    End If
    If Param("INOUTACCESS") Then
        Doc.RegistrNode "node32", "Դուրս գրում", "node3", "Write-Off"
        Doc.RegistrFunction "Դուրս գրում", "pCreateWriteOff", , "node32", "Write-Off"
        Doc.RegistrFunction "Դուրս գրվածի վերականգնում", "pCreateWriteOffBack", , "node32", "Reconstruction of Written-Off"
        Doc.RegistrFunction "Զիջում", "pCreateWaiver", , "node32", "Waiver"
    End If
End Sub

Public Sub pCreateDisbursement()
    '''
End Sub
Public Sub pCreatePayment()
    '''
End Sub
Public Sub pCreateWriteOff()
    '''
End Sub

Public Sub pCreateWriteOffBack()
    '''
End Sub
Public Sub pCreateWaiver()
    '''
End Sub
```