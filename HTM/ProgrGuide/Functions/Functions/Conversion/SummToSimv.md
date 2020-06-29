---
layout: page
title: "SummToSimv ֆունկցիա"
---

# SummToSimv ֆունկցիա

Ձևափոխում է գումարը բառերով գրված տեքստի։  
Ֆունկցիան վերադրաձնում բառերով գրված տեքստը մասիվի մեջ, որտեղ ամեն տարրը տեքստի մի մասն է, և տարրի երկարությունը չի գերազանցում տրված երկարությունը։  

Այս ֆունկցիան հարմար է օգտագործել փաստաթղթի տպվող տեսքերում և տեղեկանքներում։

## Շարահյուսություն

``` vb
Public Function SummToSimv(ByVal curSumm As Currency, _
                  Optional ByVal intDlina As Variant = 60, _
                  Optional ByVal strBigCur As Variant = "Dram", _
                  Optional ByVal strSmallCur As Variant = "Luma", _
                  Optional ByVal intLanguage As Variant, _
                  Optional ByVal bUpperCase As Boolean = True, _
                  Optional ByVal bVarSummToSimv As Boolean = False) As Variant
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| curSumm | Ձևափոխվող գումար։ |
| intDlina | Վերադարձվող տարրերի առավելագույն երկարություն։ Եթե տրված չի, ապա ստանում է լռությամբ 60 արժեքը։  |
| strBigCur | Հիմնական արժույթի անվանումը (դրամ)։ Լռությամբ ստանում է "Dram" արժեքը։ |
| strSmallCur | Արժույթի տասնորդական մանրադրամի մասի անվանումը (լումա)։ Լռությամբ ստանում է "Luma" արժեքը։ |
| intLanguage | Ձևափոխման լեզվի կոդ։ 1 - Հայերեն, 2 - Ռուսերեն, 3 - Անգլերեն։ Լռությամբ ծրագրի աշխատանքի ընթացիկ լեզվով։ |
| bUpperCase | Մեծատառով սկսելու հայտանիշ։ Լռությամբ արժեք՝ True։ |
| bVarSummToSimv | Ստորակետից հետո տասնորդական մասը գրել որպես տասնորդական բառերով, այլ ոչ թե մանրադրամի տեսքով։ Լռությամբ արժեք՝ False։ |

## Օրինակ

``` vb
SummToSimv(25423.45, 30, "դրամ", "լումա³", 1)      '(0 To 1) As Variant
                                                   '(0) -> "Քսանհինգ հազար չորս հարյուր "
                                                   '(1) -> "քսաներեք դրամ 45 լումա"

SummToSimv(25423.45, 200, "դրամ", "լումա", 1, False, True)(0)    ' "քսանհինգ հազար չորս հարյուր քսաներեք ամբողջ քառասունհինգ հարյուրերորդական դրամ"

SummToSimv(11.2, , "dollar", "cent", 3)(0)     ' "Eleven dollar 20 cent"
```

## Նկատառումներ

[Տես նաև](DateToSimv.md)
