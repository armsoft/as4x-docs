---
layout: page
title: "Метод RunEx"
---

Вызывает процедуру из указанного 
модуля, проверяя существование процедуры. В случае отсутствия вызываемой 
процедуры в указанном модуле, сгенерируется ошибка. Среди возвращаемых значений 
    данного метода могут быть и ссылки на экземпляр объекта

## Синтаксис

``` vb
Function RunEx(ByVal ModName As String, ByVal SubName As String, ParamArray ParArray()) As Variant
```

Синтаксис метода **RunEx** состоит из следующих частей:

|Параметр|Описание|
|--|--|
|`ModName`|строковое выражение, определяющее [идентификатор модуля](../../../Defs/Module.html)|
|`SubName`|имя процедуры из указанного модуля |
|`ParArray`|массив параметров для подстановки в процедуру. |

## Примечание

При использовании данного метода 
накладываются следующие ограничения: 

* разрешается передача ссылочных переменных (**ByRef**), с учетом возвращения их значений, 
  если типы этих переменных совпадают с типами процедуры или же имеют тип **Variant**.
 
	Например:
	``` vb
	' пример 1
	Dim param01 As Long
	RunEx("modname", "methodname1", param01)  
  
	Sub methodname1(ByRef param01 As Integer)
		'''
	End Sub
	```
	``` vb
	' пример 2
	Dim param01 As Long
	RunEx("modname", "methodname2", param01)  
  
	Sub methodname2(ByRef param01 As Long)
		'''
	End Sub
	```
	В первом примере значение параметра `param01` не будет возвращено, поскольку тип `param01`->**Long**, 
	а тип соответствующего параметра процедуры **Integer**. Во-втором примере значение возвратится, 
	т.к. типы у обоих парамeтров совпадают и равны **Long**

* при задании необязательных параметров предыдущие необязательные параметры должны быть заполнены. 

	Например:
	``` vb
	' пример 1
	RunEx("modname", "methodname", param1, , Param3) 

	Sub methodname(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long)
		'''
	End Sub
	```
	``` vb
	' пример 2
	RunEx("modname", "methodname", param1) 

	Sub methodname(ByVal param1 As Long, Optional ByVal param2 As Long, Optional ByVal param3 As Long)
		'''
	End Sub
	```
	В первом примере задание параметра `param2` обязательно, поскольку после него задается еще параметр `param3`, 
	а во-втором примере - необязательно.

[См. также](../../../functions.html)
