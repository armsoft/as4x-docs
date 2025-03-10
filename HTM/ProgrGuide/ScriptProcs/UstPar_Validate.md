---
layout: page
title: "Validate իրադարձություն"
---

# Validate երկխոսության պատուհանի համակարգային իրադարձություն

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Functions/AsDialog.md)

Validate իրադարձությունը առաջանում է երկխոսության պատուհանի փակվելու ժամանակ, երբ սեղմվում է «Կատարել» կոխակը։ 

Օգտագործվում է երկխոսության պատուհանի դաշտերի արժեքների ստուգման համար։

## Շարահյուսություն

``` vb
Public Sub Validate(ByVal objDialog As AsDialog, _
                    ByRef Cancel As Boolean, _
                    ByRef RekvName As String)
    ' statements
End Sub
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| objDialog | երկխոսության պատուհանի հղում։ |
| Cancel | Ցույց է տալիս, որ ստուգումները չեն անցել և սխալ է `RekvName` դաշտը։ |
| RekvName | Այն դաշտի անունը, որի համար ստուգումները չեն անցել։ |
