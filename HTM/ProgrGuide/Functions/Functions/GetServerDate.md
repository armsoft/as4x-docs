---
layout: page
title: "GetServerDate ֆունկցիա"
---

# GetServerDate ֆունկցիա

Վերադարձնում է համակարգային ամսաթիվը և ժամը տվյալների պահոցի սերվերից։

## Շարահյուսություն

``` vb
Function Util.GetServerDate(Optional ByRef milliSec As String = "") As Date
```

Բաղադրիչներն են՝ 
    
| Պարամետր | Նկարագրություն |
|--|--|
| milliSec | Փոփոխականով վերադարձնում է ընթացիկ ժամի միլիվայրկյանները, քանզի Date տիպի մեջ ճշտությունը այդքան մեծ չէ։ |
