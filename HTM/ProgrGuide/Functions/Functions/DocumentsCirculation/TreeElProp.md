---
layout: page
title: "TreeElProp ֆունկցիա"
---

## TreeElProp ֆունկցիա

[Հատկություններ և մեթոդներ](../../AsTreeElement.html) 

Հղումը վերադարձնում է ծառի տարր տիպի օբյեկտի վրա ըստ ծառի անվանման և բանալու։ Ֆունկցիան օգտագորժում են ծառի տարրի հատկությունների արժեքներ ստանալու համար։ Եթե օբյեկտը առկա չի, ապա ֆունկցիան վերադարձնում է Nothing։

Возвращает ссылку на существующий объект типа элемент дерева по имени дерева и ключу. Функция используется для получения значений свойств элемента дерева. Если объект не существует, тогда функция возвращает значение Nothing.


## Շարահյուսություն

```vb
set xTreeEl = TreeElProp(TreeId, Code)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xTreeEl | [Ծառի տարր տիպի օբյեկտի](../../AsTreeElement.md) հղում։ переменная, ссылающаяся на [объект типа элемент дерева](../../AsTreeElement.html) |
| TreeId | [Ծառի ներքին համար](../../../Database/Trees.html): строковое выражение, определяющее [идентификатор дерева](../../../Database/Trees.html) |
| Code | [Ծառի տարրի բանալին](../../../Database/Trees.html)։ строковое выражение, определяющее [ключ элемента дерева](../../../Database/Trees.html) |


## Նկատառումներ

[Տես նաև](../../../constructors.html)


## Օրինակ 

xTree-ն հղվում է առկա ծառի տարր օբյեկտի վրա։ 


```vb
Set xTree=TreeElProp("Banks", Param("CODBANK"))
xCorrAcc=LoadDoc( xTree.ISN )("SCHET")
```
Переменная xTree ссылается на существующий объект элемент дерева.

Set xTree=<strong>TreeElProp</strong>(&quot;Banks&quot;,
[Param](../ParameterManagment/Param.html)(&quot;CODBANK&quot;))<br>
xCorrAcc=[LoadDoc](LoadDoc.html)( xTree.[ISN](../../AsTreeElement/ISN.html)
)(&quot;SCHET&quot;)<br>

