---
layout: page
title: "Browse ֆունկցիա"
---

# Browse Ֆունկցիա

Էկրանին ցույց է տալիս դիտելու ձևը։

## Շարահյուսություն

``` vb
Sub Browse(ByVal ViewCodeorObj As Variant, ParamArray Params())
```

Բաղադրիչներն են`


| Պարամետր | Նկարագրություն |
|--|--|
| ViewCodeorObj | Դիտելու ձևի [ներքին անուն](../../ASVIEW/Name.md) կամ [դիտելու ձև տիպի օբյեկտ](../SysDefManagment/View.md): |
| Params | Դիտման ձևի պարամետրերի մասիվ: |

## Օրինակներ

Այս օրինակում մեթոդը կանչվում է դիտելու ձևի ներքին անունով։

``` vb
Call Browse("OnePaymt", CurrentView.Value("fISN"))
```

Այս օրինակում մեթոդը կանչվում է դիտելու ձևի փոփոխականով։

``` vb
Set xView = View("NBTURNV")
''
''
Call Browse(xView, xBal, "%/" & Mask, xCUR, xDialog("SDate"), xDialog("EDate"), "fKEY", xSUID)
```

## Նկատառումներ
[См. также](../SysDefManagment/View.md)
