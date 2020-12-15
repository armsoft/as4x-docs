---
layout: page
title: "FirstOpDate ֆունկցիա"
---

# FirstOpDate ֆունկցիա

Վերադարձնում է հաշվառվող օբյեկտի համար նշանակված առաջին գործառույթի ամսաթիվը, որը ստեղծվել է հաշվառման նշված կոդով։

Եթե առկա չէ, ապա վերադառնում է `Null`։

## Շարահյուսություն

```vb
Function FirstOpDate(ByVal AccCode, ByVal nISN As Long, Optional ByVal Op As String) As Variant
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| AccCode | [հաշվառման կոդը](../../../Defs/Accounting.md) կամ հաշվառումների մի քանի կոդերով արժեքների մասիվը։ |
| nISN | Հաշվառվող փաստաթղթի ներքին նույնականացման համար։ |
| Op | [Հաշվառման գործողություն](../../../Defs/Accounting.md), որի համար կատարվում է որոնում։ |

## Նկատառումներ

[Տես նաև](LastOpDate.md)

## Օրինակ

Առաջին գործողության ամսաթվի որոնումը օբյեկտի հետ "01" և "02" հաշվառումների մեջ։

``` vb
Function FIRSTDAY() 
Dim arr
  arr(1) = "01"
  arr(2) = "02"
  FIRSTDAY = FirstOpDate(arr, DS("fISN"))
End Function
```
