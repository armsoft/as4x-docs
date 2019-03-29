---
layout: page
title: "AsDoc/Refresh"
---

# Refresh մեթոդ

[См. также](../Asdoc.md) Օրինակ [Применяется к](../Asdoc.md)

Թարմացնում է դաշտի արժեքը փաստաթղթի  պատուհանի վրա։ 

## Շարահյուսություն

``` vb
object.Refresh(RekvName)
```

Բաղադրիչներն են՝



| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
| RekvName | Դաշտի ներքին անուն։ |


## Նկատառումներ


Դաշտի արժեքը փոխելուց այն չի փոխվում փաստաթղթի պատուհանի վրա, եթե պատուհանը արդեն երևում է էկրանին։
Որպես կանոն այդպես է լինում փաստաթղթի ինտերֆեյսի հետ աշխատող իրադարձությունների մշակման ժամանակ, այն է `Valid`, `ClickDropDown`, `GridValid`, `GridRowValid`, `GridCellValid`, `ClickDropDownGrid`, `OnScannerRead`:

Օրինակ՝
``` vb
Public Sub Valid(ByVal rekvName As String, ByVal OldValue As variant)
    Select Case rekvName
        Case "AMOUNT"
            Doc("TAXEDAMOUNT") = Doc(rekvName) * 20 / 100
            'Այստեղ Refresh չկանչելու դեպքում TAXEDAMOUNT դաշտը էկրանին կշարունակի երևալ հին արժեքով
            Doc.Refresh("TAXEDAMOUNT")
    End Select
End Sub
```

