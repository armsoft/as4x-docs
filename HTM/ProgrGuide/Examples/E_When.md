---
layout: page
title: "Օրինակ/When"
---

# Օրինակում ցույց է տրված When իրադարձության օգտագործումը

Ստորև բերված է [փաստաթղթի նկարագրությունը](../Defs/doc.html), որտեղ `When` իրադարձության մշակիչի մեջ, կախված փաստաթղթի կարգավիճակից, որոշ դաշտեր ստանում են միայն կարդալու հատկություն։

Ниже приведено [описание документа](../Defs/doc.html), где в обработчике события `When`, в зависимости от состояния документа, некоторые реквизиты получают атрибут только для чтения.

``` vb
Sub When()
    doc.Сontrol("CODE").Format = String(#LenNBAcc,"9")
    If doc.State=0 Then
       doc("DATOTK") = Param("WkDate")
    If Doc("ULIMIT")=0 Then Doc("ULIMIT")=#MaxLimit
       Else
          If IsNull(doc("DATZAK")) Then
             doc.ReadOnly("CODE")=True
             doc.ReadOnly("CODBAL")=True
             doc.ReadOnly("DATOTK")=True
             If not isNull(LastOpDate("02", doc.ISN)) Then
               doc.ReadOnly("CODVAL")=True
               doc.ReadOnly("CLICOD")=True
             End If 
         Else
             Doc.LockControls
         End If
    End If
   doc.ReadOnly("NUMVIP")=True
   doc.ReadOnly("DATVIP")=True
End Sub
```