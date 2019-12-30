---
layout: page
title: "Օրինակ/SetGridColsClickDropDownEvent"
---

Օրինակում ցույց է տրված փաստաթղի `SetGridColsClickDropDownEvent` հատկության օգտագործումը:

Ցույց է տրված, թե ինչպես կարելի է միացնել նույն աղյուսակի մի քանի սյունակի վրա [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձության մշակումը մեկ հրամանով։  
Մշակումը միացվում է `GridBase` աղյուսակի `DocNum`, `PartCode` և `Comment`-ի սյունայակների համար։


``` vb
Doc.SetGridColsClickDropDownEvent("GridBase", "DocNum PartCode Comment")
'նույնը կլինի նաև այսպես
'Doc.SetGridColsClickDropDownEvent("GridBase", "DocNum,PartCode,Comment", , ",")
'Doc.SetGridColsClickDropDownEvent("GridBase", "DocNum&PartCode&Comment", , "&") 

'երկար գրելաձևն էր
'Doc.ClickDropDown("GridBase", "DocNum") = True
'Doc.ClickDropDown("GridBase", "PartCode") = True
'Doc.ClickDropDown("GridBase", "Comment") = True
```