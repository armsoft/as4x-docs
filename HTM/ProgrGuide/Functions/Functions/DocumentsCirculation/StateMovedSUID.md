---
layout: page
title: "StateMovedSUID ֆունկցիա"
---

## StateMovedSUID ֆունկցիա

Ստուգում է արդյոք առկա է նշված վիճակին համապատասխան տող փաստաթղթի պատմության մեջ  ([DOCLOG](../../../Database/DocLog.html))։ 

Առկայության դեպքում `SUID` պարամետրի մեջ վերադարձնում է այդ վիճակ տեղափոխած օգտագործողի համարը, իսկ `sDateTime`-ի մեջ վիճակ հասնելու օր/ժամը։  
Բացակայության դեպքում `SUID`-ի մեջ վերադարձնում ընթացիկ օգտագործողի համար։


## Շարահյուսություն

``` vb
Function StateMovedSUID(ByVal ISN As Long, _
                        ByVal State As Integer, _
               Optional ByRef SUID As Integer, _
               Optional ByVal bFirstOrLast As Boolean = True, _
               Optional ByRef sDateTime As String = "") As Boolean
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| ISN | Փաստաթղթի ներքին նույնականացման համար։ |
| State | Փնտրվող վիճակ։ |
| SUID | Փաստաթուղթը նշված վիճակին բերած օգտագործողի ներքին համար։ |
| bFirstOrLast | Փաստաթուղթը նշված վիճակին բերած առաջին (`True`) կամ վերջին (`False`) անգամ վիճակը հասնելը։ |
| sDateTime | Փաստաթուղթը նշված վիճակին հասնելու օրը/ժամը։ Արժեքը գրվում է հետևյալ ձևաչափով `yyyy-mm-dd hh:mi:ss`։ |

## Նկատառումներ

[Տես նաև](../../ASDOC/SetFactsCreatorState.md)
