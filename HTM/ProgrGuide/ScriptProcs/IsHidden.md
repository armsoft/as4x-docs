---
layout: page
title: "Системное событие документа IsHidden"
---

[См. также](../scriptstproced.md) Пример [Применяется к](../Defs/doc.html)

Генерируется перед генерацией событии When, запоняет Dictionary скрытых реквизитов. Служит для скрытия некоторых реквизитов во время выполнения. Последовательность генерации системных событий для документа приведена здесь [![More.gif (304 bytes)](../../../IMAGES/MORE.GIF)](Events_Sequence.html)


## Синтаксис

``` vb
Sub IsHidden(ByVal Dict as Scripting.Dictionary)
```

Синтаксис события **IsHidden** состоит из следующих частей:

|Параметр|Описание|
|--|--|
|`Dict`|объект типа Scripting.Dictionary|

## Пример
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

Скрытие страницы документа, где имя задается в следующем формате - ``"PAGE {NAME="PAGENAME"; CAPTION=#Name; ECAPTION=#e_Name;         ...          };``

``` vb
Sub IsHidden(ByVal HiddenControls As Dictionary)
    HiddenControls.Add "PAGENAME", "PAGENAME" 'Страница невидима
End Sub
```
