---
layout: page
title: "Page նկարագրություն"
---


# էջի նկարագրություն


``` as4x
Page {
  Name = sName;
  Caption = sPageCaption;
  ECaption = sPageECaption;                           

  PageObject1 {};
  '...
  PageObjectN {};
};
```



| Պարամետր | Նկարագրություն |
|--|--|
| sName | Էջի ներքին անունը։ |
| sPageCaption | Էջի գլխագիրը։ |
| sPageECaption | Էջի գլխագիրը օտար լեզվով։ |
| PageObject | Նկարագրում է փաստաթղթի պատուհանի դաշտեր։ Որպես դաշտ կարող է լինել՝ [մուտքագրման դաշտը](rekvizit.html), [աղյուսակը](grid.html), [պատկեր-դաշտը](image.html), [բաժանարար գիծը](line.html), [մեծ տեքստային դաշտը](memo.html), [կոճակը](button.html) կամ [պիտակը](Label.html)։ Որոնք կարող են փոխարինել մեկը մյուսին ցանկացած հաջորդականությամբ և ողջամիտ քանակությամբ։ |