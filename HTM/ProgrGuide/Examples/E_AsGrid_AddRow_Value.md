---
layout: page
title: "Օրինակ/Grid AddRow Value Example"
---

# Օրինակում ցույց է տրված AddRow մեթոդի և  Value հատկության օգտագործումը

Ստորև օրինակում բերված է փաստաթղթի աղյուսակի մեջ ավելացվող տողի և սյունակների արժեքների նշանակումը։
Ниже приведен пример добавления строчки в грид-таблицу документа и присваивания его колонкам значений.</p>

``` vb
Set tGrd=xDoc.Grid("TRACTS") 
.....
for ind=0 to cnt
   tGRD.Addrow
   tGRD.Value(ind,"DOCNUM")=vtrndoc(ind)
   tGRD.Value(ind,"DATE")=vtrdate(ind)
   tGRD.Value(ind,"SUMMA")=vtrsum(ind)
Next 
```