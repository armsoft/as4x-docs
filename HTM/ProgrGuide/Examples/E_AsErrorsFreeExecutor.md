---
layout: page
title: "Օրինակ/AsErrorsFreeExecutor"
---

# Օրինակում ցույց է տրված Run և SetErrSubParams մեթոդների օգտագործումը

Օրինակի մեջ կանչվում է [CreateErrorsFreeExecutor](../Functions/Functions/CreateErrorsFreeExecutor.html) ֆունկցիան, սկրիպտային գործընթացներին տրվում են անվանումներ (SubName -կատարվող գործընթացի անվանում, ErrSubName -գործընթացի անվանում, որը կանչվում է SubName-ի կատարման ժամանակ)։ Նշանակվում է հաշվետվություն (RepViewer), որի մեջ պահվում են սխալների մասին հաղորդագրությունները։ Այնուհետև Run մեթոդի օգնությամբ սահմանվում է SubName գործընթացը։ Run մեթոդը կանչելուց առաջ, SetErrSubParams մեթոդի օգնությամբ, պարամետրեր են  փոխանցվում SubName գործընթացի համար։
В примере вызывается функция [CreateErrorsFreeExecutor](../Functions/Functions/CreateErrorsFreeExecutor.html), задаются имена скриптовых процедур (SubName-имя исполняемой процедуры,&nbsp; ErrSubName-имя процедуры, которая вызывается только при возникновении ошибки во время исполнения SubName). Устанавливается отчет (RepViewer) в котором сохраняются все сообщения об ошибках. Далее, в цикле выполняется процедура SubName при помощи метода Run. Перед вызовом метода Run передаются параметры для процедуры SubName при помощи метода SetErrSubParams.


``` vb
Set errFee = CreateErrorsFreeExecutor("ModuleName", "SubName", "ErrSubName")
Set errRep = CreateRepViewer
Set errFee.RepViewer = errRep
....
Set rs = Util.ExecuteQuery(sSql, True, ASOpenKeyset, , , 6000)
Do While Not rs.EOF
    i += 1
    ....
    errFee.SetErrSubParams (i, docAgr, errRep)
    errFee.Run (docAgr)

    rs.MoveNext
Loop 
rs.close
```
Ստորև բերված են SubName և ErrSubName գործընթացների օրինակները։
Ниже приведены сигнатуры процедур SubName и ErrSubName.

``` vb
Public Sub SubName (ByVal docAgr As AsDoc)
Public Sub ErrSubName (ByVal lErrNumber As Long, ByVal docAgr As AsDoc, ByVal errRep as AsRepViewer)
```
Если параметры для процедуры ErrSubName не переданы методом SetErrSubParams, то параметры передаются вызовом метода Run. То есть и SubName и ErrSubName должны иметь одну и туже сигнатуру.


