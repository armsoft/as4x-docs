---
layout: page
title: "GetTurn ֆունկցիա"
---

## GetTurn ֆունկցիա

Վերադարձնում է հաշվառում օբյեկտի դեբետային և վարկային/կրեդիտային շրջանառության արժեքները։ Շրջանառությունները հաշվարկվում են նախնական ամսաթվի  առաջին օրվանից մինչև վերջնական ամսաթիվը։

Возвращает значения дебетовых и кредитовых оборотов объекта учета. Обороты расчитываются от начала дня начальной даты до конца дня конечной даты.


## Շարահյուսություն

```vb
GetTurn(sAccCode, nISN, dStartDate, dEndDate, [DbTurn], [DbTurnAMD], [CrTurn], [CrTurnAMD], [sCodeOp])
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sAccCode | строковое выражение, определяющее [код учета](../../../Defs/Accounting.html) |
| nISN | числовое выражение Long, определяющее ISN объекта учета |
| dStartDate | выражение типа даты, определяющее начальную дату расчета оборота |
| dEndDate | выражение типа даты, определяющее конечную дату расчета оборота |
| DbTurn | необязательная ссылочная переменная, возвращающая дебетовый оборот в иностранной валюте |
| DbTurnAMD | необязательная ссылочная переменная, возвращающая дебетовый оборот в основной валюте |
| CrTurn | необязательная ссылочная переменная, возвращающая кредитовый оборот в иностранной валюте |
| CrTurnAMD | необязательная ссылочная переменная, возвращающая кредитовый оборот в основной валюте |
| sCodeOp | необязательное строковое выражение, определяющее код операции. По умолчанию принимает значение &quot;&quot;. Если задан, то процедура расчитывает обороты только по данному коду операции. |


## Նկատառումներ

[Տես նաև](GetTurnHI2.html)

## Օրինակ

Տվյալների պահոցի յուրաքանչյուր տողի համար ստորև կանչվում է `GetTurn` ֆունկցիան, որը վերագրում է շրջանառությունների արժեքները DbTurn-ին, DbTurnAMD-ին, CrTurn-ին, CrTurnAMD-ին։


Ստորև 
```vb
CrTurnAMD присваивает значения оборотов.

Dim StartD, EndD
Dim DbTurn, DbTurnAMD
Dim CrTurn, CrTurnAMD
.....

Sub OnEachRow() 
   call GetTurn("02", DS("fISN"), StartD, EndD, _ 
                DbTurn, DbTurnAMD, CrTurn, CrTurnAMD)
End Sub   
```