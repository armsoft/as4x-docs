---
layout: page
title: "AsDoc/RunEx"
---
# RunEx մեթոդ

[См. также](../Asdoc.md) Օրինակ [Применяется к](../Asdoc.md)



Կանչում է փաստաթղթի նկարագրության մեջ առկա սկրիպտային ֆունկցիան, ինչպես նաև վերադարձնում է `ByRef` պարամետրերը։  
Այս մեթոդի միջոցով չի թույլատրվում կանչել [փաստաթղթի ստանդարտ իրադարձությունների մշակիչները](../../scriptstproced.html)։
Մեթոդը կարող է վերադարձնել թե օբյեկտ, թե պարզ արժեք։

## Շարահյուսություն

``` vb
object.RunEx(SubName, ParArray())
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
| SubName | Ֆունկցիայի  անուն։ |
| ParArray() | ֆունկցիային փոխանցվող պարամետրերի մասիվ։  |


## Նկատառումներ

* `ByRef`-ով պարամետրերը վերադարձնելու համար փոխանցվող փոփոխականի տիպը պետք է համընկնի ֆունկցիայի պարամետրի տիպի հետ կամ ֆունկցիայի պարամետրի տիպը լինի `Variant`: 

``` vb
' Փաստաթղթի մարմնում առկա ֆունկցիաներ
Sub SomeMethod1(ByRef param01 As Integer)
    param01 = 10
End Sub
Sub SomeMethod2(ByRef param01 As Long)
    param01 = 20
End Sub
Sub SomeMethod3(ByRef param01 As Variant)
    param01 = 30
End Sub

'''
'Այլ տեղում
Dim var1 As Long
Dim xDoc As AsDoc
Set xDoc= CreateDoc("DocName")
xDoc.RunEx("SomeMethod1", var1)  'Այս դեպքում արժեքը չի փոխվի, քանի var1-ի տիպը չի համապատասխանում param01-ի տիպին
xDoc.RunEx("SomeMethod2", var1)  'var1-ի արժեքը կդառնա 20
xDoc.RunEx("SomeMethod3", var1)  'var1-ի արժեքը կդառնա 30
```


* Թույլատրվում է չփոխանցել ֆունկցիայի վերջից ոչ պարտադիր(Optional) պարամետրերը։ 

``` vb
' Փաստաթղթի մարմնում առկա ֆունկցիա
Sub SomeMethod1(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long)

End Sub


''' Կանչեր այլ տեղից
myDoc.RunEx("SomeMethod1", 10)           ' կաշխատի
myDoc.RunEx("SomeMethod1", 10, 20)       ' կաշխատի
myDoc.RunEx("SomeMethod1", 10, , 30)     ' սխալ կառաջացնի
```
