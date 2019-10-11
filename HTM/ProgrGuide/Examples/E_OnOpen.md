---
layout: page
title: "Օրինակ/OnOpen"
---

# Օրինակում ցույց է տրված OnOpen իրադարձության օգտագործումը


Ստորև բերված է [տվյալների պահոցի](../Defs/Data.html) `OnOpen` իրադարձության օրնակը։
Օրինակում  StartD-ը և EndD-ը նշանակվում են տվյալների պահոցի պարամետրերի արժեքներով։  
Փոփոխականները ստանալով արժեքը մեկ անգամ, բազմակի անգամներ օգտագործվում են [OnEachRow](../ScriptProcs/OnEachRow.html) իրադարձության մեջ։
Ниже приведен фрагмент из [описания источника данных](../Defs/Data.html) с примером обработчика события <strong>OnOpen</strong>, в которой глобальным скриптовым переменным StartD и EndD присваиваются значения параметров источника данных. Переменные один раз получив значения, используются многократно в событии [OnEachRow](../ScriptProcs/OnEachRow.html).

``` vb
SCRIPT {
Dim StartD, EndD
.......
Sub OnOpen()
    StartD = DS.Parameters(4) 'taking date parameter
    EndD = DS.Parameters(5)
End Sub
........
Sub OnEachRow() 
     call GetTurnFull("02", DS("fISN"), StartD, EndD, _ 
          DbTurn, DbTurnAMD, CrTurn, CrTurnAMD, _
          Remd, RemdAMD,StartRemd, StartRemdAMD)
End Sub   
```