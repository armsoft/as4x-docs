---
layout: page
title: "MergePrintFiles մեթոդ"
---

# MergePrintFiles մեթոդ

Երկու տպելու ֆայլեր միավորում է մեկի մեջ։ 

## Շարահյուսություն

``` vb
Sub MergePrintFiles(ByVal sTargetFile As String, _
                    ByVal sSourceFile As String, _
                    ByVal sTemplateType As String, _
                    ByVal bInsertBreak As Boolean)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sTargetFile | Առաջին ֆայլի ճանապարհը, որին կավելանա երկրորդ ֆայլը։ |
| sSourceFile | Երկրորդ ֆայլի ճանապարհը, որը կավելանա առաջինի վերջում։ |
| sTemplateType | [Տպելու ձևանմուշի տիպ](../../TemplateTypes.html)։ |
| bInsertBreak | Երկու ֆայլերի պարունակությունների միջև սահմանում է break-ի նշան։ |

## Նկատառումներ

[Տես նաև](../../functions.html)
