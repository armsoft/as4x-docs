---
layout: page
title: "ExistsFact ֆունկցիա"
---

# ExistsFact ֆունկցիա

Ստուգում է նշված հաշվառող կամ հիմք փաստաթղթով գործառույթների առկայությանը։ 

`BaseISN`-ից կամ `ObjectISN`-ից գոնե մեկը պետք է տրված լինի։

## Շարահյուսություն

``` vb
Function ExistsFact(Optional ByVal BaseISN As Long = 0, _
                    Optional ByVal ObjectISN As Long = 0, _
                    Optional ByVal Accounting As String = "", _
                    Optional ByVal Op As String = "", _
                    Optional ByVal UseArchive As Boolean = True) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| BaseISN | [Հիմքային փաստաթղթի](../../ASFACT/Base.html) ներքին նույնականացման համար։ |
| ObjectISN | [Հաշվառող փաստաթղթի](../../ASFACT/ObjectISN.html) ներքին նույնականացման համար։ |
| Accounting | [Հաշվառման կոդը](../../ASFACT/TypeAcc.html)։ |
| Op | [Գործողությունների կոդերի](../../ASFACT/Op.html) ցանկ։ Եթե ցանկը սկսվում է "+" նշանով, ապա հաշվի են առնվում գործողությունների բոլոր կոդերը, որոնք թվարկվում են նրանից հետո։ "-"  նշանի դեպքում անտեսվում են այն գործողությունները, որոնց կոդերը թվարկված են ցանկի մեջ։ Գործողությունների կոդերը թվարկվում են մեկը մյուսի հետևից բացակների միջոցով։ Ցանկը նաև կարող է պարունակել առանց նշանի միակ տարրը։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)
