---
layout: page
title: "GetDataTypeGroup ֆունկցիա"
---
    
# GetDataTypeGroup ֆունկցիա

Վերադարձնում է [համակարգային տիպի](../../types.md) պահոցի խումբը։

## Շարահյուսություն

``` vb
Function GetDataTypeGroup(ByVal sAsType As String) As DataTypeGroup
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sAsType | [Համակարգային տիպը](../../types.md) |

## Նկատառումներ

| Համակարգային տիպ | Խումբ |
|--|--|
| NP, N, SUMMA, SUMMAP | `DataTypeGroup.Numeric` |
| NUMPAIR | `DataTypeGroup.NumericPair` |
| C, CH, FOLDER, FULLTREE, TREE, AMACC | `DataTypeGroup.Charset` |
| BOOLEAN | `DataTypeGroup.Logical` |
| DATE, DATELONG, DATEREP | `DataTypeGroup.DateType` |
| TIME, TIMELONG | `DataTypeGroup.TimeType` |
| PATH, FILE | `DataTypeGroup.PathType` |

[Տես նաև](../../functions.html)
