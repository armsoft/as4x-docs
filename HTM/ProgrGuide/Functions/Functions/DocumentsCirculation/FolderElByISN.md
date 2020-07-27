---
layout: page
title: "FolderElByISN ֆունկցիա"
---

## FolderElByISN ֆունկցիա

[Հատկություններ և մեթոդներ](../../AsFoldElement.html) 

Հղումը վերադարձնում է [թղթապանակի տարրի օբյեկտի վրա](../../AsFoldElement.md), ըստ թղթապանակի անվանման և փաստաթղթի ISN-ի։ Ֆունկցիան կիրառվում է 
Հղումը վերադարձնում է [թղթապանակի տարրի հատկությունների արժեքներ ստանալու համար։ Եթե օբյեկտը առկա չի, ապա ֆունկցիան վերադարձնում է Nothing արժեքը։ 
Возвращает ссылку на существующий [объект типа элемент папки](../../AsFoldElement.md) по имени папки и ISN документа. Функция используется для получения значений свойств элемента папки. Если объект не существует, тогда функция возвращает значение Nothing.



## Շարահյուսություն

```vb
set xFolderEl = Util.FolderElByISN(sFolderId, nISN)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| xFolderEl | [թղթապանակի տարրի օբյեկտի](../../AsFoldElement.md) հղում։ переменная, ссылающаяся на [объект типа элемент папки](../../AsFoldElement.html) |
| sFolderId | [Թղթապանակի ներքին համար](../../../Database/Folders.html)։ строковое выражение, определяющее [идентификатор папки](../../../Database/Folders.html) |
| nISN | Թղթապանակի մեջ փաստաթղթի ISN։ численное выражение типа Long, определяющее ISN документа в папке |



## Նկատառումներ

[Տես նաև](../../../Database/Folders.html)



## Օրինակ

xFOLDERACC-ը հղվում է թղթապանակի տարր տիպի օբյեկտի վրա։ Որի միջոցով վերադառնում են թղթապանակի տարրի Сom և Spec հատկության արժեքները։

```vb
set xFOLDERACC = FolderElByISN("NBACC", doc("ISN"))
GetNBNAME = xFOLDERACC.Com
CodCur = MID(xFOLDERACC.Spec, 1, 3)
```
Переменная xFOLDERACC ссылается на существующий объект типа элемент папки. Через нее возвращаются значения свойств Сom и Spec элемента папки.

set xFOLDERACC = <strong>FolderElByISN</strong>(&quot;NBACC&quot;, doc(&quot;ISN&quot;))<br>
GetNBNAME = xFOLDERACC.[Com](../../AsFoldElement/Com.html)<br>
CodCur = MID(xFOLDERACC.[Spec](../../AsFoldElement/Spec.html), 1, 3) 
