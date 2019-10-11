---
layout: page
title: "Օրինակ/PrintDataGroup"
---

# Օրինակում ցույց է տրված փաստաթղթի նկարագրության մեջ PrintDataGroup-ի օգտագործումը

``` vb
' Definition документа
Name = Products
Caption = "Продукты"
Ecaption = "Products"

Page {Caption = "Продукты"; Ecaption ="Products"
            Rekvizit {Name = Code;   Caption = "Код продукта";             ECaption = "Products code"; Type = Folder(Item, 12);};
            Rekvizit {Name = Name;  Caption = "Название продукта";  ECaption = "Products name"; Type = C(50);};
         };

PrintDataGroup { Name = "01"; Caption = "При печати вывести коды продуктов" }; 
PrintDataGroup { Name = "02"; Caption = "При печати вывести названия продуктов"; };


' Script документа

Public Function TemplateSubstitution(ByVal dctModeDict As Dictionary) As TemplateSubstitution 
Dim Result As TemplateSubstitution
Dim bPrintProductsCode As Boolean 
Dim bPrintProductsName As Boolean 

   bPrintProductsCode  = dctModeDict("01") 
   bPrintProductsName = dctModeDict("02")

    With Result
        If bPrintProductsCode  Then
            .Add "001", Doc("Code")
        ElseIf bPrintProductsName Then
            .Add "001", Doc("Name")
        End If
   End With
   Set TemplateSubstitution = Result
End Function
```