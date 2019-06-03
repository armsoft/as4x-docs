---
layout: page
title: "AsSqlParameter/MaxLength"
---


# MaxLength հատկություն

[Տես նաև](../AsSqlParameter.md) [Օրինակ](../../Examples/AsSqlCommand.md)  [Կիրառվում է](../AsSqlParameter.md) 

Վերադարձնում կամ նշանակում է պարամետրի արժեքի մաքսիմալ երկարությունը։Լռելյայն արժեքը -1 է։

## Շարահյուսություն

``` vb
Property MaxLength As Long
```


## Նկատառումներ
Այս հատկությունը պարտադիր է օգտագործել,երբ պարամետրի տիպը տողային կամ բինար է, և [Direction](Direction.md) հատկության արժեքը [vbParamDirOutput](../../Constants/SqlParameterDirection.md) կամ [vbParamDirInputOutput](../../Constants/SqlParameterDirection.md) է։
Այն կարելի է նաև օգտագործել,երբ տիպը տողային է, բայց պարամետրի ուղղությունը [vbParamDirInput](../../Constants/SqlParameterDirection.md) է․ Այդ դեպքում պարամետրի արժեքը կբերվի նշված չափին։

## Տվյալի տիպ
Long


