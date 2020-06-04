---
layout: page
title: "OnOpen համակարգային իրադարձություն"
---

# OnOpen համակարգային իրադարձություն


[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_OnOpen.md) [Կիրառվում է](../Defs/Data.html)

Աշխատում է տվյալների աղբյուրը բացելիս, ապահովելով որոշակի գործողությունների աշխատանքը։ Ինչպես նաև, ակտիվանում է [OpenCursor](../Functions/ASDATA/OpenCursor.md) և [Update](../Functions/ICurrentView/Update.md) մեթոդները կիրառելիս։ Աշխատում է մինչև [OnEachRow](OnEachRow.html) իրադարձության աշխատանքը սկսելը։ Այն հարմար է որոշակի արժեքներ ստանալու համար, որոնք հետագայում կիրառվում են [OnEachRow](OnEachRow.html)-ի մեջ։ Տվյալների աղբյուրի համար համակարգային իրադարձությունների գեներացման հաջորդականությունը բերված է այստեղ՝ [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence_Data.html)։


Происходит при открытии источника данных, обеспечивая выполнение некоторого действия. Активизируется также после использования методов [OpenCursor](../Functions/ASDATA/OpenCursor.html)
и [Update](../Functions/ICurrentView/Update.html). Происходит до начала выполнения события [OnEachRow](OnEachRow.html). Она удобна для получения некоторых значений, которые используются затем в [OnEachRow](OnEachRow.html). Последовательность генерации системных событий для источника данных приведена здесь [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence_Data.html).



## Շարահյուսություն

```as4x
Sub OnOpen()
   statements
End Sub
```