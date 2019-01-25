---
layout: page
title: "Метод RunSub"
---

Вызывает процедуру из указанного модуля, 
проверяя существование процедуры. В случае отсутствия вызываемой процедуры в 
указанном модуле, сгенерируется ошибка. Среди возвращаемых значений данного 
метода могут быть и ссылки на экземпляр объекта.

## Синтаксис

``` vb
Function RunSub(ByVal ModName As String, ByVal SubName As String, ParamArray ParArray()) As Variant
```

Синтаксис метода `RunSub` состоит из следующих частей:

|Параметр|Описание|
|--|--|
|`ModName`|строковое выражение, определяющее [идентификатор модуля](../../../Defs/Module.html)|
|`SubName`|имя процедуры из указанного модуля |
|`ParArray`|массив параметров для подстановки в процедуру. |

## Примечание

При использовании данного метода 
накладываются следующие ограничения: 

* не разрешается передача ссылочных переменных (ByRef)
* при задании необязательных параметров 
  предыдущие необязательные параметры должны быть заполнены. 

  Например:
  ``` vb
  RunSub("modname","methodname", param1, , param3)

  Sub methodname(ByVal param1 As Long, Optional ByVal param2  As Long, Optional ByVal param3 As Long)
    '''
  End Sub
  ```
  ``` vb
  RunSub("modname","methodname", param1)
 
  Sub methodname(ByVal param1 As Long, Optional ByVal param2  As Long, Optional ByVal param3 As Long)
    '''
  End Sub
  ```
  В первом примере задание параметра `param2` обязательно, поскольку после него задается еще параметр 
  `Param3`, а во-втором примере - необязательно.</span><br>

[См. также](../../../functions.html)