---
layout: page
title: "ExternalConnection համակարգային իրադարձություն"
---

# ExternalConnection համակարգային իրադարձություն

Տես նաև [Օրինակ](#Example) [Կիրառվում է](../Functions/Asdata.md)


Միջուկին է փոխանցում RDO միացումը, որը տարբերվում է հիմնականից։ Կիրառվում է երբ տվյալների աղբյուրը չի լրացվում հիմնական տվյալների բազայից/պահոցից։
Служит для передачи ядру RDO соединения, отличного от основного. Применяется когда источник данных заполняется не из основной базы данных.

## Շարահյուսություն

``` as4s
Function ExternalConnection As Object

End Function
```


## Օրինակ

Public Function <b>ExternalConnection</b> As Object<br>
&nbsp;&nbsp; Set ExternalConnection = OLAPProvider.GetOLAPConnection<br>
End Function



