---
layout: page
title: "GetSubString ֆունկցիա"
---
    
## GetSubString ֆունկցիա


Վերադարձնում է նշված տողի ենթատողը։
Возвращает подстроку заданной строки. 


## Շարահյուսություն

```vb
GetSubString(pSourceString, pStartPosOrChar, [pEndPosOrChar], [pBegMatched])
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
|pSourceString | Ընթացիկ տող, որը հարկավոր է բաժանել ենթատողերի։ строковое выражение, определяющее исходную строку, которую необходимо разбить на подстроки. |
|pStartPosOrChar | Ենթատողի նախնական դիրք կամ նշան։  выражение типа вариант, определяющее начальную позицию или символ подстроки. |
|pEndPosOrChar | Ենթատողի ավարտի վերջին նշան։ Եթե տվյալ պարամետրը տրված չի, քապա ենթատողը սկսվում է pSourceString -ով և ավարտվում տրված տողի վերջին նշանով։ необязательное выражение типа вариант, определяющее последний символ конца подстроки. Если данный параметр не задан, то подстрока начинается с pSourceString и заканчивается последним символом заданной строки. |
| pBegMatched | необязательное численное выражение , определяющее начиная с которого вхождения pStartPosOrChar в заданную строку выделяется подстрока. Задание данного параметра имеет смысл, если pStartPosOrChar является символом. По умолчанию принимает зачение&nbsp; 1. |


## Նկատառումներ

```vb
Դիտարկենք հետևյալ օրինակը : եթե  pSourceString = "Find this character" ,  pStartPosOrChar = "i",  pEndPosOrChar = "h", тогда количество вхождении  pStartPosOrChar в pSourceString будет равно = 2. При pBegMatched = 1 функция GetSubString вернет значение  "nd this c" . pBegMatched = 2-ի դեպքում , վերադարձվող արժեքը հավասար կլինի "s c".
```

Рассмотрим следующий пример :<strong>
</strong>пусть <strong>
&nbsp;pSourceString</strong> = &quot;Find this character&quot; ,&nbsp; <strong>pStartPosOrChar</strong> = &quot;i&quot;,&nbsp;
<strong>pEndPosOrChar</strong> = &quot;h&quot;, тогда количество вхождении&nbsp; <strong>pStartPosOrChar</strong> в <strong>pSourceString</strong> будет равно = 2. При <strong>pBegMatched</strong> = 1 функция <strong>GetSubString</strong> вернет значение&nbsp; &quot;nd this c&quot; . При <strong>pBegMatched</strong> = 2 , возврашаемое&nbsp; значение будет равно &quot;s c&quot;.


[Տես նաև](../../functions.html)
