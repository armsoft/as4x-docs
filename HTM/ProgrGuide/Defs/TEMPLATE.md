---
layout: page
title: "TEMPLATE Definition"
---

# Template Սահմանում

## TEMPLATE Ձևանմուշի նկարագրություն

Նախատեսված է փաստաթղթի տպելու ձևի ձևանմուշ սահմանելու համար

## Շարահյուսություն

``` vb
TEMPLATE{ NAME = sTemplName
            Caption = sTemplCaption
            ЕCaption = sTemplECaption 
            TYPE = sTemplType
            DOCCONNECTED = nDocConnected
            UNICODE = nUnicode;
            };
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| *sTemplName* | Ձևանմուշի ներքին անունը |
| *sTemplCaption* | Ձևանմուշի անվանումը |
| *sTemplECaption* | Ձևանմուշի անգլերեն անվանումը |
| *sTemplType* | Ձևանմուշի տիպը, որով անհրաժեշտ է տպել փաստաթուղթը |
| *nDocConnected* | Որոշում է ձևանմուշի կապը փաստաթղթի հետ։ Ընդունում է 0 կամ 1 արժեք։ Եթե արժեքը 0 է՝ փաստաթղթի հետ կապ չկա։ Լռությամբ արժեքը 1 է |
| *nUnicode* | Որոշում է ձևանմուշում գրված տեքստի ֆորմատը։ Ընդունում է 0 կամ 1 արժեք։ 1 արժեքի դեպքում ֆորմատը UNICODE է։ Լռությամբ արժեքը 0 է |


## Նկատառումներ

*sTemplType*-ի տեսակներն [այստեղ](../TemplateTypes.html):

[Դիտեք նաև](../Defs.html)


