---
layout: page
title: "Button նկարագրություն"
---

# Կոճակի նկարագրություն

Փաստաթղթի վրա կարելի է տեղադրել կոճակ, որի վրա կամ կլինի նկար կամ տեքստ։

Կոճակի սեղմելու դեպքում առաջանում է `ButtonClick` իրադարձությունը։

## Շարահյուսություն

``` as4x
Button {
    Name = sButtonName;
    Caption = sCaption;
    ECaption = sECaption;
    ButtonCaption = sButtonCaption;
    EButtonCaption = sButtonECaption;
    ShowCaption = nShowCaption;
    Width = nButtonWidth;
    Picture = sImage;
    DisplayAtRight  = sDisplayAtRight;
    Distance = nDistance;
};
```

|Պարամետր | Նկարագրություն |
|--|--|
| sButtonName | Կոճակի ներքին անունը։ |
| sLineCaption | Կոճակին անվանումը (գրվում է ձախ կողմից)։ |
| sLineECaption | Կոճակին անվանումը օտար լեզվով։ |
| sButtonCaption | Կոճակի վրա գրվող տեքստը։|
| sButtonECaption | Կոճակի վրա գրվող տեքստը օտար լեզվով։ |
| nShowCaption | 1 արժեքի դեպքում կոճակի անվանումը կցուցադրվի։ Կիրառելի է միայն `DisplayAtRight`-ի 1 կամ 2 արժեքների դեպքում։ Լռությամբ արժեքը 0։ |
| nButtonWidth | Կոճակի լայնությունը։ |
| sImage | Նկարի ներքին անունը, որը ցույց է տրվում կոճակի վրա։ Կիրառելի են ծրագրի ռեսուրսների ֆայլից(\*.res) Bitmap(\*.bmp) ձևաչափով նկարները։ |
| sDisplayAtRight | 0 արժեքի դեպքում կոճակը տեղադրվում է նոր տողում։ <br/> 1 արժեքի դեպքում՝ նախորդ դաշտի աջ կողմից `Distance` հեռավորության վրա։ <br/> 2 արժեքի դեպքում կոճակը տեղադրվում է նախորդ դաշտի տողում պատուհանի ձախ եղրից `Distance` հեռավորության վրա։ <br/> Լռությամբ արժեքը 0։ |
| nDistance | Կոճակի հեռավորությունը նախորդ դաշտից կամ պատուհանի եզրից։ Տե՛ս `DisplayAtRight`: |
