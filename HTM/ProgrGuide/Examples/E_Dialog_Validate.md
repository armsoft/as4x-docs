---
layout: page
title: "Օրինակ/Dialog_Validate"
---

# Օրինակում ցույց է տրված  Dialog_Validate իրադարձության օգտագործումը

Ստորև բերված է [փաստաթղթի նկարագրության մեջ](../Defs/Dialog.html) Dialog_Validate  իրադարձության մշակիչի օրինակը, որտեղ կատարվում է կարգավորման տարրերի արժեքների ստուգումը։
Ниже приведен пример обработчика события <strong>
Dialog_Validate</strong> в [описании диалога](../Defs/Dialog.html), где проводится проверка введенных значений элементов управления.


``` vb
Sub Dialog_Validate()
    If Dialog("DataSkzb") > Dialog("DataVerj") then
        Dialog("DataVerj")=Dialog("DataSkzb")+1
        'Dialog.Control("DataVerj").
    End if 
End Sub
```