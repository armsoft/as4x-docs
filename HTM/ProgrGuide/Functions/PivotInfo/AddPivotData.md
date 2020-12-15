---
layout: page
title: "Pivotinfo/AddPivotData"
---
    
# AddPivotData մեթոդ

[Տես նաև ](../PivotInfo.md) Օրինակ [Կիրառվում է](../PivotInfo.md)

Ավելացնում է փոխակերպվող տվյալներ։

Տակից կանչում է Excel-ի PivotTable օբյեկտի [AddDataField](https://docs.microsoft.com/en-us/office/vba/api/excel.pivottable.adddatafield) մեթոդը։

## Շարահյուսություն

```vb
call object.AddPivotData(columnName, [caption], [function])
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | `PivotInfo` օբյեկտ։ |
| columnName | Սյունակի ներքին անուն, որի արժեքը հարկավոր է փոխակերպել։ |
| caption | Excel-ի մեջ փոխակերպված արժեքի անվանում։  |
| function | Փոխակերպված արժեքի վրա կիրառվող ֆունկցիա։ Լռությամբ ստանում է -4157 արժեքը։ Տե՞ս [հնարավոր արժեքները](https://docs.microsoft.com/en-us/office/vba/api/excel.xlconsolidationfunction)։ |
