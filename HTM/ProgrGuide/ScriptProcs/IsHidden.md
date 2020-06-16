---
layout: page
title: "IsHidden իրադարձություն"
---

# IsHidden փաստաթղթի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](#Օրինակ) [Կիրառվում է](../Defs/doc.md)

IsHidden իրադարձությունը առաջանում է փաստաթղթի ցույց տալուց առաջ մինչև [When](When.md) իրադարձությանը։ 
Աշխատանքի ժամանակ ծառայում է որոշ դաշտերը անտեսանելի դարձնելու համար։ 

## Շարահյուսություն

``` vb
Public Sub IsHidden(ByVal HiddenControls as Dictionary)
    ' statements
End Sub
```

Բաղադրիչներն են՝

|Պարամետր |Նկարագրություն |
|--|--|
|`HiddenControls`| Թաքցվող դաշտերի բազմություն։ |

## Օրինակ

``` vb
Public Sub IsHidden(ByVal HiddenControls As Dictionary)
    ' FILIAL դաշտը դարձնում է անտեսանելի
    HiddenControls.Add "FILIAL", "FILIAL"

    'GRID1 աղյուսակի FILIALCOL սյունակը դարձնում է անտեսանելի
    HiddenControls.Add "GRID1.FILIALCOL", "GRID1.FILIALCOL1"

    'GRID3 աղյուսակը ամբողջությամբ դարձնում է անտեսանելի
    HiddenControls.Add "GRID3", "GRID3"

    'PAGENAME էջ ամբողջությամբ դարձնում է անտեսանելի
    HiddenControls.Add "PAGENAME", "PAGENAME"
End Sub
```
