---
layout: page
title: "TemplateSubstitutionParameters իրադարձություն"
---

# TemplateSubstitutionParameters փաստաթղթի համակարգային իրադարձություն

[Տես նաև](TemplateSubstitution.md) Օրինակ [Կիրառվում է](../Defs/doc.md)

TemplateSubstitutionParameters իրադարձությունը առաջանում է փաստաթղթի տպելու ձևի ձևանմուշի լրացման ժամանակ։ 
Մշակիչը պետք է վերադարձնի արժեքների բազմություն տպվող ձևանմուշի լրացվող արժեքների հաշվարկի համար։ 

Եթե տպվող տեսեքր են ձևավորվում թղթապանակում նշված մի քանի փաստաթղթերի համար, ապա այս իրադարձությունը աշխատում է միայն մեկ անգամ, իսկ [TemplateSubstitution](TemplateSubstitution.md) իրադարձությունը աշխատում է յուրաքանչյուր փաստաթղթի համար։

## Շարահյուսություն

``` vb
Public Function TemplateSubstitutionParameters() As Dictionary
    ' statements
End Function
```
