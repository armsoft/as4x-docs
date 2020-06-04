---
layout: page
title: "IsHidden  համակարգային իրադարձություն"
---

# IsHidden  համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

Գեներացվում է մինև When իրադարձության գեներացումը։ Աշխատանքի ժամանակ ծառայում է որոշ դաշտերը թաքցնելու համար։ Փաստաթղթի համար համակարգային իրադարձությունների գեներացման հաջորդականությունը բերված է այստեղ՝[![More.gif (304 bytes)](../../../IMAGES/MORE.GIF)](Events_Sequence.html)։

Генерируется перед генерацией событии When, запоняет Dictionary скрытых реквизитов. Служит для скрытия некоторых реквизитов во время выполнения. Последовательность генерации системных событий для документа приведена здесь [![More.gif (304 bytes)](../../../IMAGES/MORE.GIF)](Events_Sequence.html)


## Շարահյուսություն

``` vb
Sub IsHidden(ByVal Dict as Scripting.Dictionary)
```

Բաղադրիչներն են՝

|Պարամետր |Նկարագրություն |
|--|--|
|`Dict`|Scripting.Dictionary տիպի օբյեկտ։ объект типа Scripting.Dictionary|

## Օրինակ


Добавим несколько обьектов в список невидимости. В приведенных примерах обьекты становятся невидимыми.


Скрытие реквизита, где имя реквизита FILIAL:
``` vb
Sub IsHidden(ByVal HiddenControls As Dictionary)
    HiddenControls.Add "FILIAL", "FILIAL" 'Реквизит невидим
End Sub
```

Скрытие колонкой Grid таблицы, где имя грид таблицы GRID1, а колонки FILIALCOL:
``` vb
Sub IsHidden(ByVal HiddenControls As Dictionary)
    HiddenControls.Add "GRID1.FILIALCOL", "GRID1.FILIALCOL1" 'Колонка невидима
End Sub
```
Թաքցնում է փաստաթղթի էջը , որը անվանումը ստանում է հետևյալ ձևաչափով՝ ``"PAGE {NAME="PAGENAME"; CAPTION=#Name; ECAPTION=#e_Name;         ...          };``
Скрытие страницы документа, где имя задается в следующем формате - ``"PAGE {NAME="PAGENAME"; CAPTION=#Name; ECAPTION=#e_Name;         ...          };``

``` vb
Sub IsHidden(ByVal HiddenControls As Dictionary)
    HiddenControls.Add "PAGENAME", "PAGENAME" 'Страница невидима
End Sub
```
