---
layout: page
title: "Օրինակ/DefaultComment"
---


# Օրինակում ցույց է տրված DefaultComment իրադարձության օգտագործումը

[Փաստաթղթի նկարագրության մեջից](../Defs/doc.html) բերված է DefaultComment իրադարձության մշակիչի օրինակը, որի մեջ որպես հնարավոր մեկնաբանություն նշանակված են doc("Cod") & " " & doc("Name") դաշտերի արժեքները։

Из [описания документа](../Defs/doc.html) приведен пример обработчика события DefaultComment, в котором в качестве возможного комментария присваиваются значения реквизитов doc("Cod") &amp; &quot; &quot; &amp; doc("Name")

``` vb
Function DefaultComment()
        DefaultComment = doc("Cod") & " " & doc("Name")
End Function
```