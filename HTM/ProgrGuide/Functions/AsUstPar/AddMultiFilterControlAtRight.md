---
layout: page
title: "AsDialog/AddMultiFilterControlAtRight"
---



# AddMultiFilterControlAtRight մեթոդ

[См. также](AddMultiFilterControl.md) Օրինակ [Применяется к](../Asustpar.md)

Երկխոսության պատուհանում ավելացնում է նշված դաշտի աջից նոր դաշտ, հետևյալ տիպերի՝ դիտելու ձև կամ ծառ-տեղեկատու մի քանի տողորի ընտրության հնարավորությամբ։


Դաշտի արժեքը հնարավոր է լինւմ ընտրել երեք ղանակով՝
1. Ծառ եղեկատուից
2. Դիտելու ձևից
3. Դիտելու ձևից, նմանությամբ փնտրման հնարավորությամբ

<!--
0. [реквизит типа произвольный вспомогательный список выбора](../AsModalBrowser.html), с возможностью [отбора нескольких строк](../AsModalBrowser/MultiSelect.html)
1. реквизит типа дерева-справочника</a>, с возможностью [отбора нескольких строк](../AsModalBrowser/MultiSelect.html) 
2. реквизит типа сопоставимости с введенным значением, без возможности .[отбора нескольких строк](../AsModalBrowser/MultiSelect.html)
-->

Դաշտից դուրս գալուց, նրա ձախ կողմից ավելանում են 0, 1 կամ 2 թվերը, որոնք համապատասխանում են ընտրված տիպի թվին։
    

## Շարահյուսություն

``` vb
object.AddMultiFilterControlAtRight (NameControlAtRight, sNameControl, sCaptionControl, sЕCaptionControl, sTreeMultiFilter, sViewCode, sColCodeName, Params() )
```

Բաղադրիչներն են՝


| Պարամետր | կարագրություն |
|--|--|
| object| Երկխոսության պատուհանի հղում։ |
| NameControlAtRight | Դաշտի ներքին անուն։ |
| sNameControl  |Այն դաշտի ներքին անունը, որի աջ կողմից կավելացվի նոր դաշտ։  |
| sCaptionControl | Դաշտի անվանում։ |
| sЕCaptionControl, | Դաշտի անվանումը օտար լեզվով։ |
| TreeMultiFilter  |  [Tree()](../../Types/Tree().html) կամ [FullTree()](../../Types/FULLTREE().html) ծառի տեսակ, որի բացակայության դեպքում ծատ-տեղեկատու դաշտ ավելացնելը անհետանում է։ |
| sViewCode | Դիտելու ձևի ներքին անուն, արժեքի ընտրման համար։ |
| sColCodeName | Դիտելու ձևի սյունակի ներքին անուն։ Որի արժեքը կգրվի դաշտում ցուցակից ընտրելուց հետո։ |
| Params() | Դիտելու ձևին փոխարինող պարամետրերի մասիվ։ |


## Նկատառումներ

Երրորդ ձևը չի միացվում, եթե երկխոսության պատուհանի Activate իրադարձության ժամանակ կանչում ենք  `object.Control(NameControlAtRight).DisableLikeMode = True`
