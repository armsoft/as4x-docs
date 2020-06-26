---
layout: page
title: "Module նկարագրություն"
---

# Visual Basic-ի մոդուլի նկարագրություն

Նկարագրում է Visual Basic-ի մոդուլ, որը կարող է պարունակել ֆունկցիաներ և պրոցեդուրաներ։

Բացի այն, որ մոդուլի `Public` ֆունկցիաները կարող են կանչվել կամայական տեղից, մոդուլները նաև նախատեսված են որպես միակ օգտագործման եղանակ, եթե ուզում ենք նկարագրենք [ԱՇՏ-ի հղում](report.md), [առաջադրանքի տարր](Job.md) կամ [երկխոսության պատուհանի իրադարձությունների մշակիչներ](../ScriptProcs/DialogEvents.html)։

## Շարահյուսություն

``` as4x
MODULE { Name = sName;
    Caption = sCaption;
    ЕCaption = sЕCaption;
    Public  = nPublic;

    Script {
        Subs and Functions
    };
};
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sName | Մոդուլի ներքին անուն։ |
| sCaption | Մոդուլի անվանում։ |
| sECaption | Մոդուլի անվանումը օտար լեզվով։ |
| nPublic | 1 արժեքի դեպքում մոդուլի միջի Public ֆունկցիաները հնարավոր է կանչել ուղղակի և չօգտագործել [RunEx](../Functions/Functions/SysDefManagment/RunEx.md)։ 0 կամ 1 արժեք ընդունող։ Այս տիպի մոդուլը կոչվում է հանրային։ |
| Subs and Functions | Visual Basic-ի մոդուլի հատված պրոցեդուրաներ և ֆունկցիաների համար։ |

## Նկատառումներ

Եթե `Public=0`, ապա մոդուլի միջի Public ֆունկցիաները կարող են կանչվել այլ մոդուլներից [RunEx](../Functions/Functions/SysDefManagment/RunEx.md) ֆունկցիայի օգնությամբ։ 

[См. также](../Defs.html)