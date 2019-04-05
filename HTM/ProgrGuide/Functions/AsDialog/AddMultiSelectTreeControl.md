---
layout: page
title: "AsDialog/AddMultiSelectTreeControl"
---

# AddMultiSelectTreeControl մեթոդ

[См. также](AddMultiSelectViewControl.md) Օրինակ [Применяется к](../AsDialog.md)

Երկխոսության պատուհանում ավելացնում է ծառ տեսակի դաշտ, մի քանի տող ընտրելու հնարավորությամբ։ Անվանումը ստանում է համակարգի լեզվից։ 

## Շարահյուսություն

``` vb
object.AddMultiSelectTreeControl (sControlName, sControlCaption, sControlЕCaption, sTreeId,[AttribRekv], [ValueRekv], [FullTree], [MultiSelectMode]) 
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object | Երկխոսության պատուհանի հղում։ |
| sControlName | Դաշտի ներքին անուն։ |
| sControlCaption | Դաշտի անվանում։ |
| sControlЕCaption | Դաշտի անվանումը օտար լեզվով:  |
| sTreeId | Ծառ-տեղեկատուի ներքին անունը։  |
| AttribRekv | Դաշտի [հատկանիշները](Attribute.html "Attribute"): Կարող են նշվել մի քանիսը։ |
| ValueRekv | Դաշտի նախնական արժեք։ |
| FullTree | Թույլատրում է ծառի բոլոր հանգույցների ընտրությունը True արժեքի դեպքում, false-ի դեպքում թույլատրում է միայն տերևների ընտրությունը։ Լռությամբ արժեքը True: |
| MultiSelectMode | Որոշում  է տալիս ծառ-տեղեկատուի տեսքը։ 0-ի դեպքում բացվում է երկու սյունից բաղկացած ցանկ՝ կոդ և անվանում ծառ-տեղեկատուից։ 1-ի դեպքում ծառ տեսակի դաշտ, մի քանի տող ընտրելու հնարավորությամբ։ Լռությամբ արժեքը 0։ |


