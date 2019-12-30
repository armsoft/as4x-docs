---
layout: page
title: "Օրինակ/GetQueryPerformance"
---

Օրինակում ցույց է տրված GetQueryPerformanceCounter և GetQueryPerformanceFrequency ֆունկցիաների աշխատանքները:


Օրինակում հաշվում է երկար աշխատող ծրագրի կատարման ժամանակը միլիվայրկյաններով։

``` vb
Dim ticksPerSecond As Currency
Dim ticksCount1 As Currency
Dim ticksCount2 As Currency
Dim secondsPassed As Currency, millisecondsPassed As Currency

ticksPerSecond = GetQueryPerformanceFrequency()
ticksCount1 = GetQueryPerformanceCounter()
'''
'երկար աշխատող ծրագրային կտոր
'Sleep 1000
'''
ticksCount2 = GetQueryPerformanceCounter()

secondsPassed = (ticksCount2 - ticksCount1) / ticksPerSecond
millisecondsPassed = (ticksCount2 - ticksCount1) * 1000 / ticksPerSecond
Debug.Print secondsPassed           ' ->  1.0002
Debug.Print millisecondsPassed      ' ->  1000.2076
```