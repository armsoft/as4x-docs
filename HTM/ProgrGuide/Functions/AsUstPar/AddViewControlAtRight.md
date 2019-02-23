---
layout: page
title: "AsDialog/AddViewControlAtRight"
---


# AddViewControlAtRight մեթոդ 

[См. также](AddMultiSelectViewControl.md) Օրինակ [Применяется к](../Asustpar.md)

Երկխոսության պատուհանում նշված դաշտի աջից ավելացնում է նոր դիտելու ձև տիպի դաշտ։ Դիտելու ձևից ցանկը կարող է պարունակել մի քանի սյունակ, որից երկուսը պետք է լինեն կոդի և անվանման համար։ 

# Շարահյուսություն

``` vb
object.AddViewControlAtRight(rekvName, existingRekvName, caption, eCaption, viewCode,codeColumnId, commentColumnId, [attribRekv], [valueRekv], params() )
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| rekvName | Դաշտի ներքին համար։ |
| existingRekvName  | Այն դաշտի ներքին անունը, որի աջ կողմից ավելանոլու է նորը։ |
| caption| Դաշտի անվանում։  |
| eCaption | Դաշտի օտար լեզվով անվանում։ |
| viewCode | Դիտելու ձևի ներքին անուն ։ |
| codeColumnId | Դիտելու ձևի ներքին անուն, նախատեսված արժեքի ընտրության համար։  |
| commentColumnId | Դիտելու ձևից կոդի սյունակի ներքին անուն։ Որի արժեքը դաշտում կտեղադրվի ցուցակից ընտրելուց հետո։ |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արժեք։ |
| Params() | Դիտելու ձևին փոխարինող պարամետրերի մասիվ։ |


