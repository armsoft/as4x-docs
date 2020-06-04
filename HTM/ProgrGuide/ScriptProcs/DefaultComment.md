---
layout: page
title: "DefaultComment համակարգային իրադարձություն Системное событие&nbsp DefaultComment"
---

# DefaultComment համակարգային իրադարձություն

[Տես նաև](../scriptstproced.html) [Օրինակ](../Examples/E_DefaultComment.md) [Կիրառվում է](../Defs/doc.md)

Աշխատում է օգտագործողի անձնական կամ սևագիր թղթապանակի մեջ փաստաթուղթը պատճենելիս (Ctrl+C և Ctrl+V ստեղների օգնությամբ)։ Դաշտերի անհրաժեշտ արժեքների մեկնաբանության դաշտի մեջ  ապահովում է ..։ [Թղթապանակում փաստաթղթի պահպանման ժամանակ](../Functions/ASDOC/StoreInFolder.md) եթե [COM](../Functions/AsFoldElement/Com.md) հատկությունը տրված չի, ապա լռությամբ ստանում է DefaultComment արժեքը։ Իսկ եթե տրված չի ո՛չ [COM](../Functions/AsFoldElement/Com.md) հատկությունը, ո՛չ DefaultComment արժեքը, ապա [COM](../Functions/AsFoldElement/Com.md) թղթապանակի մեկնաբանության մեջ [փաստաթղթի նկարագրությունից](../Defs/doc.html) գրանցվում է Caption գլխագիր/անվանում։
Происходит при копировании документа в личную папку пользователя (с помощью клавиш Ctrl+C, Ctrl+V) или черновую папку. Обеспечивает запись в поле комментария необходимых значений реквизитов. При [сохранении документа в папках](../Functions/ASDOC/StoreInFolder.md), если не задано свойство [COM](../Functions/AsFoldElement/Com.html), то по умолчанию вместо свойства [COM](../Functions/AsFoldElement/Com.html)
записывается значение DefaultComment. А если при [сохранении документа в папках](../Functions/ASDOC/StoreInFolder.html) не заданы ни свойство [COM](../Functions/AsFoldElement/Com.html) ни DefaultComment, тогда в комментарий [COM](../Functions/AsFoldElement/Com.html) папки записывается заголовок Caption из [описания документа](../Defs/doc.html). 



<b>Синтаксис</b>

Function <strong>DefaultComment</strong>()<br>
<em>&nbsp;&nbsp;&nbsp;&nbsp; statements</em><br>
End Function


