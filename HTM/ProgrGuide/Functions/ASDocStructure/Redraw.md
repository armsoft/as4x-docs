---
layout: page
title: "AsDocStructure/Redraw"
---


# Redraw մեթոդ

[См. также](../AsDocStructureElement.md) Օրինակ [Применяется к](../ASDocStructure.md) 

Վերանկարում է փաստաթղթի տարրի (դաշտի, աղյուսակի...) անվանումը։

Որևիցե տարրի անվանումը փոխելուց հետո փոփոխությունը կարտացոլվի փաստաթղթի պատուհանի վրա միմիայն `Redraw` ֆունկցիայի կանչից հետո։ 

`Redraw` ֆունկցիան կարելի է կանչել փոխանցելով առաջին մակարդակի տարրի անվանումը կամ համարը։ 
Ավելի խորը մակարդակի տարրերի դեպքում (աղյուսակի սյուն) կարելի է փոխանցել տարրի կառուցվածքը։ 


## Շարահյուսություն

``` vb
object.Redraw(vEl)
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object| Փաստաթղթի կառուցվածք օբյեկտի հղում։ |
| vEl | Տարրի անունը, կամ համարը, կամ կառուցվածքը։ |

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