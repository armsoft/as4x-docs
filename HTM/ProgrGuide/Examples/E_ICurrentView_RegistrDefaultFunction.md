---
layout: page
title: "Օրինակ/RegistrDefaultFunction"
---

# Օրինակում ցույց է տրված RegistrDefaultFunction մեթոդի օգտագործումը

Ստորև բերված է վյալների պահոցի Functions իրադարձության մշակիչի օրինակ։ 

Օրինակում կանչում  "RegistrDefaultFunction" մեթոդը, որը և կոնտեքստ մենյույի մեջ նշանակում է AddDoc ֆունկցիան, որպես լռության Ֆունկցիա։
Ниже приводится обработчик системного события Functions из описания источника данных, где использован метод RegistrDefaultFunction, который усатанавливает в контекстное меню функцию AddDoc как функцию по умолчанию. 

``` vb
Sub Functions() 
   CurrentView.RegistrFunction "Добавить документ", "AddDoc", , , "Add doc"
   CurrentView.RegistrDefaultFunction("AddDoc")
End Sub
```