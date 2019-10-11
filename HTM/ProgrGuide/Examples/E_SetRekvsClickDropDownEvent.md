---
layout: page
title: "Օրինակ/SetRekvsClickDropDownEvent"
---

# Օրինակում ցույց է տրված SetRekvsClickDropDownEvent հատկության օգտագործումը

Բերված/Սահմանված են  օրինակներ, որոնք հաստատում են [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձության գեներացիայի նախանշանը/նշանակումը `Docnum`, `PartCode` և `Comment`դաշտերի համար, որոնք և սահմանվում են ստորակետներով, բացակներով և ցանկացած ուրիշ նշանով։

Օրինակ՝

приведены примеры устанавливания признака генерации системного события [ClickDropDown](../../ScriptProcs/ClickDropDown.html) для реквизитов `Docnum`, `PartCode` и `Comment`, которые задаются через запятые, пробелы или любой другой символ. Например:


``` vb
Doc.SetRekvsClickDropDownEvent("Docnum,PartCode,Comment",  True,  ",")  ,

Doc.SetRekvsClickDropDownEvent("Docnum PartCode Comment",  True,  " ")   կամ

Doc.SetRekvsClickDropDownEvent("Docnum%PartCode%Comment",  True,  "%") 
```