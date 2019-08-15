---
layout: page
title: "AsDocStructureElement/Caption"
---


# Caption հատկություն

[См. также](../ASDocStructure/Redraw.md) Օրինակ [Применяется к](../AsDocStructureElement.md)

Վերադարձնում կամ նշանակում է տարրի անվանումը ընթացիկ լեզվով։

Որևիցե տարրի անվանումը փոխելուց հետո փոփոխությունը կարտացոլվի փաստաթղթի պատուհանի վրա միմիայն [Redraw](../ASDocStructure/Redraw.md) ֆունկցիայի կանչից հետո։ 

## Շարահյուսություն

``` vb
object.Caption
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| object  | Փաստաթղթի տարրի կառուցվածքի հղում։ |



## Օրինակներ

Առաջին օրինակում փոխում է դաշտի անվանումը 

``` vb
Doc.Structure("CASHSCALE").Caption = "Նոր անվանում"
Doc.Structure.Redraw "CASHSCALE" 
```

Երկրորդ օրինակում փոխվում է աղյուսակի սյունակի անվանումը

``` vb
Dim gridColStruct As AsDocStructureElement

Set gridColStruct = Doc.Structure("Grid1").SubElement("Column2")
gridColStruct.Caption = "New Caption"
Doc.Structure.Redraw(gridColStruct)
```

## Տվյալի տիպ

Տող