---
layout: page
title: "TEMPLATE Definition"
---

# TEMPLATE Ձևանմուշի նկարագրություն

Նախատեսված է փաստաթղթի տպելու ձևի ձևանմուշ սահմանելու համար:

## Շարահյուսություն

``` as4x
TEMPLATE { 
    NAME = sTemplName;
    CAPTION = sTemplCaption;
    ЕCAPTION = sTemplECaption; 
    TYPE = sTemplType;
    DOCCONNECTED = nDocConnected;
    UNICODE = nUnicode;
};
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sTemplName | Ձևանմուշի ներքին անունը: |
| sTemplCaption | Ձևանմուշի անվանումը: |
| sTemplECaption | Ձևանմուշի անգլերեն անվանումը: |
| sTemplType | Արտահանվող ֆայլի [տեսակը](../TemplateTypes.html)։ |
| nDocConnected | Որոշում է ձևանմուշի կապը որևէ փաստաթղթի հետ։ 0 - կապակցված չէ, 1 - կապակցված է։ Լռությամբ արժեքը 1 է: |
| nUnicode | Որոշում է արտահանվող արժեքների ձևաչափը։ 0 - ANSI, 1 - UNICODE։ Լռությամբ արժեքը 0 է: |


## Նկատառումներ

[Դիտեք նաև](../Defs.html)


