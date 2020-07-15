---
layout: page
title: "ExistsParam ֆունկցիա"
---

# ExistsParam ֆունկցիա

Ստուգում է համակարգային պարամետրի առկայությունը, ըստ ներքին անվան։ Եթե պարամետրը առկա է, ապա ֆունկցիան վերադարձնում է նաև նրա արժեքը։

## Շարահյուսություն

```vb
Public Function ExistsParam(ByVal strParID As String, _
                   Optional ByRef varValue As Variant) As Boolean
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| strParID | Պարամետրի ներաին անուն։ |
| varValue | Վերադարձնում է պարամետրի արժեքը, եթե պարամետրը առկա է, հակառակ դեպքում այն չի լրացվում։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)
