---
layout: page
title: "TemplateSubstitution իրադարձություն"
---

# TemplateSubstitution փաստըաթղթի համակարգային իրադարձություն

[Տես նաև](TemplateSubstitutionParameters.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

TemplateSubstitution իրադարձությունը առաջանում է փաստաթղթի տպելու ձևի ձևանմուշը լրացնելու ժամանակ։ 
Մշակիչը պետք է վերադարձնի ձևանմուշի տեղադրման արժեքներ օբյեկտ ([TemplateSubstitution օբյեկտը](../Functions/TemplateSubstitution.md))։ 

## Շարահյուսություն

``` vb
Public Function TemplateSubstitution(ByVal Modes As Dictionary, _
                                    ByVal Params As Dictionary) As TemplateSubstitution
    ' statements
End Function
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| Modes | Ձևանմուշի լրացման ռեժիմ։ Այն նշանակվում է ադմինիստրատորի կողմից, ձևանմուշի կարգավորման ժամանակ։ |
| Params | Ձևանմուշը լրացնելու պարամետրեր, որոնք տրվում են [TemplateSubstitutionParameters](TemplateSubstitutionParameters.md) իրադարձության միջոցով։ |
