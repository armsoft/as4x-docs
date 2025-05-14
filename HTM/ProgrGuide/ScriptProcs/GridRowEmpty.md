---
layout: page
title: "GridRowEmpty իրադարձություն"
---

# GridRowEmpty փաստաթղթի համակարգային իրադարձություն

GridRowEmpty իրադարձությունը առաջանում է փաստաթղթի աղյուսակի տողի դատարկ լինելը ստուգելու ժամանակ՝ [GridCellValid](GridCellValid.md) իրադարձությունից հետո։

Նախատեսված է աղյուսակի ընթացիկ տողի դատարկ լինելը սահմանելու համար՝ օգտագործելով [EventArgsDocGridRowEmpty](UserDefinedHandlers.md#eventargsdocgridrowempty-class) պարամետրի `RowIsEmpty` հատկությունը։ 

## Շարահյուսություն

``` vb
Public Sub GridRowEmpty(ByVal oEventArgsDocGridRowEmpty As EventArgsDocGridRowEmpty)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
|`oEventArgsDocGridRowEmpty`| [EventArgsDocGridRowEmpty](UserDefinedHandlers.md#eventargsdocgridrowempty-class) դասի օբյեկտ, որը պարունակում է տվյալներ իրադարձությունը առաջացնող փաստաթղթի և գրիդի մասին։ |

## Նկատառումներ

Մեկ փաստաթղթի մեջ կարող են լինել մի քանի աղյուսակներ, ինչի պատճառով `GridRowEmpty` իրադարձության մշակիչի մեջ, կախված [փաստաթղթի աղյուսակի նկարագրությունից](../grid.md), հարկավոր է գրել ընտրության պայման ըստ աղյուսակի և անհրաժեշտ սյուների անունների։
