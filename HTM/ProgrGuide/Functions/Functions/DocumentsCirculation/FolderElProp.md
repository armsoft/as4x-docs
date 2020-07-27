---
layout: page
title: "FolderElProp ֆունկցիա"
---

## FolderElProp ֆունկցիա

[Հատկություներ և մեթոդներ](../../AsFoldElement.html)

Հղումը վերադարձնում է գոյություն ունեցող [թղթապանակի տարր տիպի օբյեկտի](../../AsFoldElement.md) վրա, ըստ անվանման և բանալու։ Օբյեկտի առկա չլինելու դեպքում ֆունկցիան վերադարձնում է Nothing։
Возвращает ссылку на существующий [объект типа элемент папки](../../AsFoldElement.html) по имени папки и ключу. Функция используется для получения значений свойств элемента папки. Если объект не существует, тогда функция возвращает значение Nothing.


## Շարահյուսություն

```vb
set xFolderEl = FolderElProp(FolderId, Key)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| xFolderEl | [թղթապանակի տարր տիպի օբյեկտի հղում](../../AsFoldElement.md)։ переменная, ссылающаяся на [объект типа элемент папки](../../AsFoldElement.md) |
| FolderId | [Թղթապանակի ներքին համար](../../../Database/Folders.html): строковое выражение, определяющее [идентификатор папки](../../../Database/Folders.html) |
| Key | [Փաստաթղթի բանալին](../../../Database/Folders.html)։ строковое выражение, определяющее [ключ документа](../../../Database/Folders.html) в папке |




## Նկատառումներ

[Տես նաև](../../../constructors.html)


## Օրինակ

xFOLDERACC-ը հղվում է թղթապանակի տարր տիպի օբյեկտի վրա։ Որի միջոցով և վերադառնում են թղթապանակի տարրի Сom և Spec հատկությունների արժեքները։

```vb
set xFOLDERACC = <strong>FolderElProp</strong>(&quot;NBACC&quot;, doc(&quot;NBACC&quot;))<br>
GetNBNAME = xFOLDERACC.[Com](../../AsFoldElement/Com.html)<br>
CodCur = MID(xFOLDERACC.[Spec](../../AsFoldElement/Spec.html), 1, 3)
```
Переменная xFOLDERACC ссылается на существующий объект типа элемент папки. Через нее возвращаются значения свойств Сom и Spec элемента папки.

set xFOLDERACC = <strong>FolderElProp</strong>(&quot;NBACC&quot;, doc(&quot;NBACC&quot;))<br>
GetNBNAME = xFOLDERACC.[Com](../../AsFoldElement/Com.html)<br>
CodCur = MID(xFOLDERACC.[Spec](../../AsFoldElement/Spec.html), 1, 3) 
