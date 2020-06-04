---
layout: page
title: "OnEachRow համակարգային իրադարձություն"
---

# OnEachRow համակարգային իրադարձություն


[См. также](../scriptstproced.md) [Օրինակ](../Examples/E_OnEachRow.md) [Կիրառվում է](../Defs/Data.md)

Գեներացվում է տվյալների աղբյուրի յուրաքանչյուր տողի համար, նրա բացվելուն պես։ Աշխատում է տվյալների աղբյուրը [OpenCursor](../Functions/ASDATA/OpenCursor.md) մեթոդի միջոցով բացելիս, տվյալների աղբյուրի նշված տողը [MoveFirst](../Functions/ASDATA/MoveFirst.md), [MoveNext](../Functions/ASDATA/MoveNext.md), [MoveLast](../Functions/ASDATA/MoveLast.md) մեթոդներով տեղաշարժելիս, ինչպես նաև թղթապանակի ոլորման ձևը [Update](../Functions/ICurrentView/Update.md) մեթոդով թարմացնելիս։
Իրադարձության մշակիչը հարմար է տվյալների աղբյուրի մեջ վիրտուալ արժեքներ ստանալու համար, որոնց մեջ [Source](../Defs/Data.html)=1։ Տվյալ իրադարձությունը կաշխատի [OnOpen](OnOpen.html) և [Valid](Valid_Data.html) իրադարձությունների աշխատելուց հետո։ Տվյալների աղբյուրի համակարգային իրադարձությունների գեներացումը բերված է այստեղ՝ [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence_Data.html)։ 

Генерируется для каждой строки источника данных, при его открытии. Происходит при открытии источника данных методом [OpenCursor](../Functions/ASDATA/OpenCursor.html),передвижении текущей строчки в источнике данных методами [MoveFirst](../Functions/ASDATA/MoveFirst.html), [MoveNext](../Functions/ASDATA/MoveNext.html), [MoveLast](../Functions/ASDATA/MoveLast.html), а также при обновлении формы прокрутки папок методом [Update](../Functions/ICurrentView/Update.html). Обработчик события удобен для получения значений виртуальных колонок в источнике данных, у которых в описании опция [Source](../Defs/Data.html)=1. Данное событие выполняется после выполнения событий [OnOpen](OnOpen.html)
и [Valid](Valid_Data.html). Последовательность генерации системных событий для источника данных приведена здесь [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence_Data.html).


## Շարահյուսություն

```as4x
Sub OnEachRow()
   statements
End Sub
```




