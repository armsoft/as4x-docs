---
layout: page
title: "BeforeShow համակարգային իրադարձություն /Системное событие BeforeShow"
---

# BeforeShow համակարգային իրադարձություն 

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Functions/Astree.md)


BeforeShow իրադարձությունը աշխատումէ ծառի ոչ մոդալ ցուցադրիչի բացումից առաջ։
Происходит перед открытием немодального браузера дерева .

## Շարահյուսություն

``` as4x
Sub BeforeShow(ByRef AllowEdit as Boolean,ByRef AllowView as Boolean,ByRef AllowDelete as Boolean,ByRef AllowAddNode as Boolean,ByRef AllowExport as Boolean, ByRef AllowAddDocs as Boolean)
   statements
End Sub
```


| Պարամետր | Նկարագրություն |
|--|--|
| AllowEdit | Ծառի տարրի կարգավորման թույլտվություն։ Разрешение на редактирования элемента дерева. |
| AllowView | Ծառի տարի դիտելու թույլտվություն։ Разрешение на просмотр элемента дерева. |
| AllowDelete | Ծառի տարի ջնջելու թույլտվություն։ Разрешение на удаление элемента дерева. |
| AllowAddNode | Ծառի հանգույց ավելացնելու թույլտվություն։ Разрешение на добавления узла дерева. |
| AllowExport | Разрешение на экспорт дерева. |
| AllowAddDocs | Разрешение на добавление документов в дерево. |

## Նկատառումներ

Եթե BeforeShow իրադարձությունը աշխատում է, ապա ծառի հատկությունների [AllowAddNode](../Functions/ASTREE/AllowAddNode.html),
[AllowDelete](../Functions/ASTREE/AllowDelete.html), 
[AllowEdit](../Functions/ASTREE/AllowEdit.html), 
	[AllowExport](../Functions/ASTREE/AllowExport.html),
[AllowView](../Functions/ASTREE/AllowView.html) արժեքները անտեսվում են։

Если событие BeforeShow обрабатывает,то значения свойств дерева
[AllowAddNode](../Functions/ASTREE/AllowAddNode.html),
[AllowDelete](../Functions/ASTREE/AllowDelete.html), 
[AllowEdit](../Functions/ASTREE/AllowEdit.html), 
	[AllowExport](../Functions/ASTREE/AllowExport.html),
[AllowView](../Functions/ASTREE/AllowView.html) игнорируются.


