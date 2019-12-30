---
layout: page
title: "Օրինակ/Update, Value"
---

Օրինակում ցույց է տրված ընթացիկ թղթապանակի Update մեթոդի և Value հատկության օգտագործումը:

Տվյալների աղբյուրրի Functions իրադարձության մշակիչի մեջ ավելացվնում է նոր համատեքստի մենյույի գործողություն «Փակել հաշիվը», որի աշխատացնում է `CloseAcc` ֆունկցիան։  
`CloseAcc` ֆունկցիան ընթացիկ փաստաթղի վրա լրացնում է փակման ամսթիվը և գրանցում տվյալների պահոցում, ապա թարմացնում է ընթացիկ թղթապանակը

Բերված է մեկ տողի թարմացման օրինակ թղթապանակների վրայով սահելու եղանակով։ 
Приведен пример обновления одной строчки на форме прокрутки папок:

``` vb
Sub Functions() 
    CurrentView.RegistrFunction "Փակել հաշիվը", "CloseAcc", , , "Close Account"
End Sub

Sub CloseAcc()
Dim accDoc As AsDoc
    Set accDoc = LoadDoc(CurrentView.Value("fISN"))
    accDoc("DATECLOSED") = Param("WkDate")
    accDoc.Store

    CurrentView.Update(CurrentView.Value("fISN"))
End Sub
```