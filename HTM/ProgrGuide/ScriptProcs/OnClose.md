---
layout: page
title: "OnClose համակարգային իրադարձություն"
---

# OnClose համակարգային իրադարձություն


[Տեղ նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/Data.md)


Աշխատում է մինչև տվյալների աղբյուրի փակվելը, ապահովելով որոշակի գործողության կատարումը։ Գեներացվում է [CloseCursor](../Functions/ASDATA/CloseCursor.html) և [Update](../Functions/ICurrentView/Update.html) մեթոդները կիրառելիս։
Հարմար է, օրինակ փոփոխականներին Nothing վերագրելու համար, հղումով օբյեկտի վրա , հիշողությունը դատարկելու/ազատելու նպատակով։ Տվյալների աղբյուրի համար համակարգային իրադարձությունների հաջորդականությունը բերված է այստեղ՝ [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence_Data.html)։

Происходит перед закрытием источника данных, обеспечивая выполнение некоторого действия. Генерируется также при использовании методов [CloseCursor](../Functions/ASDATA/CloseCursor.html) и [Update](../Functions/ICurrentView/Update.html). Удобно, например для присваивания Nothing переменным, ссылающимся на объекты, в целях высвобождения памяти. Последовательность генерации системных событий для источника данных приведена здесь [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence_Data.html).


## Շարահյուսություն

```as4x
Sub OnClose()
   statements
End Sub
```
