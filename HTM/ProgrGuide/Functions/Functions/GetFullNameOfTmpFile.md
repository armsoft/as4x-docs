---
layout: page
title: "GetFullNameOfTmpFile ֆունկցիա"
---

# GetFullNameOfTmpFile ֆունկցիա

Ձևավորում է եզակի ֆայլի անուն ժամանակավոր ֆայլերի թղթապանակում և վերադարձնում ամբողջական ճանապարհը։

Վերադարձվող արժեքը միշտ վերջանում է `vbNullChar` նիշով։

## Շարահյուսություն

``` vb
Function Util.GetFullNameOfTmpFile() As String
```

## Օրինակ

``` vb
' ֆայլի անունը որոշվել է եղազկիորեն՝  "C:\Users\USERNAME\AppData\Local\Temp\AS-BANK\As8007.tmp" & vbNullChar
Debug.Print Util.GetFullNameOfTmpFile()
```
