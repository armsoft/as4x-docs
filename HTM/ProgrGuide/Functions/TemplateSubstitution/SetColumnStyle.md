---
layout: page
title: "TemplateSubstitutionGrid/Style"
---

# SetColumnStyle հատկություն

[Տես նաև](../TemplateSubstitutionGrid.md)Օրինակ [Կիրառվում է](../TemplateSubstitutionGrid.md)


Սահմանում է `xlsx` տիպի տպելու ձևանմուշի աղյուսակների վանդակների ձևաչափերը։ 
Задает форматы ячеек столбца таблицы шаблона печати типа <strong>.xlsx</strong>..

## Շարահյուսություն

```as4x
object.SetColumnStyle[column, style]
```

Բաղադրիչներն են՝


| Պարամետտր | Նկարագրություն |
|--|--|
| object | [TemplateSubstitutionGrid](../TemplateSubstitutionGrid.html) տիպի օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта типа [TemplateSubstitutionGrid](../TemplateSubstitutionGrid.html). |
| column | Տպելու ձևանմուշի սյունակի անվանում։ строковое выражение, oпределяющее имя колонки шаблона печати. |
| style | [TemplateSubstCellStyle](../TemplateSubstCellStyle.html) տիպի օբյեկտի օրինակի հղում։ строковое выражение, oпределяющее ссылку на экземпляр объекта типа [TemplateSubstCellStyle](../TemplateSubstCellStyle.html). |

