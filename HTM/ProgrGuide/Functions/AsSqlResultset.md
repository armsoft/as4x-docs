---
layout: page
title: "AsSqlResultset օբյեկտ"
---

# AsSqlResultset օբյեկտ 

Հանդիսանում է հարցումից եկած տողերը ստանալու միջոց:

| Հատկություններ | Նկարագրություն |
|--|--|
| [Columns](AsSqlResultset/Columns.md) | Վերադարձնում է սյուների հավաքածուն: Default հատկությունն է: |
| [EOF](AsSqlResultset/EOF.md) | Եթե ընթացիկ տողի ցուցիչը անցել է վերջին տողից, ապա վերադարձնում է true, false\` հակառակ դեպքում: |


| Մեթոդներ | Նկարագրություն |
|--|--|
| [Cancel](AsSqlResultset/Cancel.md) | Չեղարկում է պատասխանի սպասումը async ռեժիմում: |
| [Close](AsSqlResultset/Close.md) | Փակում է բաց AsSqlResultset օբյեկտը: |
| [MoreResults](AsSqlResultset/MoreResults.md) | Եթե հաջորդ հարցման արդյունք գոյություն ունի վերադարձնում է true և ցուցիչը տեղափոխում հաջորդ հարցման արդյունքի վրա, false\` հակառակ դեպքում: |
| [MoveNext](AsSqlResultset/MoveNext.md) | Ցուցիչը  տեղափոխում է հաջորդ տողի վրա: |
| [StillExecuting](AsSqlResultset/StillExecuting.md) | Եթե հարցումը կատարվել է, ապա վերադարձնում է false և ձևավորում հարցման արդյունքները, true\` հակառակ դեպքում: |
