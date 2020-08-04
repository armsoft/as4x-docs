---
layout: page
title: "ExportDoc ֆունկցիա"
---

## ExportDoc ֆունկցիա

Արտահանում է տրված փաստաթղթերի ցուցակը ֆայլի մեջ։

Արտահանման ժամանակ թղթապանակը պետք է առկա լինի։

## Շարահյուսություն

``` vb
Sub Util.ExportDoc(ByVal sFileFullPath As String, ISNArray() As Variant)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sFileFullPath | Ֆայլի ամբողջ ճանապարհը։  |
| ISNArray | Փաստաթղթերի ISN-ների մասիվ։ |

## Օրինակ

``` vb
Util.ExportDoc "C:\Docs\1122.txt", Array(490017716, 869209549)
```

## նկատառումներ

[Տես նաև](../../../functions.html)
