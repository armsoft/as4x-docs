---
layout: page
title: "RunSub ֆունկցիա"
---

Կանչում է մոդուլի նկարագրության մեջ առկա սկրիպտային ֆունկցիան։

Կանչվող ֆունկցիան կարող է չունենալ վերադարձվող արժեք կամ ունենալ պարզ տիպի վերադարձվող արժեք։ Վերադարձվող արժեքը չի կարող լինել օբյեկտ։

Կանչվող ֆունկցիայի `ByRef` պարամետրերի արժեքները չեն վերադարձվում։ Տես [RunEx](RunEx.md):

Ֆունկցիայի առկա չլինելու դեպքում կառաջանա սխալ։

## Շարահյուսություն

``` vb
Function RunSub(ByVal ModName As String, ByVal SubName As String, ParamArray ParArray()) As Variant
```

Բաղադրիչներն են

|Պարամետր|Նկարագրություն|
|--|--|
| ModName | [Մոդուլի ներքին անուն](../../../Defs/Module.md)։ |
| SubName | Նշված մոդուլի ֆունկցիայի անվանում։ |
| ParArray | Ֆունկցիային փոխանցվող պարամետրեր։ |

## Նկատառումներ

Տվյալ ֆունկցիան կիրառելիս սահմանվում են հետևյալ սահմանափակումները՝

* Չի թույլատրվում `ByRef` պարամետրերի փոխանցում

* Թույլատրվում է չփոխանցել ֆունկցիայի վերջից ոչ պարտադիր(`Optional`) պարամետրերը։
``` vb
' MyModule մարմնում առկա ֆունկցիա
Sub SomeMethod1(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long)

End Sub

''' Կանչեր այլ տեղից
RunSub("MyModule", "SomeMethod1", 10)           ' կաշխատի
RunSub("MyModule", "SomeMethod1", 10, 20)       ' կաշխատի
RunSub("MyModule", "SomeMethod1", 10, , 30)     ' սխալ կառաջացնի
```

[Տես նաև](../../../functions.html)
