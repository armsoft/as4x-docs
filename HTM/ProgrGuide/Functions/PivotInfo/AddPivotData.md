---
layout: page
title: "Pivotinfo/AddPivotData"
---
    
# AddPivotData մեթոդ

[Տես նաև ](../PivotInfo.md) Օրինակ [Կիրառվում է](../PivotInfo.md)

Փոխակերպում է նշված սյունակի տվյալները։

Տակից կանչում է Excel-ի PivotTable օբյեկտի [AddDataField](https://docs.microsoft.com/en-us/office/vba/api/excel.pivottable.adddatafield) մեթոդը։



## Շարահյուսություն

```vb
call object.AddPivotData(columnName, [caption], [function])
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | `PivotInfo` օբյեկտի հղում։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта типа PivotInfo. |
| columnName | Սյունակի ներքին անուն, որի արժեքը հարկավոր է փոխակերպել։ строковое выражение, определяющее идентификатор колонки, значения которого нужно транспонировать. |
| caption | Excel-ի մեջ փոխակերպված արժեքի անվանում։  строковое выражение, определяющее наименование транспонированного значения в Excel. |
| function | Փոխակերպված արժեքի վրա կիրառվող ֆունկցիա։ Լռությամբ ստանում է -4157 արժեքը։ Տե՞ս [հնարավոր արժեքները](https://docs.microsoft.com/en-us/office/vba/api/excel.xlconsolidationfunction)։ |


