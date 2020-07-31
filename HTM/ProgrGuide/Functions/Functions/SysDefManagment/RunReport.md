---
layout: page
title: "RunReport ֆունկցիա"
---

# RunReport ֆունկցիա

Աշխատացնում է Ուղղորդիչ ծառի հղման մեկնարկային պրոցեդուրան։ 

## Շարահյուսություն

``` vb
Sub RunReport(ByVal ReportId As String)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| ReportId | [Ուղղորդիչ ծառի հղման ներքին անուն](../../../Defs/report.md)։ |

## Օրինակ

Ստորև բերված է կոնտեկստ մենյուից տեղեկատուի կանչը։  

``` vb
Sub Functions()
    Doc.RegistrFunction "Просмотр операций", "vCrLnView", , "node4"
End Sub

Sub vCrLnView()
    RunReport("CRLNVIEW")
End Sub
```

## Նկատառումներ

[Տես նաև](../../../Defs/report.md)
