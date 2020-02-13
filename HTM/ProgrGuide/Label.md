---
layout: page
title: " Label նկարագրություն"
---

# Պիտակի նկարագրություն 

Նախատեսված է փաստաթղթի վրա մուտքագրվող դաշտերի արանքում որևէ տողում տեքստ ցույց տալու համար։

## Շարահյուսություն

``` as4x
Label {
    Name = sLabelName;
    Caption = sLabelCaption;  
    ECaption = sLabelECaption;
    Alignment = sLabelAlignment;
    DisplayAtRight = nDisplayAtRight;
    Distance = nDistance; 
}; 
```

| Պարամետր | Նկարագրություն |
|--|--|
| sLabelName | Պիտակի ներքին անուն։ |
| sLabelCaption| Պիտակի տեքստը։ |
| sLabelECaption | Պիտակի տեքստը օտար լեզվով։ |
| sLabelAlignment| Պիտակի դիրքը տողի վրա։ <br/> `LEFT` արժեքի դեպքում պիտակի տեքստը գրվում է տողում ձախ կողմից, <br/> `RIGHT`-ի դեպքում՝ աջ կողմից, <br/> `CENTER`-ի դեպքում՝ մեջտեղում։ <br/> Լռությամբ արժեքը `LEFT`։ |
| sDisplayAtRight | 0 արժեքի դեպքում պիտակը տեղադրվում է նոր տողում։ <br/> 1 արժեքի դեպքում՝ նախորդ դաշտի աջ կողմից `Distance` հեռավորության վրա։ <br/> 2 արժեքի դեպքում պիտակը տեղադրվում է նախորդ դաշտի տողում պատուհանի ձախ եղրից `Distance` հեռավորության վրա։ <br/> Լռությամբ արժեքը 0։ |
| nDistance | Պիտակի հեռավորությունը նախորդ դաշտից կամ պատուհանի եզրից։ Տե՛ս `DisplayAtRight`: |

## Նկատառումներ

`DisplayAtRight`-ի 1,2 արժեքների դեպքում `Alignment`-ի արժեքը անտեսվում։ 