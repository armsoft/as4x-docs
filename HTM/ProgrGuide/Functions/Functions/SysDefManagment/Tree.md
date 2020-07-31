---
layout: page
title: "Tree ֆունկցիա"
---

# Tree ֆունկցիա

[Հատկություններ և մեթոդներ](../../Astree.md)

Ֆունկցիան ստեղծում է ծառ-տեղեկատու տիպի օբյեկտ ըստ նկարագրության անվան։

## Շարահյուսություն

``` vb
Function Tree(ByVal TreeId As String) As AsTree
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TreeId | Ծառ-տեղեկատուի ներքին անուն։ |

## Նկատառումներ

[Տես նաև](../../../constructors.html)

## Օրինակ

Բեռնում է և էկրանին է ցույց տալիս `NBACCT3` ծառ-տեղեկատուն։

``` vb
Set xTree = Tree("NBACCT3")
xTree.Caption = "Հաշվի տեղեկանքներ" _
              & VTOFS("DATE", xDialog("NBSTARTDATE")) & " - " & VTOFS("DATE", xDialog("NBENDDATE"))
xTree.AddDoc "NBPUT"
xTree.Show()
```
