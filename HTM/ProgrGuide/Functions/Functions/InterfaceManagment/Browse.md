---
layout: page
title: "Browse ֆունկցիա"
---

# Browse Ֆունկցիա

Էկրանին ցույց է տալիս դիտելու ձևը։



## Շարահյուսություն

``` vb
Browse(ViewCodeOrObj, [paramsValues1], ..., [sparamsValuesN])
```

Բաղադրիչներն են`


| Պարամետր | Նկարագրություն |
|--|--|
| ViewCodeorObj | Դիտելու ձևի [ներքին անուն](../../ASVIEW/Name.md) կամ [դիտելու ձև տիպի օբյեկտ](../SysDefManagment/View.html): |
| paramsValuesi | Դիտման ձևի [i-րդ պարամետրի](../../ASVIEW/Parameters.md) արժեք: |

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
[См. также](../SysDefManagment/View.html)
