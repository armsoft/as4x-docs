---
layout: page
title: "ICurrentTree/SelectItem"
---


# SelectItem մեթոդ

[См. также](../ICurrentTree.md) Օրինակ [Применяется к](../ICurrentTree.md)

Ընթացիկ ծառի մեջ ընտրում է հանգույց։


## Շարահյուսություն

``` vb
object.SelectItem([sCode])
```
Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object |  Ընթացիկ ծառի հղում։|
| sCode | Ընտրվող հանգույցի կոդը։ Դատարկ փոխանցելու դեպքում կընտրվի ծառի արմատը։ |


## Նկատառումներ

Մինչ մեթոդի կիրառումը, անհրաժեշտ է, որ տվյալների բազայից sCode-ը բեռնված լինի։  

## Oրինակ

Այս օրինակում SelectItem-ը ընթացիկ ծառում կիրառվում է [OnFunctionAdd](../../ScriptProcs/OnFunctionAdd_Tree.html)-ի մշակման ժամանակ։ Ամեն անգամ հանգույց ավելանալուց ընտրում է ծառի արմատը։ 

``` vb
Public Sub OnFunctionAdd()
    CurrentTree.SelectItem("") 
End Sub
```

