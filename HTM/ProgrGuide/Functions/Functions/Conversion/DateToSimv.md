---
layout: page
title: "DateToSimv ֆունկցիա"
---

# DateToSimv ֆունկցիա

Ամսաթիվը ձևափոխում է բառերով գրված ամսաթվի։

Այս ֆունկցիան հարմար է օգտագործել փաստաթղթի տպվող տեսքերում։ 

## Շարահյուսություն

``` vb
Public Function DateToSimv(ByVal dtDate As Date, _
                           Optional ByVal intLanguage As Variant, _
                           Optional ByVal intFormat As Integer = 0, _
                           Optional ByVal bShowDayYearAsString As Boolean = False) As String
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| dtDate | Ձևափոխվող ամսաթիվ։ |
| intLanguage | Ձևափոխման լեզվի կոդ։ 1 - Հայերեն, 2 - Ռուսերեն, 3 - Անգլերեն։ Լռությամբ ծրագրի աշխատանքի ընթացիկ լեզվով։ |
| intFormat | Վերադարձվող ամիսների անվանումների կրճատման տարբերակ։ 0 - ամիսների անվանումները չեն կրճատվում, 1 - ամիսների անունները կրճատվում են։ |
| bShowDayYearAsString | True արժեքի դեպքում օրը և տարին նույնպես գրվում են բառերով։ |

## Օրինակ

``` vb
DateToSimv(#21/9/1991#, 1)          ' """21"" սեպտեմբերի 1991թ."
DateToSimv(#21/9/1991#, 1, , True)  ' "քսանմեկը սեպտեմբերի մեկ հազար ինը հարյուր իննսունմեկ թվական"
DateToSimv(#21/9/1991#, 3, 1)       ' "Sep 21, 1991"
```

## Նկատառումներ

[Տես նաև](../../../functions.html)
