---
layout: page
title: "GetDataTypeGroup ֆունկցիա"
---
    
## GetDataTypeGroup ֆունկցիա

Վերադարձնում է նշված տվյալների պահոցի խումբը։

Возвращает группу заданного типа данных.


## Շարահյուսություն

```vb
GetDataTypeGroup (sDataType)
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sDataType | обязательное строковое выражение, оределяющее внутенный тип данных. |



## Նկատառումներ

Օրինակ, եթե sDataType-ը հավասար է `NP`-ին , `N`,-ին `SUMMA`-ին կամ `SUMMAP`-ին, ապա վերադարձվող արժեքը հավասար կլինի `Numeric`-ին, քանի որ նշանակված տվյալների տիպերը պատկանում են `Numeric` խմբին։ sDataType-ի  `BOOLEAN`-ին հավասար լինելու դեպքում վերադարձվող արժեքը կլինի `Logical`-ը և այլն։ շ

Например, если sDataType равно `NP` , `N`, `SUMMA` или `SUMMAP`, то возвращаемое значение будет равно `Numeric`, поскольку заданные типы данных принадлежат группе `Numeric`. При sDataType равное `BOOLEAN`, возвращаемое значение будет `Logical` и т.д.


Տվյալների ներքին տիպերի խմբեր

        
| Տվյալի տիպ  | Խումբ |
|--|--|
| `NP`, `N`, `SUMMA`, `SUMMAP` | `Numeric` |
| `NUMPAIR` | `NumericPair` |
| `C`, `CH`, `FOLDER`, `FULLTREE`, `TREE`, `AMACC` | `Charset` |
| `BOOLEAN` | `Logical` |
| `DATE`, `DATELONG`, `DATEREP` | `DateType` |
| `TIME`, `TIMELONG` | `TimeType` |
| `PATH`, `FILE` | `PathType` |


[Տես նաև](../../functions.html)
