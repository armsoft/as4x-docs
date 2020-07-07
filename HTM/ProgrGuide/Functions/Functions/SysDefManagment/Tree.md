---
layout: page
title: "Tree ֆունկցիա"
---

# Tree ֆունկցիա

[Հատկություններ և մեթոդներ](../../Astree.md)

Վերադարձնում է ծառ տեղեկատու օբյեկտի օրինակի հղումը։

Возвращает ссылку на экземпляр объекта дерева-справочника. 



## Շարահյուսություն

```vb
Set  xTree = Tree(TreeId)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sTreeName | Ծառի տարրի տիպ, որը հղվում է ծառ օբյեկտի օրինակի վրա։ Որի միջոցով կարելի է ստանալ օբյեկտի հատկությունների և մեթոդների մուտքի թույլտվություն։  переменная типа элемент дерева, ссылающуюся на экземпляр объекта дерева. Через нее можно получить доступ к свойствам и методам объекта. |
| TreeId | Ծառ տեղեկատուի ներքին համար։ строковое выражение, определяющее идентификатор дерева-справочника |



## Նկատառումներ

[Տես նաև](../../../constructors.html)



## Օրինակ

Վերադառնում է Tree ֆունկցիան։ mTree-ի միջոցով վերադառնում է ծառ օբյեկտի հղումը իր բոլոր հատկություններով և մեթոդներով։

Вызывается функция Tree, через mTree возвращается ссылка на обьект дерево со всеми его свойствами и методами.<br>
<br>
set xTree = <strong>Tree</strong>(&quot;NBACCT3&quot;)<br>
xTree.[Caption](../../ASTREE/Caption.html) = &quot;Выписки счетов&quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VTOFS(&quot;DATE&quot;, xDialog(&quot;NBSTARTDATE&quot;)) &amp; &quot; - &quot; &amp; _<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VTOFS(&quot;DATE&quot;, xDialog(&quot;NBENDDATE&quot;))<br>
xTree.[AddDoc](../../ASTREE/AddDoc.html)<strong> </strong>&quot;NBPUT&quot;<br>
[BrowseTree](../InterfaceManagment/BrowseTree.html)(xTree)


