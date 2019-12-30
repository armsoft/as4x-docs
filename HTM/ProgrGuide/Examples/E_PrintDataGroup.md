---
layout: page
title: "Օրինակ/PrintDataGroup"
---

Օրինակում ցույց է տրված փաստաթղթի նկարագրության մեջ PrintDataGroup-ի օգտագործումը։

``` as4x
NAME = Product;
CAPTION = "Ապրանք";
ECAPTION = "Product";

PAGE { CAPTION = "Ընդհանուր"; ECAPTION ="General"
    REKVIZIT {NAME = Code; CAPTION = "Ապրանքի կոդ";      ECAPTION = "Products Code"; TYPE = "Folder(Item, 12)"; };
    REKVIZIT {NAME = Name; CAPTION = "Ապրանքի Անվանում"; ECAPTION = "Products Name"; TYPE = "C(50)"; };
};

PRINTDATAGROUP { NAME = "01"; CAPTION = "Տպման ժամանակ արտացոլել կոդը"; }; 
PRINTDATAGROUP { NAME = "02"; CAPTION = "Տպման ժամանակ արտացոլել անվանումը"; };
```

Փաստաթղթի տպվող տեսքի հաշվարկման իրադարձության մշակիչը՝

``` vb
Public Function TemplateSubstitution(ByVal modes As Dictionary) As TemplateSubstitution 
Dim Result As New TemplateSubstitution
Dim bPrintProductsCode As Boolean 
Dim bPrintProductsName As Boolean 

   bPrintProductsCode = modes("01") 
   bPrintProductsName = modes("02")

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