---
layout: page
title: "View ֆունկցիա"
---

# View ֆունկցիա

[Հատկություններ և մեթոդներ](../../Asview.md)

Ֆունկցիան ստեղծում է դիտելու ձև տիպի օբյեկտ ըստ նկարագրության անվան։

## Շարահյուսություն

``` vb
Public Function View(ByVal ViewID As String) As AsView
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| ViewID | Դիտելու ձևի ներքին անուն։ |

## Օրինակ

Օրինակի մեջ կանչվում է View ֆունկցիան, փոպում գլխագիրը, ավելացնու և պակասեցնում երևացող ցյունակները, ապա այն ցույց է տալիս էկրանին:

``` vb
set xView = View("NBACCT3")
xView.Caption = "Выписки счетов" & _
    VTOFS("DATE", xDialog("NBSTARTDATE")) & " - " & _
    VTOFS("DATE", xDialog("NBENDDATE"))
    
If Not xDialog("NBAccClose") then
    xView.RemoveColumn "fDATOTK"
    xView.AddColumn "fDATZAK", 3, 1
End If

xView.Browse
```

Տես մանրամասն [օրինակը](../../../Examples/E_AsView.md)։

## Նկատառումներ

[Տես նաև](../../../constructors.html)
