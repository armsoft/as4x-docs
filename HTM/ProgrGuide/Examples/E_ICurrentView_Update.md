---
layout: page
title: "Օրինակ/Update, Value"
---

# Օրինակում ցույց է տրված Update մեթոդի և Value հատկության օգտագործումը

Բերված է մեկ տողի թարմացման օրինակ թղթապանակների վրայով սահելու եղանակով։ 
Приведен пример обновления одной строчки на форме прокрутки папок:

``` vb
Sub CloseAcc()
Set xDOC = LoadDoc(CurrentView.Value("fISN"))
xDoc("DATZAK") = xDialog("DateClose")
xDoc.Store
CurrentView.Update(CurrentView.Value("fISN"))
End Sub
```