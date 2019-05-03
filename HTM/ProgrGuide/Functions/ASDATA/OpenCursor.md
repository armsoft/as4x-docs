---
layout: page
title: "AsData/OpenCursor"
---

# OpenCursor մեթոդ


[См. также](../Asdata.html) [Пример](../../Examples/E_AsData.html) [Применяется к](../Asdata.html)


Բացում է նշորդ(Cursor) տվյալների աղբյուրի աղյուսակային տվյալների վրա։ 
Նշորդի միջոցով հնարավոր է տող առ տող կարդալ աղյուսակային տվյալները։

## Շարահյուսություն

``` vb
object.OpenCursor([CursorType], [LockType], [Indicate], [blnWithPrevious])
```


Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| object| Տվյալների աղբյուրի հղում։  |
| CursorType | Տվյալների աղբյուրի նշորդի բացման [եղանակը](../../Constants/const_opencursor_cursortype.html)։ | 
| LockType | Ընթերցվող տվյալների վրա դրվող [SQL կողպեքի (lock) տիպը](../../Constants/const_opencursor_locktype.html)։ |
| Indicate | Ընթացքի [ցուցադրման ձև](../../Constants/const_opencursor_Indicate.html)։ Փոխանցված չլինելու դեպքում օգտագործվում [տվյալների աղյուրի նկարագրության մեջ](../../Defs/Data.html) տրված ձևը։ | 
| blnWithPrevious| Նշորդի դիրքը տվյալների աղբյուրում։ `True` արժեքի դեպքում նշորդը գտնվում է տվյալների աղբյուրի վերջին տողի վրա և օգտագործվում [MovePrevious](MovePrevious.md) մեթոդը։  |

