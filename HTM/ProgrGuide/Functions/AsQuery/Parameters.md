---
layout: page
title: "AsQuery/Parameters"
---

# Parameters հատկություն

[Օրինակ](../../Examples/E_AsQuery.md) [Կիրառվում է](../AsQuery.md)

Վերադարձնում կամ նշանակում է SQL հարցման պարամետրի արժեքը։

## Շարահյուսություն

```vb
object.Parameters(sIndex) [= vValue]
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| object | AsQuery օբյեկտի հղում։ |
| sIndex | Պարամետրի անունը։ |
| vValue | Պարամետրի արժեքը։ |

## Նկատառումներ

Պարամետրը հարցման մեջ գրվում են հարցումով հետևյալ ձևով՝  `?PARAMETERNAME`։

Պարամետրի լրացումը հարցման մեջ կատարվում է հաշվի առնելով պարամետրի արժեքի տիպը։  
Ստորև աղյուսակը ցույց է տալիս պարամետրերի փոխակերպման օրինակներ կախված տիպից։

| Տիպ | Արժեքի օրինակ | Փոխակերպում |
|--|--|--|
| vbString | Ender's Game | 'Ender''s Game' |
| vbDate | 26/01/2018 | '20180126' |
| vbBoolean | True<br />False | 1<br />0 |
| vbByte, vbCurrency, vbDecimal, vbDouble, vbInteger, vbLong, vbSingle | 278<br />278.35 | 278<br />278.35 |
| vbNull |  | null |

> **Այլ տիպերի օգտագործումը առաջացնում է սխալ։**

