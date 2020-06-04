---
layout: page
title: "AsBrowserParametersInfo/DialogValueItem"
--- 

# DialogValueItem հատկություն


[Տես նաև](../AsBrowserParametersInfo.md) Օրինակ [Կիրառվում է](../AsBrowserParametersInfo.md)


[AddCheckedListBox](../AsDialog/AddCheckedListBox.md) մեթոդի նշված արժեքների ցանկից վերադարձնում է ֆիլտր-երկխոսության պատուհանի մեջ պարամետրի առկայության նշանը։ Եթե ստուգվող արժեքը բացակայում է ցանկից, ապա `DialogValueItem`-ը վերադարձնում է True արժեքը, հակառակ դեպքում՝ False։
Возвращает признак наличия параметра диалога-фильтра из списка выбранных значений метода пользовательского диалога [AddCheckedListBox](../AsDialog/AddCheckedListBox.html). Если проверяемое значение присутствует в списке, то <strong>DialogValueItem</strong> возвращает значение True, в противном случае False.


## Շարահյուսություն

```as4x
object.DialogValueItem(sName, sItemKey)
```

Բաղադրիչներն են՝

    
| Պարամետր | Նկարագրություն |
|--|--|
| object | [AsBrowserParametersInfo](../AsBrowserParametersInfo.md) օբյեկտի օրինակի հղում։ строковое выражение, являющееся ссылкой на экземпляр объекта&nbsp; [AsBrowserParametersInfo](../AsBrowserParametersInfo.html) |
| sName | Դիտելու ձևի ֆիլտր-երկխոսության պատուհանի ներքին անուն: строковое выражение, определяющее идентификатор параметра диалога-фильтра вида просмотра |
| sItemKey | Դիտելու ձևի ֆիլտր-երկխոսության պատուհանը ստուգող արժեք։ строковое выражение, определяющее проверяемое значение реквизита диалога-фильтра вида просмотра |
