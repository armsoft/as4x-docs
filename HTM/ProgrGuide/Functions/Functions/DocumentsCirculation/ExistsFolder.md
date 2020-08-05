---
layout: page
title: "ExistsFolder ֆունկցիա"
---

## ExistsFolder ֆունկցիա

Ստուգում է որևէ [տարրի](../../AsFoldElement.md) առկայությունը թղթապանակի մեջ։ 

## Շարահյուսություն

``` vb
Function ExistsFolder(ByVal FolderId As String) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| FolderId | Թղթապանակի ներքին անուն։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)

## Օրինակ

Օրինակում պայմանագրի փաստաթղթի ջնջման ժամանակ ստուգում է որևէ գործողության առկայությունը։

``` vb
Sub Delete()
    If ExistsFolder("AgrOrder." & trim(Doc("CODE"))) Then 
        RaiseError "Հաղորդագրություն", "Պայմանագրի ջնջումը չի թույլատրվում։ Նրա համար կատարվել են գործողություններ։", _
            "Message", "Cannot delete the agreement. Operations exists for it."
    End If
End Sub
```
