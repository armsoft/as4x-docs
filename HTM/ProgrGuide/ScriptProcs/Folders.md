---
layout: page
title: "Folders համակարգային իրադարձություն"
---

# Folders համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_Folders.md) [Կիրառվում է](../Defs/doc.md)

Իրադարձությունը գեներացվում է թղթապանակների և ծառերի մեջ փաստաթուղթը տեղադրելու համար։ Ինչպես նաև աշխատում է [Store](../Functions/ASDOC/Store.md) կամ [CheckAndStore](../Functions/ASDOC/CheckAndStore.md) մեթոդները կիրառելիս։ Այն գործում է անջատված տրանզակցիայի ռեժիմով։ Փաստաթուղթը թղթապանակի կամ սևագրի մեջ պահպանելիս տվյալ իրադարձությունը չի աշխատելու։
Փաստաթղթի համակարգային իրադարձությունների գեներացման հաջորդականությունը բերված է այստեղ՝ [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence.html)։

Генерируется системой для размещения документа в папках и деревьях. Происходит также при использовании методов [Store](../Functions/ASDOC/Store.html) или [CheckAndStore](../Functions/ASDOC/CheckAndStore.html). Оно выполняется в режиме включенной транзакции. При сохранении документа в папке, черновых документов, данное событие не срабатывает. <br>
Последовательность генерации системных событий для документа приведена здесь [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence.html).



## Շարահյուսություն

```as4x
Sub Folders()
   statements
End Sub
```

## Նկատառումներ

`Folders` իրադարձության մշակիչի մեջ են կանչվում [StoreInFolder](../Functions/ASDOC/StoreInFolder.html)
և [StoreInTree](../Functions/ASDOC/StoreInTree.html) մեթոդները։
В обработчике события `Folders` вызываются методы [StoreInFolder](../Functions/ASDOC/StoreInFolder.html)
и [StoreInTree](../Functions/ASDOC/StoreInTree.html).





Թղթապանակների գրանցումը տվյալների պահոցում կատարվում է հետևյալ քայլերով։ <br/>
1.  Աշխատում է Folders իրադարձոթյան մշակիչը, որի մեջ որոշվում են այն թղթապանակների և ծառերի տարրերը , որոնք պետք է գրանցվեն տվյալների պահոցում։ <br/>
2.  Տվյալների պահոցից ջնջվում են ընթացիկ փաստաթղթի ISN-ով թղթապանակների և ծառերի տարրերը։ <br/>
3.  Գրանցվում են 1 կետում որոշված թղթապանակների և ծառերի տարրերը տվյալների պահոցում։  





