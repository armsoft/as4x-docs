---
layout: page
title: "ExecuteUserReport մեթոդ"
---

# ExecuteUserReport մեթոդ

Աշխատացնում է օգտագործողի կողմից նկարագրված հաշվետվությունը։

## Շարահյուսություն

``` vb
Sub Util.ExecuteUserReport(ByVal sReportName As String, _
                           ByVal dicParamValues As Dictionary, _
                  Optional ByVal IsFromJob As Boolean = False)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sReportName | Oգտագործողի հաշվետվության կոդը։ |
| dicParamValues | Օգտագործողի հաշվետվության մեջ պարամետրերի արժեքներ փոխարինման համար։ `dicParamValues`-ի մեջ բանալին համարվում է պարամետրի անվանումը։ |
| IsFromJob | Առաջադրանքի միջից աշխատացման նիշի։ Տրված լինելու դեպքում սխալ կաջառանա, եթե հարկավոր լինի դիալոգ բացել։ |
