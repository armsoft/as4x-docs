---
layout: page
title: "View ֆունկցիա"
---

# View ֆունկցիա

[Հատկություններ և մեթոդներ](../../Asview.md)


Վերադարձնում է դիտելու ձև օբյեկտի օրինակի հղումը։ 

Возвращает ссылку на экземпляр объекта вида просмотра.


## Շարահյուսություն

```vb
set sViewName = View(ViewID)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sViewName | Դիտելու ձևի հղում։  կարելի է ստանալ օբյեկտի հատկությունների և մեթոդների մուտքի թույլտվություն։ строковое выражение, определяющее переменную, ссылающуюся на экземпляр объекта вида просмотра. Через нее можно получить доступ к свойствам и методам объекта. |
| ViewID | Դիտելու ձևի ներքին համար։ строковое выражение, определяющее идентификатор вида просмотра |




## Նկատառումներ

[Տես նաև](../../../constructors.html)


## Օրինակ

Օրինակի մեջ կանչվում է View ֆունկցիան: xView-ի միջոցով վերադառնում է NBACCT3 դիտելու ձև օբյեղտի հղումը իր բոլոր հատկություններով և մեթոդներով։

В примере вызывается функция View, через переменную xView возвращается ссылка на обьект вида просмотра NBACCT3 со всеми его свойствами и методами. 

set xView = <strong>View</strong>(&quot;NBACCT3&quot;)<br>
xView.[Caption](../../ASVIEW/Caption.html) = &quot;Выписки счетов&quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VTOFS(&quot;DATE&quot;, xDialog(&quot;NBSTARTDATE&quot;)) &amp; &quot; - &quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VTOFS(&quot;DATE&quot;, xDialog(&quot;NBENDDATE&quot;))<br>
If Not xDialog(&quot;NBAccClose&quot;) then<br>
&nbsp;&nbsp;&nbsp; xView.[RemoveColumn](../../ASVIEW/RemoveColumn.html)
&quot;fDATOTK&quot;<br>
&nbsp;&nbsp;&nbsp; xView.[AddColumn](../../ASVIEW/AddColumn.html) &quot;fDATZAK&quot;, 3, 1<br>
End If<br>

