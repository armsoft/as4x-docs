---
layout: page
title: "Action համակարգային իրադարձություն/Системное событие Action"
---

# Action համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) [Օրինակ](../Examples/E_Action.md) [Կիրառվում է](../Defs/doc.md)

Action իրադարձությունը աշխատում է փաստաթղթի ինտերակտիվ պահպանման ժամանակ։ Այս իրադարձության գեներացումը հնարավոր է նաև [Store](../Functions/ASDOC/Store.html) կամ [CheckAndStore](../Functions/ASDOC/CheckAndStore.html) մեթոդների ծրագրային կանչի միջոցով։ Այն գեներացվում է տրանզակցիայի անջատված համակարգի ժամանակ։ Համակարգային իրադարձությունների գեներացման հաջորդականությունը բերված է այստեղ՝ [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence.html)։ 
Происходит при интерактивном сохранении документа. Генерация данного события возможна также программно посредством вызова методов [Store](../Functions/ASDOC/Store.html) или[CheckAndStore](../Functions/ASDOC/CheckAndStore.html). Оно генерируется при включенном механизме транзакции. Последовательность генерации системных событий приведена здесь [<img src="../../../IMAGES/MORE.GIF" width="12" height="12" alt="More.gif (304 bytes)" border="0">](Events_Sequence.html). 



## Շարահյուսություն

```as4x
Sub Action()
     statements
End Sub
```

## Նկատառումներ

Այս իրադարձության մշակման ժամանակ ցանկալի է կատարել հաշվառումներ, կանչելով [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) ֆունկցիան և  [StoreFact](../Functions/ASDOC/StoreFact.html) մեթոդը։ 
При обработке данного события желательно производить проводки, вызывая функцию [CreateFact](../Functions/Functions/AccManagement/CreateFact.html) и метод [StoreFact](../Functions/ASDOC/StoreFact.html).
