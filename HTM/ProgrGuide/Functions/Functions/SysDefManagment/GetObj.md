---
layout: page
title: "GetObj ֆունկցիա"
---
    
# GetObj ֆունկցիա

> Այս ֆունկցիան փոխարինվել է ընդլայնված [RunEx](RunEx.md) ֆունկցիայով։

Կանչում է մոդուլի նկարագրության մեջ առկա սկրիպտային ֆունկցիան, որը վերադարձնում է օբյեկտ։

Կանչվող ֆունկցիայի `ByRef` պարամետրերի արժեքները չեն վերադարձվում։

Ֆունկցիայի առկա չլինելու դեպքում կառաջանա սխալ։

## Շարահյուսություն

```vb
Function GetObj(ByVal sModName As String, ByVal sFuncName As String, ParamArray ParArray()) As Object
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sModName | [Մոդուլի ներքին անուն](../../../Defs/Module.md)։ |
| sFuncName | Նշված մոդուլի ֆունկցիայի անվանում, որը պետք է վերադարձնի հղումը օբյեկտի վրա։ |
| ParArray() | Ֆունկցիային փոխանցվող պարամետրեր։ |

## Նկատառումներ
Տվյալ ֆունկցիան կիրառելիս սահմանվում են հետևյալ սահմանափակումները՝

* Չի թույլատրվում `ByRef` պարամետրերի փոխանցում
* Թույլատրվում է չփոխանցել ֆունկցիայի վերջից ոչ պարտադիր(`Optional`) պարամետրերը։
``` vb
' MyModule մարմնում առկա ֆունկցիա
Function SomeMethod1(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long) As Object

End Function

''' Կանչեր այլ տեղից
Set obj = GetObj("MyModule", "SomeMethod1", 123)           'կաշխատի
Set obj = GetObj("MyModule", "SomeMethod1", 123, 456)      'կաշխատի
Set obj = GetObj("MyModule", "SomeMethod1", 123, 456, 789) 'կաշխատի

'  սխալ կառաջանա, քանզի բաց է թողած արանքի Optional պարամետր
Set obj = GetObj("MyModule", "SomeMethod1", 123, , 789)    
```

[Տես նաև](RunEx.md)

