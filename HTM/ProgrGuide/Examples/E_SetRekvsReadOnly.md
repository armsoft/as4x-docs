---
layout: page
title: "Օրինակ/SetRekvsReadOnly"
---

Օրինակում ցույց է տրված `SetRekvsReadOnly` հատկության օգտագործումը:

Ցույց է տրված, թե ինչպես կարելի է մի քանի դաշտեր դարձնել չխմբագրվող մեկ հրամանով:
Չխմբագրվող դառձվում են `DocNum`, `PartCode` և `Comment`-ի դաշտերը։

``` vb
Doc.SetRekvsReadOnly("DocNum PartCode Comment")
'նույնը կլինի նաև այսպես
'Doc.SetRekvsReadOnly("DocNum,PartCode,Comment", , ",")
'Doc.SetRekvsReadOnly("DocNum%PartCode%Comment", , "%") 

'երկար գրելաձևն էր
'Doc.ReadOnly("DocNum") = True
'Doc.ReadOnly("PartCode") = True
'Doc.ReadOnly("Comment") = True
```