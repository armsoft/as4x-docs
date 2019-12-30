---
layout: page
title: "AsSqlResultset/StiilExecuting"
---


# StiilExecuting մեթոդ

[Տես նաև](../AsSqlResultset.md) [Օրինակ](../../Examples/AsSqlResultset.md) [Կիրառվում է](../AsSqlResultset.md)

Եթե հարցումը կատարվել է, ապա վերադարձնում է false և ձևավորում հարցման արդյունքները, true\` հակառակ դեպքում:
Հարցման արդյունքները անհասանելի են քանի դեռ StiilExecuting-ը false չի վերադարձրել:
Օգտագործվում է միայն async ռեժիմում:

## Շարահյուսություն

``` vb
Function StillExecuting() As Boolean
```