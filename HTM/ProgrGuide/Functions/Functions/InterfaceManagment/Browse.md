---
layout: page
title: "Browse"
---


# Browse Մեթոդ

Էկրանին ցույց է տալիս դիտելու ձևը



## Շարահյուսություն

``` vb
Browse(ViewCodeOrObj, [paramsValues1], ..., [sparamsValuesN])
```

# Բաղադրիչներն են`


| Պարամետր | Նկարագրություն |
|--|--|
| ViewCodeorObj | Դիտելու ձև [օբյեկտ](../../ASVIEW/Name.html) կամ [դիտելու ձև տիպի օբյեկտի վրա](../SysDefManagment/View.html). |
| paramsValuesi | Դիտման ձևի [պարամետրերի](../../ASVIEW/Parameters.html) արժեքներ |

# Նկատառումներ

[См. также](../SysDefManagment/View.html)

## Browse Մեթոդի օրինակներ

Այս օրինակում մեթոդը կանչվում է դիտելու ձևի ներքին անունով։

``` vb
call <strong>Browse</strong>(&quot;OnePaymt&quot;, [CurrentView](CurrentView.html).Value(&quot;fISN&quot;))
```

Այս օրինակում մեթոդը կանչվում է դիտելու ձևի ներքին անունով։

``` vb
set xView = [View](../SysDefManagment/View.html)(&quot;NBTURNV&quot;)
.....
call <strong>Browse</strong>(xView, xBal, &quot;%/&quot; &amp; Mask, xCUR, xDialog(&quot;SDate&quot;), xDialog(&quot;EDate&quot;),&quot;fKEY&quot;, xSUID)
```
