---
layout: page
title: "ReserveNumber մեթոդ"
---

# ReserveNumber մեթոդ

Ամրագրում է տողային յուրորինակ համարը ըստ տիպի և ISN-ի։

## Շարահյուսություն

```vb
Sub Util.ReserveNumber(ByVal nISN As Long, _
                       ByVal sType As String, _
                       ByVal sNumber As String, _
              Optional ByVal sErrMsg As String)
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| nISN | Փաստաթղթի ISN։ |
| sType | Երկնիշ տիպ։ |
| sNumber | Ամրագրվող համարը։ |
| sErrMsg | Չհաջողվելու դեպքում առաջացող հաղորդագրության տեքստը։ |

## Նկատառումներ 

[Տես նաև](../../functions.html)
