---
layout: page
title: "Օրինակ/Validate"
---

# Օրինակում ցույց է տրված Validate իրադարձության օգտագործումը

Ստորև բերված է [տվյալների աղբյուրի](../Defs/Data.html) `Validate` իրադարձության օրինակ, որտեղ կատարվում է դաշտերի մուտքագրվող արժեքների ստուգումը։
Ниже приведен пример обработчика события `Validate` в [описании документа](../Defs/doc.html), где проводится проверка введенных значений реквизитов.


``` vb
Sub Validate()
If len(Trim(Doc("CODE"))) < 6 Then
     err.Raise gintUserErrors , "Счет", _
        "Длина кода лицевого счета меньше 6-и"
End If 
If Doc("LLIMIT") > Doc("ULIMIT") Then
     err.Raise gintUserErrors , "Пределы", _
       "Нижний предел счета больше верхнего предела"
End If      
End Sub
```