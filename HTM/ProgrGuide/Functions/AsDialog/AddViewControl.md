---
layout: page
title: "AsDialog/AddViewControl"
---


# AddViewControl մեթոդ

[См. также](AddMultiSelectViewControl.md) Օրինակ [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում ավելացնում է դիտելու ձև տիպի դաշտ։ Դիտելու ձևից ցանկը կարող է պարունակել մի քանի սյունակ, որից երկուսը պետք է լինեն կոդի և անվանման համար։ 

## Շարահյուսություն

``` vb
object.AddViewControl (sControlName, sControlCaption, sControlЕCaption, sViewCode,CodeColumnId, CommentColumnId,[AttribRekv], [ValueRekv], Params() )
```

Բաղադրիչնրն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| sControlName | Դաշտի ներքին անուն։ |
| sControlCaption | Դաշտի անվանումը։ |
| sControlЕCaption | Դաշտի օտար լեզվով անվանումը։ |
| sViewCode | Դիտելու ձևի ներքին անուն, նախատեսված արժեքի ընտրության համար։  |
| CodeColumnId | Դիտելու ձևից կոդի սյունակի ներքին անուն։ Որի արժեքը դաշտում կտեղադրվի ցուցակից ընտրելուց հետո։ |
| CommentColumnId | Դիտելու ձևից անվանում  սյունակի ներքին անուն։ |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արժեք։ |
| Params() | Դիտելու ձևին փոխարինող պարամետրերի մասիվ։ |


