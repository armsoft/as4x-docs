---
layout: page
title: "Image նկարագրություն"
---

# Նկար-դաշտի նկարագրություն

Նախատեսված է փաստաթղթի վրա տեսանելի մուտքագրվող նկար տեղադրելու համար։ Նկարը պետք է լինի .bmp ընդլայնմամբ և առավելագույնը 140Kb։

## Շարահյուսություն

``` as4x
Image {
    Name = sImageName; 
    Caption = sImageCaption; 
    ECaption = sImageECaption;
    Width = nImageWidth;
    Height = nImageHeight; 
}; 
```
	
| Պարամետր | Նկարագրություն |
|--|--|
| sImageName | Նկար-դաշտի ներքին անուն։ |
| sImageCaption | Նկար-դաշտի անվանում։ |
| sImageECaption | Նկար-դաշտի անվանումը օտար լեզվով։ |
| nImageWidth | Նկար-դաշտի լայնություն։ |
| nImageHeight | Նկար-դաշտի բարձրություն։ |