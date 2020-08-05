---
layout: page
title: "CreationDate ֆունկցիա"
---

# CreationDate ֆունկցիա

Վերադարձնում է փաստաթղթի ստեղծման ամսաթիվը։

## Շարահյուսություն

``` vb
Function Util.CreationDate(ByVal nISN As Long, _
                  Optional ByRef nSUID As Integer, _
                  Optional ByVal bNotRiseErrWhenNoRow As Boolean = False) As Date
```

Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| nISN | Փաստաթղթի ներքին նույնականացման համար։ |
| nSUID | Վերադարձնում է փաստաթուղթը ստեղծող օգտագործողի ներքին համարը։ |
| bNotRiseErrWhenNoRow | Պահանջվող փաստաթղթի չգտնվելու դեպքում սխալի գեներացման նշան։ Լռությամբ արժեքը `False`, որտեղ և գեներացվում է սխալի մասին հաղորդագրություն։ `True` արժեքի դեպքում վերադառնում է 01/01/1900 արժեքը, իսկ nSUID-ը ստանում է -1 արժեք։ |
    
## Նկատառումներ

[Տես նաև](../../../functions.html)
