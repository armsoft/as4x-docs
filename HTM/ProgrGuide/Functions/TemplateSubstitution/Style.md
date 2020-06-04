---
layout: page
title: "TemplateSubstitutionGrid/Style"
---

# Style հատկություն

[Տես նաև](../TemplateSubstitutionGrid.md) Օրինակ [Կիրառվում է](../TemplateSubstitutionGrid.md)


Վերադարձնում կամ նշանակում է `xlsx` տիպի տպելու ձևանմուշի աղյուսակի վանդակի ձևաչափը ըստ նշված տողի և սյունակի։
Возвращает или устанавливает формат конкретной ячейки таблицы шаблона печати типа <strong>.xlsx </strong>по заданной строке и колонке.

## Շարահյուսություն

```as4x
object.Style(row, column)[=value]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | [TemplateSubstitutionGrid](../TemplateSubstitutionGrid.md) օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта типа [TemplateSubstitutionGrid](../TemplateSubstitutionGrid.html). |
|  row | Սահմանում է վանդակի տողը։ численное выражение типа Long, oпределяющее строку ячейки. |
|  column | Տպելու ձևանմուշի սյունակի անվանումը: строковое выражение, oпределяющее имя колонки шаблона печати. |
| value | [TemplateSubstCellStyle](../TemplateSubstCellStyle.html) տիպի օբյեկտի օրինակի հղում։ строковое выражение, oпределяющее ссылку на экземпляр объекта типа [TemplateSubstCellStyle](../TemplateSubstCellStyle.html). |
