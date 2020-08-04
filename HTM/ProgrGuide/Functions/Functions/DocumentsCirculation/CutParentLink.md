---
layout: page
title: "CutParentLink ֆունկցիա"
---

# CutParentLink ֆունկցիա

Ջնջում է փաստաթղթի և իրա ծնողների միջև կապերը, կամ մեկ նշված փաստաթղթի հետ կապը։

## Շարահյուսություն

``` vb
Sub CutParentLink(ByVal nISN As Long, Optional ByVal nParentISN As Long = -1)
```
Բաղադրիչներն են՝
    
| Պարամետր | Նկարագրություն |
|--|--|
| nISN | Փաստաթղթի ներքին նույնականացման համար, որի համար խզվում է կապը ծնողի հետ։ |
| nParentISN | Մեկ ծնողի ներքին նույնականացման համար, այդ ծնողի կապը կզելու համար։ Եթե պարամետրը փոխանմցված չէ, ապա կապը խզվում է բոլոր առկա ծնողների հետ։ |

## Շարահյուսություն

[DOCP](../../../Database/DocP.html) աղյուսակի մեջից ջնջվում է տվյալ փաստաթղթին համապատասխան տողը։

[Տես նաև](MakeParentLink.md)