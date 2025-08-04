---
layout: page
title: "AsErrorsFreeExecutor/Run"
---


# Run մեթոդ

[См. также](../Functions/CreateErrorsFreeExecutor.html) [Օրինակ](../../Examples/E_AsErrorsFreeExecutor.html) [Применяется к](../AsErrorsFreeExecutor.md)

Կանչում է սկրիպտային ֆունկցիան։ 

Եթե ֆունկցիան հղումային տիպ վերադարձնող է, ապա AsErrorsFreeExecutor-ի [CreateErrorsFreeExecutor](../Functions/CreateErrorsFreeExecutor.html)-ով ստեղծման ժամանակ `bReturnsObject` պարամետրի արժեքը պետք է տալ `True`:

Եթե ֆունկցիան կանչվում է ակտիվ տրանզակցիայում և [AsErrorsFreeExecutor/OnErrorRollBack](OnErrorRollBack.md) հայտանիշի արժեքը **True** է, ապա գեներացվում է սխալ։ 

## Շարահյուսություն


``` vb
object.Run(ParamArray args())
```

Բաղադրիչներն են՝

    
| Պարամետր | Նկարագրություն |
|--|--|
| object | AsErrorsFreeExecutor-ի հղում: |
| args | ֆունկցիային փոխանցվող պարամետրերի մասիվ։  |

## Նկատառումներ

Թույլատրվում է չփոխանցել ֆունկցիայի վերջից ոչ պարտադիր(Optional) պարամետրերը։

Օրինակ՝

``` vb
' Փաստաթղթի մարմնում առկա ֆունկցիա
Sub SomeMethod1(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long)

End Sub


''' Կանչեր այլ տեղից
Dim errFree As AsErrorsFreeExecutor
Set errFree = CreateErrorsFreeExecutor("modname", "SomeMethod1") 

errFree.Run(10)           ' կաշխատի
errFree.Run(10, 20)       ' կաշխատի
errFree.Run(10, , 30)     ' սխալ կառաջացնի
```