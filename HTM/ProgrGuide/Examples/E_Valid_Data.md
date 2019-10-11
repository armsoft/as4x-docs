---
layout: page
title: "Օրինակ/Valid Example for DataSource"
---

# Օրինակում ցույց է տրված Valid իրադարձության օգտագործումը

Ստորև բերված է [տվյալների աղբյուրի](../Defs/Data.html) `Valid` իրադարձության օրինակ։ Որտեղ ավելացում կատարելու համար ֆունկցիայի մեջ ստուգվում է  `Valid` պայմանը։

Համակարգը ավտոմատ կերպով  տվյալների աղբյուրի մեջ չի ներառում այն տողերը,որոնց համար `Valid` ֆունկցիայի սխալ է վերադարձնում։ Այսինքն [OnEachRow](../ScriptProcs/OnEachRow.html) իրադարձության աշխատանքից առաջ աշխատում է `Valid` իրադարձությունը։ 

Օրինակում, տվյալների աղբյուրի մեջ ներառված չեն այն տողերը, որոնց համար օգտագործողը հասանելիություն չունի։

Ниже приведен пример обработчика события `Valid` из [описания источника данных](../Defs/Data.html). В нем для заполнения источника проверяется условие в функции `Valid`. Система автоматически не включает в источник данных те строки, для которых функция `Valid` возвращает ложь. Т.о. перед срабатыванием события [OnEachRow](../ScriptProcs/OnEachRow.html) для каждой строки, срабатывает событие `Valid`.
В примере, в источник данных не включаются те строки, для которых нет доступа пользователю.

``` vb 
SCRIPT {
   Dim DbSum, CrSum, AMDDb, AMDCr, ParVal

Function Valid()
   Valid = Util.CheckAccess(DS("fISN"),3)
End Function

Sub OnOpen()
   ParVal = DS.Parameters(4) 'taking date paramter
   DbSum=CCur(0)
   CrSum=DbSum
   AMDDb=DbSum
   AMDCr=DbSum
End Sub

Sub OnEachRow()
    call AccRem(DS("fISN"),ParVal,DS("DBCR"),DbSum,CrSum,AMDDb,AMDCr)
End Sub
```