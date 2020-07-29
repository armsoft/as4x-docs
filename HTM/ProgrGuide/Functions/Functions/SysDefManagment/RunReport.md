---
layout: page
title: "RunReport ֆունկցիա"
---

# RunReport ֆունկցիա

Կանչում է հաշվառման մեկնարկային պրոցեդուրան նույնականացուցիչով։ 

Вызывает стартовую процедуру справки отчета по идентификатору.


## Շարահյուսություն

```vb
RunReport(ReportId)
```
Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| ReportId | [Հաշվառման ներքին համար](../../../Defs/report.md)։ строковое выражение, определяющее [идентификатор отчета](../../../Defs/report.html) |


## Նկատառումներ

Հաշվառման մեկնարկային պրոցեդուրան չպետք է պարունակի կանչերի պարամետր։

Стартовая процедура отчета не должна содержать параметров вызова.

[Տես նաև](../../../Defs/report.md)



## Օրինակ

Ստորև բերված է կոնտեկստ մենյուից տեղեկատուի կանչը։  
Ниже приводится вызов справки из контекстного меню.<br>
<br>
.....<br>
Doc.[RegistrFunction](../../ASDOC/RegistrFunction.html) &quot;Просмотр операций&quot;, &quot;vCrLnView&quot;, , &quot;node4&quot;<br>
.....<br>
Sub vCrLnView()<br>
&nbsp;&nbsp; call <strong>RunReport</strong>(&quot;CRLNVIEW&quot;)<br>
End Sub