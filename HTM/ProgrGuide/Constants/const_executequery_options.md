---
layout: page
title: "Constants/RDO գրադարանով SQL հարցման կատարման եղանակի հաստատուններ"
---

# RDO գրադարանով SQL հարցման կատարման եղանակի հաստատուններ

Այս հաստատունները օգտագործվում են տվյալների աղբյուրի [OpenCursor](../Functions/ASDATA/OpenCursor.html) մեթոդում և [ExecuteQuery](../Functions/Functions/ExecuteQuery.html) ֆունկցիայում։

| Հաստատուն | Արժեք | Նկարագրություն |
|--|--|--|
| ASAsyncEnable | 32 | Հարցումը կատարում է զուգահեռ եղանակով: |
| ASExecDirect | 64 | Լռությամբ արժեք։ Հարցումը կատարելու համար օգտագործում է ODBC `SQLExecDirect` ֆունկցիան։ |

