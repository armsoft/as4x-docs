---
layout: page
title: "Օրինակ/Valid"
---

# Օրինակում ցույց է տրված Valid իրադարձության օգտագործումը

Ստորև բերված է [տվյալների աղբյուրի](../Defs/Data.html) `Valid` իրադարձության օրինակ, որտեղ կախված դաշտի ներքին համարից, կատարվում են մուտքագրված արժեքների տարբեր ստուգումներ։
Ниже приведен пример обработчика события `Valid` из [описания документа](../Defs/doc.html), где в зависимости от идентификатора реквизита производятся различные проверки введенных значений.

``` vb
Sub Valid(ByVal Rekv)
     Select Case Rekv 
     Case "CODE" 
         If len(Trim(Doc("CODE")))<6 Then
            err.Raise gintUserErrors , "Счет", _
           "Длина кода лицевого счета меньше 6-и"
         Else
            If Doc.State=0 Then    
               Doc("CODE")=GetAccKey(Param("CODBANK"),Doc("CODE"))
               Doc.Refresh("CODE")     
            End If     
         End If 
     Case "CLICOD" 
         If trim(Doc("NAME"))="" Then
            Doc("NAME")= Doc.Control("CLICOD").Comment
            Doc.Refresh("NAME")
         End If 
     End Select     
End Sub
```