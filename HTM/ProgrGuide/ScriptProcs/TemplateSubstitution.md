---
layout: page
title: "TemplateSubstitution համակարգային իրադարձություն"
---

# TemplateSubstitution համակարգային իրադարձություն


[Տես նաև](TemplateSubstitutionParameters.md) Օրինակ [Կիրառվում է](../Defs/doc.md)


Աշխատում է փաստաթղթի տպելու ձևի ձևանմուշը լրացնելու ժամանակ։ Որպես արդյունք է համարվում [TemplateSubstitution օբյեկտը](../Functions/TemplateSubstitution.html)։

Происходит при заполнении шаблона печатной формы документа. Результатом выполнения является
[подстановка в шаблон печати](../Functions/TemplateSubstitution.html). 


## Շարահյուսություն

```as4x
Function TemplateSubstitution(ModeDictionary [,ParamsDictionary]) as TemplateSubstitution
   statements
End Function
```


| Պարամետր | Նկարագրություն |
|--|--|
| ModeDictionary | Ձևաթղթի լրացման ռեժիմ։ Այն նշանակվում է ադմինիստրատորի կողմից, ձևաթղթի կարգավորման ժամանակ։ объект типа Dictionary, определяющий режим заполнения шаблона. Режим заполнения шаблона устанавливается администратом при настройке шаблона. |
| ParamsDictionary | Շաբլոնը լրացնելու պարամետրեր, որոնք տրվում են [TemplateSubstitutionParameters](TemplateSubstitutionParameters.md) իրադարձության միջոցով։ необязательное объект типа Dictionary, определяющий параметры заполнения шаблона. Параметры заполнения шаблон задается с помощью события 	[TemplateSubstitutionParameters](TemplateSubstitutionParameters.html). |




