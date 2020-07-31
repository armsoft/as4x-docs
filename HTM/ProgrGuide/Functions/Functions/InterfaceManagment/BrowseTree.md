---
layout: page
title: "BrowseTree ֆունկցիա"
---

# BrowseTree ֆունկցիա

Էկրանին ցույց է տալիս ծառի պատուհանը։ 

## Շարահյուսություն

``` vb
Sub BrowseTree(ByVal TreeIdOrObj As Variant, _
      Optional ByVal mAllowEdit As Boolean = False, _
      Optional ByVal mAllowView As Boolean = False, _
      Optional ByVal mAllowDelete As Boolean = False, _
      Optional ByVal mAllowAddNode As Boolean = False, _
      Optional ByVal mAllowExport As Boolean = False)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TreeIdOrObj | Սահմանում է [ծառի ներքին անունը](../../ASTREE/TreeId.md) կամ [ծառ տեղեկատուի հղումը](../SysDefManagment/Tree.md)։ |
| bAllowEdit | Թույլատրում է ծառի մեջ փաստաթղթի խմբագրումը։ Եթե պարամետրը բացակայում է, ապա համապատասխան արժեքը մնում է վավեր [ծառ-տեղեկատուի նկարագրության](../../../Defs/Tree.md) մեջից։ |
| bAllowView | Թույլատրում է ծառի մեջ փաստաթղթի խմբագրումը։ Եթե պարամետրը բացակայում է, ապա համապատասխան արժեքը մնում է վավեր [ծառ-տեղեկատուի նկարագրության](../../../Defs/Tree.md) մեջից։ |
| bAllowDelete | Թույլատրում է ծառից փաստաթղթի ջնջելը։ Եթե պարամետրը բացակայում է, ապա համապատասխան արժեքը մնում է վավեր [ծառ-տեղեկատուի նկարագրության](../../../Defs/Tree.md) մեջից։ |
| bAllowAddNode | Թույլատրում է ծառի մեջ հանգույցի ավելացումը։ Եթե պարամետրը բացակայում է, ապա համապատասխան արժեքը մնում է վավեր [ծառ-տեղեկատուի նկարագրության](../../../Defs/Tree.md) մեջից։ |
| bAllowExport | Թույլատրում է ծառի հանգույցի արտահանումը։ Եթե պարամետրը բացակայում է, ապա համապատասխան արժեքը մնում է վավեր [ծառ-տեղեկատուի նկարագրության](../../../Defs/Tree.md) մեջից։ |

## Նկատառումներ

[Տես նաև](../SysDefManagment/Tree.md)

## Օրինակ

Տվյալ օրինակի մեջ ծառը կանչվում է ըստ ներքին անունի։

``` vb
BrowseTree("OnePaymt")
```

Իսկ այս օրինակի մեջ BrowseTree մեթոդը կիրառվում է ծառի օբյեկտի նկատմամբ։

```vb
Set xTree = Tree("NBTURNV")

BrowseTree(xTree)
```
