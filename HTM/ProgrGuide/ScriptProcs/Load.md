---
layout: page
title: "Load համակարգային իրադարձություն"
---

# Load  համակարգային իրադարձություն

[Տես նաև](../Functions/Functions/CreateXArrayDB.html) Օրինակ [Կիրառվում է](../Functions/Asdata.md)

Գեներացվում է, եթե ArrayBased հատկության արժեքը հավասար է մեկի։ Տվյալների աղբյուրի օբյեկտը լրացնելու համար փոխանցում է տվյալների միջուկը ։ Իրադարձությունը պետք է վերադարձնի XArrayDB տիպի օբյեկտը. որի սյուների քանակը հավասար է տվյալների աղբյուրի սյուների քանակին??, իսկ տողերը համապատասխանում/համընկնում են տվյալների աղբյուրի տողերի հետ։
Генерируется если значение свойства ArrayBased равно единице. Служит для передачи ядру данных для заполнения объекта источник данных. Событие должно возвратить объект типа XArrayDB количество колонок равно количеству колонок в источнике данных, а строки соответствуют строкам в источнике данных.


## Շարահյուսություն

```as4x
Function Load As XArrayDB

End Function
```

## Նկատառումներ

XArrayDB տիպի օբյեկտը ստեղծելու համար անհրաժեշտ է կանչել [CreateXArrayDB](../Functions/Functions/CreateXArrayDB.html) ֆունկցիան։

Объект типа XArrayDB необходимо создать при помощи вызова функции [CreateXArrayDB](../Functions/Functions/CreateXArrayDB.html).

<blockquote>

Public Function Load As XArrayDB<br>
&nbsp; Dim xArr As XArrayDB<br>
&nbsp; Set xArr = CreateXArrayDB<br>
&nbsp; xArr.ReDim 0, 0, 0, 1<br>
&nbsp; xArr.DeleteRows 0<br>
<br>
&nbsp; xArr.AppendRows<br>
&nbsp; xArr(0,0)=&quot;01&quot;<br>
&nbsp; xArr(0,1)=&quot;Caption 01&quot;<br>
<br>
&nbsp; xArr.AppendRows<br>
&nbsp; xArr(1,0)=&quot;02&quot;<br>
&nbsp; xArr(1,1)=&quot;Caption 02&quot;<br>
<br>
&nbsp; xArr.AppendRows<br>
&nbsp; xArr(2,0)=&quot;03&quot;<br>
&nbsp; xArr(2,1)=&quot;Caption 03&quot;<br>
<br>
&nbsp; Set Load=xArr<br>
End Function

</blockquote>
