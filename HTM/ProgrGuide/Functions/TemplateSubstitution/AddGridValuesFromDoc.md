---
layout: page
title: "TemplateSubstitution/AddGridValuesFromDoc"
---

# AddGridValuesFromDoc մեթոդ

[Տես նաև](../TemplateSubstitution.md) Օրինակ [Կիրառվում է](../TemplateSubstitution.md)

Բազմության մեջ ավելացնում է [տեղադրվող աղյուսակ](../TemplateSubstitutionGrid.md) և լրացնում այն ըստ փաստաթղթի նշված աղյուսակի։

Տեղադրվող աղյուսակը ունենում է նույն սյունակները և պարունակությունը ինչ փաստաթղթի աղյուսակը։

## Շարահյուսություն

``` vb
object.AddGridValuesFromDoc(Grid, Name, [Prefix], [Postfix])
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Grid | [AsGrid](../AsGrid.md) տիպի օբյեկտ, որի հիման վրա ձևավորվելու է տեղադրվող աղյուսակը։ |
| Name | Տեղադրվող աղյուսակի անունը։ |
| Prefix | Անվան դիմացից ավելացող նախածանց։ |
| Postfix | Անվան ավելացող վերջածանց։ |
