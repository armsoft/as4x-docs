---
layout: page
title: "LoadHI2FactByBase ֆունկցիա"
---
    
## LoadHI2FactByBase ֆունկցիա

[Հատկություններ և մեթոդներ](../../Asfact.html)

HI2-ից հիմնական փաստաթղթի համար վերադարձնում է գործառույթների հավաքածու։

Նշված պարամետրորով գործառույթների բացակայության դեպքում  վերադառնում է Nothing։ Վերադարձվող համաքածուի յուրաքանչյուր տարր համարվում է [գործառույթ տիպի օբյեկտի հղում](../../Asfact.html):

Возвращает коллекцию проводок для указанного докумнета-основания из HI2.<br>
<br>
При отсутствии проводок с заданными параметрами возвращается Nothing. Каждый элемент возвращаемой коллекции является [ссылкой на объект типа проводки.](../../Asfact.html)


## Շարահյուսություն

```vb
set sFacts = LoadHI2FactByBase(BaseISN, Accounting, [Op], [GLAccISN])
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| BaseISN | [Հիմնադրող փաստաթղթի](../../ASFACT/Base.html) ներքին նույնականացման համար։ обязательное численное выражение типа Long, определяющее ISN [документа основания](../../ASFACT/Base.html) |
| Accounting | [Հաշվառման կոդ](../../ASFACT/TypeAcc.html)։ необязательное строковое выражение, определяющее [код учета](../../ASFACT/TypeAcc.html) |
| Op | [Գործողությունների կոդերի ](../../ASFACT/Op.html) ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողության բոլոր այն կոդերը, որոնք թվարկված են եղել նրանից հետո։ "-" նշանի դեպքում անտեսվում են այն գործողությունները, որոնք թվարկված են ցանկի մեջ։ Գործողության կոդերը մեկը մյուսի հետևից թվարկվում են բացակի միջոցով։ Ցանկը նաև կարող է պարունակել առանց նշանի միայն մեկ տարր։ необязательное строковое выражение, определяющее список [кодов операций](../../ASFACT/Op.html). Если список начинается со&nbsp; знаком &quot;+&quot;, то учитываются все коды операции, которые перечислены после него. При знаке &quot;-&quot; игнорируются те операции, коды которых перечислены в списке. Коды операции перечисляются друг за другом через пробел. Список также может содержать единственный элемент без знака. |
| GLAccISN | Կուտակող օբյեկտի ներքին նույնականացման համար։Լռությամբ արժեքը  -1։ численное выражение типа Long, определяющее ISN аккумулирующего объекта. По умолчанию принимает значение -1. |



## Նկատառումներ

[Տես նաև](LoadFactByObject.md)


## Օրինակ

Ստորև բերված է HI2-ից գործառույթները ջնջելու օրինակ։

```vb
Dim xCol As Collection
Dim xFact As AsFact
Dim lngTrans As Long

Set xCol =LoadHI2FactByBase(Doc.ISN)
If Not xCol Is Nothing Then
  For Each xFact In xCol
    lngTrans = xFact.Trans
    DeleteHI2Trans Doc.ISN, lngTrans
  Next xFact
End If
```
Ниже приведен пример удаления проводок из HI2.

Dim xCol As Collection 
    <br />
    Dim xFact As AsFact 
    <br />
    Dim lngTrans As Long

Set <strong>xCol</strong> =<strong>LoadHI2FactByBase</strong>(Doc.ISN)<br>
        If Not <strong>xCol</strong> Is Nothing Then<br>
&nbsp; For Each <strong>xFact</strong> In <strong>xCol</strong><br>
&nbsp;&nbsp;&nbsp; lngTrans = <strong>xFact</strong>.Trans
        <br />
&nbsp;&nbsp;&nbsp; <strong>DeleteHI2Trans</strong> Doc.ISN, lngTrans<br>
&nbsp;
Next <strong>xFact<br />
        </strong>End If


