---
layout: page
title: "Օրինակ/SetGridColsClickDropDownEvent"
---

# Օրինակում ցույց է տրված SetGridColsClickDropDownEvent հատկության օգտագործումը

Բերված/Սահմանված են  օրինակներ, որոնք հաստատում են [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձության գեներացիայի նախանշանը/նշանակումը `Docnum`, `PartCode` սյունայակների և `Comment`-ի  `GridBase` աղյուսակի համար, որոնք և սահմանվում են ստորակետներով, բացակներով և ցանկացած ուրիշ նշանով։

Օրինակ՝

приведены примеры устанавливания признака генерации системного события [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) для столбцов `Docnum`, `PartCode` и `Comment&nbsp` для грид-таблицы `GridBase`, которые задаются через запятые, пробелы или любой другой символ. Например:

``` vb
Doc.SetGridColsClickDropDownEvent("GridBase", "Docnum,PartCode,Comment",  True,  ",")  ,

Doc.SetGridColsClickDropDownEvent("GridBase" "Docnum,PartCode,Comment",  True,  " ")   կամ

Doc.SetGridColsClickDropDownEvent("GridBase", "Docnum&PartCode&Comment",  True,  "&"). 
```