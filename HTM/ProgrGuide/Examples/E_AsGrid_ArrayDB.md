---
layout: page
title: "Օրինակ/ArrayDB"
---

# Օրինակում բերված է ArrayDB հատկության օգտագործումը

Ստորև օրինակում բերված է myColValue արժեքի նշանակումը աղյուսակի մեջից։
Ниже приведен пример присваивания переменной myColValue значения из грид-таблицы.

``` vb
Set curGridNew = Grid(NomRekv_Grid)
Set MyXArray = curGridNew.ArrayDB
myColValue = MyXArray(RowIndex, ColIndex)
```