---
layout: page
title: "GetNextTempFile ֆունկցիա"
---

# GetNextTempFile ֆունկցիա

Ձևավորում է եզակի ֆայլի անուն ժամանակավոր ֆայլերի թղթապանակում և վերադարձնում ամբողջական ճանապարհը։

## Շարահյուսություն

``` vb
Function Util.GetNextTempFile() As String
```

## Օրինակ

``` vb
' ֆայլի անունը որոշվել է եղազկիորեն՝  "C:\Users\USERNAME\AppData\Local\Temp\AS-BANK\As8007.tmp" & vbNullChar
Debug.Print Util.GetNextTempFile()
```
