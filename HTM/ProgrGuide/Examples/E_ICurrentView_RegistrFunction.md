---
layout: page
title: "Օրինակ/RegistrFunction"
---

# Օրինակում ցույց է տրված RegistrFunction մեթոդի օգտագործումը

Ստորև բերված է տվյալների պահոցի Functions իրադարձության մշակիչի օրինակը։  

Օրինակում կանչում է "RegistrFunction" մեթոդը, որը կոնտեքստ մենյույում ավելացնում է գործողությու՝ "Նոր այց"։   
Գործողության աշխատացնելուց կատարվում է "CreateSp" ֆունկցիան, որը ավելացնում է spasoper փաստաթղթի նոր օրինակ։ 
Այս գործողությունը հասանելի կլինի միայն `NbAcc`, `NewDoc` և `Adm` աշխատատեղերում։

Ниже приводится обработчик системного события Functions из описания источника данных, где использован метод RegistrFunction, который в контекстное меню добавляет строчку &quot;Новое посещение&quot;. При ее вызове срабатывает процедура CreateSp, создающая новый экземпляр документа spasoper. Она срабатывает на рабочих местах трех типов: NbAcc, NewDoc и Adm.

``` vb
Sub Functions() 
   CurrentView.RegistrFunction "Новое посещение", "CreateSp", "NbAcc; NewDoc; Adm"
End Sub

Sub CreateSp() 
   Set tmpDoc = xProc.CreateDoc("spasoper")
   tmpDoc("PartCode") = Doc("CODE")
   tmpDoc.Show 
End Sub
```