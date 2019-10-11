---
layout: page
title: "Օրինակ/SetRekvsReadOnly"
---

# Օրինակում ցույց է տրված SetRekvsReadOnly հատկության օգտագործումը

Բերված/Սահմանված են `Docnum`, `PartCode` և `Comment` դաշտերի խմբագրելիության օրինակներ, որոնք և սահմանվում են ստորակետներով, բացակներով և ցանկացած ուրիշ նշանով։

Օրինակ՝
приведены примеры устанавливания статуса режима редактирования для реквизитов `Docnum`, `PartCode` и `Comment`, которые задаются через запятые, пробелы или любой другой символ. Например:


``` vb
Doc.SetRekvsReadOnly("Docnum,PartCode,Comment",  True,  ",")  ,

Doc.SetRekvsReadOnly("Docnum PartCode Comment",  True,  " ")   կամ

Doc.SetRekvsReadOnly("Docnum%PartCode%Comment",  True,  "%") 
```