---
layout: page
title: "Օրինակ/SetRekvsClickDropDownEvent"
---

Օրինակում ցույց է տրված SetRekvsClickDropDownEvent` հատկության օգտագործումը։

Ցույց է տրված, թե ինչպես կարելի է միացնել մի քանի դաշտերի վրա [ClickDropDownGrid](../../ScriptProcs/ClickDropDownGrid.html) իրադարձության մշակումը մեկ հրամանով։  
Մշակումը միացվում է `DocNum`, `PartCode` և `Comment`-ի դաշտերի համար։

``` vb
Doc.SetRekvsClickDropDownEvent("DocNum PartCode Comment")
'նույնը կլինի նաև այսպես
'Doc.SetRekvsClickDropDownEvent("DocNum,PartCode,Comment", , ",") 
'Doc.SetRekvsClickDropDownEvent("DocNum%PartCode%Comment", , "%")

'երկար գրելաձևն էր
'Doc.ClickDropDown("DocNum") = True
'Doc.ClickDropDown("PartCode") = True
'Doc.ClickDropDown("Comment") = True
```