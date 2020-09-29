---
layout: page
title: "SetLimit ֆունկցիա"
---

# Util.SetLimit ֆունկցիա

Հաշվառվող օբյեկտի համար սահմանում է մնացորդի թույլատերի սահմանաչափերը նշված հաշվառման համար։ 
Սահմանաչափերը ստուգվում են [CheckLimit](CheckLimit.md) ֆունկցիայի օգնությամբ գործառույթները անցկացնելու ժամանակ։ 

Սահմանաչափերը հարմար են հաշիվների մնացորդների վրա սահմանափակումեր դնելու համար։ 

## Շարահյուսություն

```vb
Sub Util.SetLimit(ByVal TypeAcc As String, _
                  ByVal ObjectISN As Long, _
                  ByVal ULimit As Currency, _
                  ByVal LLimit As Currency)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| TypeAcc | [Հաշվառման կոդը](../../ASFACT/TypeAcc.html)։ |
| ObjectISN | Հաշվառվող օբյեկտի ներքին նույնականացման համար։ |
| ULimit | Առավելագույն արժեքը։ численное выражение типа Currency, определяющее верхний лимит для объекта учета. |
| LLimit | Նվազագույն արժեքը։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)

## Օրինակ

Ստորև բերված է [Action](../../../ScriptProcs/Action.md) համակարգային իրադարձության մեջ `SetLimit` ֆունկցիայի օգտագործումը։

``` vb
Sub Action()
    If Doc("DK")="2" Then
        Util.SetLimit "01", Doc.ISN, -Doc("LLIMIT"), -Doc("ULIMIT")
    Else
        Util.SetLimit "01", Doc.ISN, Doc("ULIMIT"), Doc("LLIMIT")
    End If
End Sub
```
