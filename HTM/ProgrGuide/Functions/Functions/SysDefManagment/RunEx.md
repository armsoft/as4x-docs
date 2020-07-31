---
layout: page
title: "RunEx ֆունկցիա"
---

# RunEx ֆունկցիա

Կանչում է մոդուլի նկարագրության մեջ առկա սկրիպտային ֆունկցիան։  

Կանչվող ֆունկցիան կարող է չունենալ վերադարձվող արժեք, ունենալ պարզ տիպի վերադարձվող արժեք, կամ վերադարձվող արժեքը օբյեկտ է։  
Կանչվող ֆունկցիան կարող է ունենալ `ByRef` պարամետրեր, որոնց արժեքը կվերադարձվի։

Ֆունկցիայի առկա չլինելու դեպքում կառաջանա սխալ։ 

## Շարահյուսություն

``` vb
Function RunEx(ByVal ModName As String, ByVal SubName As String, ParamArray ParArray()) As Variant
```

Բաղադրիչներն են՝

|Պարամետր|Նկարագրություն
|--|--|
|`ModName`| [Մոդուլի ներքին անուն](../../../Defs/Module.md)։ |
|`SubName`| Նշված մոդուլի ֆունկցիայի անվանում։ |
|`ParArray`| Ֆունկցիային փոխանցվող պարամետրեր։ |

## Նկատառումներ

Տվյալ ֆունկցիան կիրառելիս սահմանվում են հետևյալ սահմանափակումները՝

* թույլատրվում է փոխանցել `ByRef` պարամետրեր, եթե փոխանցվող փոփոխականի տիպը նույնն է, ինչ որ ֆունկցիայի պարամետրի տիպը կամ փոփոխականի տիպը Variant է։
``` vb
' MyModule մարմնում առկա ֆունկցիա
Sub SomeMethod1(ByRef param01 As Long)
    param01 = 10
End Sub


''' Կանչեր այլ տեղից
Dim param01 As Long
Dim param02 As Long
RunEx("MyModule", "SomeMethod1", param01)  ' param01 փոփոխականի արժեքը չի փոխվի քանիզի տիպերը տարբերվում են
RunEx("MyModule", "SomeMethod1", param02)  ' param02 փոփոխականի արժեքը կդառնա 10, քանզի տիպերը նույնն են
```

* Թույլատրվում է չփոխանցել ֆունկցիայի վերջից ոչ պարտադիր(`Optional`) պարամետրերը։
``` vb
' MyModule մարմնում առկա ֆունկցիա
Sub SomeMethod1(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long)

End Sub

''' Կանչեր այլ տեղից
RunEx("MyModule", "SomeMethod1", 10)           ' կաշխատի
RunEx("MyModule", "SomeMethod1", 10, 20)       ' կաշխատի
RunEx("MyModule", "SomeMethod1", 10, , 30)     ' սխալ կառաջացնի
```

[Տես նաև](../../../functions.html)
