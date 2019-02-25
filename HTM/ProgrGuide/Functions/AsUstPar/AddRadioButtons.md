---
layout: page
title: "AsDialog/AddRadioButtons"
---


# AddRadioButtons մեթոդ

[См. также](../Asustpar.md) [օրինակ](../../Examples/E_AsUstPar.html) [Применяется к](../Asustpar.md)

Երկխոսության պատուհանում ավելացնում է տեսակավորող ռադիոկոճակների խումբ դաշտ (radio button)։ 

## Շարահյուսություն

``` vb
object.AddRadioButtons(RekvName, CaptionRekv, xButtonArray,TypeRekv, [AttribRekv], [ValueRekv],[nlblDistance], [bAtLeft],[ECaptionRekv], [iSaveValue] ) 
```


Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| object |  Երկխոսության պատուհանի հղում։ |
| RekvName | Դաշտի ներքին անունը։ |
| CaptionRekv | Դաշտի անվանումը։  |
| xButtonArray |[XArrayDB](../Functions/CreateXArrayDB.html) օբյեկտով ձևավորվում է ռադիոկոճակների խումբը։ Բաղկացած է երկու սյունից, առաջինում տրվում է ռադիոկոճակների կոդը, իսկ երկրորդում անունը։ |
| TypeRekv | Հարկավոր է փոխանցել տողային տիպ, օրինակ՝ C(1)։ Պարամետրը չի օգտագործվում և ենթակա է հեռացման։  |
| AttribRekv |  Ռադիոկոճակների խմբի  [հատկանիշները](Attribute.html "Attribute")։ |
| ValueRekv | Դաշտի նախնական արժեքը։ Այն ռադիոկոճակի կոդը, որը հարկավոր է նշված լինի։ Լռությամբ նշվում է առաջին ռադիոկոճակը։  |
| nlblDistance | Կոճակի և անվանման միջև հեռավորությունը։ Լռության դեպքում 0 է։  |
| bAtLeft | Որոշում է դաշտի անվանումը որտեղ է ցույց տրվելու։ True` ձախից, false՝ աջից։|
| ECaptionRekv | Ռադիոկոճակների խմբի անվանումը օտար լեզվով։ |
| iSaveValue | Դաշտի արժեքի հիշելու հատկանիշ։ 1 արժեքի դեպքում դաշտի արժեքը հիշվում է կատարելուց հետո, 0-ի դեպքում՝ ոչ։ Լռությամբ արժեքը 1։|
|RbtnsInLine| ??? |


