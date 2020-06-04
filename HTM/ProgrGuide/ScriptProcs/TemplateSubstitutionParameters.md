---
layout: page
title: "TemplateSubstitutionParameters համակարգային իրադարձություն"
---

# TemplateSubstitutionParameters համակարգային իրադարձություն


[Տես նաև](TemplateSubstitution.md) Օրինակ [Կիրառվում է](../Defs/doc.md)


Աշխատում է փաստաթղթի տպելու ձևի ձևաթղթի լրացման ժամանակ։ Որպես արդյունք է համարվում Dictionary տիպի օբյեկտը։ [TemplateSubstitution](TemplateSubstitution.md) իրադարձության միջոցով սահմանում է փոխարինող ձևաթղթի գեներացման պարամետրերը։ Եթե կատարվում է TemplateSubstitutionParameters իրադարձության մեծաքանակ ձևաթղթերի գեներացում, ապա կաշխատի մեկ անգամ, այն ժամանակ երբ [TemplateSubstitution](TemplateSubstitution.html) իրադարձությունը աշխատում է յուրաքանչյուր փաստաթղթի համար։ 
Происходит при заполнении шаблона печатной формы документа. Результатом выполнения является объект типа Dictionary. Задает параметры генерации шаблона подстановки событием [TemplateSubstitution](TemplateSubstitution.html). Если произходит генерация множества шаблонов печати событие TemplateSubstitutionParameters срабатывет единожды, в то время как событием [TemplateSubstitution](TemplateSubstitution.html) срабатывает для каждого документа. Данное событие удобно для вывода поьзовательского интерфейса задания параметров печати для документа.


## Շարահյուսություն

```as4x
Function TemplateSubstitutionParameters() as Dictionary
   statements
End Function
```

