---
layout: page
title: "TemplateSubstitutionGrid/SetRowStyle"
---

# SetRowStyle մեթոդ

[Տես նաև](../TemplateSubstitutionGrid.md)Օրինակ [Կիրառվում է](../TemplateSubstitutionGrid.md)

Սահմանում է `xlsx` տիպի տպելու ձևանմուշի տողերի վանդակների ձևաչափերը։
Задает форматы ячеек строки таблицы шаблона печати типа <strong>.xlsx</strong>..

## Շարահյուսություն

```as4x
object.SetRowStyle[row, style]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | [TemplateSubstitutionGrid](../TemplateSubstitutionGrid.html) տիպի օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта типа [TemplateSubstitutionGrid](../TemplateSubstitutionGrid.html). |
|  row | Տպելու ձևանմուշի աղյուսակի վանդակի տող։ численное выражение типа Long, oпределяющее строку ячейки таблицы шаблона печати. |
|  style | [TemplateSubstCellStyle](../TemplateSubstCellStyle.html) տիպի օբյեկտի օրինակի հղում։ строковое выражение, oпределяющее ссылку на экземпляр объекта типа [TemplateSubstCellStyle](../TemplateSubstCellStyle.html). |

